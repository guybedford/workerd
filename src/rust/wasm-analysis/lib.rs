#[derive(Debug, Clone, PartialEq, Eq)]
pub enum WorkerLanguage {
    Rust,
    CommunityGo,
}

#[cxx::bridge(namespace = "workerd::rust::wasm_analysis")]
mod ffi {
    pub enum WorkerLanguage {
        Rust,
        CommunityGo,
        Unknown,
    }

    extern "Rust" {
        fn check_wasm_language(wasm_data: &[u8]) -> WorkerLanguage;
        fn check_has_import(js_content: &str, main_name: &str, target_wasm_file: &str) -> bool;
    }
}

impl From<Option<WorkerLanguage>> for ffi::WorkerLanguage {
    fn from(lang: Option<WorkerLanguage>) -> Self {
        match lang {
            Some(WorkerLanguage::Rust) => Self::Rust,
            Some(WorkerLanguage::CommunityGo) => Self::CommunityGo,
            None => Self::Unknown,
        }
    }
}

// Fields permitted in the Wasm producers section
#[derive(Debug, Clone, PartialEq)]
enum ProducersField {
    Language,
    ProcessedBy,
    Sdk,
}

// Read unsigned LEB128
fn read_uleb128(data: &[u8], offset: &mut usize) -> Option<usize> {
    let mut result: usize = 0;
    let mut shift: usize = 0;
    while *offset < data.len() {
        let byte = data[*offset];
        *offset += 1;
        result |= usize::from(byte & 0x7F) << shift;
        if (byte & 0x80) == 0 {
            return Some(result);
        }
        if shift >= 28 {
            return None; // Overflow
        }
        shift += 7;
    }
    None // Unexpected end
}

// Read and compare LEB-length-prefixed Wasm string with target string.
// Advances the offset on a match to allow fallback matching.
// Returns None on validation failures for early exit behaviour.
fn read_and_compare_string(data: &[u8], offset: &mut usize, target: &str) -> Option<bool> {
    let start_offset = *offset;
    let len = read_uleb128(data, offset)?;
    if *offset + len > data.len() {
        return None;
    }
    let matches = len == target.len() && &data[*offset..*offset + len] == target.as_bytes();
    if matches {
        *offset += len;
    } else {
        *offset = start_offset;
    }
    Some(matches)
}

// Skip through an LEB-length-prefixed Wasm string
// Returns false on validation failures for early exit behaviour
fn skip_string(data: &[u8], offset: &mut usize) -> Option<()> {
    if let Some(len) = read_uleb128(data, offset) {
        if *offset + len > data.len() {
            return None;
        }
        *offset += len;
        Some(())
    } else {
        None
    }
}

enum ProducedBy {
    // (produced-by "wasm-bindgen" "<any-version>")
    WasmBindgen,
    // No producer or unknown producer
    Unknown,
}

enum ProducerLang {
    // (language "Go" "<any>")
    Go,
    // (language "Rust" "<any>")
    Rust,
    // No lang or unknown lang
    Unknown,
}

struct ProducersMetadata {
    produced_by: ProducedBy,
    lang: ProducerLang,
}

impl ProducersMetadata {
    fn new() -> Self {
        Self {
            produced_by: ProducedBy::Unknown,
            lang: ProducerLang::Unknown,
        }
    }
}

