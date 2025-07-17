// Comprehensive tests for language detection in WorkerSource using real fixture files

#include <workerd/io/worker-source.h>

#include <kj/filesystem.h>
#include <kj/string.h>
#include <kj/test.h>

namespace workerd {
namespace {

// Helper function to read a file from the test fixtures directory
kj::Array<kj::byte> readFixtureFile(kj::StringPtr filename) {
  // Test files are in the runfiles directory
  auto fs = kj::newDiskFilesystem();
  auto path = kj::str("src/workerd/tests/language-detections/", filename);

  // Try to read the file
  auto file = fs->getCurrent().openFile(kj::Path::parse(path));
  auto content = file->readAllBytes();
  return kj::mv(content);
}

// Helper function to read a text file from the test fixtures directory
kj::String readFixtureTextFile(kj::StringPtr filename) {
  auto bytes = readFixtureFile(filename);
  return kj::str(kj::arrayPtr(reinterpret_cast<const char*>(bytes.begin()), bytes.size()));
}

// Test JavaScript worker detection
KJ_TEST("detectLanguage: JavaScript ES Module") {
  auto modules = kj::heapArray<WorkerSource::Module>(1);
  modules[0] = WorkerSource::Module{.name = "main",
    .content =
        WorkerSource::EsModule{"export default { fetch() { return new Response('Hello'); } }"}};

  auto source = WorkerSource{WorkerSource::ModulesSource{.mainModule = "main",
    .modules = kj::mv(modules),
    .capnpSchemas = {},
    .isPython = false,
    .pythonMemorySnapshot = kj::none}};

  auto language = detectLanguage(source);
  KJ_EXPECT(language == WorkerLanguage::JS);
}

// Test Service Worker script detection
KJ_TEST("detectLanguage: Service Worker Script") {
  auto globals = kj::heapArray<WorkerSource::Module>(0);

  auto source = WorkerSource{WorkerSource::ScriptSource{
    .mainScript =
        "addEventListener('fetch', event => { event.respondWith(new Response('Hello')); });",
    .mainScriptName = "worker.js",
    .globals = kj::mv(globals),
    .capnpSchemas = {}}};

  auto language = detectLanguage(source);
  KJ_EXPECT(language == WorkerLanguage::JS);
}

// Test Python worker detection
KJ_TEST("detectLanguage: Python Worker") {
  auto modules = kj::heapArray<WorkerSource::Module>(1);
  modules[0] = WorkerSource::Module{
    .name = "main", .content = WorkerSource::PythonModule{"print('Hello from Python')"}};

  auto source = WorkerSource{WorkerSource::ModulesSource{.mainModule = "main",
    .modules = kj::mv(modules),
    .capnpSchemas = {},
    .isPython = true,
    .pythonMemorySnapshot = kj::none}};

  auto language = detectLanguage(source);
  KJ_EXPECT(language == WorkerLanguage::PYTHON);
}

// Test Rust worker detection with real fixtures
KJ_TEST("detectLanguage: Rust Worker with Real Fixtures") {
  auto modules = kj::heapArray<WorkerSource::Module>(2);

  // Main module - use real Rust shim content
  auto rustShimText = readFixtureTextFile("rust-shim.mjs");
  modules[0] = WorkerSource::Module{
    .name = "rust-shim.mjs", .content = WorkerSource::EsModule{kj::mv(rustShimText)}};

  // WASM module - use real Rust-compiled WASM
  auto rustWasmData = readFixtureFile("rust-index.wasm");
  modules[1] = WorkerSource::Module{.name = "9b98e38ba129e7b74641c507eb0b82cfe7e6ec4c-index.wasm",
    .content = WorkerSource::WasmModule{rustWasmData.asPtr()}};

  auto source = WorkerSource{WorkerSource::ModulesSource{.mainModule = "rust-shim.mjs",
    .modules = kj::mv(modules),
    .capnpSchemas = {},
    .isPython = false,
    .pythonMemorySnapshot = kj::none}};

  auto language = detectLanguage(source);
  KJ_EXPECT(language == WorkerLanguage::RUST);
}

// Test Go worker detection with real fixtures
KJ_TEST("detectLanguage: Go Worker with Real Fixtures") {
  auto modules = kj::heapArray<WorkerSource::Module>(2);

  // Main module - use real Go main content
  auto goMainText = readFixtureTextFile("gomain.js");
  modules[0] = WorkerSource::Module{
    .name = "gomain.js", .content = WorkerSource::EsModule{kj::mv(goMainText)}};

  // WASM module - use real Go-compiled WASM
  auto goWasmData = readFixtureFile("go-app.wasm");
  modules[1] = WorkerSource::Module{.name = "96f8a352d81c4ad0b6b2d0e1372d811c32aed73e-app.wasm",
    .content = WorkerSource::WasmModule{goWasmData.asPtr()}};

  auto source = WorkerSource{WorkerSource::ModulesSource{.mainModule = "gomain.js",
    .modules = kj::mv(modules),
    .capnpSchemas = {},
    .isPython = false,
    .pythonMemorySnapshot = kj::none}};

  auto language = detectLanguage(source);
  KJ_EXPECT(language == WorkerLanguage::COMMUNITY_GO);
}

// Test edge case: WASM without proper JS import
KJ_TEST("detectLanguage: WASM without JS import should return JS") {
  auto modules = kj::heapArray<WorkerSource::Module>(2);

  // Main module that doesn't import the WASM
  modules[0] = WorkerSource::Module{.name = "main",
    .content =
        WorkerSource::EsModule{"export default { fetch() { return new Response('Hello'); } }"}};

  // Real Rust WASM but not imported
  auto rustWasmData = readFixtureFile("rust-index.wasm");
  modules[1] = WorkerSource::Module{
    .name = "rust-index.wasm", .content = WorkerSource::WasmModule{rustWasmData.asPtr()}};

  auto source = WorkerSource{WorkerSource::ModulesSource{.mainModule = "main",
    .modules = kj::mv(modules),
    .capnpSchemas = {},
    .isPython = false,
    .pythonMemorySnapshot = kj::none}};

  auto language = detectLanguage(source);
  KJ_EXPECT(language == WorkerLanguage::JS);
}

// Test edge case: Multiple WASM modules should return JS
KJ_TEST("detectLanguage: Multiple WASM modules should return JS") {
  auto modules = kj::heapArray<WorkerSource::Module>(3);

  modules[0] = WorkerSource::Module{.name = "main",
    .content =
        WorkerSource::EsModule{"export default { fetch() { return new Response('Hello'); } }"}};

  // Two different WASM modules
  auto rustWasmData = readFixtureFile("rust-index.wasm");
  modules[1] = WorkerSource::Module{
    .name = "rust-index.wasm", .content = WorkerSource::WasmModule{rustWasmData.asPtr()}};

  auto goWasmData = readFixtureFile("go-app.wasm");
  modules[2] = WorkerSource::Module{
    .name = "go-app.wasm", .content = WorkerSource::WasmModule{goWasmData.asPtr()}};

  auto source = WorkerSource{WorkerSource::ModulesSource{.mainModule = "main",
    .modules = kj::mv(modules),
    .capnpSchemas = {},
    .isPython = false,
    .pythonMemorySnapshot = kj::none}};

  auto language = detectLanguage(source);
  KJ_EXPECT(language == WorkerLanguage::JS);
}

// Test WorkerLanguage stringify functionality
KJ_TEST("WorkerLanguage stringify") {
  KJ_EXPECT(kj::toCharSequence(WorkerLanguage::JS) == "js"_kj);
  KJ_EXPECT(kj::toCharSequence(WorkerLanguage::PYTHON) == "python"_kj);
  KJ_EXPECT(kj::toCharSequence(WorkerLanguage::RUST) == "rust"_kj);
  KJ_EXPECT(kj::toCharSequence(WorkerLanguage::COMMUNITY_GO) == "community-go"_kj);
}

// Test edge case: No modules should return JS
KJ_TEST("detectLanguage: No modules should return JS") {
  auto modules = kj::heapArray<WorkerSource::Module>(0);

  auto source = WorkerSource{WorkerSource::ModulesSource{.mainModule = "main",
    .modules = kj::mv(modules),
    .capnpSchemas = {},
    .isPython = false,
    .pythonMemorySnapshot = kj::none}};

  auto language = detectLanguage(source);
  KJ_EXPECT(language == WorkerLanguage::JS);
}

// Test edge case: Only WASM module without JS should return JS
KJ_TEST("detectLanguage: Only WASM without JS should return JS") {
  auto modules = kj::heapArray<WorkerSource::Module>(1);

  auto rustWasmData = readFixtureFile("rust-index.wasm");
  modules[0] = WorkerSource::Module{
    .name = "rust-index.wasm", .content = WorkerSource::WasmModule{rustWasmData.asPtr()}};

  auto source = WorkerSource{WorkerSource::ModulesSource{.mainModule = "main",
    .modules = kj::mv(modules),
    .capnpSchemas = {},
    .isPython = false,
    .pythonMemorySnapshot = kj::none}};

  auto language = detectLanguage(source);
  KJ_EXPECT(language == WorkerLanguage::JS);
}

}  // namespace
}  // namespace workerd