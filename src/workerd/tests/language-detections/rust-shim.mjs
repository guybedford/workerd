/**
 * This file along with rust-index.wasm is generated from a direct build of the hello world example
 * at https://github.com/cloudflare/workers-rs/tree/3e80a05b7279c7bc6c067e516a1545063c510188.
 *
 * Built with wasm-bindgen 0.2.100, cargo 1.88.0, rustc 1.88.0.
 */

var __defProp = Object.defineProperty;
var __name = (target, value) =>
  __defProp(target, 'name', { value, configurable: true });

// .wrangler/tmp/bundle-WcxG85/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url =
    request instanceof URL
      ? request
      : new URL(
          (typeof request === 'string'
            ? new Request(request, init)
            : request
          ).url
        );
  if (url.port && url.port !== '443' && url.protocol === 'https:') {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
__name(checkURL, 'checkURL');
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  },
});

// build/worker/shim.mjs
import { connect as nt } from 'cloudflare:sockets';
import Mo from './9b98e38ba129e7b74641c507eb0b82cfe7e6ec4c-index.wasm';
import { WorkerEntrypoint as vo } from 'cloudflare:workers';
var et = Object.defineProperty;
var rt = /* @__PURE__ */ __name((t, e) => {
  for (var r in e) et(t, r, { get: e[r], enumerable: true });
}, 'rt');
var l = {};
rt(l, {
  AlarmObject: /* @__PURE__ */ __name(() => j, 'AlarmObject'),
  AutoResponseObject: /* @__PURE__ */ __name(() => z, 'AutoResponseObject'),
  Counter: /* @__PURE__ */ __name(() => E, 'Counter'),
  IntoUnderlyingByteSource: /* @__PURE__ */ __name(
    () => q,
    'IntoUnderlyingByteSource'
  ),
  IntoUnderlyingSink: /* @__PURE__ */ __name(() => A, 'IntoUnderlyingSink'),
  IntoUnderlyingSource: /* @__PURE__ */ __name(() => x, 'IntoUnderlyingSource'),
  MinifyConfig: /* @__PURE__ */ __name(() => m, 'MinifyConfig'),
  MyClass: /* @__PURE__ */ __name(() => M, 'MyClass'),
  PolishConfig: /* @__PURE__ */ __name(() => bt, 'PolishConfig'),
  PutRawTestObject: /* @__PURE__ */ __name(() => v, 'PutRawTestObject'),
  R2Range: /* @__PURE__ */ __name(() => T, 'R2Range'),
  RequestRedirect: /* @__PURE__ */ __name(() => gt, 'RequestRedirect'),
  SqlCounter: /* @__PURE__ */ __name(() => L, 'SqlCounter'),
  SqlIterator: /* @__PURE__ */ __name(() => O, 'SqlIterator'),
  __wbg_String_8f0eb39a4a4c2f66: /* @__PURE__ */ __name(
    () => mt,
    '__wbg_String_8f0eb39a4a4c2f66'
  ),
  __wbg_abort_775ef1d17fc65868: /* @__PURE__ */ __name(
    () => ht,
    '__wbg_abort_775ef1d17fc65868'
  ),
  __wbg_acceptWebSocket_3cae1959970c57b6: /* @__PURE__ */ __name(
    () => yt,
    '__wbg_acceptWebSocket_3cae1959970c57b6'
  ),
  __wbg_accept_5f2d86d120bad60c: /* @__PURE__ */ __name(
    () => St,
    '__wbg_accept_5f2d86d120bad60c'
  ),
  __wbg_addEventListener_90e553fdce254421: /* @__PURE__ */ __name(
    () => kt,
    '__wbg_addEventListener_90e553fdce254421'
  ),
  __wbg_all_97f4b3be03650e40: /* @__PURE__ */ __name(
    () => Rt,
    '__wbg_all_97f4b3be03650e40'
  ),
  __wbg_append_8c7dd8d641a5f01b: /* @__PURE__ */ __name(
    () => Ft,
    '__wbg_append_8c7dd8d641a5f01b'
  ),
  __wbg_arrayBuffer_37ea85bfa7693acc: /* @__PURE__ */ __name(
    () => It,
    '__wbg_arrayBuffer_37ea85bfa7693acc'
  ),
  __wbg_arrayBuffer_723b6f27bf8203b4: /* @__PURE__ */ __name(
    () => jt,
    '__wbg_arrayBuffer_723b6f27bf8203b4'
  ),
  __wbg_arrayBuffer_f18c144cd0125f07: /* @__PURE__ */ __name(
    () => zt,
    '__wbg_arrayBuffer_f18c144cd0125f07'
  ),
  __wbg_batch_44ed2cf324ae14d1: /* @__PURE__ */ __name(
    () => Et,
    '__wbg_batch_44ed2cf324ae14d1'
  ),
  __wbg_bind_4bc5dc5c27885233: /* @__PURE__ */ __name(
    () => qt,
    '__wbg_bind_4bc5dc5c27885233'
  ),
  __wbg_body_018617e858cb7195: /* @__PURE__ */ __name(
    () => At,
    '__wbg_body_018617e858cb7195'
  ),
  __wbg_body_0b8fd1fe671660df: /* @__PURE__ */ __name(
    () => Mt,
    '__wbg_body_0b8fd1fe671660df'
  ),
  __wbg_body_9353d39203ed376e: /* @__PURE__ */ __name(
    () => vt,
    '__wbg_body_9353d39203ed376e'
  ),
  __wbg_buffer_09165b52af8c5237: /* @__PURE__ */ __name(
    () => Tt,
    '__wbg_buffer_09165b52af8c5237'
  ),
  __wbg_buffer_609cc3eee51ed158: /* @__PURE__ */ __name(
    () => Lt,
    '__wbg_buffer_609cc3eee51ed158'
  ),
  __wbg_byobRequest_77d9adf63337edfb: /* @__PURE__ */ __name(
    () => Ot,
    '__wbg_byobRequest_77d9adf63337edfb'
  ),
  __wbg_byteLength_e674b853d9c77e1d: /* @__PURE__ */ __name(
    () => Ct,
    '__wbg_byteLength_e674b853d9c77e1d'
  ),
  __wbg_byteOffset_fd862df290ef848d: /* @__PURE__ */ __name(
    () => Wt,
    '__wbg_byteOffset_fd862df290ef848d'
  ),
  __wbg_cacheControl_90e5617a64924790: /* @__PURE__ */ __name(
    () => Dt,
    '__wbg_cacheControl_90e5617a64924790'
  ),
  __wbg_cacheExpiry_1d86f3c3f7d80f63: /* @__PURE__ */ __name(
    () => Ut,
    '__wbg_cacheExpiry_1d86f3c3f7d80f63'
  ),
  __wbg_caches_283b4bd5a6b4a384: /* @__PURE__ */ __name(
    () => Bt,
    '__wbg_caches_283b4bd5a6b4a384'
  ),
  __wbg_call_672a4d21634d4a24: /* @__PURE__ */ __name(
    () => Nt,
    '__wbg_call_672a4d21634d4a24'
  ),
  __wbg_call_7cccdd69e0791ae2: /* @__PURE__ */ __name(
    () => Pt,
    '__wbg_call_7cccdd69e0791ae2'
  ),
  __wbg_call_833bed5770ea2041: /* @__PURE__ */ __name(
    () => Vt,
    '__wbg_call_833bed5770ea2041'
  ),
  __wbg_call_b8adc8b1d0a0d8eb: /* @__PURE__ */ __name(
    () => $t,
    '__wbg_call_b8adc8b1d0a0d8eb'
  ),
  __wbg_cancel_8a308660caa6cadf: /* @__PURE__ */ __name(
    () => Jt,
    '__wbg_cancel_8a308660caa6cadf'
  ),
  __wbg_catch_a6e601879b2610e9: /* @__PURE__ */ __name(
    () => Ht,
    '__wbg_catch_a6e601879b2610e9'
  ),
  __wbg_cause_9940c4e8dfcd5129: /* @__PURE__ */ __name(
    () => Gt,
    '__wbg_cause_9940c4e8dfcd5129'
  ),
  __wbg_cf_2838b79b75741efd: /* @__PURE__ */ __name(
    () => Xt,
    '__wbg_cf_2838b79b75741efd'
  ),
  __wbg_cf_c0193c570a7f7867: /* @__PURE__ */ __name(
    () => Kt,
    '__wbg_cf_c0193c570a7f7867'
  ),
  __wbg_clearTimeout_a4a1c8c379e0a240: /* @__PURE__ */ __name(
    () => Qt,
    '__wbg_clearTimeout_a4a1c8c379e0a240'
  ),
  __wbg_clone_2db2a99cd08951ef: /* @__PURE__ */ __name(
    () => Yt,
    '__wbg_clone_2db2a99cd08951ef'
  ),
  __wbg_clone_74c1bc948bcfa805: /* @__PURE__ */ __name(
    () => Zt,
    '__wbg_clone_74c1bc948bcfa805'
  ),
  __wbg_close_2893b7d056a0627d: /* @__PURE__ */ __name(
    () => te,
    '__wbg_close_2893b7d056a0627d'
  ),
  __wbg_close_304cc1fef3466669: /* @__PURE__ */ __name(
    () => ee,
    '__wbg_close_304cc1fef3466669'
  ),
  __wbg_close_3c756df9a6f53aac: /* @__PURE__ */ __name(
    () => re,
    '__wbg_close_3c756df9a6f53aac'
  ),
  __wbg_close_5ce03e29be453811: /* @__PURE__ */ __name(
    () => ne,
    '__wbg_close_5ce03e29be453811'
  ),
  __wbg_close_e1253d480ed93ce3: /* @__PURE__ */ __name(
    () => _e,
    '__wbg_close_e1253d480ed93ce3'
  ),
  __wbg_close_f017945a5808791e: /* @__PURE__ */ __name(
    () => oe,
    '__wbg_close_f017945a5808791e'
  ),
  __wbg_closed_a0bf5b9cd2d7cb69: /* @__PURE__ */ __name(
    () => ce,
    '__wbg_closed_a0bf5b9cd2d7cb69'
  ),
  __wbg_columnNames_c7eabf57db01c36a: /* @__PURE__ */ __name(
    () => se,
    '__wbg_columnNames_c7eabf57db01c36a'
  ),
  __wbg_complete_16f243e000071e0a: /* @__PURE__ */ __name(
    () => ue,
    '__wbg_complete_16f243e000071e0a'
  ),
  __wbg_connect_154a390d8e5f747d: /* @__PURE__ */ __name(
    () => ie,
    '__wbg_connect_154a390d8e5f747d'
  ),
  __wbg_constructor_9fd96f589d65d4e5: /* @__PURE__ */ __name(
    () => ae,
    '__wbg_constructor_9fd96f589d65d4e5'
  ),
  __wbg_contentDisposition_b1cd38536c3d2b93: /* @__PURE__ */ __name(
    () => fe,
    '__wbg_contentDisposition_b1cd38536c3d2b93'
  ),
  __wbg_contentEncoding_548773071e3ad58c: /* @__PURE__ */ __name(
    () => be,
    '__wbg_contentEncoding_548773071e3ad58c'
  ),
  __wbg_contentLanguage_a3b822305e5f0156: /* @__PURE__ */ __name(
    () => ge,
    '__wbg_contentLanguage_a3b822305e5f0156'
  ),
  __wbg_contentType_9d423cea95772690: /* @__PURE__ */ __name(
    () => we,
    '__wbg_contentType_9d423cea95772690'
  ),
  __wbg_count_fa7e9e9408fc2434: /* @__PURE__ */ __name(
    () => de,
    '__wbg_count_fa7e9e9408fc2434'
  ),
  __wbg_createMultipartUpload_bf42449f48b5f882: /* @__PURE__ */ __name(
    () => le,
    '__wbg_createMultipartUpload_bf42449f48b5f882'
  ),
  __wbg_cursor_43fb372d2de39fc7: /* @__PURE__ */ __name(
    () => pe,
    '__wbg_cursor_43fb372d2de39fc7'
  ),
  __wbg_customMetadata_8796380652674d7f: /* @__PURE__ */ __name(
    () => xe,
    '__wbg_customMetadata_8796380652674d7f'
  ),
  __wbg_data_432d9c3df2630942: /* @__PURE__ */ __name(
    () => me,
    '__wbg_data_432d9c3df2630942'
  ),
  __wbg_debug_3cb59063b29f58c1: /* @__PURE__ */ __name(
    () => he,
    '__wbg_debug_3cb59063b29f58c1'
  ),
  __wbg_default_7364beb918936bbb: /* @__PURE__ */ __name(
    () => ye,
    '__wbg_default_7364beb918936bbb'
  ),
  __wbg_deleteAll_37af9e104ea77a80: /* @__PURE__ */ __name(
    () => Se,
    '__wbg_deleteAll_37af9e104ea77a80'
  ),
  __wbg_delete_0fb18b3c5f50d746: /* @__PURE__ */ __name(
    () => ke,
    '__wbg_delete_0fb18b3c5f50d746'
  ),
  __wbg_delete_3dc04e61a00e7d6c: /* @__PURE__ */ __name(
    () => Re,
    '__wbg_delete_3dc04e61a00e7d6c'
  ),
  __wbg_delete_4dbf2ceafab4f543: /* @__PURE__ */ __name(
    () => Fe,
    '__wbg_delete_4dbf2ceafab4f543'
  ),
  __wbg_delete_8b514d320105b701: /* @__PURE__ */ __name(
    () => Ie,
    '__wbg_delete_8b514d320105b701'
  ),
  __wbg_delete_e1c3d7790c846680: /* @__PURE__ */ __name(
    () => je,
    '__wbg_delete_e1c3d7790c846680'
  ),
  __wbg_deserializeAttachment_a051ee6af9b71717: /* @__PURE__ */ __name(
    () => ze,
    '__wbg_deserializeAttachment_a051ee6af9b71717'
  ),
  __wbg_done_769e5ede4b31c67b: /* @__PURE__ */ __name(
    () => Ee,
    '__wbg_done_769e5ede4b31c67b'
  ),
  __wbg_dump_120f94a7c9b5685e: /* @__PURE__ */ __name(
    () => qe,
    '__wbg_dump_120f94a7c9b5685e'
  ),
  __wbg_enqueue_bb16ba72f537dc9e: /* @__PURE__ */ __name(
    () => Ae,
    '__wbg_enqueue_bb16ba72f537dc9e'
  ),
  __wbg_entries_2a52db465d0421fb: /* @__PURE__ */ __name(
    () => Me,
    '__wbg_entries_2a52db465d0421fb'
  ),
  __wbg_entries_3265d4158b33e5dc: /* @__PURE__ */ __name(
    () => ve,
    '__wbg_entries_3265d4158b33e5dc'
  ),
  __wbg_error_0554b4a81edb112e: /* @__PURE__ */ __name(
    () => Te,
    '__wbg_error_0554b4a81edb112e'
  ),
  __wbg_error_469aed1589cf24bd: /* @__PURE__ */ __name(
    () => Le,
    '__wbg_error_469aed1589cf24bd'
  ),
  __wbg_error_524f506f44df1645: /* @__PURE__ */ __name(
    () => Oe,
    '__wbg_error_524f506f44df1645'
  ),
  __wbg_error_7534b8e9a36f1ab4: /* @__PURE__ */ __name(
    () => Ce,
    '__wbg_error_7534b8e9a36f1ab4'
  ),
  __wbg_exec_4c97c334f93143bd: /* @__PURE__ */ __name(
    () => We,
    '__wbg_exec_4c97c334f93143bd'
  ),
  __wbg_exec_d23552dd0bb0bb3e: /* @__PURE__ */ __name(
    () => De,
    '__wbg_exec_d23552dd0bb0bb3e'
  ),
  __wbg_fetch_07cd86dd296a5a63: /* @__PURE__ */ __name(
    () => Ue,
    '__wbg_fetch_07cd86dd296a5a63'
  ),
  __wbg_fetch_2da419231079cfef: /* @__PURE__ */ __name(
    () => Be,
    '__wbg_fetch_2da419231079cfef'
  ),
  __wbg_fetch_2f14bc827d5ab632: /* @__PURE__ */ __name(
    () => Ne,
    '__wbg_fetch_2f14bc827d5ab632'
  ),
  __wbg_fetch_79398949f1862502: /* @__PURE__ */ __name(
    () => Pe,
    '__wbg_fetch_79398949f1862502'
  ),
  __wbg_fetch_99afe512e4ada8ac: /* @__PURE__ */ __name(
    () => Ve,
    '__wbg_fetch_99afe512e4ada8ac'
  ),
  __wbg_fetch_99bc5ac47abbc8e8: /* @__PURE__ */ __name(
    () => $e,
    '__wbg_fetch_99bc5ac47abbc8e8'
  ),
  __wbg_fetch_f7a75a7e295f4028: /* @__PURE__ */ __name(
    () => Je,
    '__wbg_fetch_f7a75a7e295f4028'
  ),
  __wbg_first_d0f4e5195279f73f: /* @__PURE__ */ __name(
    () => He,
    '__wbg_first_d0f4e5195279f73f'
  ),
  __wbg_formData_7aedb7bd836f6784: /* @__PURE__ */ __name(
    () => Ge,
    '__wbg_formData_7aedb7bd836f6784'
  ),
  __wbg_from_2a5d3e218e67aa85: /* @__PURE__ */ __name(
    () => Xe,
    '__wbg_from_2a5d3e218e67aa85'
  ),
  __wbg_getAll_c2b1d5aaeec30fd9: /* @__PURE__ */ __name(
    () => Ke,
    '__wbg_getAll_c2b1d5aaeec30fd9'
  ),
  __wbg_getRandomValues_38097e921c2494c3: /* @__PURE__ */ __name(
    () => Qe,
    '__wbg_getRandomValues_38097e921c2494c3'
  ),
  __wbg_getRandomValues_3c9c0d586e575a16: /* @__PURE__ */ __name(
    () => Ye,
    '__wbg_getRandomValues_3c9c0d586e575a16'
  ),
  __wbg_getReader_48e00749fe3f6089: /* @__PURE__ */ __name(
    () => Ze,
    '__wbg_getReader_48e00749fe3f6089'
  ),
  __wbg_getReader_be0d36e5873a525b: /* @__PURE__ */ __name(
    () => tr,
    '__wbg_getReader_be0d36e5873a525b'
  ),
  __wbg_getTime_46267b1c24877e30: /* @__PURE__ */ __name(
    () => er,
    '__wbg_getTime_46267b1c24877e30'
  ),
  __wbg_getWebSocketAutoResponse_d83d6a43a889ad46: /* @__PURE__ */ __name(
    () => rr,
    '__wbg_getWebSocketAutoResponse_d83d6a43a889ad46'
  ),
  __wbg_getWriter_6ce182d0adc3f96b: /* @__PURE__ */ __name(
    () => nr,
    '__wbg_getWriter_6ce182d0adc3f96b'
  ),
  __wbg_get_12ea76524b923a64: /* @__PURE__ */ __name(
    () => _r,
    '__wbg_get_12ea76524b923a64'
  ),
  __wbg_get_13495dac72693ecc: /* @__PURE__ */ __name(
    () => or,
    '__wbg_get_13495dac72693ecc'
  ),
  __wbg_get_67b2ba62fc30de12: /* @__PURE__ */ __name(
    () => cr,
    '__wbg_get_67b2ba62fc30de12'
  ),
  __wbg_get_85c3d71662a108c8: /* @__PURE__ */ __name(
    () => sr,
    '__wbg_get_85c3d71662a108c8'
  ),
  __wbg_get_9103d5f5975814c4: /* @__PURE__ */ __name(
    () => ur,
    '__wbg_get_9103d5f5975814c4'
  ),
  __wbg_get_92e348efaf63349e: /* @__PURE__ */ __name(
    () => ir,
    '__wbg_get_92e348efaf63349e'
  ),
  __wbg_get_9f4cbe1f49a7ad17: /* @__PURE__ */ __name(
    () => ar,
    '__wbg_get_9f4cbe1f49a7ad17'
  ),
  __wbg_get_a6a978bfc2b34135: /* @__PURE__ */ __name(
    () => fr,
    '__wbg_get_a6a978bfc2b34135'
  ),
  __wbg_get_b9b93047fe3cf45b: /* @__PURE__ */ __name(
    () => br,
    '__wbg_get_b9b93047fe3cf45b'
  ),
  __wbg_getdone_d47073731acd3e74: /* @__PURE__ */ __name(
    () => gr,
    '__wbg_getdone_d47073731acd3e74'
  ),
  __wbg_getvalue_009dcd63692bee1f: /* @__PURE__ */ __name(
    () => wr,
    '__wbg_getvalue_009dcd63692bee1f'
  ),
  __wbg_getwithrefkey_1dc361bd10053bfe: /* @__PURE__ */ __name(
    () => dr,
    '__wbg_getwithrefkey_1dc361bd10053bfe'
  ),
  __wbg_has_5d847d18e68af525: /* @__PURE__ */ __name(
    () => lr,
    '__wbg_has_5d847d18e68af525'
  ),
  __wbg_headers_7852a8ea641c1379: /* @__PURE__ */ __name(
    () => pr,
    '__wbg_headers_7852a8ea641c1379'
  ),
  __wbg_headers_9cb51cfd2ac780a4: /* @__PURE__ */ __name(
    () => xr,
    '__wbg_headers_9cb51cfd2ac780a4'
  ),
  __wbg_httpMetadata_bd34ae411065b407: /* @__PURE__ */ __name(
    () => mr,
    '__wbg_httpMetadata_bd34ae411065b407'
  ),
  __wbg_idFromName_4374477da06d944f: /* @__PURE__ */ __name(
    () => hr,
    '__wbg_idFromName_4374477da06d944f'
  ),
  __wbg_id_547e549b2409b467: /* @__PURE__ */ __name(
    () => yr,
    '__wbg_id_547e549b2409b467'
  ),
  __wbg_id_617f06db9ba6d82f: /* @__PURE__ */ __name(
    () => Sr,
    '__wbg_id_617f06db9ba6d82f'
  ),
  __wbg_instanceof_ArrayBuffer_e14585432e3737fc: /* @__PURE__ */ __name(
    () => kr,
    '__wbg_instanceof_ArrayBuffer_e14585432e3737fc'
  ),
  __wbg_instanceof_Error_4d54113b22d20306: /* @__PURE__ */ __name(
    () => Rr,
    '__wbg_instanceof_Error_4d54113b22d20306'
  ),
  __wbg_instanceof_File_a4e2256bf71955a9: /* @__PURE__ */ __name(
    () => Fr,
    '__wbg_instanceof_File_a4e2256bf71955a9'
  ),
  __wbg_instanceof_Map_f3469ce2244d2430: /* @__PURE__ */ __name(
    () => Ir,
    '__wbg_instanceof_Map_f3469ce2244d2430'
  ),
  __wbg_instanceof_Object_7f2dcef8f78644a4: /* @__PURE__ */ __name(
    () => jr,
    '__wbg_instanceof_Object_7f2dcef8f78644a4'
  ),
  __wbg_instanceof_ReadableStreamDefaultReader_056dcea99b3557aa:
    /* @__PURE__ */ __name(
      () => zr,
      '__wbg_instanceof_ReadableStreamDefaultReader_056dcea99b3557aa'
    ),
  __wbg_instanceof_ReadableStream_87eac785b90f3611: /* @__PURE__ */ __name(
    () => Er,
    '__wbg_instanceof_ReadableStream_87eac785b90f3611'
  ),
  __wbg_instanceof_Response_f2cc20d9f7dfd644: /* @__PURE__ */ __name(
    () => qr,
    '__wbg_instanceof_Response_f2cc20d9f7dfd644'
  ),
  __wbg_instanceof_Uint8Array_17156bcf118086a9: /* @__PURE__ */ __name(
    () => Ar,
    '__wbg_instanceof_Uint8Array_17156bcf118086a9'
  ),
  __wbg_isArray_a1eab7e0d067391b: /* @__PURE__ */ __name(
    () => Mr,
    '__wbg_isArray_a1eab7e0d067391b'
  ),
  __wbg_isSafeInteger_343e2beeeece1bb0: /* @__PURE__ */ __name(
    () => vr,
    '__wbg_isSafeInteger_343e2beeeece1bb0'
  ),
  __wbg_iterator_9a24c88df860dc65: /* @__PURE__ */ __name(
    () => Tr,
    '__wbg_iterator_9a24c88df860dc65'
  ),
  __wbg_json_a00f187c0be01957: /* @__PURE__ */ __name(
    () => Lr,
    '__wbg_json_a00f187c0be01957'
  ),
  __wbg_keys_4e7df9a04572b339: /* @__PURE__ */ __name(
    () => Or,
    '__wbg_keys_4e7df9a04572b339'
  ),
  __wbg_keys_5c77a08ddc2fb8a6: /* @__PURE__ */ __name(
    () => Cr,
    '__wbg_keys_5c77a08ddc2fb8a6'
  ),
  __wbg_latitude_b5e5a29ea0874f6f: /* @__PURE__ */ __name(
    () => Wr,
    '__wbg_latitude_b5e5a29ea0874f6f'
  ),
  __wbg_length_a446193dc22c12f8: /* @__PURE__ */ __name(
    () => Dr,
    '__wbg_length_a446193dc22c12f8'
  ),
  __wbg_length_e2d2a49132c1b256: /* @__PURE__ */ __name(
    () => Ur,
    '__wbg_length_e2d2a49132c1b256'
  ),
  __wbg_list_1fa5acdf4ea613b7: /* @__PURE__ */ __name(
    () => Br,
    '__wbg_list_1fa5acdf4ea613b7'
  ),
  __wbg_list_b707f573d84a22b2: /* @__PURE__ */ __name(
    () => Nr,
    '__wbg_list_b707f573d84a22b2'
  ),
  __wbg_log_c222819a41e063d3: /* @__PURE__ */ __name(
    () => Pr,
    '__wbg_log_c222819a41e063d3'
  ),
  __wbg_longitude_a73f404bbb9c3a7f: /* @__PURE__ */ __name(
    () => Vr,
    '__wbg_longitude_a73f404bbb9c3a7f'
  ),
  __wbg_match_487efc50ade117f6: /* @__PURE__ */ __name(
    () => $r,
    '__wbg_match_487efc50ade117f6'
  ),
  __wbg_match_d248198bd9f58be9: /* @__PURE__ */ __name(
    () => Jr,
    '__wbg_match_d248198bd9f58be9'
  ),
  __wbg_message_97a2af9b89d693a3: /* @__PURE__ */ __name(
    () => Hr,
    '__wbg_message_97a2af9b89d693a3'
  ),
  __wbg_messages_fa8f7b695962ae86: /* @__PURE__ */ __name(
    () => Gr,
    '__wbg_messages_fa8f7b695962ae86'
  ),
  __wbg_method_3dcc854b644c5a56: /* @__PURE__ */ __name(
    () => Xr,
    '__wbg_method_3dcc854b644c5a56'
  ),
  __wbg_minifyconfig_new: /* @__PURE__ */ __name(
    () => Kr,
    '__wbg_minifyconfig_new'
  ),
  __wbg_name_16617c8e9d4188ac: /* @__PURE__ */ __name(
    () => Qr,
    '__wbg_name_16617c8e9d4188ac'
  ),
  __wbg_name_28c43f147574bf08: /* @__PURE__ */ __name(
    () => Yr,
    '__wbg_name_28c43f147574bf08'
  ),
  __wbg_name_45da8c15af59f19e: /* @__PURE__ */ __name(
    () => Zr,
    '__wbg_name_45da8c15af59f19e'
  ),
  __wbg_new0_f788a2397c7ca929: /* @__PURE__ */ __name(
    () => tn,
    '__wbg_new0_f788a2397c7ca929'
  ),
  __wbg_newUniqueId_984eae411a14eed6: /* @__PURE__ */ __name(
    () => en,
    '__wbg_newUniqueId_984eae411a14eed6'
  ),
  __wbg_new_018dcc2d6c8c2f6a: /* @__PURE__ */ __name(
    () => rn,
    '__wbg_new_018dcc2d6c8c2f6a'
  ),
  __wbg_new_23a2665fac83c611: /* @__PURE__ */ __name(
    () => nn,
    '__wbg_new_23a2665fac83c611'
  ),
  __wbg_new_31a97dac4f10fab7: /* @__PURE__ */ __name(
    () => _n,
    '__wbg_new_31a97dac4f10fab7'
  ),
  __wbg_new_405e22f390576ce2: /* @__PURE__ */ __name(
    () => on,
    '__wbg_new_405e22f390576ce2'
  ),
  __wbg_new_4962d1c4b3bb125c: /* @__PURE__ */ __name(
    () => cn,
    '__wbg_new_4962d1c4b3bb125c'
  ),
  __wbg_new_5e0be73521bc8c17: /* @__PURE__ */ __name(
    () => sn,
    '__wbg_new_5e0be73521bc8c17'
  ),
  __wbg_new_78feb108b6472713: /* @__PURE__ */ __name(
    () => un,
    '__wbg_new_78feb108b6472713'
  ),
  __wbg_new_795a73e1af166114: /* @__PURE__ */ __name(
    () => an,
    '__wbg_new_795a73e1af166114'
  ),
  __wbg_new_8a6f238a6ece86ea: /* @__PURE__ */ __name(
    () => fn,
    '__wbg_new_8a6f238a6ece86ea'
  ),
  __wbg_new_a12002a7f91c75be: /* @__PURE__ */ __name(
    () => bn,
    '__wbg_new_a12002a7f91c75be'
  ),
  __wbg_new_c68d7209be747379: /* @__PURE__ */ __name(
    () => gn,
    '__wbg_new_c68d7209be747379'
  ),
  __wbg_new_d2a283e31ff39bb0: /* @__PURE__ */ __name(
    () => wn,
    '__wbg_new_d2a283e31ff39bb0'
  ),
  __wbg_new_e25e5aab09ff45db: /* @__PURE__ */ __name(
    () => dn,
    '__wbg_new_e25e5aab09ff45db'
  ),
  __wbg_newbigint_10c374fd164fe4ab: /* @__PURE__ */ __name(
    () => ln,
    '__wbg_newbigint_10c374fd164fe4ab'
  ),
  __wbg_newnoargs_105ed471475aaf50: /* @__PURE__ */ __name(
    () => pn,
    '__wbg_newnoargs_105ed471475aaf50'
  ),
  __wbg_newwithbyteoffsetandlength_d97e637ebe145a9a: /* @__PURE__ */ __name(
    () => xn,
    '__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a'
  ),
  __wbg_newwithheaders_77fd1e80b866c52e: /* @__PURE__ */ __name(
    () => mn,
    '__wbg_newwithheaders_77fd1e80b866c52e'
  ),
  __wbg_newwithintounderlyingsource_b47f6a6a596a7f24: /* @__PURE__ */ __name(
    () => hn,
    '__wbg_newwithintounderlyingsource_b47f6a6a596a7f24'
  ),
  __wbg_newwithlength_a381634e90c276d4: /* @__PURE__ */ __name(
    () => yn,
    '__wbg_newwithlength_a381634e90c276d4'
  ),
  __wbg_newwithoptbuffersourceandinit_fb8ed95e326eb3a1: /* @__PURE__ */ __name(
    () => Sn,
    '__wbg_newwithoptbuffersourceandinit_fb8ed95e326eb3a1'
  ),
  __wbg_newwithoptreadablestreamandinit_e7fabd7063fd0b3e:
    /* @__PURE__ */ __name(
      () => kn,
      '__wbg_newwithoptreadablestreamandinit_e7fabd7063fd0b3e'
    ),
  __wbg_newwithoptstrandinit_615a266ef226c260: /* @__PURE__ */ __name(
    () => Rn,
    '__wbg_newwithoptstrandinit_615a266ef226c260'
  ),
  __wbg_newwithstrandinit_06c535e0a867c635: /* @__PURE__ */ __name(
    () => Fn,
    '__wbg_newwithstrandinit_06c535e0a867c635'
  ),
  __wbg_next_25feadfc0913fea9: /* @__PURE__ */ __name(
    () => In,
    '__wbg_next_25feadfc0913fea9'
  ),
  __wbg_next_4c79a94b6222a9f8: /* @__PURE__ */ __name(
    () => jn,
    '__wbg_next_4c79a94b6222a9f8'
  ),
  __wbg_next_6574e1a8a62d1055: /* @__PURE__ */ __name(
    () => zn,
    '__wbg_next_6574e1a8a62d1055'
  ),
  __wbg_objects_e2c175fa170b0cb2: /* @__PURE__ */ __name(
    () => En,
    '__wbg_objects_e2c175fa170b0cb2'
  ),
  __wbg_opened_1166b0cab72ac0cf: /* @__PURE__ */ __name(
    () => qn,
    '__wbg_opened_1166b0cab72ac0cf'
  ),
  __wbg_pipeTo_b76c076e3742cf0e: /* @__PURE__ */ __name(
    () => An,
    '__wbg_pipeTo_b76c076e3742cf0e'
  ),
  __wbg_prepare_fb717c93715b0944: /* @__PURE__ */ __name(
    () => Mn,
    '__wbg_prepare_fb717c93715b0944'
  ),
  __wbg_push_737cfc8c1432c2c6: /* @__PURE__ */ __name(
    () => vn,
    '__wbg_push_737cfc8c1432c2c6'
  ),
  __wbg_put_73aa2591ef745a67: /* @__PURE__ */ __name(
    () => Tn,
    '__wbg_put_73aa2591ef745a67'
  ),
  __wbg_put_75886410036f9ae5: /* @__PURE__ */ __name(
    () => Ln,
    '__wbg_put_75886410036f9ae5'
  ),
  __wbg_put_84c8baf384339073: /* @__PURE__ */ __name(
    () => On,
    '__wbg_put_84c8baf384339073'
  ),
  __wbg_put_9d65a8ef54324b03: /* @__PURE__ */ __name(
    () => Cn,
    '__wbg_put_9d65a8ef54324b03'
  ),
  __wbg_put_c559e3676c760729: /* @__PURE__ */ __name(
    () => Wn,
    '__wbg_put_c559e3676c760729'
  ),
  __wbg_queueMicrotask_97d92b4fcc8a61c5: /* @__PURE__ */ __name(
    () => Dn,
    '__wbg_queueMicrotask_97d92b4fcc8a61c5'
  ),
  __wbg_queueMicrotask_d3219def82552485: /* @__PURE__ */ __name(
    () => Un,
    '__wbg_queueMicrotask_d3219def82552485'
  ),
  __wbg_raw_1778ea87943f3dbb: /* @__PURE__ */ __name(
    () => Bn,
    '__wbg_raw_1778ea87943f3dbb'
  ),
  __wbg_raw_78be088f4fcc909f: /* @__PURE__ */ __name(
    () => Nn,
    '__wbg_raw_78be088f4fcc909f'
  ),
  __wbg_read_a2434af1186cb56c: /* @__PURE__ */ __name(
    () => Pn,
    '__wbg_read_a2434af1186cb56c'
  ),
  __wbg_readable_10ff8642138544c3: /* @__PURE__ */ __name(
    () => Vn,
    '__wbg_readable_10ff8642138544c3'
  ),
  __wbg_readable_34c8b81a53682e9b: /* @__PURE__ */ __name(
    () => $n,
    '__wbg_readable_34c8b81a53682e9b'
  ),
  __wbg_redirect_2b22100df3618cb1: /* @__PURE__ */ __name(
    () => Jn,
    '__wbg_redirect_2b22100df3618cb1'
  ),
  __wbg_redirect_a642142835c6b919: /* @__PURE__ */ __name(
    () => Hn,
    '__wbg_redirect_a642142835c6b919'
  ),
  __wbg_region_b277fa8eeea431fa: /* @__PURE__ */ __name(
    () => Gn,
    '__wbg_region_b277fa8eeea431fa'
  ),
  __wbg_releaseLock_091899af97991d2e: /* @__PURE__ */ __name(
    () => Xn,
    '__wbg_releaseLock_091899af97991d2e'
  ),
  __wbg_releaseLock_a389e6ea62ce0f4d: /* @__PURE__ */ __name(
    () => Kn,
    '__wbg_releaseLock_a389e6ea62ce0f4d'
  ),
  __wbg_removeEventListener_056dfe8c3d6c58f9: /* @__PURE__ */ __name(
    () => Qn,
    '__wbg_removeEventListener_056dfe8c3d6c58f9'
  ),
  __wbg_request_e42dc8a392041d58: /* @__PURE__ */ __name(
    () => Yn,
    '__wbg_request_e42dc8a392041d58'
  ),
  __wbg_resolve_4851785c9c5f573d: /* @__PURE__ */ __name(
    () => Zn,
    '__wbg_resolve_4851785c9c5f573d'
  ),
  __wbg_respond_1f279fa9f8edcb1c: /* @__PURE__ */ __name(
    () => t_,
    '__wbg_respond_1f279fa9f8edcb1c'
  ),
  __wbg_response_537ed42701db0cd4: /* @__PURE__ */ __name(
    () => e_,
    '__wbg_response_537ed42701db0cd4'
  ),
  __wbg_results_d272a847e8175af7: /* @__PURE__ */ __name(
    () => r_,
    '__wbg_results_d272a847e8175af7'
  ),
  __wbg_run_88b3b84fc0c7a21a: /* @__PURE__ */ __name(
    () => n_,
    '__wbg_run_88b3b84fc0c7a21a'
  ),
  __wbg_sendBatch_1ea3acfcb29166fe: /* @__PURE__ */ __name(
    () => __,
    '__wbg_sendBatch_1ea3acfcb29166fe'
  ),
  __wbg_send_0293179ba074ffb4: /* @__PURE__ */ __name(
    () => o_,
    '__wbg_send_0293179ba074ffb4'
  ),
  __wbg_send_55b5805d01d28f34: /* @__PURE__ */ __name(
    () => c_,
    '__wbg_send_55b5805d01d28f34'
  ),
  __wbg_serializeAttachment_c5b130b57cce44c3: /* @__PURE__ */ __name(
    () => s_,
    '__wbg_serializeAttachment_c5b130b57cce44c3'
  ),
  __wbg_setAlarm_f14d42ac6616407d: /* @__PURE__ */ __name(
    () => u_,
    '__wbg_setAlarm_f14d42ac6616407d'
  ),
  __wbg_setTimeout_b4ee584b3f982e97: /* @__PURE__ */ __name(
    () => i_,
    '__wbg_setTimeout_b4ee584b3f982e97'
  ),
  __wbg_setWebSocketAutoResponse_755f888689636f02: /* @__PURE__ */ __name(
    () => a_,
    '__wbg_setWebSocketAutoResponse_755f888689636f02'
  ),
  __wbg_set_11cd83f45504cedf: /* @__PURE__ */ __name(
    () => f_,
    '__wbg_set_11cd83f45504cedf'
  ),
  __wbg_set_37837023f3d740e8: /* @__PURE__ */ __name(
    () => b_,
    '__wbg_set_37837023f3d740e8'
  ),
  __wbg_set_3f1d0b984ed272ed: /* @__PURE__ */ __name(
    () => g_,
    '__wbg_set_3f1d0b984ed272ed'
  ),
  __wbg_set_65595bdd868b3009: /* @__PURE__ */ __name(
    () => w_,
    '__wbg_set_65595bdd868b3009'
  ),
  __wbg_set_8fc6bf8a5b1071d1: /* @__PURE__ */ __name(
    () => d_,
    '__wbg_set_8fc6bf8a5b1071d1'
  ),
  __wbg_set_bb8cecf6a62b9f46: /* @__PURE__ */ __name(
    () => l_,
    '__wbg_set_bb8cecf6a62b9f46'
  ),
  __wbg_set_wasm: /* @__PURE__ */ __name(() => C, '__wbg_set_wasm'),
  __wbg_setbody_5923b78a95eedf29: /* @__PURE__ */ __name(
    () => p_,
    '__wbg_setbody_5923b78a95eedf29'
  ),
  __wbg_setheaders_3b47c898e8de6d44: /* @__PURE__ */ __name(
    () => x_,
    '__wbg_setheaders_3b47c898e8de6d44'
  ),
  __wbg_setheaders_834c0bdb6a8949ad: /* @__PURE__ */ __name(
    () => m_,
    '__wbg_setheaders_834c0bdb6a8949ad'
  ),
  __wbg_sethighwatermark_793c99c89830c8e9: /* @__PURE__ */ __name(
    () => h_,
    '__wbg_sethighwatermark_793c99c89830c8e9'
  ),
  __wbg_setignoremethod_771e0e5e0ead154d: /* @__PURE__ */ __name(
    () => y_,
    '__wbg_setignoremethod_771e0e5e0ead154d'
  ),
  __wbg_setmethod_3c5280fe5d890842: /* @__PURE__ */ __name(
    () => S_,
    '__wbg_setmethod_3c5280fe5d890842'
  ),
  __wbg_setredirect_40e6a7f717a2f86a: /* @__PURE__ */ __name(
    () => k_,
    '__wbg_setredirect_40e6a7f717a2f86a'
  ),
  __wbg_setsignal_75b21ef3a81de905: /* @__PURE__ */ __name(
    () => R_,
    '__wbg_setsignal_75b21ef3a81de905'
  ),
  __wbg_setstatus_51b4fc011091cbb3: /* @__PURE__ */ __name(
    () => F_,
    '__wbg_setstatus_51b4fc011091cbb3'
  ),
  __wbg_signal_aaf9ad74119f20a4: /* @__PURE__ */ __name(
    () => I_,
    '__wbg_signal_aaf9ad74119f20a4'
  ),
  __wbg_sql_76d751e758a53004: /* @__PURE__ */ __name(
    () => j_,
    '__wbg_sql_76d751e758a53004'
  ),
  __wbg_stack_0ed75d68575b0f3c: /* @__PURE__ */ __name(
    () => z_,
    '__wbg_stack_0ed75d68575b0f3c'
  ),
  __wbg_static_accessor_GLOBAL_88a902d13a557d07: /* @__PURE__ */ __name(
    () => E_,
    '__wbg_static_accessor_GLOBAL_88a902d13a557d07'
  ),
  __wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0: /* @__PURE__ */ __name(
    () => q_,
    '__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0'
  ),
  __wbg_static_accessor_SELF_37c5d418e4bf5819: /* @__PURE__ */ __name(
    () => A_,
    '__wbg_static_accessor_SELF_37c5d418e4bf5819'
  ),
  __wbg_static_accessor_WINDOW_5de37043a91a9c40: /* @__PURE__ */ __name(
    () => M_,
    '__wbg_static_accessor_WINDOW_5de37043a91a9c40'
  ),
  __wbg_status_f6360336ca686bf0: /* @__PURE__ */ __name(
    () => v_,
    '__wbg_status_f6360336ca686bf0'
  ),
  __wbg_storage_684e518f992d6055: /* @__PURE__ */ __name(
    () => T_,
    '__wbg_storage_684e518f992d6055'
  ),
  __wbg_stringify_f7ed6987935b4a24: /* @__PURE__ */ __name(
    () => L_,
    '__wbg_stringify_f7ed6987935b4a24'
  ),
  __wbg_success_889d00ba25cc3697: /* @__PURE__ */ __name(
    () => O_,
    '__wbg_success_889d00ba25cc3697'
  ),
  __wbg_text_f0840e8edc374fa1: /* @__PURE__ */ __name(
    () => C_,
    '__wbg_text_f0840e8edc374fa1'
  ),
  __wbg_then_44b73946d2fb3e7d: /* @__PURE__ */ __name(
    () => W_,
    '__wbg_then_44b73946d2fb3e7d'
  ),
  __wbg_then_48b406749878a531: /* @__PURE__ */ __name(
    () => D_,
    '__wbg_then_48b406749878a531'
  ),
  __wbg_timestamp_2084946ca16ec748: /* @__PURE__ */ __name(
    () => U_,
    '__wbg_timestamp_2084946ca16ec748'
  ),
  __wbg_toArray_f5de648bc97caaa9: /* @__PURE__ */ __name(
    () => B_,
    '__wbg_toArray_f5de648bc97caaa9'
  ),
  __wbg_toString_c2706c99b8d0dfdc: /* @__PURE__ */ __name(
    () => N_,
    '__wbg_toString_c2706c99b8d0dfdc'
  ),
  __wbg_toString_c813bbd34d063839: /* @__PURE__ */ __name(
    () => P_,
    '__wbg_toString_c813bbd34d063839'
  ),
  __wbg_toString_c9b649be8d242a59: /* @__PURE__ */ __name(
    () => V_,
    '__wbg_toString_c9b649be8d242a59'
  ),
  __wbg_truncated_a70ba0aab54f4638: /* @__PURE__ */ __name(
    () => $_,
    '__wbg_truncated_a70ba0aab54f4638'
  ),
  __wbg_uploadPart_12b3d3c9b724c006: /* @__PURE__ */ __name(
    () => J_,
    '__wbg_uploadPart_12b3d3c9b724c006'
  ),
  __wbg_url_8f9653b899456042: /* @__PURE__ */ __name(
    () => H_,
    '__wbg_url_8f9653b899456042'
  ),
  __wbg_value_cd1ffa7b1ab794f1: /* @__PURE__ */ __name(
    () => G_,
    '__wbg_value_cd1ffa7b1ab794f1'
  ),
  __wbg_view_fd8a56e8983f448d: /* @__PURE__ */ __name(
    () => X_,
    '__wbg_view_fd8a56e8983f448d'
  ),
  __wbg_webSocket_f2b16e8c6b3f36fe: /* @__PURE__ */ __name(
    () => K_,
    '__wbg_webSocket_f2b16e8c6b3f36fe'
  ),
  __wbg_writable_5e99953409b5a08a: /* @__PURE__ */ __name(
    () => Q_,
    '__wbg_writable_5e99953409b5a08a'
  ),
  __wbg_writable_f44b088134084930: /* @__PURE__ */ __name(
    () => Y_,
    '__wbg_writable_f44b088134084930'
  ),
  __wbg_writeDataPoint_4a32c93ae3223edf: /* @__PURE__ */ __name(
    () => Z_,
    '__wbg_writeDataPoint_4a32c93ae3223edf'
  ),
  __wbg_write_311434e30ee214e5: /* @__PURE__ */ __name(
    () => to,
    '__wbg_write_311434e30ee214e5'
  ),
  __wbindgen_as_number: /* @__PURE__ */ __name(
    () => eo,
    '__wbindgen_as_number'
  ),
  __wbindgen_bigint_from_i64: /* @__PURE__ */ __name(
    () => ro,
    '__wbindgen_bigint_from_i64'
  ),
  __wbindgen_bigint_from_u64: /* @__PURE__ */ __name(
    () => no,
    '__wbindgen_bigint_from_u64'
  ),
  __wbindgen_bigint_get_as_i64: /* @__PURE__ */ __name(
    () => _o,
    '__wbindgen_bigint_get_as_i64'
  ),
  __wbindgen_boolean_get: /* @__PURE__ */ __name(
    () => oo,
    '__wbindgen_boolean_get'
  ),
  __wbindgen_cb_drop: /* @__PURE__ */ __name(() => co, '__wbindgen_cb_drop'),
  __wbindgen_closure_wrapper4877: /* @__PURE__ */ __name(
    () => so,
    '__wbindgen_closure_wrapper4877'
  ),
  __wbindgen_closure_wrapper4879: /* @__PURE__ */ __name(
    () => uo,
    '__wbindgen_closure_wrapper4879'
  ),
  __wbindgen_closure_wrapper4881: /* @__PURE__ */ __name(
    () => io,
    '__wbindgen_closure_wrapper4881'
  ),
  __wbindgen_closure_wrapper4883: /* @__PURE__ */ __name(
    () => ao,
    '__wbindgen_closure_wrapper4883'
  ),
  __wbindgen_closure_wrapper6767: /* @__PURE__ */ __name(
    () => fo,
    '__wbindgen_closure_wrapper6767'
  ),
  __wbindgen_debug_string: /* @__PURE__ */ __name(
    () => bo,
    '__wbindgen_debug_string'
  ),
  __wbindgen_error_new: /* @__PURE__ */ __name(
    () => go,
    '__wbindgen_error_new'
  ),
  __wbindgen_in: /* @__PURE__ */ __name(() => wo, '__wbindgen_in'),
  __wbindgen_init_externref_table: /* @__PURE__ */ __name(
    () => lo,
    '__wbindgen_init_externref_table'
  ),
  __wbindgen_is_bigint: /* @__PURE__ */ __name(
    () => po,
    '__wbindgen_is_bigint'
  ),
  __wbindgen_is_falsy: /* @__PURE__ */ __name(() => xo, '__wbindgen_is_falsy'),
  __wbindgen_is_function: /* @__PURE__ */ __name(
    () => mo,
    '__wbindgen_is_function'
  ),
  __wbindgen_is_null: /* @__PURE__ */ __name(() => ho, '__wbindgen_is_null'),
  __wbindgen_is_object: /* @__PURE__ */ __name(
    () => yo,
    '__wbindgen_is_object'
  ),
  __wbindgen_is_string: /* @__PURE__ */ __name(
    () => So,
    '__wbindgen_is_string'
  ),
  __wbindgen_is_undefined: /* @__PURE__ */ __name(
    () => ko,
    '__wbindgen_is_undefined'
  ),
  __wbindgen_jsval_eq: /* @__PURE__ */ __name(() => Ro, '__wbindgen_jsval_eq'),
  __wbindgen_jsval_loose_eq: /* @__PURE__ */ __name(
    () => Fo,
    '__wbindgen_jsval_loose_eq'
  ),
  __wbindgen_memory: /* @__PURE__ */ __name(() => Io, '__wbindgen_memory'),
  __wbindgen_number_get: /* @__PURE__ */ __name(
    () => jo,
    '__wbindgen_number_get'
  ),
  __wbindgen_number_new: /* @__PURE__ */ __name(
    () => zo,
    '__wbindgen_number_new'
  ),
  __wbindgen_string_get: /* @__PURE__ */ __name(
    () => Eo,
    '__wbindgen_string_get'
  ),
  __wbindgen_string_new: /* @__PURE__ */ __name(
    () => qo,
    '__wbindgen_string_new'
  ),
  __wbindgen_throw: /* @__PURE__ */ __name(() => Ao, '__wbindgen_throw'),
  fetch: /* @__PURE__ */ __name(() => U, 'fetch'),
  queue: /* @__PURE__ */ __name(() => D, 'queue'),
  start: /* @__PURE__ */ __name(() => ut, 'start'),
});
var _;
function C(t) {
  _ = t;
}
__name(C, 'C');
var b = 0;
var k = null;
function h() {
  return (
    (k === null || k.byteLength === 0) && (k = new Uint8Array(_.memory.buffer)),
    k
  );
}
__name(h, 'h');
var _t =
  typeof TextEncoder > 'u'
    ? (0, module.require)('util').TextEncoder
    : TextEncoder;
