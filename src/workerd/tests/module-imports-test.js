import { rejects, ok } from 'node:assert';

// Test source phase imports for Wasm modules
import source wasmSource from 'wasm';

export const test = {
  async test() {
    await rejects(import('node:crypto'), {
      message: /^No such module/,
    });
    await rejects(import('node:buffer'), {
      message: /^No such module/,
    });
  },
};

export const wasmSourcePhaseTestOldRegistry = {
  async test() {
    ok(wasmSource instanceof WebAssembly.Module);
    // The source object should be a WebAssembly.Module that can be instantiated
    await WebAssembly.instantiate(wasmSource, {});
  },
};

export const wasmModuleTestOldRegistry = {
  async test() {
    const { default: wasm } = await import('wasm');
    ok(wasm instanceof WebAssembly.Module);
    await WebAssembly.instantiate(wasm, {});
  },
};

export const wasmSourcePhaseTestNewRegistry = {
  async test() {
    ok(wasmSource instanceof WebAssembly.Module);
    // The source object should be a WebAssembly.Module that can be instantiated
    await WebAssembly.instantiate(wasmSource, {});
  },
};
