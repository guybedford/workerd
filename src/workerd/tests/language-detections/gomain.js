/**
 * This file along with go-app.wasm is generated from a direct build of the hello world example
 * at https://github.com/syumai/workers/tree/3fc03c90202441af3308825098c42fd84eb9fd5c.
 *
 * Built against go version go1.24.3 darwin/arm64.
 */
var __defProp = Object.defineProperty;
var __name = (target, value) =>
  __defProp(target, 'name', { value, configurable: true });

// build/wasm_exec.js
(() => {
  const enosys = /* @__PURE__ */ __name(() => {
    const err = new Error('not implemented');
    err.code = 'ENOSYS';
    return err;
  }, 'enosys');
  if (!globalThis.fs) {
    let outputBuf = '';
    globalThis.fs = {
      constants: {
        O_WRONLY: -1,
        O_RDWR: -1,
        O_CREAT: -1,
        O_TRUNC: -1,
        O_APPEND: -1,
        O_EXCL: -1,
        O_DIRECTORY: -1,
      },
      // unused
      writeSync(fd, buf) {
        outputBuf += decoder.decode(buf);
        const nl = outputBuf.lastIndexOf('\n');
        if (nl != -1) {
          console.log(outputBuf.substring(0, nl));
          outputBuf = outputBuf.substring(nl + 1);
        }
        return buf.length;
      },
      write(fd, buf, offset, length, position, callback) {
        if (offset !== 0 || length !== buf.length || position !== null) {
          callback(enosys());
          return;
        }
        const n = this.writeSync(fd, buf);
        callback(null, n);
      },
      chmod(path, mode, callback) {
        callback(enosys());
      },
      chown(path, uid, gid, callback) {
        callback(enosys());
      },
      close(fd, callback) {
        callback(enosys());
      },
      fchmod(fd, mode, callback) {
        callback(enosys());
      },
      fchown(fd, uid, gid, callback) {
        callback(enosys());
      },
      fstat(fd, callback) {
        callback(enosys());
      },
      fsync(fd, callback) {
        callback(null);
      },
      ftruncate(fd, length, callback) {
        callback(enosys());
      },
      lchown(path, uid, gid, callback) {
        callback(enosys());
      },
      link(path, link, callback) {
        callback(enosys());
      },
      lstat(path, callback) {
        callback(enosys());
      },
      mkdir(path, perm, callback) {
        callback(enosys());
      },
      open(path, flags, mode, callback) {
        callback(enosys());
      },
      read(fd, buffer, offset, length, position, callback) {
        callback(enosys());
      },
      readdir(path, callback) {
        callback(enosys());
      },
      readlink(path, callback) {
        callback(enosys());
      },
      rename(from, to, callback) {
        callback(enosys());
      },
      rmdir(path, callback) {
        callback(enosys());
      },
      stat(path, callback) {
        callback(enosys());
      },
      symlink(path, link, callback) {
        callback(enosys());
      },
      truncate(path, length, callback) {
        callback(enosys());
      },
      unlink(path, callback) {
        callback(enosys());
      },
      utimes(path, atime, mtime, callback) {
        callback(enosys());
      },
    };
  }
  if (!globalThis.process) {
    globalThis.process = {
      getuid() {
        return -1;
      },
      getgid() {
        return -1;
      },
      geteuid() {
        return -1;
      },
      getegid() {
        return -1;
      },
      getgroups() {
        throw enosys();
      },
      pid: -1,
      ppid: -1,
      umask() {
        throw enosys();
      },
      cwd() {
        throw enosys();
      },
      chdir() {
        throw enosys();
      },
    };
  }
  if (!globalThis.path) {
    globalThis.path = {
      resolve(...pathSegments) {
        return pathSegments.join('/');
      },
    };
  }
  if (!globalThis.crypto) {
    throw new Error(
      'globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)'
    );
  }
  if (!globalThis.performance) {
    throw new Error(
      'globalThis.performance is not available, polyfill required (performance.now only)'
    );
  }
  if (!globalThis.TextEncoder) {
    throw new Error(
      'globalThis.TextEncoder is not available, polyfill required'
    );
  }
  if (!globalThis.TextDecoder) {
    throw new Error(
      'globalThis.TextDecoder is not available, polyfill required'
    );
  }
  const encoder = new TextEncoder('utf-8');
  const decoder = new TextDecoder('utf-8');
  globalThis.Go = class {
    constructor() {
      this.argv = ['js'];
      this.env = {};
      this.exit = (code) => {
        if (code !== 0) {
          console.warn('exit code:', code);
        }
      };
      this._exitPromise = new Promise((resolve) => {
        this._resolveExitPromise = resolve;
      });
      this._pendingEvent = null;
      this._scheduledTimeouts = /* @__PURE__ */ new Map();
      this._nextCallbackTimeoutID = 1;
      const setInt64 = /* @__PURE__ */ __name((addr, v) => {
        this.mem.setUint32(addr + 0, v, true);
        this.mem.setUint32(addr + 4, Math.floor(v / 4294967296), true);
      }, 'setInt64');
      const setInt32 = /* @__PURE__ */ __name((addr, v) => {
        this.mem.setUint32(addr + 0, v, true);
      }, 'setInt32');
      const getInt64 = /* @__PURE__ */ __name((addr) => {
        const low = this.mem.getUint32(addr + 0, true);
        const high = this.mem.getInt32(addr + 4, true);
        return low + high * 4294967296;
      }, 'getInt64');
      const loadValue = /* @__PURE__ */ __name((addr) => {
        const f = this.mem.getFloat64(addr, true);
        if (f === 0) {
          return void 0;
        }
        if (!isNaN(f)) {
          return f;
        }
        const id = this.mem.getUint32(addr, true);
        return this._values[id];
      }, 'loadValue');
      const storeValue = /* @__PURE__ */ __name((addr, v) => {
        const nanHead = 2146959360;
        if (typeof v === 'number' && v !== 0) {
          if (isNaN(v)) {
            this.mem.setUint32(addr + 4, nanHead, true);
            this.mem.setUint32(addr, 0, true);
            return;
          }
          this.mem.setFloat64(addr, v, true);
          return;
        }
        if (v === void 0) {
          this.mem.setFloat64(addr, 0, true);
          return;
        }
        let id = this._ids.get(v);
        if (id === void 0) {
          id = this._idPool.pop();
          if (id === void 0) {
            id = this._values.length;
          }
          this._values[id] = v;
          this._goRefCounts[id] = 0;
          this._ids.set(v, id);
        }
        this._goRefCounts[id]++;
        let typeFlag = 0;
        switch (typeof v) {
          case 'object':
            if (v !== null) {
              typeFlag = 1;
            }
            break;
          case 'string':
            typeFlag = 2;
            break;
          case 'symbol':
            typeFlag = 3;
            break;
          case 'function':
            typeFlag = 4;
            break;
        }
        this.mem.setUint32(addr + 4, nanHead | typeFlag, true);
        this.mem.setUint32(addr, id, true);
      }, 'storeValue');
      const loadSlice = /* @__PURE__ */ __name((addr) => {
        const array = getInt64(addr + 0);
        const len = getInt64(addr + 8);
        return new Uint8Array(this._inst.exports.mem.buffer, array, len);
      }, 'loadSlice');
      const loadSliceOfValues = /* @__PURE__ */ __name((addr) => {
        const array = getInt64(addr + 0);
        const len = getInt64(addr + 8);
        const a = new Array(len);
        for (let i = 0; i < len; i++) {
          a[i] = loadValue(array + i * 8);
        }
        return a;
      }, 'loadSliceOfValues');
      const loadString = /* @__PURE__ */ __name((addr) => {
        const saddr = getInt64(addr + 0);
        const len = getInt64(addr + 8);
        return decoder.decode(
          new DataView(this._inst.exports.mem.buffer, saddr, len)
        );
      }, 'loadString');
      const testCallExport = /* @__PURE__ */ __name((a, b) => {
        this._inst.exports.testExport0();
        return this._inst.exports.testExport(a, b);
      }, 'testCallExport');
      const timeOrigin = Date.now() - performance.now();
      this.importObject = {
        _gotest: {
          add: /* @__PURE__ */ __name((a, b) => a + b, 'add'),
          callExport: testCallExport,
        },
        gojs: {
          // Go's SP does not change as long as no Go code is running. Some operations (e.g. calls, getters and setters)
          // may synchronously trigger a Go event handler. This makes Go code get executed in the middle of the imported
          // function. A goroutine can switch to a new stack if the current stack is too small (see morestack function).
          // This changes the SP, thus we have to update the SP used by the imported function.
          // func wasmExit(code int32)
          'runtime.wasmExit': /* @__PURE__ */ __name((sp) => {
            sp >>>= 0;
            const code = this.mem.getInt32(sp + 8, true);
            this.exited = true;
            delete this._inst;
            delete this._values;
            delete this._goRefCounts;
            delete this._ids;
            delete this._idPool;
            this.exit(code);
          }, 'runtime.wasmExit'),
          // func wasmWrite(fd uintptr, p unsafe.Pointer, n int32)
          'runtime.wasmWrite': /* @__PURE__ */ __name((sp) => {
            sp >>>= 0;
            const fd = getInt64(sp + 8);
            const p = getInt64(sp + 16);
            const n = this.mem.getInt32(sp + 24, true);
            fs.writeSync(
              fd,
              new Uint8Array(this._inst.exports.mem.buffer, p, n)
            );
          }, 'runtime.wasmWrite'),
          // func resetMemoryDataView()
          'runtime.resetMemoryDataView': /* @__PURE__ */ __name((sp) => {
            sp >>>= 0;
            this.mem = new DataView(this._inst.exports.mem.buffer);
          }, 'runtime.resetMemoryDataView'),
          // func nanotime1() int64
          'runtime.nanotime1': /* @__PURE__ */ __name((sp) => {
            sp >>>= 0;
            setInt64(sp + 8, (timeOrigin + performance.now()) * 1e6);
          }, 'runtime.nanotime1'),
          // func walltime() (sec int64, nsec int32)
          'runtime.walltime': /* @__PURE__ */ __name((sp) => {
            sp >>>= 0;
            const msec = /* @__PURE__ */ new Date().getTime();
            setInt64(sp + 8, msec / 1e3);
            this.mem.setInt32(sp + 16, (msec % 1e3) * 1e6, true);
          }, 'runtime.walltime'),
          // func scheduleTimeoutEvent(delay int64) int32
          'runtime.scheduleTimeoutEvent': /* @__PURE__ */ __name((sp) => {
            sp >>>= 0;
            const id = this._nextCallbackTimeoutID;
            this._nextCallbackTimeoutID++;
            this._scheduledTimeouts.set(
              id,
              setTimeout(
                () => {
                  this._resume();
                  while (this._scheduledTimeouts.has(id)) {
                    console.warn('scheduleTimeoutEvent: missed timeout event');
                    this._resume();
                  }
                },
                getInt64(sp + 8)
              )
            );
            this.mem.setInt32(sp + 16, id, true);
          }, 'runtime.scheduleTimeoutEvent'),
          // func clearTimeoutEvent(id int32)
          'runtime.clearTimeoutEvent': /* @__PURE__ */ __name((sp) => {
            sp >>>= 0;
            const id = this.mem.getInt32(sp + 8, true);
            clearTimeout(this._scheduledTimeouts.get(id));
            this._scheduledTimeouts.delete(id);
          }, 'runtime.clearTimeoutEvent'),
          // func getRandomData(r []byte)
          'runtime.getRandomData': /* @__PURE__ */ __name((sp) => {
            sp >>>= 0;
            crypto.getRandomValues(loadSlice(sp + 8));
          }, 'runtime.getRandomData'),
          // func finalizeRef(v ref)
          'syscall/js.finalizeRef': /* @__PURE__ */ __name((sp) => {
            sp >>>= 0;
            const id = this.mem.getUint32(sp + 8, true);
            this._goRefCounts[id]--;
            if (this._goRefCounts[id] === 0) {
              const v = this._values[id];
              this._values[id] = null;
              this._ids.delete(v);
              this._idPool.push(id);
            }
          }, 'syscall/js.finalizeRef'),
          // func stringVal(value string) ref
          'syscall/js.stringVal': /* @__PURE__ */ __name((sp) => {
            sp >>>= 0;
            storeValue(sp + 24, loadString(sp + 8));
          }, 'syscall/js.stringVal'),
          // func valueGet(v ref, p string) ref
          'syscall/js.valueGet': /* @__PURE__ */ __name((sp) => {
            sp >>>= 0;
            const result = Reflect.get(loadValue(sp + 8), loadString(sp + 16));
            sp = this._inst.exports.getsp() >>> 0;
            storeValue(sp + 32, result);
          }, 'syscall/js.valueGet'),
          // func valueSet(v ref, p string, x ref)
          'syscall/js.valueSet': /* @__PURE__ */ __name((sp) => {
            sp >>>= 0;
            Reflect.set(
              loadValue(sp + 8),
              loadString(sp + 16),
              loadValue(sp + 32)
            );
          }, 'syscall/js.valueSet'),
          // func valueDelete(v ref, p string)
          'syscall/js.valueDelete': /* @__PURE__ */ __name((sp) => {
            sp >>>= 0;
            Reflect.deleteProperty(loadValue(sp + 8), loadString(sp + 16));
          }, 'syscall/js.valueDelete'),
          // func valueIndex(v ref, i int) ref
          'syscall/js.valueIndex': /* @__PURE__ */ __name((sp) => {
            sp >>>= 0;
            storeValue(
              sp + 24,
              Reflect.get(loadValue(sp + 8), getInt64(sp + 16))
            );
          }, 'syscall/js.valueIndex'),
          // valueSetIndex(v ref, i int, x ref)
          'syscall/js.valueSetIndex': /* @__PURE__ */ __name((sp) => {
            sp >>>= 0;
            Reflect.set(
              loadValue(sp + 8),
              getInt64(sp + 16),
              loadValue(sp + 24)
            );
          }, 'syscall/js.valueSetIndex'),
          // func valueCall(v ref, m string, args []ref) (ref, bool)
          'syscall/js.valueCall': /* @__PURE__ */ __name((sp) => {
            sp >>>= 0;
            try {
              const v = loadValue(sp + 8);
              const m = Reflect.get(v, loadString(sp + 16));
              const args = loadSliceOfValues(sp + 32);
              const result = Reflect.apply(m, v, args);
              sp = this._inst.exports.getsp() >>> 0;
              storeValue(sp + 56, result);
              this.mem.setUint8(sp + 64, 1);
            } catch (err) {
              sp = this._inst.exports.getsp() >>> 0;
              storeValue(sp + 56, err);
              this.mem.setUint8(sp + 64, 0);
            }
          }, 'syscall/js.valueCall'),
          // func valueInvoke(v ref, args []ref) (ref, bool)
          'syscall/js.valueInvoke': /* @__PURE__ */ __name((sp) => {
            sp >>>= 0;
            try {
              const v = loadValue(sp + 8);
              const args = loadSliceOfValues(sp + 16);
              const result = Reflect.apply(v, void 0, args);
              sp = this._inst.exports.getsp() >>> 0;
              storeValue(sp + 40, result);
              this.mem.setUint8(sp + 48, 1);
            } catch (err) {
              sp = this._inst.exports.getsp() >>> 0;
              storeValue(sp + 40, err);
              this.mem.setUint8(sp + 48, 0);
            }
          }, 'syscall/js.valueInvoke'),
          // func valueNew(v ref, args []ref) (ref, bool)
          'syscall/js.valueNew': /* @__PURE__ */ __name((sp) => {
            sp >>>= 0;
            try {
              const v = loadValue(sp + 8);
              const args = loadSliceOfValues(sp + 16);
              const result = Reflect.construct(v, args);
              sp = this._inst.exports.getsp() >>> 0;
              storeValue(sp + 40, result);
              this.mem.setUint8(sp + 48, 1);
            } catch (err) {
              sp = this._inst.exports.getsp() >>> 0;
              storeValue(sp + 40, err);
              this.mem.setUint8(sp + 48, 0);
            }
          }, 'syscall/js.valueNew'),
          // func valueLength(v ref) int
          'syscall/js.valueLength': /* @__PURE__ */ __name((sp) => {
            sp >>>= 0;
            setInt64(sp + 16, parseInt(loadValue(sp + 8).length));
          }, 'syscall/js.valueLength'),
          // valuePrepareString(v ref) (ref, int)
          'syscall/js.valuePrepareString': /* @__PURE__ */ __name((sp) => {
            sp >>>= 0;
            const str = encoder.encode(String(loadValue(sp + 8)));
            storeValue(sp + 16, str);
            setInt64(sp + 24, str.length);
          }, 'syscall/js.valuePrepareString'),
          // valueLoadString(v ref, b []byte)
          'syscall/js.valueLoadString': /* @__PURE__ */ __name((sp) => {
            sp >>>= 0;
            const str = loadValue(sp + 8);
            loadSlice(sp + 16).set(str);
          }, 'syscall/js.valueLoadString'),
          // func valueInstanceOf(v ref, t ref) bool
          'syscall/js.valueInstanceOf': /* @__PURE__ */ __name((sp) => {
            sp >>>= 0;
            this.mem.setUint8(
              sp + 24,
              loadValue(sp + 8) instanceof loadValue(sp + 16) ? 1 : 0
            );
          }, 'syscall/js.valueInstanceOf'),
          // func copyBytesToGo(dst []byte, src ref) (int, bool)
          'syscall/js.copyBytesToGo': /* @__PURE__ */ __name((sp) => {
            sp >>>= 0;
            const dst = loadSlice(sp + 8);
            const src = loadValue(sp + 32);
            if (
              !(src instanceof Uint8Array || src instanceof Uint8ClampedArray)
            ) {
              this.mem.setUint8(sp + 48, 0);
              return;
            }
            const toCopy = src.subarray(0, dst.length);
            dst.set(toCopy);
            setInt64(sp + 40, toCopy.length);
            this.mem.setUint8(sp + 48, 1);
          }, 'syscall/js.copyBytesToGo'),
          // func copyBytesToJS(dst ref, src []byte) (int, bool)
          'syscall/js.copyBytesToJS': /* @__PURE__ */ __name((sp) => {
            sp >>>= 0;
            const dst = loadValue(sp + 8);
            const src = loadSlice(sp + 16);
            if (
              !(dst instanceof Uint8Array || dst instanceof Uint8ClampedArray)
            ) {
              this.mem.setUint8(sp + 48, 0);
              return;
            }
            const toCopy = src.subarray(0, dst.length);
            dst.set(toCopy);
            setInt64(sp + 40, toCopy.length);
            this.mem.setUint8(sp + 48, 1);
          }, 'syscall/js.copyBytesToJS'),
          debug: /* @__PURE__ */ __name((value) => {
            console.log(value);
          }, 'debug'),
        },
      };
    }
    async run(instance, context) {
      if (!(instance instanceof WebAssembly.Instance)) {
        throw new Error('Go.run: WebAssembly.Instance expected');
      }
      this._inst = instance;
      this.mem = new DataView(this._inst.exports.mem.buffer);
      const globalProxy = new Proxy(globalThis, {
        get(target, prop) {
          if (prop === 'context') {
            return context;
          }
          return Reflect.get(target, prop, target);
        },
      });
      this._values = [
        // JS values that Go currently has references to, indexed by reference id
        NaN,
        0,
        null,
        true,
        false,
        globalProxy,
        this,
      ];
      this._goRefCounts = new Array(this._values.length).fill(Infinity);
      this._ids = /* @__PURE__ */ new Map([
        // mapping from JS values to reference ids
        [0, 1],
        [null, 2],
        [true, 3],
        [false, 4],
        [globalProxy, 5],
        [this, 6],
      ]);
      this._idPool = [];
      this.exited = false;
      let offset = 4096;
      const strPtr = /* @__PURE__ */ __name((str) => {
        const ptr = offset;
        const bytes = encoder.encode(str + '\0');
        new Uint8Array(this.mem.buffer, offset, bytes.length).set(bytes);
        offset += bytes.length;
        if (offset % 8 !== 0) {
          offset += 8 - (offset % 8);
        }
        return ptr;
      }, 'strPtr');
      const argc = this.argv.length;
      const argvPtrs = [];
      this.argv.forEach((arg) => {
        argvPtrs.push(strPtr(arg));
      });
      argvPtrs.push(0);
      const keys = Object.keys(this.env).sort();
      keys.forEach((key) => {
        argvPtrs.push(strPtr(`${key}=${this.env[key]}`));
      });
      argvPtrs.push(0);
      const argv = offset;
      argvPtrs.forEach((ptr) => {
        this.mem.setUint32(offset, ptr, true);
        this.mem.setUint32(offset + 4, 0, true);
        offset += 8;
      });
      const wasmMinDataAddr = 4096 + 8192;
      if (offset >= wasmMinDataAddr) {
        throw new Error(
          'total length of command line and environment variables exceeds limit'
        );
      }
      this._inst.exports.run(argc, argv);
      if (this.exited) {
        this._resolveExitPromise();
      }
      await this._exitPromise;
    }
    _resume() {
      if (this.exited) {
        throw new Error('Go program has already exited');
      }
      this._inst.exports.resume();
      if (this.exited) {
        this._resolveExitPromise();
      }
    }
    _makeFuncWrapper(id) {
      const go = this;
      return function () {
        const event = { id, this: this, args: arguments };
        go._pendingEvent = event;
        go._resume();
        return event.result;
      };
    }
  };
})();