var R = new _t('utf-8');
var ot =
  typeof R.encodeInto == 'function'
    ? function (t, e) {
        return R.encodeInto(t, e);
      }
    : function (t, e) {
        let r = R.encode(t);
        return (e.set(r), { read: t.length, written: r.length });
      };
function g(t, e, r) {
  if (r === void 0) {
    let w = R.encode(t),
      S = e(w.length, 1) >>> 0;
    return (
      h()
        .subarray(S, S + w.length)
        .set(w),
      (b = w.length),
      S
    );
  }
  let n = t.length,
    o = e(n, 1) >>> 0,
    i = h(),
    a = 0;
  for (; a < n; a++) {
    let w = t.charCodeAt(a);
    if (w > 127) break;
    i[o + a] = w;
  }
  if (a !== n) {
    (a !== 0 && (t = t.slice(a)),
      (o = r(o, n, (n = a + t.length * 3), 1) >>> 0));
    let w = h().subarray(o + a, o + n);
    ((a += ot(t, w).written), (o = r(o, n, a, 1) >>> 0));
  }
  return ((b = a), o);
}
__name(g, 'g');
var p = null;
function s() {
  return (
    (p === null ||
      p.buffer.detached === true ||
      (p.buffer.detached === void 0 && p.buffer !== _.memory.buffer)) &&
      (p = new DataView(_.memory.buffer)),
    p
  );
}
__name(s, 's');
function d(t) {
  let e = _.__externref_table_alloc();
  return (_.__wbindgen_export_4.set(e, t), e);
}
__name(d, 'd');
function c(t, e) {
  try {
    return t.apply(this, e);
  } catch (r) {
    let n = d(r);
    _.__wbindgen_exn_store(n);
  }
}
__name(c, 'c');
var ct =
  typeof TextDecoder > 'u'
    ? (0, module.require)('util').TextDecoder
    : TextDecoder;
