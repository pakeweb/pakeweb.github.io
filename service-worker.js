/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "692049d17e4dfffd62fe6ff2ccb0a1e6"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "0b575074f0c2b4619c057bb3c9a915c4"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "6e4673fc39c78b2806f2f49a020f4bcb"
  },
  {
    "url": "assets/css/0.styles.6b2ab847.css",
    "revision": "c311d12f6e48871dc355337a4061ee2c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.60dd6810.js",
    "revision": "ac4f5fa1c130478bd4b7fad8ea4389da"
  },
  {
    "url": "assets/js/3.ebd34f67.js",
    "revision": "b7655e97f4338d3e44fbe308b55f5d86"
  },
  {
    "url": "assets/js/4.8b1fd65d.js",
    "revision": "54b38c236d330ce76c407c4101f6d639"
  },
  {
    "url": "assets/js/5.684b19bb.js",
    "revision": "456ef8afe352acd520f2f4aadd7d5c27"
  },
  {
    "url": "assets/js/6.579e5b10.js",
    "revision": "ec9431d2814ab5932acce61a0dc0a2aa"
  },
  {
    "url": "assets/js/7.fd11d87f.js",
    "revision": "3729ad808ddd4d307d2cc8c3b622c932"
  },
  {
    "url": "assets/js/8.fa61c755.js",
    "revision": "7a1ce5c4b336b40f6916b440aebd1df0"
  },
  {
    "url": "assets/js/9.c17ab832.js",
    "revision": "db52875170193e9a106dd3814deebfa1"
  },
  {
    "url": "assets/js/app.53dbbf8e.js",
    "revision": "d14a68599a7bdada7d9f66c4986ea37f"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "41b1c9c8589b9053abd104f583a9e3a5"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "c8cc0948f732c8e2f302db079906bb69"
  },
  {
    "url": "hubungi/index.html",
    "revision": "f9355c1271a0b2c4f274316cf379fd81"
  },
  {
    "url": "ikhtisar/index.html",
    "revision": "bdc45938c032db9e2efa695429790218"
  },
  {
    "url": "index.html",
    "revision": "efc5a735979309c8e70bc7f2357379d2"
  },
  {
    "url": "logo.png",
    "revision": "a1cec40fb13bc24d7a64f255c2c0691f"
  },
  {
    "url": "logo.svg",
    "revision": "7085db9568854417e730fd29fc9d48f9"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "e046803ccdfbcefd789bf8d29c3ebe34"
  },
  {
    "url": "pengajuan/index.html",
    "revision": "dfd500294d642936f944c15b24f0d530"
  },
  {
    "url": "pengembang/index.html",
    "revision": "4ec0486f82ba55b74b98d5fd97476869"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "86d30a15b062ed53ab83428be266e8a2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