fn read_producers_section(
    wasm_data: &[u8],
    offset: &mut usize,
    producers: &mut ProducersMetadata,
) -> Option<()> {
    // Parse producers section fields
    let field_count = read_uleb128(wasm_data, offset)?;
    for _ in 0..field_count {
        let producers_field = {
            if read_and_compare_string(wasm_data, offset, "language")? {
                ProducersField::Language
            } else if read_and_compare_string(wasm_data, offset, "processed-by")? {
                ProducersField::ProcessedBy
            } else if read_and_compare_string(wasm_data, offset, "sdk")? {
                ProducersField::Sdk
            } else {
                return None;
            }
        };

        // Each producer field can then have multiple values, each value as a (name, version) string pair.
        let value_count = read_uleb128(wasm_data, offset)?;
        for _ in 0..value_count {
            match producers_field {
                ProducersField::Language => {
                    // language: Rust <any>
                    if read_and_compare_string(wasm_data, offset, "Rust")? {
                        producers.lang = ProducerLang::Rust;
                        skip_string(wasm_data, offset)?;
                        continue;
                    }
                    // language: Go <any>
                    if read_and_compare_string(wasm_data, offset, "Go")? {
                        producers.lang = ProducerLang::Go;
                        skip_string(wasm_data, offset)?;
                        continue;
                    }
                }
                ProducersField::ProcessedBy => {
                    // processed-by: wasm-bindgen <any>
                    if read_and_compare_string(wasm_data, offset, "wasm-bindgen")? {
                        producers.produced_by = ProducedBy::WasmBindgen;
                        skip_string(wasm_data, offset)?;
                        continue;
                    }
                }
                ProducersField::Sdk => {
                    // Skip SDK fields for now
                }
            }

            // Skip both name and version strings
            skip_string(wasm_data, offset)?;
            skip_string(wasm_data, offset)?;
        }
    }
    Some(())
}

/**
 * Simple Wasm parser for producers section and exports section
 * - Parse rules per Wasm binary spec and <https://github.com/WebAssembly/tool-conventions/blob/main/ProducersSection.md>.
 * - Skips through sections of the Wasm binary until it finds the producers custom section and exports section
 * - Looks for "language" and "processed-by" sections matching known languages for analysis
 * - Looks for "fetch" export in the exports section for workers-rs
 * - Looks for "workers" "ready" in imports for Go workers
 * - Lenient parser with early-exits on unexpected cases
 *
 * Validates properties (1) and (2) as described under getBundleLanguage.
 */
fn check_wasm_language_impl(wasm_data: &[u8]) -> Option<WorkerLanguage> {
    // Check minimum size and magic header
    if wasm_data.len() < 8
        || wasm_data[0] != 0x00
        || wasm_data[1] != 0x61
        || wasm_data[2] != 0x73
        || wasm_data[3] != 0x6D
        || wasm_data[4] != 0x01
        || wasm_data[5] != 0x00
        || wasm_data[6] != 0x00
        || wasm_data[7] != 0x00
    {
        return None;
    }

    let mut offset = 8;

    // workers-rs has (export "fetch")
    let mut has_fetch_export = false;
    // Go workers has a (import "workers" "ready")
    let mut has_workers_ready_import = false;

    let mut producers = ProducersMetadata::new();

    while offset < wasm_data.len() {
        let section_id = read_uleb128(wasm_data, &mut offset)?;
        let section_size = read_uleb128(wasm_data, &mut offset)?;

        let section_end = offset + section_size;
        if section_end > wasm_data.len() {
            return None;
        }

        // Check for specific imports in Wasm imports section (id = 2)
        if section_id == 2 {
            let import_count = read_uleb128(wasm_data, &mut offset)?;
            for _ in 0..import_count {
                // Check module name first
                if read_and_compare_string(wasm_data, &mut offset, "workers")? {
                    // Module name matches "workers", now check import name
                    if read_and_compare_string(wasm_data, &mut offset, "ready")? {
                        has_workers_ready_import = true;
                    } else {
                        // Skip import name (module name already read)
                        skip_string(wasm_data, &mut offset)?;
                    }
                } else {
                    // Skip module name and import name
                    skip_string(wasm_data, &mut offset)?;
                    skip_string(wasm_data, &mut offset)?;
                }

                // Skip import descriptor: external_kind (1 byte) + type index (LEB128)
                if offset >= section_end {
                    return None;
                }
                offset += 1;
                let _ = read_uleb128(wasm_data, &mut offset)?;
            }
            offset = section_end;
            continue;
        }

        // Check for specific exports in Wasm exports section (id = 7)
        if section_id == 7 {
            let export_count = read_uleb128(wasm_data, &mut offset)?;
            for _ in 0..export_count {
                // Check export name against "fetch"
                if read_and_compare_string(wasm_data, &mut offset, "fetch")? {
                    has_fetch_export = true;
                } else {
                    // Skip export name
                    skip_string(wasm_data, &mut offset)?;
                }

                // Skip external_kind (1 byte) and index (LEB128)
                if offset >= section_end {
                    return None;
                }
                offset += 1; // Skip external_kind
                let _ = read_uleb128(wasm_data, &mut offset)?; // Skip index
            }
            offset = section_end;
            continue;
        }

        // Handle custom sections (id = 0) - existing producers section logic
        if section_id != 0 {
            offset = section_end;
            continue;
        }

        // Skip if not the producers section
        if !read_and_compare_string(wasm_data, &mut offset, "producers")? {
            offset = section_end;
            continue;
        }

        read_producers_section(wasm_data, &mut offset, &mut producers)?;
        offset = section_end;
    }

    // Return language only if it both has the expected producers section and also has the expected
    // export / import shape for a Worker in that language.
    if matches!(
        producers,
        ProducersMetadata {
            lang: ProducerLang::Rust,
            produced_by: ProducedBy::WasmBindgen
        }
    ) && has_fetch_export
    {
        Some(WorkerLanguage::Rust)
    } else if matches!(
        producers,
        ProducersMetadata {
            lang: ProducerLang::Go,
            produced_by: ProducedBy::Unknown
        }
    ) && has_workers_ready_import
    {
        Some(WorkerLanguage::CommunityGo)
    } else {
        None
    }
}