var Y = new ct('utf-8', { ignoreBOM: true, fatal: true });
Y.decode();
function u(t, e) {
  return ((t = t >>> 0), Y.decode(h().subarray(t, t + e)));
}
__name(u, 'u');
function f(t) {
  return t == null;
}
__name(f, 'f');
function W(t, e) {
  t = t >>> 0;
  let r = s(),
    n = [];
  for (let o = t; o < t + 4 * e; o += 4)
    n.push(_.__wbindgen_export_4.get(r.getUint32(o, true)));
  return (_.__externref_drop_slice(t, e), n);
}
__name(W, 'W');
function Z(t, e) {
  return ((t = t >>> 0), h().subarray(t / 1, t / 1 + e));
}
__name(Z, 'Z');
function st(t, e) {
  let r = e(t.length * 4, 4) >>> 0;
  for (let n = 0; n < t.length; n++) {
    let o = d(t[n]);
    s().setUint32(r + 4 * n, o, true);
  }
  return ((b = t.length), r);
}
__name(st, 'st');
var N =
  typeof FinalizationRegistry > 'u'
    ? {
        register: /* @__PURE__ */ __name(() => {}, 'register'),
        unregister: /* @__PURE__ */ __name(() => {}, 'unregister'),
      }
    : new FinalizationRegistry((t) => {
        _.__wbindgen_export_7.get(t.dtor)(t.a, t.b);
      });