// build/runtime.mjs
import { connect } from 'cloudflare:sockets';
import mod from './96f8a352d81c4ad0b6b2d0e1372d811c32aed73e-app.wasm';
async function loadModule() {
  return mod;
}
__name(loadModule, 'loadModule');
function createRuntimeContext({ env, ctx, binding }) {
  return {
    env,
    ctx,
    connect,
    binding,
  };
}
__name(createRuntimeContext, 'createRuntimeContext');

// build/worker.mjs
var mod2;
globalThis.tryCatch = (fn) => {
  try {
    return {
      result: fn(),
    };
  } catch (e) {
    return {
      error: e,
    };
  }
};
async function run(ctx) {
  if (mod2 === void 0) {
    mod2 = await loadModule();
  }
  const go = new Go();
  let ready;
  const readyPromise = new Promise((resolve) => {
    ready = resolve;
  });
  const instance = new WebAssembly.Instance(mod2, {
    ...go.importObject,
    workers: {
      ready: /* @__PURE__ */ __name(() => {
        ready();
      }, 'ready'),
    },
  });
  go.run(instance, ctx);
  await readyPromise;
}
__name(run, 'run');
async function fetch(req, env, ctx) {
  const binding = {};
  await run(createRuntimeContext({ env, ctx, binding }));
  return binding.handleRequest(req);
}
__name(fetch, 'fetch');
async function scheduled(event, env, ctx) {
  const binding = {};
  await run(createRuntimeContext({ env, ctx, binding }));
  return binding.runScheduler(event);
}
__name(scheduled, 'scheduled');
async function queue(batch, env, ctx) {
  const binding = {};
  await run(createRuntimeContext({ env, ctx, binding }));
  return binding.handleQueueMessageBatch(batch);
}
__name(queue, 'queue');
async function onRequest(ctx) {
  const binding = {};
  const { request, env } = ctx;
  await run(createRuntimeContext({ env, ctx, binding }));
  return binding.handleRequest(request);
}
__name(onRequest, 'onRequest');
var worker_default = {
  fetch,
  scheduled,
  queue,
  onRequest,
};

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(
  async (request, env, _ctx, middlewareCtx) => {
    try {
      return await middlewareCtx.next(request, env);
    } finally {
      try {
        if (request.body !== null && !request.bodyUsed) {
          const reader = request.body.getReader();
          while (!(await reader.read()).done) {}
        }
      } catch (e) {
        console.error('Failed to drain the unused request body.', e);
      }
    }
  },
  'drainBody'
);
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause),
  };
}
__name(reduceError, 'reduceError');
var jsonError = /* @__PURE__ */ __name(
  async (request, env, _ctx, middlewareCtx) => {
    try {
      return await middlewareCtx.next(request, env);
    } catch (e) {
      const error = reduceError(e);
      return Response.json(error, {
        status: 500,
        headers: { 'MF-Experimental-Error-Stack': 'true' },
      });
    }
  },
  'jsonError'
);
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-hUPyEs/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default,
];
var middleware_insertion_facade_default = worker_default;

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, '__facade_register__');
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    },
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, '__facade_invokeChain__');
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware,
  ]);
}
__name(__facade_invoke__, '__facade_invoke__');

// .wrangler/tmp/bundle-hUPyEs/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, '__Facade_ScheduledController__');
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError('Illegal invocation');
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (
    __INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 ||
    __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0
  ) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function (request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error('Handler does not export a fetch() function.');
    }
    return worker.fetch(request, env, ctx);
  }, 'fetchDispatcher');
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function (type, init) {
        if (type === 'scheduled' && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? '',
            () => {}
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, 'dispatcher');
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    },
  };
}
__name(wrapExportedHandler, 'wrapExportedHandler');
function wrapWorkerEntrypoint(klass) {
  if (
    __INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 ||
    __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0
  ) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error('Entrypoint class does not define a fetch() function.');
      }
      return super.fetch(request);
    }, '#fetchDispatcher');
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === 'scheduled' && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? '',
          () => {}
        );
        return super.scheduled(controller);
      }
    }, '#dispatcher');
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, 'wrapWorkerEntrypoint');
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === 'object') {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === 'function') {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default,
};
//# sourceMappingURL=worker.js.map