// Reduced JavaScript identifier start character validation (matches /^[$A-Z_]/i)
fn is_valid_identifier_start(c: char) -> bool {
    c == '$' || c == '_' || c.is_ascii_alphabetic()
}

// Reduced JavaScript identifier part character validation (matches /^[$A-Z_0-9]/i)
fn is_valid_identifier_part(c: char) -> bool {
    c == '$' || c == '_' || c.is_ascii_alphanumeric()
}

// Check if JavaScript content contains a valid import statement for the given Wasm file
// Validates property (3) as described under getBundleLanguage.
const JS_IMPORT_SEARCH_CUTOFF: usize = 200 * 1024;

fn check_has_import(js_content: &str, main_name: &str, target_wasm_file: &str) -> bool {
    // Limit search to first 200KB for large files to avoid performance issues
    // (imports should usually be at the top of the file anyway)
    let js_content = if js_content.len() > JS_IMPORT_SEARCH_CUTOFF {
        &js_content[..JS_IMPORT_SEARCH_CUTOFF]
    } else {
        js_content
    };

    // Calculate relative path from main module to target file
    let import_specifier = if let Some(main_slash_pos) = main_name.rfind('/') {
        // Main module is in a subdirectory - calculate relative path
        let main_dir = &main_name[..=main_slash_pos];

        if let Some(relative_path) = target_wasm_file.strip_prefix(main_dir) {
            // Target file is in same directory or subdirectory - use relative path
            format!("./{relative_path}")
        } else {
            // Target file is in different directory - need to backtrack
            // Count directory levels to go up
            let levels_up = main_dir[..main_dir.len() - 1]
                .chars()
                .filter(|&c| c == '/')
                .count();

            // Build relative path with ../
            let mut path_parts = vec!["../".to_owned(); levels_up];
            path_parts.push(target_wasm_file.to_owned());
            path_parts.join("")
        }
    } else {
        // Main module is in root - simple relative import
        format!("./{target_wasm_file}")
    };

    let mut search_start = 0;
    let js_bytes = js_content.as_bytes();

    // Backtrack from the found wasm path, to verify it belongs to an import statement
    // This is not resilient against global parser state and could capture e.g.
    // // import wasm from './foo.wasm' inside a comment, but speed is preferred over
    // accuracy for this validation of property (3), since we already validated
    // properties (1) and (2).
    while search_start < js_content.len() {
        let search_substring = &js_content[search_start..];

        let import_index = match search_substring.find(&import_specifier) {
            Some(relative_index) => search_start + relative_index,
            None => return false,
        };

        search_start = import_index + 1;

        // Backtrack through the import statement
        let mut pos = import_index;

        // Helper closure for whitespace backtracking
        let backtrack_whitespace = |p: &mut usize| {
            while *p > 0 && js_bytes[*p - 1] == b' ' {
                *p -= 1;
            }
        };

        // Check and get closing quote
        let after_pattern = pos + import_specifier.len();
        if after_pattern >= js_bytes.len() {
            continue;
        }
        let quote = js_bytes[after_pattern];
        if quote != b'"' && quote != b'\'' {
            continue;
        }

        // Check opening quote
        if pos == 0 || js_bytes[pos - 1] != quote {
            continue;
        }
        pos -= 1;

        // Optional whitespace
        backtrack_whitespace(&mut pos);

        // `from` keyword
        if pos < 4 || &js_bytes[pos - 4..pos] != b"from" {
            continue;
        }
        pos -= 4;

        // Required whitespace
        if pos == 0 || js_bytes[pos - 1] != b' ' {
            continue;
        }
        backtrack_whitespace(&mut pos);

        // Import name
        let ident_end = pos;
        while pos > 0 && is_valid_identifier_part(js_bytes[pos - 1] as char) {
            pos -= 1;
        }
        if pos == ident_end {
            continue;
        }
        if !is_valid_identifier_start(js_bytes[pos] as char) {
            continue;
        }

        // Required whitespace
        if pos == 0 || js_bytes[pos - 1] != b' ' {
            continue;
        }
        backtrack_whitespace(&mut pos);

        // `import` keyword
        if pos < 6 || &js_bytes[pos - 6..pos] != b"import" {
            continue;
        }

        // Backtrack through leading whitespace
        pos -= 6;
        while pos > 0 && js_bytes[pos - 1] == b' ' {
            pos -= 1;
        }

        // Verify that the import statement is indeed on a line statement
        // (note we don't handle block comment state as we only do a partial parse)
        if pos > 0 && js_bytes[pos - 1] != b'\n' && js_bytes[pos - 1] != b'\r' {
            continue;
        }

        return true;
    }

    false
}