function y(t, e, r, n) {
  let o = { a: t, b: e, cnt: 1, dtor: r },
    i = /* @__PURE__ */ __name((...a) => {
      o.cnt++;
      let w = o.a;
      o.a = 0;
      try {
        return n(w, o.b, ...a);
      } finally {
        --o.cnt === 0
          ? (_.__wbindgen_export_7.get(o.dtor)(w, o.b), N.unregister(o))
          : (o.a = w);
      }
    }, 'i');
  return ((i.original = o), N.register(i, o, o), i);
}
__name(y, 'y');
function I(t) {
  let e = typeof t;
  if (e == 'number' || e == 'boolean' || t == null) return `${t}`;
  if (e == 'string') return `"${t}"`;
  if (e == 'symbol') {
    let o = t.description;
    return o == null ? 'Symbol' : `Symbol(${o})`;
  }
  if (e == 'function') {
    let o = t.name;
    return typeof o == 'string' && o.length > 0 ? `Function(${o})` : 'Function';
  }
  if (Array.isArray(t)) {
    let o = t.length,
      i = '[';
    o > 0 && (i += I(t[0]));
    for (let a = 1; a < o; a++) i += ', ' + I(t[a]);
    return ((i += ']'), i);
  }
  let r = /\[object ([^\]]+)\]/.exec(toString.call(t)),
    n;
  if (r && r.length > 1) n = r[1];
  else return toString.call(t);
  if (n == 'Object')
    try {
      return 'Object(' + JSON.stringify(t) + ')';
    } catch {
      return 'Object';
    }
  return t instanceof Error
    ? `${t.name}: ${t.message}
${t.stack}`
    : n;
}
__name(I, 'I');
function D(t, e, r) {
  return _.queue(t, e, r);
}
__name(D, 'D');
function ut() {
  _.start();
}
__name(ut, 'ut');
function U(t, e, r) {
  return _.fetch(t, e, r);
}
__name(U, 'U');
function B(t, e, r) {
  _.closure1230_externref_shim(t, e, r);
}
__name(B, 'B');
function it(t, e) {
  _._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h7818714838249982(
    t,
    e
  );
}
__name(it, 'it');
function at(t, e, r) {
  _.closure1386_externref_shim(t, e, r);
}
__name(at, 'at');
function ft(t, e, r, n) {
  _.closure1416_externref_shim(t, e, r, n);
}
__name(ft, 'ft');
var bt = Object.freeze({
  Off: 0,
  0: 'Off',
  Lossy: 1,
  1: 'Lossy',
  Lossless: 2,
  2: 'Lossless',
});
var gt = Object.freeze({
  Error: 0,
  0: 'Error',
  Follow: 1,
  1: 'Follow',
  Manual: 2,
  2: 'Manual',
});
var wt = ['bytes'];
var dt = ['follow', 'error', 'manual'];
var P =
  typeof FinalizationRegistry > 'u'
    ? {
        register: /* @__PURE__ */ __name(() => {}, 'register'),
        unregister: /* @__PURE__ */ __name(() => {}, 'unregister'),
      }
    : new FinalizationRegistry((t) => _.__wbg_alarmobject_free(t >>> 0, 1));
var j = class {
  static {
    __name(this, 'j');
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return ((this.__wbg_ptr = 0), P.unregister(this), e);
  }
  free() {
    let e = this.__destroy_into_raw();
    _.__wbg_alarmobject_free(e, 0);
  }
  webSocketError(e, r) {
    return _.alarmobject_webSocketError(this.__wbg_ptr, e, r);
  }
  webSocketClose(e, r, n, o) {
    let i = g(n, _.__wbindgen_malloc, _.__wbindgen_realloc),
      a = b;
    return _.alarmobject_webSocketClose(this.__wbg_ptr, e, r, i, a, o);
  }
  webSocketMessage(e, r) {
    return _.alarmobject_webSocketMessage(this.__wbg_ptr, e, r);
  }
  alarm() {
    return _.alarmobject_alarm(this.__wbg_ptr);
  }
  fetch(e) {
    return _.alarmobject_fetch(this.__wbg_ptr, e);
  }
  constructor(e, r) {
    let n = _.alarmobject_new(e, r);
    return (
      (this.__wbg_ptr = n >>> 0),
      P.register(this, this.__wbg_ptr, this),
      this
    );
  }
};
var V =
  typeof FinalizationRegistry > 'u'
    ? {
        register: /* @__PURE__ */ __name(() => {}, 'register'),
        unregister: /* @__PURE__ */ __name(() => {}, 'unregister'),
      }
    : new FinalizationRegistry((t) =>
        _.__wbg_autoresponseobject_free(t >>> 0, 1)
      );
var z = class {
  static {
    __name(this, 'z');
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return ((this.__wbg_ptr = 0), V.unregister(this), e);
  }
  free() {
    let e = this.__destroy_into_raw();
    _.__wbg_autoresponseobject_free(e, 0);
  }
  webSocketError(e, r) {
    return _.autoresponseobject_webSocketError(this.__wbg_ptr, e, r);
  }
  webSocketClose(e, r, n, o) {
    let i = g(n, _.__wbindgen_malloc, _.__wbindgen_realloc),
      a = b;
    return _.autoresponseobject_webSocketClose(this.__wbg_ptr, e, r, i, a, o);
  }
  webSocketMessage(e, r) {
    return _.autoresponseobject_webSocketMessage(this.__wbg_ptr, e, r);
  }
  alarm() {
    return _.autoresponseobject_alarm(this.__wbg_ptr);
  }
  fetch(e) {
    return _.autoresponseobject_fetch(this.__wbg_ptr, e);
  }
  constructor(e, r) {
    let n = _.autoresponseobject_new(e, r);
    return (
      (this.__wbg_ptr = n >>> 0),
      V.register(this, this.__wbg_ptr, this),
      this
    );
  }
};
var $ =
  typeof FinalizationRegistry > 'u'
    ? {
        register: /* @__PURE__ */ __name(() => {}, 'register'),
        unregister: /* @__PURE__ */ __name(() => {}, 'unregister'),
      }
    : new FinalizationRegistry((t) => _.__wbg_counter_free(t >>> 0, 1));
var E = class {
  static {
    __name(this, 'E');
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return ((this.__wbg_ptr = 0), $.unregister(this), e);
  }
  free() {
    let e = this.__destroy_into_raw();
    _.__wbg_counter_free(e, 0);
  }
  webSocketError(e, r) {
    return _.counter_webSocketError(this.__wbg_ptr, e, r);
  }
  webSocketClose(e, r, n, o) {
    let i = g(n, _.__wbindgen_malloc, _.__wbindgen_realloc),
      a = b;
    return _.counter_webSocketClose(this.__wbg_ptr, e, r, i, a, o);
  }
  webSocketMessage(e, r) {
    return _.counter_webSocketMessage(this.__wbg_ptr, e, r);
  }
  alarm() {
    return _.counter_alarm(this.__wbg_ptr);
  }
  fetch(e) {
    return _.counter_fetch(this.__wbg_ptr, e);
  }
  constructor(e, r) {
    let n = _.counter_new(e, r);
    return (
      (this.__wbg_ptr = n >>> 0),
      $.register(this, this.__wbg_ptr, this),
      this
    );
  }
};
var lt =
  typeof FinalizationRegistry > 'u'
    ? {
        register: /* @__PURE__ */ __name(() => {}, 'register'),
        unregister: /* @__PURE__ */ __name(() => {}, 'unregister'),
      }
    : new FinalizationRegistry((t) =>
        _.__wbg_intounderlyingbytesource_free(t >>> 0, 1)
      );
var q = class {
  static {
    __name(this, 'q');
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return ((this.__wbg_ptr = 0), lt.unregister(this), e);
  }
  free() {
    let e = this.__destroy_into_raw();
    _.__wbg_intounderlyingbytesource_free(e, 0);
  }
  get type() {
    let e = _.intounderlyingbytesource_type(this.__wbg_ptr);
    return wt[e];
  }
  get autoAllocateChunkSize() {
    return (
      _.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr) >>> 0
    );
  }
  start(e) {
    _.intounderlyingbytesource_start(this.__wbg_ptr, e);
  }
  pull(e) {
    return _.intounderlyingbytesource_pull(this.__wbg_ptr, e);
  }
  cancel() {
    let e = this.__destroy_into_raw();
    _.intounderlyingbytesource_cancel(e);
  }
};
var pt =
  typeof FinalizationRegistry > 'u'
    ? {
        register: /* @__PURE__ */ __name(() => {}, 'register'),
        unregister: /* @__PURE__ */ __name(() => {}, 'unregister'),
      }
    : new FinalizationRegistry((t) =>
        _.__wbg_intounderlyingsink_free(t >>> 0, 1)
      );
var A = class {
  static {
    __name(this, 'A');
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return ((this.__wbg_ptr = 0), pt.unregister(this), e);
  }
  free() {
    let e = this.__destroy_into_raw();
    _.__wbg_intounderlyingsink_free(e, 0);
  }
  write(e) {
    return _.intounderlyingsink_write(this.__wbg_ptr, e);
  }
  close() {
    let e = this.__destroy_into_raw();
    return _.intounderlyingsink_close(e);
  }
  abort(e) {
    let r = this.__destroy_into_raw();
    return _.intounderlyingsink_abort(r, e);
  }
};
var J =
  typeof FinalizationRegistry > 'u'
    ? {
        register: /* @__PURE__ */ __name(() => {}, 'register'),
        unregister: /* @__PURE__ */ __name(() => {}, 'unregister'),
      }
    : new FinalizationRegistry((t) =>
        _.__wbg_intounderlyingsource_free(t >>> 0, 1)
      );
var x = class {
  static {
    __name(this, 'x');
  }
  static __wrap(e) {
    e = e >>> 0;
    let r = Object.create(x.prototype);
    return ((r.__wbg_ptr = e), J.register(r, r.__wbg_ptr, r), r);
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return ((this.__wbg_ptr = 0), J.unregister(this), e);
  }
  free() {
    let e = this.__destroy_into_raw();
    _.__wbg_intounderlyingsource_free(e, 0);
  }
  pull(e) {
    return _.intounderlyingsource_pull(this.__wbg_ptr, e);
  }
  cancel() {
    let e = this.__destroy_into_raw();
    _.intounderlyingsource_cancel(e);
  }
};
var H =
  typeof FinalizationRegistry > 'u'
    ? {
        register: /* @__PURE__ */ __name(() => {}, 'register'),
        unregister: /* @__PURE__ */ __name(() => {}, 'unregister'),
      }
    : new FinalizationRegistry((t) => _.__wbg_minifyconfig_free(t >>> 0, 1));
