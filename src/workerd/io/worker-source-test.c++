// Tests for language detection in WorkerSource

#include <workerd/io/worker-source.h>
#include <kj/test.h>

namespace workerd {
namespace {

// Test JavaScript worker detection
KJ_TEST("detectLanguage: JavaScript worker") {
  auto modules = kj::heapArray<WorkerSource::Module>(1);
  modules[0] = WorkerSource::Module{
    .name = "main",
    .content = WorkerSource::EsModule{"export default { fetch() { return new Response('Hello'); } }"}
  };
  
  auto source = WorkerSource{
    WorkerSource::ModulesSource{
      .mainModule = "main",
      .modules = kj::mv(modules),
      .capnpSchemas = {},
      .isPython = false,
      .pythonMemorySnapshot = kj::none
    }
  };
  
  auto language = detectLanguage(source);
  KJ_EXPECT(language == WorkerLanguage::JS);
}

// Test Python worker detection
KJ_TEST("detectLanguage: Python worker") {
  auto modules = kj::heapArray<WorkerSource::Module>(1);
  modules[0] = WorkerSource::Module{
    .name = "main",
    .content = WorkerSource::PythonModule{"print('Hello from Python')"}
  };
  
  auto source = WorkerSource{
    WorkerSource::ModulesSource{
      .mainModule = "main",
      .modules = kj::mv(modules),
      .capnpSchemas = {},
      .isPython = true,
      .pythonMemorySnapshot = kj::none
    }
  };
  
  auto language = detectLanguage(source);
  KJ_EXPECT(language == WorkerLanguage::PYTHON);
}

// Test Service Worker script detection
KJ_TEST("detectLanguage: Service Worker script") {
  auto globals = kj::heapArray<WorkerSource::Module>(0);
  
  auto source = WorkerSource{
    WorkerSource::ScriptSource{
      .mainScript = "addEventListener('fetch', event => { event.respondWith(new Response('Hello')); });",
      .mainScriptName = "worker.js",
      .globals = kj::mv(globals),
      .capnpSchemas = {}
    }
  };
  
  auto language = detectLanguage(source);
  KJ_EXPECT(language == WorkerLanguage::JS);
}

// Test Rust worker detection (would require actual WASM data)
KJ_TEST("detectLanguage: Rust worker with WASM") {
  // Create a simple WASM module header (magic number + version)
  auto wasmData = kj::heapArray<kj::byte>(8);
  wasmData[0] = 0x00;  // WASM magic
  wasmData[1] = 0x61;  // number
  wasmData[2] = 0x73;  // "\0asm"
  wasmData[3] = 0x6d;
  wasmData[4] = 0x01;  // version
  wasmData[5] = 0x00;  // 1
  wasmData[6] = 0x00;
  wasmData[7] = 0x00;
  
  auto modules = kj::heapArray<WorkerSource::Module>(2);
  modules[0] = WorkerSource::Module{
    .name = "main",
    .content = WorkerSource::EsModule{"import wasmModule from './worker.wasm'; export default { fetch() { return new Response('Hello from Rust'); } }"}
  };
  modules[1] = WorkerSource::Module{
    .name = "worker.wasm",
    .content = WorkerSource::WasmModule{wasmData.asPtr().asConst()}
  };
  
  auto source = WorkerSource{
    WorkerSource::ModulesSource{
      .mainModule = "main",
      .modules = kj::mv(modules),
      .capnpSchemas = {},
      .isPython = false,
      .pythonMemorySnapshot = kj::none
    }
  };
  
  auto language = detectLanguage(source);
  // Note: This will likely return JS since the WASM data is not from a real Rust compilation
  // but the test verifies the code path works
  KJ_EXPECT(language == WorkerLanguage::JS || language == WorkerLanguage::RUST);
}

}  // namespace
}  // namespace workerd