fn check_wasm_language(wasm_data: &[u8]) -> ffi::WorkerLanguage {
    check_wasm_language_impl(wasm_data).into()
}

// #[cfg(test)]
// mod tests {
//     use super::*;

//     #[test]
//     fn test_valid_identifier_chars() {
//         assert!(is_valid_identifier_start('$'));
//         assert!(is_valid_identifier_start('_'));
//         assert!(is_valid_identifier_start('a'));
//         assert!(is_valid_identifier_start('Z'));
//         assert!(!is_valid_identifier_start('0'));

//         assert!(is_valid_identifier_part('$'));
//         assert!(is_valid_identifier_part('_'));
//         assert!(is_valid_identifier_part('a'));
//         assert!(is_valid_identifier_part('Z'));
//         assert!(is_valid_identifier_part('0'));
//         assert!(is_valid_identifier_part('9'));
//     }

//     #[test]
//     fn test_has_import_basic() {
//         let js_content = r#"import wasm from './module.wasm';"#;
//         assert!(has_import(js_content, "main.js", "module.wasm"));
//     }

//     #[test]
//     fn test_has_import_subdirectory() {
//         let js_content = r#"import wasmModule from './subdir/module.wasm';"#;
//         assert!(has_import(js_content, "main.js", "subdir/module.wasm"));
//     }

//     #[test]
//     fn test_has_import_not_found() {
//         let js_content = r#"import something from './other.js';"#;
//         assert!(!has_import(js_content, "main.js", "module.wasm"));
//     }
// }