var m = class {
  static {
    __name(this, 'm');
  }
  static __wrap(e) {
    e = e >>> 0;
    let r = Object.create(m.prototype);
    return ((r.__wbg_ptr = e), H.register(r, r.__wbg_ptr, r), r);
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return ((this.__wbg_ptr = 0), H.unregister(this), e);
  }
  free() {
    let e = this.__destroy_into_raw();
    _.__wbg_minifyconfig_free(e, 0);
  }
  get js() {
    return _.__wbg_get_minifyconfig_js(this.__wbg_ptr) !== 0;
  }
  set js(e) {
    _.__wbg_set_minifyconfig_js(this.__wbg_ptr, e);
  }
  get html() {
    return _.__wbg_get_minifyconfig_html(this.__wbg_ptr) !== 0;
  }
  set html(e) {
    _.__wbg_set_minifyconfig_html(this.__wbg_ptr, e);
  }
  get css() {
    return _.__wbg_get_minifyconfig_css(this.__wbg_ptr) !== 0;
  }
  set css(e) {
    _.__wbg_set_minifyconfig_css(this.__wbg_ptr, e);
  }
};
var G =
  typeof FinalizationRegistry > 'u'
    ? {
        register: /* @__PURE__ */ __name(() => {}, 'register'),
        unregister: /* @__PURE__ */ __name(() => {}, 'unregister'),
      }
    : new FinalizationRegistry((t) => _.__wbg_myclass_free(t >>> 0, 1));
var M = class {
  static {
    __name(this, 'M');
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return ((this.__wbg_ptr = 0), G.unregister(this), e);
  }
  free() {
    let e = this.__destroy_into_raw();
    _.__wbg_myclass_free(e, 0);
  }
  webSocketError(e, r) {
    return _.myclass_webSocketError(this.__wbg_ptr, e, r);
  }
  webSocketClose(e, r, n, o) {
    let i = g(n, _.__wbindgen_malloc, _.__wbindgen_realloc),
      a = b;
    return _.myclass_webSocketClose(this.__wbg_ptr, e, r, i, a, o);
  }
  webSocketMessage(e, r) {
    return _.myclass_webSocketMessage(this.__wbg_ptr, e, r);
  }
  alarm() {
    return _.myclass_alarm(this.__wbg_ptr);
  }
  fetch(e) {
    return _.myclass_fetch(this.__wbg_ptr, e);
  }
  constructor(e, r) {
    let n = _.myclass_new(e, r);
    return (
      (this.__wbg_ptr = n >>> 0),
      G.register(this, this.__wbg_ptr, this),
      this
    );
  }
};
var X =
  typeof FinalizationRegistry > 'u'
    ? {
        register: /* @__PURE__ */ __name(() => {}, 'register'),
        unregister: /* @__PURE__ */ __name(() => {}, 'unregister'),
      }
    : new FinalizationRegistry((t) =>
        _.__wbg_putrawtestobject_free(t >>> 0, 1)
      );
var v = class {
  static {
    __name(this, 'v');
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return ((this.__wbg_ptr = 0), X.unregister(this), e);
  }
  free() {
    let e = this.__destroy_into_raw();
    _.__wbg_putrawtestobject_free(e, 0);
  }
  webSocketError(e, r) {
    return _.putrawtestobject_webSocketError(this.__wbg_ptr, e, r);
  }
  webSocketClose(e, r, n, o) {
    let i = g(n, _.__wbindgen_malloc, _.__wbindgen_realloc),
      a = b;
    return _.putrawtestobject_webSocketClose(this.__wbg_ptr, e, r, i, a, o);
  }
  webSocketMessage(e, r) {
    return _.putrawtestobject_webSocketMessage(this.__wbg_ptr, e, r);
  }
  alarm() {
    return _.putrawtestobject_alarm(this.__wbg_ptr);
  }
  fetch(e) {
    return _.putrawtestobject_fetch(this.__wbg_ptr, e);
  }
  constructor(e, r) {
    let n = _.putrawtestobject_new(e, r);
    return (
      (this.__wbg_ptr = n >>> 0),
      X.register(this, this.__wbg_ptr, this),
      this
    );
  }
};
var xt =
  typeof FinalizationRegistry > 'u'
    ? {
        register: /* @__PURE__ */ __name(() => {}, 'register'),
        unregister: /* @__PURE__ */ __name(() => {}, 'unregister'),
      }
    : new FinalizationRegistry((t) => _.__wbg_r2range_free(t >>> 0, 1));
var T = class {
  static {
    __name(this, 'T');
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return ((this.__wbg_ptr = 0), xt.unregister(this), e);
  }
  free() {
    let e = this.__destroy_into_raw();
    _.__wbg_r2range_free(e, 0);
  }
  get offset() {
    let e = _.__wbg_get_r2range_offset(this.__wbg_ptr);
    return e[0] === 0 ? void 0 : e[1];
  }
  set offset(e) {
    _.__wbg_set_r2range_offset(this.__wbg_ptr, !f(e), f(e) ? 0 : e);
  }
  get length() {
    let e = _.__wbg_get_r2range_length(this.__wbg_ptr);
    return e[0] === 0 ? void 0 : e[1];
  }
  set length(e) {
    _.__wbg_set_r2range_length(this.__wbg_ptr, !f(e), f(e) ? 0 : e);
  }
  get suffix() {
    let e = _.__wbg_get_r2range_suffix(this.__wbg_ptr);
    return e[0] === 0 ? void 0 : e[1];
  }
  set suffix(e) {
    _.__wbg_set_r2range_suffix(this.__wbg_ptr, !f(e), f(e) ? 0 : e);
  }
};
var K =
  typeof FinalizationRegistry > 'u'
    ? {
        register: /* @__PURE__ */ __name(() => {}, 'register'),
        unregister: /* @__PURE__ */ __name(() => {}, 'unregister'),
      }
    : new FinalizationRegistry((t) => _.__wbg_sqlcounter_free(t >>> 0, 1));
var L = class {
  static {
    __name(this, 'L');
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return ((this.__wbg_ptr = 0), K.unregister(this), e);
  }
  free() {
    let e = this.__destroy_into_raw();
    _.__wbg_sqlcounter_free(e, 0);
  }
  webSocketError(e, r) {
    return _.sqlcounter_webSocketError(this.__wbg_ptr, e, r);
  }
  webSocketClose(e, r, n, o) {
    let i = g(n, _.__wbindgen_malloc, _.__wbindgen_realloc),
      a = b;
    return _.sqlcounter_webSocketClose(this.__wbg_ptr, e, r, i, a, o);
  }
  webSocketMessage(e, r) {
    return _.sqlcounter_webSocketMessage(this.__wbg_ptr, e, r);
  }
  alarm() {
    return _.sqlcounter_alarm(this.__wbg_ptr);
  }
  fetch(e) {
    return _.sqlcounter_fetch(this.__wbg_ptr, e);
  }
  constructor(e, r) {
    let n = _.sqlcounter_new(e, r);
    return (
      (this.__wbg_ptr = n >>> 0),
      K.register(this, this.__wbg_ptr, this),
      this
    );
  }
};
var Q =
  typeof FinalizationRegistry > 'u'
    ? {
        register: /* @__PURE__ */ __name(() => {}, 'register'),
        unregister: /* @__PURE__ */ __name(() => {}, 'unregister'),
      }
    : new FinalizationRegistry((t) => _.__wbg_sqliterator_free(t >>> 0, 1));
var O = class {
  static {
    __name(this, 'O');
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return ((this.__wbg_ptr = 0), Q.unregister(this), e);
  }
  free() {
    let e = this.__destroy_into_raw();
    _.__wbg_sqliterator_free(e, 0);
  }
  webSocketError(e, r) {
    return _.sqliterator_webSocketError(this.__wbg_ptr, e, r);
  }
  webSocketClose(e, r, n, o) {
    let i = g(n, _.__wbindgen_malloc, _.__wbindgen_realloc),
      a = b;
    return _.sqliterator_webSocketClose(this.__wbg_ptr, e, r, i, a, o);
  }
  webSocketMessage(e, r) {
    return _.sqliterator_webSocketMessage(this.__wbg_ptr, e, r);
  }
  alarm() {
    return _.sqliterator_alarm(this.__wbg_ptr);
  }
  fetch(e) {
    return _.sqliterator_fetch(this.__wbg_ptr, e);
  }
  constructor(e, r) {
    let n = _.sqliterator_new(e, r);
    return (
      (this.__wbg_ptr = n >>> 0),
      Q.register(this, this.__wbg_ptr, this),
      this
    );
  }
};
function mt(t, e) {
  let r = String(e),
    n = g(r, _.__wbindgen_malloc, _.__wbindgen_realloc),
    o = b;
  (s().setInt32(t + 4 * 1, o, true), s().setInt32(t + 4 * 0, n, true));
}
__name(mt, 'mt');
function ht(t) {
  t.abort();
}
__name(ht, 'ht');
function yt() {
  return c(function (t, e) {
    t.acceptWebSocket(e);
  }, arguments);
}
__name(yt, 'yt');
function St() {
  return c(function (t) {
    t.accept();
  }, arguments);
}
__name(St, 'St');
function kt() {
  return c(function (t, e, r, n) {
    t.addEventListener(u(e, r), n);
  }, arguments);
}
__name(kt, 'kt');
function Rt() {
  return c(function (t) {
    return t.all();
  }, arguments);
}
__name(Rt, 'Rt');
function Ft() {
  return c(function (t, e, r, n, o) {
    t.append(u(e, r), u(n, o));
  }, arguments);
}
__name(Ft, 'Ft');
function It() {
  return c(function (t) {
    return t.arrayBuffer();
  }, arguments);
}
__name(It, 'It');
function jt() {
  return c(function (t) {
    return t.arrayBuffer();
  }, arguments);
}
__name(jt, 'jt');
function zt(t) {
  return t.arrayBuffer();
}
__name(zt, 'zt');
function Et() {
  return c(function (t, e) {
    return t.batch(e);
  }, arguments);
}
__name(Et, 'Et');
function qt() {
  return c(function (t, e) {
    return t.bind(...e);
  }, arguments);
}
__name(qt, 'qt');
function At(t) {
  let e = t.body;
  return f(e) ? 0 : d(e);
}
__name(At, 'At');
function Mt(t) {
  let e = t.body;
  return f(e) ? 0 : d(e);
}
__name(Mt, 'Mt');
function vt() {
  return c(function (t) {
    return t.body;
  }, arguments);
}
__name(vt, 'vt');
function Tt(t) {
  return t.buffer;
}
__name(Tt, 'Tt');
function Lt(t) {
  return t.buffer;
}
__name(Lt, 'Lt');
function Ot(t) {
  let e = t.byobRequest;
  return f(e) ? 0 : d(e);
}
__name(Ot, 'Ot');
function Ct(t) {
  return t.byteLength;
}
__name(Ct, 'Ct');
function Wt(t) {
  return t.byteOffset;
}
__name(Wt, 'Wt');
function Dt() {
  return c(function (t, e) {
    let r = e.cacheControl;
    var n = f(r) ? 0 : g(r, _.__wbindgen_malloc, _.__wbindgen_realloc),
      o = b;
    (s().setInt32(t + 4 * 1, o, true), s().setInt32(t + 4 * 0, n, true));
  }, arguments);
}
__name(Dt, 'Dt');
function Ut() {
  return c(function (t) {
    let e = t.cacheExpiry;
    return f(e) ? 0 : d(e);
  }, arguments);
}
__name(Ut, 'Ut');
function Bt() {
  return c(function (t) {
    return t.caches;
  }, arguments);
}
__name(Bt, 'Bt');
function Nt() {
  return c(function (t, e) {
    return t.call(e);
  }, arguments);
}
__name(Nt, 'Nt');
function Pt() {
  return c(function (t, e, r) {
    return t.call(e, r);
  }, arguments);
}
__name(Pt, 'Pt');
function Vt() {
  return c(function (t, e, r, n) {
    return t.call(e, r, n);
  }, arguments);
}
__name(Vt, 'Vt');
function $t() {
  return c(function (t, e, r, n, o) {
    return t.call(e, r, n, o);
  }, arguments);
}
__name($t, '$t');
function Jt(t) {
  return t.cancel();
}
__name(Jt, 'Jt');
function Ht(t, e) {
  return t.catch(e);
}
__name(Ht, 'Ht');
function Gt(t) {
  return t.cause;
}
__name(Gt, 'Gt');
function Xt() {
  return c(function (t) {
    let e = t.cf;
    return f(e) ? 0 : d(e);
  }, arguments);
}
__name(Xt, 'Xt');
function Kt() {
  return c(function (t) {
    let e = t.cf;
    return f(e) ? 0 : d(e);
  }, arguments);
}
__name(Kt, 'Kt');
function Qt(t, e) {
  t.clearTimeout(e);
}
__name(Qt, 'Qt');
function Yt() {
  return c(function (t) {
    return t.clone();
  }, arguments);
}
__name(Yt, 'Yt');
function Zt() {
  return c(function (t) {
    return t.clone();
  }, arguments);
}
__name(Zt, 'Zt');
function te() {
  return c(function (t) {
    t.close();
  }, arguments);
}
__name(te, 'te');
function ee() {
  return c(function (t) {
    t.close();
  }, arguments);
}
__name(ee, 'ee');
function re() {
  return c(function (t, e) {
    t.close(e);
  }, arguments);
}
__name(re, 're');
function ne() {
  return c(function (t) {
    t.close();
  }, arguments);
}
__name(ne, 'ne');
function _e() {
  return c(function (t, e, r, n) {
    t.close(e, u(r, n));
  }, arguments);
}
__name(_e, '_e');
function oe() {
  return c(function (t) {
    return t.close();
  }, arguments);
}
__name(oe, 'oe');
function ce() {
  return c(function (t) {
    return t.closed;
  }, arguments);
}
__name(ce, 'ce');
function se(t) {
  return t.columnNames;
}
__name(se, 'se');
function ue() {
  return c(function (t, e, r) {
    var n = W(e, r).slice();
    return (_.__wbindgen_free(e, r * 4, 4), t.complete(n));
  }, arguments);
}
__name(ue, 'ue');
function ie() {
  return c(function (t, e) {
    return nt(t, e);
  }, arguments);
}
__name(ie, 'ie');
function ae(t) {
  return t.constructor;
}
__name(ae, 'ae');
function fe() {
  return c(function (t, e) {
    let r = e.contentDisposition;
    var n = f(r) ? 0 : g(r, _.__wbindgen_malloc, _.__wbindgen_realloc),
      o = b;
    (s().setInt32(t + 4 * 1, o, true), s().setInt32(t + 4 * 0, n, true));
  }, arguments);
}
__name(fe, 'fe');
function be() {
  return c(function (t, e) {
    let r = e.contentEncoding;
    var n = f(r) ? 0 : g(r, _.__wbindgen_malloc, _.__wbindgen_realloc),
      o = b;
    (s().setInt32(t + 4 * 1, o, true), s().setInt32(t + 4 * 0, n, true));
  }, arguments);
}
__name(be, 'be');
function ge() {
  return c(function (t, e) {
    let r = e.contentLanguage;
    var n = f(r) ? 0 : g(r, _.__wbindgen_malloc, _.__wbindgen_realloc),
      o = b;
    (s().setInt32(t + 4 * 1, o, true), s().setInt32(t + 4 * 0, n, true));
  }, arguments);
}
__name(ge, 'ge');
function we() {
  return c(function (t, e) {
    let r = e.contentType;
    var n = f(r) ? 0 : g(r, _.__wbindgen_malloc, _.__wbindgen_realloc),
      o = b;
    (s().setInt32(t + 4 * 1, o, true), s().setInt32(t + 4 * 0, n, true));
  }, arguments);
}
__name(we, 'we');
function de() {
  return c(function (t) {
    let e = t.count;
    return f(e) ? 4294967297 : e >>> 0;
  }, arguments);
}
__name(de, 'de');
function le() {
  return c(function (t, e, r, n) {
    let o, i;
    try {
      return ((o = e), (i = r), t.createMultipartUpload(u(e, r), n));
    } finally {
      _.__wbindgen_free(o, i, 1);
    }
  }, arguments);
}
__name(le, 'le');
function pe() {
  return c(function (t, e) {
    let r = e.cursor;
    var n = f(r) ? 0 : g(r, _.__wbindgen_malloc, _.__wbindgen_realloc),
      o = b;
    (s().setInt32(t + 4 * 1, o, true), s().setInt32(t + 4 * 0, n, true));
  }, arguments);
}
__name(pe, 'pe');
function xe() {
  return c(function (t) {
    return t.customMetadata;
  }, arguments);
}
__name(xe, 'xe');
function me(t) {
  return t.data;
}
__name(me, 'me');
function he(t) {
  console.debug(t);
}
__name(he, 'he');
function ye() {
  return c(function (t) {
    return t.default;
  }, arguments);
}
__name(ye, 'ye');
function Se() {
  return c(function (t) {
    return t.deleteAll();
  }, arguments);
}
__name(Se, 'Se');
function ke() {
  return c(function (t, e, r) {
    let n, o;
    try {
      return ((n = e), (o = r), t.delete(u(e, r)));
    } finally {
      _.__wbindgen_free(n, o, 1);
    }
  }, arguments);
}
__name(ke, 'ke');
function Re() {
  return c(function (t, e, r) {
    var n = W(e, r).slice();
    return (_.__wbindgen_free(e, r * 4, 4), t.delete(n));
  }, arguments);
}
__name(Re, 'Re');
function Fe(t, e, r, n) {
  return t.delete(u(e, r), n);
}
__name(Fe, 'Fe');
function Ie(t, e, r) {
  return t.delete(e, r);
}
__name(Ie, 'Ie');
function je() {
  return c(function (t, e, r) {
    return t.delete(u(e, r));
  }, arguments);
}
__name(je, 'je');
function ze() {
  return c(function (t) {
    return t.deserializeAttachment();
  }, arguments);
}
__name(ze, 'ze');
function Ee(t) {
  return t.done;
}
__name(Ee, 'Ee');
function qe() {
  return c(function (t) {
    return t.dump();
  }, arguments);
}
__name(qe, 'qe');
function Ae() {
  return c(function (t, e) {
    t.enqueue(e);
  }, arguments);
}
__name(Ae, 'Ae');
function Me(t) {
  return t.entries();
}
__name(Me, 'Me');
function ve(t) {
  return Object.entries(t);
}
__name(ve, 've');
function Te(t) {
  return t.error;
}
__name(Te, 'Te');
function Le() {
  return c(function (t, e) {
    let r = e.error;
    var n = f(r) ? 0 : g(r, _.__wbindgen_malloc, _.__wbindgen_realloc),
      o = b;
    (s().setInt32(t + 4 * 1, o, true), s().setInt32(t + 4 * 0, n, true));
  }, arguments);
}
__name(Le, 'Le');
function Oe(t) {
  console.error(t);
}
__name(Oe, 'Oe');
function Ce(t, e) {
  let r, n;
  try {
    ((r = t), (n = e), console.error(u(t, e)));
  } finally {
    _.__wbindgen_free(r, n, 1);
  }
}
__name(Ce, 'Ce');
function We() {
  return c(function (t, e, r) {
    return t.exec(u(e, r));
  }, arguments);
}
__name(We, 'We');
function De() {
  return c(function (t, e, r, n) {
    return t.exec(u(e, r), ...n);
  }, arguments);
}
__name(De, 'De');
function Ue(t, e, r) {
  return t.fetch(e, r);
}
__name(Ue, 'Ue');
function Be() {
  return c(function (t, e, r, n) {
    return t.fetch(u(e, r), n);
  }, arguments);
}
__name(Be, 'Be');
function Ne() {
  return c(function (t, e) {
    return t.fetch(e);
  }, arguments);
}
__name(Ne, 'Ne');
function Pe(t, e, r, n) {
  return t.fetch(u(e, r), n);
}
__name(Pe, 'Pe');
function Ve() {
  return c(function (t, e) {
    return t.fetch(e);
  }, arguments);
}
__name(Ve, 'Ve');
function $e() {
  return c(function (t, e, r) {
    return t.fetch(u(e, r));
  }, arguments);
}
__name($e, '$e');
function Je() {
  return c(function (t, e, r) {
    return t.fetch(u(e, r));
  }, arguments);
}
__name(Je, 'Je');
function He() {
  return c(function (t, e, r) {
    return t.first(e === 0 ? void 0 : u(e, r));
  }, arguments);
}
__name(He, 'He');
function Ge() {
  return c(function (t) {
    return t.formData();
  }, arguments);
}
__name(Ge, 'Ge');
function Xe(t) {
  return Array.from(t);
}
__name(Xe, 'Xe');
function Ke(t, e, r) {
  return t.getAll(u(e, r));
}
__name(Ke, 'Ke');
function Qe() {
  return c(function (t, e) {
    globalThis.crypto.getRandomValues(Z(t, e));
  }, arguments);
}
__name(Qe, 'Qe');
function Ye() {
  return c(function (t, e) {
    globalThis.crypto.getRandomValues(Z(t, e));
  }, arguments);
}
__name(Ye, 'Ye');
function Ze() {
  return c(function (t) {
    return t.getReader();
  }, arguments);
}
__name(Ze, 'Ze');
function tr(t) {
  return t.getReader();
}
__name(tr, 'tr');
function er(t) {
  return t.getTime();
}
__name(er, 'er');
function rr() {
  return c(function (t) {
    let e = t.getWebSocketAutoResponse();
    return f(e) ? 0 : d(e);
  }, arguments);
}
__name(rr, 'rr');
function nr() {
  return c(function (t) {
    return t.getWriter();
  }, arguments);
}
__name(nr, 'nr');
function _r() {
  return c(function (t, e) {
    return t.get(e);
  }, arguments);
}
__name(_r, '_r');
function or(t, e) {
  return t.get(e);
}
__name(or, 'or');
function cr() {
  return c(function (t, e) {
    return Reflect.get(t, e);
  }, arguments);
}
__name(cr, 'cr');
function sr() {
  return c(function (t, e) {
    return Reflect.get(t, e >>> 0);
  }, arguments);
}
__name(sr, 'sr');
function ur() {
  return c(function (t, e, r) {
    return t.get(u(e, r));
  }, arguments);
}
__name(ur, 'ur');
function ir() {
  return c(function (t, e, r) {
    var n = W(e, r).slice();
    return (_.__wbindgen_free(e, r * 4, 4), t.get(n));
  }, arguments);
}
__name(ir, 'ir');
function ar() {
  return c(function (t, e, r, n) {
    let o, i;
    try {
      return ((o = e), (i = r), t.get(u(e, r), n));
    } finally {
      _.__wbindgen_free(o, i, 1);
    }
  }, arguments);
}
__name(ar, 'ar');
function fr(t, e, r) {
  return t.get(u(e, r));
}
__name(fr, 'fr');
function br(t, e) {
  return t[e >>> 0];
}
__name(br, 'br');
function gr(t) {
  let e = t.done;
  return f(e) ? 16777215 : e ? 1 : 0;
}
__name(gr, 'gr');
function wr(t) {
  return t.value;
}
__name(wr, 'wr');
function dr(t, e) {
  return t[e];
}
__name(dr, 'dr');
function lr(t, e, r) {
  return t.has(u(e, r));
}
__name(lr, 'lr');
function pr(t) {
  return t.headers;
}
__name(pr, 'pr');
function xr(t) {
  return t.headers;
}
__name(xr, 'xr');
function mr() {
  return c(function (t) {
    return t.httpMetadata;
  }, arguments);
}
__name(mr, 'mr');
function hr() {
  return c(function (t, e, r) {
    return t.idFromName(u(e, r));
  }, arguments);
}
__name(hr, 'hr');
function yr() {
  return c(function (t) {
    return t.id;
  }, arguments);
}
__name(yr, 'yr');
function Sr() {
  return c(function (t) {
    return t.id;
  }, arguments);
}
__name(Sr, 'Sr');
function kr(t) {
  let e;
  try {
    e = t instanceof ArrayBuffer;
  } catch {
    e = false;
  }
  return e;
}
__name(kr, 'kr');
function Rr(t) {
  let e;
  try {
    e = t instanceof Error;
  } catch {
    e = false;
  }
  return e;
}
__name(Rr, 'Rr');
function Fr(t) {
  let e;
  try {
    e = t instanceof File;
  } catch {
    e = false;
  }
  return e;
}
__name(Fr, 'Fr');
function Ir(t) {
  let e;
  try {
    e = t instanceof Map;
  } catch {
    e = false;
  }
  return e;
}
__name(Ir, 'Ir');
function jr(t) {
  let e;
  try {
    e = t instanceof Object;
  } catch {
    e = false;
  }
  return e;
}
__name(jr, 'jr');
function zr(t) {
  let e;
  try {
    e = t instanceof ReadableStreamDefaultReader;
  } catch {
    e = false;
  }
  return e;
}
__name(zr, 'zr');
function Er(t) {
  let e;
  try {
    e = t instanceof ReadableStream;
  } catch {
    e = false;
  }
  return e;
}
__name(Er, 'Er');
function qr(t) {
  let e;
  try {
    e = t instanceof Response;
  } catch {
    e = false;
  }
  return e;
}
__name(qr, 'qr');
function Ar(t) {
  let e;
  try {
    e = t instanceof Uint8Array;
  } catch {
    e = false;
  }
  return e;
}
__name(Ar, 'Ar');
function Mr(t) {
  return Array.isArray(t);
}
__name(Mr, 'Mr');
function vr(t) {
  return Number.isSafeInteger(t);
}
__name(vr, 'vr');
function Tr() {
  return Symbol.iterator;
}
__name(Tr, 'Tr');
function Lr() {
  return c(function (t) {
    return t.json();
  }, arguments);
}
__name(Lr, 'Lr');
function Or(t) {
  return t.keys();
}
__name(Or, 'Or');
function Cr(t) {
  return Object.keys(t);
}
__name(Cr, 'Cr');
function Wr() {
  return c(function (t, e) {
    let r = e.latitude;
    var n = f(r) ? 0 : g(r, _.__wbindgen_malloc, _.__wbindgen_realloc),
      o = b;
    (s().setInt32(t + 4 * 1, o, true), s().setInt32(t + 4 * 0, n, true));
  }, arguments);
}
__name(Wr, 'Wr');
function Dr(t) {
  return t.length;
}
__name(Dr, 'Dr');
function Ur(t) {
  return t.length;
}
__name(Ur, 'Ur');
function Br() {
  return c(function (t) {
    return t.list();
  }, arguments);
}
__name(Br, 'Br');
function Nr() {
  return c(function (t, e) {
    return t.list(e);
  }, arguments);
}
__name(Nr, 'Nr');
function Pr(t) {
  console.log(t);
}
__name(Pr, 'Pr');
function Vr() {
  return c(function (t, e) {
    let r = e.longitude;
    var n = f(r) ? 0 : g(r, _.__wbindgen_malloc, _.__wbindgen_realloc),
      o = b;
    (s().setInt32(t + 4 * 1, o, true), s().setInt32(t + 4 * 0, n, true));
  }, arguments);
}
__name(Vr, 'Vr');
function $r(t, e, r, n) {
  return t.match(u(e, r), n);
}
__name($r, '$r');
function Jr(t, e, r) {
  return t.match(e, r);
}
__name(Jr, 'Jr');
function Hr(t) {
  return t.message;
}
__name(Hr, 'Hr');
function Gr() {
  return c(function (t) {
    return t.messages;
  }, arguments);
}
__name(Gr, 'Gr');
function Xr(t, e) {
  let r = e.method,
    n = g(r, _.__wbindgen_malloc, _.__wbindgen_realloc),
    o = b;
  (s().setInt32(t + 4 * 1, o, true), s().setInt32(t + 4 * 0, n, true));
}
__name(Xr, 'Xr');
function Kr(t) {
  return m.__wrap(t);
}
__name(Kr, 'Kr');
function Qr(t) {
  return t.name;
}
__name(Qr, 'Qr');
function Yr(t, e) {
  let r = e.name,
    n = g(r, _.__wbindgen_malloc, _.__wbindgen_realloc),
    o = b;
  (s().setInt32(t + 4 * 1, o, true), s().setInt32(t + 4 * 0, n, true));
}
__name(Yr, 'Yr');
function Zr(t, e) {
  let r = e.name;
  var n = f(r) ? 0 : g(r, _.__wbindgen_malloc, _.__wbindgen_realloc),
    o = b;
  (s().setInt32(t + 4 * 1, o, true), s().setInt32(t + 4 * 0, n, true));
}
__name(Zr, 'Zr');
function tn() {
  return /* @__PURE__ */ new Date();
}
__name(tn, 'tn');
function en() {
  return c(function (t) {
    return t.newUniqueId();
  }, arguments);
}
__name(en, 'en');
function rn() {
  return c(function () {
    return new Headers();
  }, arguments);
}
__name(rn, 'rn');
function nn(t, e) {
  try {
    var r = { a: t, b: e },
      n = /* @__PURE__ */ __name((i, a) => {
        let w = r.a;
        r.a = 0;
        try {
          return ft(w, r.b, i, a);
        } finally {
          r.a = w;
        }
      }, 'n');
    return new Promise(n);
  } finally {
    r.a = r.b = 0;
  }
}
__name(nn, 'nn');
function _n(t) {
  return new Date(t);
}
__name(_n, '_n');
function on() {
  return new Object();
}
__name(on, 'on');
function cn() {
  return c(function () {
    return new WebSocketPair();
  }, arguments);
}
__name(cn, 'cn');
function sn() {
  return /* @__PURE__ */ new Map();
}
__name(sn, 'sn');
function un() {
  return new Array();
}
__name(un, 'un');
function an() {
  return c(function (t) {
    return new FixedLengthStream(t >>> 0);
  }, arguments);
}
__name(an, 'an');
function fn() {
  return new Error();
}
__name(fn, 'fn');
function bn(t) {
  return new Uint8Array(t);
}
__name(bn, 'bn');
function gn(t, e) {
  return new Error(u(t, e));
}
__name(gn, 'gn');
function wn() {
  return c(function (t, e, r, n) {
    return new WebSocketRequestResponsePair(u(t, e), u(r, n));
  }, arguments);
}
__name(wn, 'wn');
function dn() {
  return c(function () {
    return new AbortController();
  }, arguments);
}
__name(dn, 'dn');
function ln() {
  return c(function (t) {
    return new FixedLengthStream(t);
  }, arguments);
}
__name(ln, 'ln');
function pn(t, e) {
  return new Function(u(t, e));
}
__name(pn, 'pn');
function xn(t, e, r) {
  return new Uint8Array(t, e >>> 0, r >>> 0);
}
__name(xn, 'xn');
function mn() {
  return c(function (t) {
    return new Headers(t);
  }, arguments);
}
__name(mn, 'mn');
function hn(t, e) {
  return new ReadableStream(x.__wrap(t), e);
}
__name(hn, 'hn');
function yn(t) {
  return new Uint8Array(t >>> 0);
}
__name(yn, 'yn');
function Sn() {
  return c(function (t, e) {
    return new Response(t, e);
  }, arguments);
}
__name(Sn, 'Sn');
function kn() {
  return c(function (t, e) {
    return new Response(t, e);
  }, arguments);
}
__name(kn, 'kn');
function Rn() {
  return c(function (t, e, r) {
    return new Response(t === 0 ? void 0 : u(t, e), r);
  }, arguments);
}
__name(Rn, 'Rn');
function Fn() {
  return c(function (t, e, r) {
    return new Request(u(t, e), r);
  }, arguments);
}
__name(Fn, 'Fn');
function In(t) {
  return t.next;
}
__name(In, 'In');
function jn(t) {
  return t.next();
}
__name(jn, 'jn');
function zn() {
  return c(function (t) {
    return t.next();
  }, arguments);
}
__name(zn, 'zn');
function En() {
  return c(function (t, e) {
    let r = e.objects,
      n = st(r, _.__wbindgen_malloc),
      o = b;
    (s().setInt32(t + 4 * 1, o, true), s().setInt32(t + 4 * 0, n, true));
  }, arguments);
}
__name(En, 'En');
function qn() {
  return c(function (t) {
    return t.opened;
  }, arguments);
}
__name(qn, 'qn');
function An(t, e) {
  return t.pipeTo(e);
}
__name(An, 'An');
function Mn() {
  return c(function (t, e, r) {
    return t.prepare(u(e, r));
  }, arguments);
}
__name(Mn, 'Mn');
function vn(t, e) {
  return t.push(e);
}
__name(vn, 'vn');
function Tn() {
  return c(function (t, e, r, n, o) {
    let i, a;
    try {
      return ((i = e), (a = r), t.put(u(e, r), n, o));
    } finally {
      _.__wbindgen_free(i, a, 1);
    }
  }, arguments);
}
__name(Tn, 'Tn');
function Ln(t, e, r) {
  return t.put(e, r);
}
__name(Ln, 'Ln');
function On() {
  return c(function (t, e) {
    return t.put(e);
  }, arguments);
}
__name(On, 'On');
function Cn(t, e, r, n) {
  return t.put(u(e, r), n);
}
__name(Cn, 'Cn');
function Wn() {
  return c(function (t, e, r, n) {
    return t.put(u(e, r), n);
  }, arguments);
}
__name(Wn, 'Wn');
function Dn(t) {
  queueMicrotask(t);
}
__name(Dn, 'Dn');
function Un(t) {
  return t.queueMicrotask;
}
__name(Un, 'Un');
function Bn(t) {
  return t.raw();
}
__name(Bn, 'Bn');
function Nn() {
  return c(function (t) {
    return t.raw();
  }, arguments);
}
__name(Nn, 'Nn');
function Pn(t) {
  return t.read();
}
__name(Pn, 'Pn');
function Vn(t) {
  return t.readable;
}
__name(Vn, 'Vn');
function $n() {
  return c(function (t) {
    return t.readable;
  }, arguments);
}
__name($n, '$n');
function Jn() {
  return c(function (t, e, r) {
    return Response.redirect(u(t, e), r);
  }, arguments);
}
__name(Jn, 'Jn');
function Hn() {
  return c(function (t, e) {
    return Response.redirect(u(t, e));
  }, arguments);
}
__name(Hn, 'Hn');
function Gn() {
  return c(function (t, e) {
    let r = e.region;
    var n = f(r) ? 0 : g(r, _.__wbindgen_malloc, _.__wbindgen_realloc),
      o = b;
    (s().setInt32(t + 4 * 1, o, true), s().setInt32(t + 4 * 0, n, true));
  }, arguments);
}
__name(Gn, 'Gn');
function Xn(t) {
  t.releaseLock();
}
__name(Xn, 'Xn');
function Kn(t) {
  t.releaseLock();
}
__name(Kn, 'Kn');
function Qn() {
  return c(function (t, e, r, n) {
    t.removeEventListener(u(e, r), n);
  }, arguments);
}
__name(Qn, 'Qn');
function Yn(t, e) {
  let r = e.request,
    n = g(r, _.__wbindgen_malloc, _.__wbindgen_realloc),
    o = b;
  (s().setInt32(t + 4 * 1, o, true), s().setInt32(t + 4 * 0, n, true));
}
__name(Yn, 'Yn');
function Zn(t) {
  return Promise.resolve(t);
}
__name(Zn, 'Zn');
function t_() {
  return c(function (t, e) {
    t.respond(e >>> 0);
  }, arguments);
}
__name(t_, 't_');
function e_(t, e) {
  let r = e.response,
    n = g(r, _.__wbindgen_malloc, _.__wbindgen_realloc),
    o = b;
  (s().setInt32(t + 4 * 1, o, true), s().setInt32(t + 4 * 0, n, true));
}
__name(e_, 'e_');
function r_() {
  return c(function (t) {
    let e = t.results;
    return f(e) ? 0 : d(e);
  }, arguments);
}
__name(r_, 'r_');
function n_() {
  return c(function (t) {
    return t.run();
  }, arguments);
}
__name(n_, 'n_');
function __() {
  return c(function (t, e, r) {
    return t.sendBatch(e, r);
  }, arguments);
}
__name(__, '__');
function o_() {
  return c(function (t, e, r) {
    t.send(u(e, r));
  }, arguments);
}
__name(o_, 'o_');
function c_() {
  return c(function (t, e, r) {
    return t.send(e, r);
  }, arguments);
}
__name(c_, 'c_');
function s_() {
  return c(function (t, e) {
    t.serializeAttachment(e);
  }, arguments);
}
__name(s_, 's_');
function u_() {
  return c(function (t, e, r) {
    return t.setAlarm(e, r);
  }, arguments);
}
__name(u_, 'u_');
function i_() {
  return c(function (t, e, r) {
    return t.setTimeout(e, r);
  }, arguments);
}
__name(i_, 'i_');
function a_() {
  return c(function (t, e) {
    t.setWebSocketAutoResponse(e);
  }, arguments);
}
__name(a_, 'a_');
function f_() {
  return c(function (t, e, r, n, o) {
    t.set(u(e, r), u(n, o));
  }, arguments);
}
__name(f_, 'f_');
function b_(t, e, r) {
  t[e >>> 0] = r;
}
__name(b_, 'b_');
function g_(t, e, r) {
  t[e] = r;
}
__name(g_, 'g_');
function w_(t, e, r) {
  t.set(e, r >>> 0);
}
__name(w_, 'w_');
function d_(t, e, r) {
  return t.set(e, r);
}
__name(d_, 'd_');
function l_() {
  return c(function (t, e, r) {
    return Reflect.set(t, e, r);
  }, arguments);
}
__name(l_, 'l_');
function p_(t, e) {
  t.body = e;
}
__name(p_, 'p_');
function x_(t, e) {
  t.headers = e;
}
__name(x_, 'x_');
function m_(t, e) {
  t.headers = e;
}
__name(m_, 'm_');
function h_(t, e) {
  t.highWaterMark = e;
}
__name(h_, 'h_');
function y_(t, e) {
  t.ignoreMethod = e !== 0;
}
__name(y_, 'y_');
function S_(t, e, r) {
  t.method = u(e, r);
}
__name(S_, 'S_');
function k_(t, e) {
  t.redirect = dt[e];
}
__name(k_, 'k_');
function R_(t, e) {
  t.signal = e;
}
__name(R_, 'R_');
function F_(t, e) {
  t.status = e;
}
__name(F_, 'F_');
function I_(t) {
  return t.signal;
}
__name(I_, 'I_');
function j_(t) {
  return t.sql;
}
__name(j_, 'j_');
function z_(t, e) {
  let r = e.stack,
    n = g(r, _.__wbindgen_malloc, _.__wbindgen_realloc),
    o = b;
  (s().setInt32(t + 4 * 1, o, true), s().setInt32(t + 4 * 0, n, true));
}
__name(z_, 'z_');
function E_() {
  let t = typeof global > 'u' ? null : global;
  return f(t) ? 0 : d(t);
}
__name(E_, 'E_');
function q_() {
  let t = typeof globalThis > 'u' ? null : globalThis;
  return f(t) ? 0 : d(t);
}
__name(q_, 'q_');
function A_() {
  let t = typeof self > 'u' ? null : self;
  return f(t) ? 0 : d(t);
}
__name(A_, 'A_');
function M_() {
  let t = typeof window > 'u' ? null : window;
  return f(t) ? 0 : d(t);
}
__name(M_, 'M_');
function v_(t) {
  return t.status;
}
__name(v_, 'v_');
function T_() {
  return c(function (t) {
    return t.storage;
  }, arguments);
}
__name(T_, 'T_');
function L_() {
  return c(function (t) {
    return JSON.stringify(t);
  }, arguments);
}
__name(L_, 'L_');
function O_() {
  return c(function (t) {
    return t.success;
  }, arguments);
}
__name(O_, 'O_');
function C_() {
  return c(function (t) {
    return t.text();
  }, arguments);
}
__name(C_, 'C_');
function W_(t, e) {
  return t.then(e);
}
__name(W_, 'W_');
function D_(t, e, r) {
  return t.then(e, r);
}
__name(D_, 'D_');
function U_() {
  return c(function (t) {
    return t.timestamp;
  }, arguments);
}
__name(U_, 'U_');
function B_(t) {
  return t.toArray();
}
__name(B_, 'B_');
function N_() {
  return c(function (t, e) {
    let r = e.toString(),
      n = g(r, _.__wbindgen_malloc, _.__wbindgen_realloc),
      o = b;
    (s().setInt32(t + 4 * 1, o, true), s().setInt32(t + 4 * 0, n, true));
  }, arguments);
}
__name(N_, 'N_');
function P_(t) {
  return t.toString();
}
__name(P_, 'P_');
function V_(t) {
  return t.toString();
}
__name(V_, 'V_');
function $_() {
  return c(function (t) {
    return t.truncated;
  }, arguments);
}
__name($_, '$_');
function J_() {
  return c(function (t, e, r) {
    return t.uploadPart(e, r);
  }, arguments);
}
__name(J_, 'J_');
function H_(t, e) {
  let r = e.url,
    n = g(r, _.__wbindgen_malloc, _.__wbindgen_realloc),
    o = b;
  (s().setInt32(t + 4 * 1, o, true), s().setInt32(t + 4 * 0, n, true));
}
__name(H_, 'H_');
function G_(t) {
  return t.value;
}
__name(G_, 'G_');
function X_(t) {
  let e = t.view;
  return f(e) ? 0 : d(e);
}
__name(X_, 'X_');
function K_() {
  return c(function (t) {
    let e = t.webSocket;
    return f(e) ? 0 : d(e);
  }, arguments);
}
__name(K_, 'K_');
function Q_(t) {
  return t.writable;
}
__name(Q_, 'Q_');
function Y_() {
  return c(function (t) {
    return t.writable;
  }, arguments);
}
__name(Y_, 'Y_');
function Z_() {
  return c(function (t, e) {
    t.writeDataPoint(e);
  }, arguments);
}
__name(Z_, 'Z_');
function to(t, e) {
  return t.write(e);
}
__name(to, 'to');
function eo(t) {
  return +t;
}
__name(eo, 'eo');
function ro(t) {
  return t;
}
__name(ro, 'ro');
function no(t) {
  return BigInt.asUintN(64, t);
}
__name(no, 'no');
function _o(t, e) {
  let r = e,
    n = typeof r == 'bigint' ? r : void 0;
  (s().setBigInt64(t + 8 * 1, f(n) ? BigInt(0) : n, true),
    s().setInt32(t + 4 * 0, !f(n), true));
}
__name(_o, '_o');
function oo(t) {
  let e = t;
  return typeof e == 'boolean' ? (e ? 1 : 0) : 2;
}
__name(oo, 'oo');
function co(t) {
  let e = t.original;
  return e.cnt-- == 1 ? ((e.a = 0), true) : false;
}
__name(co, 'co');
function so(t, e, r) {
  return y(t, e, 1231, B);
}
__name(so, 'so');
function uo(t, e, r) {
  return y(t, e, 1231, B);
}
__name(uo, 'uo');
function io(t, e, r) {
  return y(t, e, 1231, B);
}
__name(io, 'io');
function ao(t, e, r) {
  return y(t, e, 1231, it);
}
__name(ao, 'ao');
function fo(t, e, r) {
  return y(t, e, 1387, at);
}
__name(fo, 'fo');
function bo(t, e) {
  let r = I(e),
    n = g(r, _.__wbindgen_malloc, _.__wbindgen_realloc),
    o = b;
  (s().setInt32(t + 4 * 1, o, true), s().setInt32(t + 4 * 0, n, true));
}
__name(bo, 'bo');
function go(t, e) {
  return new Error(u(t, e));
}
__name(go, 'go');
function wo(t, e) {
  return t in e;
}
__name(wo, 'wo');
function lo() {
  let t = _.__wbindgen_export_4,
    e = t.grow(4);
  (t.set(0, void 0),
    t.set(e + 0, void 0),
    t.set(e + 1, null),
    t.set(e + 2, true),
    t.set(e + 3, false));
}
__name(lo, 'lo');
function po(t) {
  return typeof t == 'bigint';
}
__name(po, 'po');
function xo(t) {
  return !t;
}
__name(xo, 'xo');
function mo(t) {
  return typeof t == 'function';
}
__name(mo, 'mo');
function ho(t) {
  return t === null;
}
__name(ho, 'ho');
function yo(t) {
  let e = t;
  return typeof e == 'object' && e !== null;
}
__name(yo, 'yo');
function So(t) {
  return typeof t == 'string';
}
__name(So, 'So');
function ko(t) {
  return t === void 0;
}
__name(ko, 'ko');
function Ro(t, e) {
  return t === e;
}
__name(Ro, 'Ro');
function Fo(t, e) {
  return t == e;
}
__name(Fo, 'Fo');
function Io() {
  return _.memory;
}
__name(Io, 'Io');
function jo(t, e) {
  let r = e,
    n = typeof r == 'number' ? r : void 0;
  (s().setFloat64(t + 8 * 1, f(n) ? 0 : n, true),
    s().setInt32(t + 4 * 0, !f(n), true));
}
__name(jo, 'jo');
function zo(t) {
  return t;
}
__name(zo, 'zo');
function Eo(t, e) {
  let r = e,
    n = typeof r == 'string' ? r : void 0;
  var o = f(n) ? 0 : g(n, _.__wbindgen_malloc, _.__wbindgen_realloc),
    i = b;
  (s().setInt32(t + 4 * 1, i, true), s().setInt32(t + 4 * 0, o, true));
}
__name(Eo, 'Eo');
function qo(t, e) {
  return u(t, e);
}
__name(qo, 'qo');
function Ao(t, e) {
  throw new Error(u(t, e));
}
__name(Ao, 'Ao');
var tt = new WebAssembly.Instance(Mo, { './index_bg.js': l });
C(tt.exports);
tt.exports.__wbindgen_start?.();
var F = class extends vo {
  static {
    __name(this, 'F');
  }
  async fetch(e) {
    return await U(e, this.env, this.ctx);
  }
  async queue(e) {
    return await D(e, this.env, this.ctx);
  }
  async scheduled(e) {
    return await (void 0)(e, this.env, this.ctx);
  }
};
var To = [
  'IntoUnderlyingByteSource',
  'IntoUnderlyingSink',
  'IntoUnderlyingSource',
  'MinifyConfig',
  'PolishConfig',
  'R2Range',
  'RequestRedirect',
  'fetch',
  'queue',
  'scheduled',
  'getMemory',
];
Object.keys(l).map((t) => {
  To.includes(t) | t.startsWith('__') || (F.prototype[t] = l[t]);
});
var Do = F;

// ../../test/goworker/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
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

// ../../test/goworker/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
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

// .wrangler/tmp/bundle-WcxG85/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default,
];
var middleware_insertion_facade_default = Do;

// ../../test/goworker/node_modules/wrangler/templates/middleware/common.ts
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

// .wrangler/tmp/bundle-WcxG85/middleware-loader.entry.ts
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
  j as AlarmObject,
  z as AutoResponseObject,
  E as Counter,
  q as IntoUnderlyingByteSource,
  A as IntoUnderlyingSink,
  x as IntoUnderlyingSource,
  m as MinifyConfig,
  M as MyClass,
  bt as PolishConfig,
  v as PutRawTestObject,
  T as R2Range,
  gt as RequestRedirect,
  L as SqlCounter,
  O as SqlIterator,
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  mt as __wbg_String_8f0eb39a4a4c2f66,
  ht as __wbg_abort_775ef1d17fc65868,
  yt as __wbg_acceptWebSocket_3cae1959970c57b6,
  St as __wbg_accept_5f2d86d120bad60c,
  kt as __wbg_addEventListener_90e553fdce254421,
  Rt as __wbg_all_97f4b3be03650e40,
  Ft as __wbg_append_8c7dd8d641a5f01b,
  It as __wbg_arrayBuffer_37ea85bfa7693acc,
  jt as __wbg_arrayBuffer_723b6f27bf8203b4,
  zt as __wbg_arrayBuffer_f18c144cd0125f07,
  Et as __wbg_batch_44ed2cf324ae14d1,
  qt as __wbg_bind_4bc5dc5c27885233,
  At as __wbg_body_018617e858cb7195,
  Mt as __wbg_body_0b8fd1fe671660df,
  vt as __wbg_body_9353d39203ed376e,
  Tt as __wbg_buffer_09165b52af8c5237,
  Lt as __wbg_buffer_609cc3eee51ed158,
  Ot as __wbg_byobRequest_77d9adf63337edfb,
  Ct as __wbg_byteLength_e674b853d9c77e1d,
  Wt as __wbg_byteOffset_fd862df290ef848d,
  Dt as __wbg_cacheControl_90e5617a64924790,
  Ut as __wbg_cacheExpiry_1d86f3c3f7d80f63,
  Bt as __wbg_caches_283b4bd5a6b4a384,
  Nt as __wbg_call_672a4d21634d4a24,
  Pt as __wbg_call_7cccdd69e0791ae2,
  Vt as __wbg_call_833bed5770ea2041,
  $t as __wbg_call_b8adc8b1d0a0d8eb,
  Jt as __wbg_cancel_8a308660caa6cadf,
  Ht as __wbg_catch_a6e601879b2610e9,
  Gt as __wbg_cause_9940c4e8dfcd5129,
  Xt as __wbg_cf_2838b79b75741efd,
  Kt as __wbg_cf_c0193c570a7f7867,
  Qt as __wbg_clearTimeout_a4a1c8c379e0a240,
  Yt as __wbg_clone_2db2a99cd08951ef,
  Zt as __wbg_clone_74c1bc948bcfa805,
  te as __wbg_close_2893b7d056a0627d,
  ee as __wbg_close_304cc1fef3466669,
  re as __wbg_close_3c756df9a6f53aac,
  ne as __wbg_close_5ce03e29be453811,
  _e as __wbg_close_e1253d480ed93ce3,
  oe as __wbg_close_f017945a5808791e,
  ce as __wbg_closed_a0bf5b9cd2d7cb69,
  se as __wbg_columnNames_c7eabf57db01c36a,
  ue as __wbg_complete_16f243e000071e0a,
  ie as __wbg_connect_154a390d8e5f747d,
  ae as __wbg_constructor_9fd96f589d65d4e5,
  fe as __wbg_contentDisposition_b1cd38536c3d2b93,
  be as __wbg_contentEncoding_548773071e3ad58c,
  ge as __wbg_contentLanguage_a3b822305e5f0156,
  we as __wbg_contentType_9d423cea95772690,
  de as __wbg_count_fa7e9e9408fc2434,
  le as __wbg_createMultipartUpload_bf42449f48b5f882,
  pe as __wbg_cursor_43fb372d2de39fc7,
  xe as __wbg_customMetadata_8796380652674d7f,
  me as __wbg_data_432d9c3df2630942,
  he as __wbg_debug_3cb59063b29f58c1,
  ye as __wbg_default_7364beb918936bbb,
  Se as __wbg_deleteAll_37af9e104ea77a80,
  ke as __wbg_delete_0fb18b3c5f50d746,
  Re as __wbg_delete_3dc04e61a00e7d6c,
  Fe as __wbg_delete_4dbf2ceafab4f543,
  Ie as __wbg_delete_8b514d320105b701,
  je as __wbg_delete_e1c3d7790c846680,
  ze as __wbg_deserializeAttachment_a051ee6af9b71717,
  Ee as __wbg_done_769e5ede4b31c67b,
  qe as __wbg_dump_120f94a7c9b5685e,
  Ae as __wbg_enqueue_bb16ba72f537dc9e,
  Me as __wbg_entries_2a52db465d0421fb,
  ve as __wbg_entries_3265d4158b33e5dc,
  Te as __wbg_error_0554b4a81edb112e,
  Le as __wbg_error_469aed1589cf24bd,
  Oe as __wbg_error_524f506f44df1645,
  Ce as __wbg_error_7534b8e9a36f1ab4,
  We as __wbg_exec_4c97c334f93143bd,
  De as __wbg_exec_d23552dd0bb0bb3e,
  Ue as __wbg_fetch_07cd86dd296a5a63,
  Be as __wbg_fetch_2da419231079cfef,
  Ne as __wbg_fetch_2f14bc827d5ab632,
  Pe as __wbg_fetch_79398949f1862502,
  Ve as __wbg_fetch_99afe512e4ada8ac,
  $e as __wbg_fetch_99bc5ac47abbc8e8,
  Je as __wbg_fetch_f7a75a7e295f4028,
  He as __wbg_first_d0f4e5195279f73f,
  Ge as __wbg_formData_7aedb7bd836f6784,
  Xe as __wbg_from_2a5d3e218e67aa85,
  Ke as __wbg_getAll_c2b1d5aaeec30fd9,
  Qe as __wbg_getRandomValues_38097e921c2494c3,
  Ye as __wbg_getRandomValues_3c9c0d586e575a16,
  Ze as __wbg_getReader_48e00749fe3f6089,
  tr as __wbg_getReader_be0d36e5873a525b,
  er as __wbg_getTime_46267b1c24877e30,
  rr as __wbg_getWebSocketAutoResponse_d83d6a43a889ad46,
  nr as __wbg_getWriter_6ce182d0adc3f96b,
  _r as __wbg_get_12ea76524b923a64,
  or as __wbg_get_13495dac72693ecc,
  cr as __wbg_get_67b2ba62fc30de12,
  sr as __wbg_get_85c3d71662a108c8,
  ur as __wbg_get_9103d5f5975814c4,
  ir as __wbg_get_92e348efaf63349e,
  ar as __wbg_get_9f4cbe1f49a7ad17,
  fr as __wbg_get_a6a978bfc2b34135,
  br as __wbg_get_b9b93047fe3cf45b,
  gr as __wbg_getdone_d47073731acd3e74,
  wr as __wbg_getvalue_009dcd63692bee1f,
  dr as __wbg_getwithrefkey_1dc361bd10053bfe,
  lr as __wbg_has_5d847d18e68af525,
  pr as __wbg_headers_7852a8ea641c1379,
  xr as __wbg_headers_9cb51cfd2ac780a4,
  mr as __wbg_httpMetadata_bd34ae411065b407,
  hr as __wbg_idFromName_4374477da06d944f,
  yr as __wbg_id_547e549b2409b467,
  Sr as __wbg_id_617f06db9ba6d82f,
  kr as __wbg_instanceof_ArrayBuffer_e14585432e3737fc,
  Rr as __wbg_instanceof_Error_4d54113b22d20306,
  Fr as __wbg_instanceof_File_a4e2256bf71955a9,
  Ir as __wbg_instanceof_Map_f3469ce2244d2430,
  jr as __wbg_instanceof_Object_7f2dcef8f78644a4,
  zr as __wbg_instanceof_ReadableStreamDefaultReader_056dcea99b3557aa,
  Er as __wbg_instanceof_ReadableStream_87eac785b90f3611,
  qr as __wbg_instanceof_Response_f2cc20d9f7dfd644,
  Ar as __wbg_instanceof_Uint8Array_17156bcf118086a9,
  Mr as __wbg_isArray_a1eab7e0d067391b,
  vr as __wbg_isSafeInteger_343e2beeeece1bb0,
  Tr as __wbg_iterator_9a24c88df860dc65,
  Lr as __wbg_json_a00f187c0be01957,
  Or as __wbg_keys_4e7df9a04572b339,
  Cr as __wbg_keys_5c77a08ddc2fb8a6,
  Wr as __wbg_latitude_b5e5a29ea0874f6f,
  Dr as __wbg_length_a446193dc22c12f8,
  Ur as __wbg_length_e2d2a49132c1b256,
  Br as __wbg_list_1fa5acdf4ea613b7,
  Nr as __wbg_list_b707f573d84a22b2,
  Pr as __wbg_log_c222819a41e063d3,
  Vr as __wbg_longitude_a73f404bbb9c3a7f,
  $r as __wbg_match_487efc50ade117f6,
  Jr as __wbg_match_d248198bd9f58be9,
  Hr as __wbg_message_97a2af9b89d693a3,
  Gr as __wbg_messages_fa8f7b695962ae86,
  Xr as __wbg_method_3dcc854b644c5a56,
  Kr as __wbg_minifyconfig_new,
  Qr as __wbg_name_16617c8e9d4188ac,
  Yr as __wbg_name_28c43f147574bf08,
  Zr as __wbg_name_45da8c15af59f19e,
  tn as __wbg_new0_f788a2397c7ca929,
  en as __wbg_newUniqueId_984eae411a14eed6,
  rn as __wbg_new_018dcc2d6c8c2f6a,
  nn as __wbg_new_23a2665fac83c611,
  _n as __wbg_new_31a97dac4f10fab7,
  on as __wbg_new_405e22f390576ce2,
  cn as __wbg_new_4962d1c4b3bb125c,
  sn as __wbg_new_5e0be73521bc8c17,
  un as __wbg_new_78feb108b6472713,
  an as __wbg_new_795a73e1af166114,
  fn as __wbg_new_8a6f238a6ece86ea,
  bn as __wbg_new_a12002a7f91c75be,
  gn as __wbg_new_c68d7209be747379,
  wn as __wbg_new_d2a283e31ff39bb0,
  dn as __wbg_new_e25e5aab09ff45db,
  ln as __wbg_newbigint_10c374fd164fe4ab,
  pn as __wbg_newnoargs_105ed471475aaf50,
  xn as __wbg_newwithbyteoffsetandlength_d97e637ebe145a9a,
  mn as __wbg_newwithheaders_77fd1e80b866c52e,
  hn as __wbg_newwithintounderlyingsource_b47f6a6a596a7f24,
  yn as __wbg_newwithlength_a381634e90c276d4,
  Sn as __wbg_newwithoptbuffersourceandinit_fb8ed95e326eb3a1,
  kn as __wbg_newwithoptreadablestreamandinit_e7fabd7063fd0b3e,
  Rn as __wbg_newwithoptstrandinit_615a266ef226c260,
  Fn as __wbg_newwithstrandinit_06c535e0a867c635,
  In as __wbg_next_25feadfc0913fea9,
  jn as __wbg_next_4c79a94b6222a9f8,
  zn as __wbg_next_6574e1a8a62d1055,
  En as __wbg_objects_e2c175fa170b0cb2,
  qn as __wbg_opened_1166b0cab72ac0cf,
  An as __wbg_pipeTo_b76c076e3742cf0e,
  Mn as __wbg_prepare_fb717c93715b0944,
  vn as __wbg_push_737cfc8c1432c2c6,
  Tn as __wbg_put_73aa2591ef745a67,
  Ln as __wbg_put_75886410036f9ae5,
  On as __wbg_put_84c8baf384339073,
  Cn as __wbg_put_9d65a8ef54324b03,
  Wn as __wbg_put_c559e3676c760729,
  Dn as __wbg_queueMicrotask_97d92b4fcc8a61c5,
  Un as __wbg_queueMicrotask_d3219def82552485,
  Bn as __wbg_raw_1778ea87943f3dbb,
  Nn as __wbg_raw_78be088f4fcc909f,
  Pn as __wbg_read_a2434af1186cb56c,
  Vn as __wbg_readable_10ff8642138544c3,
  $n as __wbg_readable_34c8b81a53682e9b,
  Jn as __wbg_redirect_2b22100df3618cb1,
  Hn as __wbg_redirect_a642142835c6b919,
  Gn as __wbg_region_b277fa8eeea431fa,
  Xn as __wbg_releaseLock_091899af97991d2e,
  Kn as __wbg_releaseLock_a389e6ea62ce0f4d,
  Qn as __wbg_removeEventListener_056dfe8c3d6c58f9,
  Yn as __wbg_request_e42dc8a392041d58,
  Zn as __wbg_resolve_4851785c9c5f573d,
  t_ as __wbg_respond_1f279fa9f8edcb1c,
  e_ as __wbg_response_537ed42701db0cd4,
  r_ as __wbg_results_d272a847e8175af7,
  n_ as __wbg_run_88b3b84fc0c7a21a,
  __ as __wbg_sendBatch_1ea3acfcb29166fe,
  o_ as __wbg_send_0293179ba074ffb4,
  c_ as __wbg_send_55b5805d01d28f34,
  s_ as __wbg_serializeAttachment_c5b130b57cce44c3,
  u_ as __wbg_setAlarm_f14d42ac6616407d,
  i_ as __wbg_setTimeout_b4ee584b3f982e97,
  a_ as __wbg_setWebSocketAutoResponse_755f888689636f02,
  f_ as __wbg_set_11cd83f45504cedf,
  b_ as __wbg_set_37837023f3d740e8,
  g_ as __wbg_set_3f1d0b984ed272ed,
  w_ as __wbg_set_65595bdd868b3009,
  d_ as __wbg_set_8fc6bf8a5b1071d1,
  l_ as __wbg_set_bb8cecf6a62b9f46,
  C as __wbg_set_wasm,
  p_ as __wbg_setbody_5923b78a95eedf29,
  x_ as __wbg_setheaders_3b47c898e8de6d44,
  m_ as __wbg_setheaders_834c0bdb6a8949ad,
  h_ as __wbg_sethighwatermark_793c99c89830c8e9,
  y_ as __wbg_setignoremethod_771e0e5e0ead154d,
  S_ as __wbg_setmethod_3c5280fe5d890842,
  k_ as __wbg_setredirect_40e6a7f717a2f86a,
  R_ as __wbg_setsignal_75b21ef3a81de905,
  F_ as __wbg_setstatus_51b4fc011091cbb3,
  I_ as __wbg_signal_aaf9ad74119f20a4,
  j_ as __wbg_sql_76d751e758a53004,
  z_ as __wbg_stack_0ed75d68575b0f3c,
  E_ as __wbg_static_accessor_GLOBAL_88a902d13a557d07,
  q_ as __wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0,
  A_ as __wbg_static_accessor_SELF_37c5d418e4bf5819,
  M_ as __wbg_static_accessor_WINDOW_5de37043a91a9c40,
  v_ as __wbg_status_f6360336ca686bf0,
  T_ as __wbg_storage_684e518f992d6055,
  L_ as __wbg_stringify_f7ed6987935b4a24,
  O_ as __wbg_success_889d00ba25cc3697,
  C_ as __wbg_text_f0840e8edc374fa1,
  W_ as __wbg_then_44b73946d2fb3e7d,
  D_ as __wbg_then_48b406749878a531,
  U_ as __wbg_timestamp_2084946ca16ec748,
  B_ as __wbg_toArray_f5de648bc97caaa9,
  N_ as __wbg_toString_c2706c99b8d0dfdc,
  P_ as __wbg_toString_c813bbd34d063839,
  V_ as __wbg_toString_c9b649be8d242a59,
  $_ as __wbg_truncated_a70ba0aab54f4638,
  J_ as __wbg_uploadPart_12b3d3c9b724c006,
  H_ as __wbg_url_8f9653b899456042,
  G_ as __wbg_value_cd1ffa7b1ab794f1,
  X_ as __wbg_view_fd8a56e8983f448d,
  K_ as __wbg_webSocket_f2b16e8c6b3f36fe,
  Q_ as __wbg_writable_5e99953409b5a08a,
  Y_ as __wbg_writable_f44b088134084930,
  Z_ as __wbg_writeDataPoint_4a32c93ae3223edf,
  to as __wbg_write_311434e30ee214e5,
  eo as __wbindgen_as_number,
  ro as __wbindgen_bigint_from_i64,
  no as __wbindgen_bigint_from_u64,
  _o as __wbindgen_bigint_get_as_i64,
  oo as __wbindgen_boolean_get,
  co as __wbindgen_cb_drop,
  so as __wbindgen_closure_wrapper4877,
  uo as __wbindgen_closure_wrapper4879,
  io as __wbindgen_closure_wrapper4881,
  ao as __wbindgen_closure_wrapper4883,
  fo as __wbindgen_closure_wrapper6767,
  bo as __wbindgen_debug_string,
  go as __wbindgen_error_new,
  wo as __wbindgen_in,
  lo as __wbindgen_init_externref_table,
  po as __wbindgen_is_bigint,
  xo as __wbindgen_is_falsy,
  mo as __wbindgen_is_function,
  ho as __wbindgen_is_null,
  yo as __wbindgen_is_object,
  So as __wbindgen_is_string,
  ko as __wbindgen_is_undefined,
  Ro as __wbindgen_jsval_eq,
  Fo as __wbindgen_jsval_loose_eq,
  Io as __wbindgen_memory,
  jo as __wbindgen_number_get,
  zo as __wbindgen_number_new,
  Eo as __wbindgen_string_get,
  qo as __wbindgen_string_new,
  Ao as __wbindgen_throw,
  middleware_loader_entry_default as default,
  U as fetch,
  D as queue,
  ut as start,
  Mo as wasmModule,
};
//# sourceMappingURL=shim.js.map
