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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "04357de253ba54558c8204a667caf5c5"
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
    "url": "assets/css/1.styles.9295458e.css",
    "revision": "a135266dac0a88cf1a8695348ab87cb3"
  },
  {
    "url": "assets/css/2.styles.00f59afd.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/3.styles.3d0a7854.css",
    "revision": "4c1baffbb845ed97e8b716a07fc301fa"
  },
  {
    "url": "assets/css/styles.58848016.css",
    "revision": "6372a1a10a308e36e245ce10219b348b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.9295458e.js",
    "revision": "6106249749a899d3d5f205a5acc919be"
  },
  {
    "url": "assets/js/2.00f59afd.js",
    "revision": "a2765da04006b53b95c7f8a4d8ef3af0"
  },
  {
    "url": "assets/js/3.3d0a7854.js",
    "revision": "febd736d7e764bea40c0aaa98163dd21"
  },
  {
    "url": "assets/js/4.e701dc1a.js",
    "revision": "6da0dc8a2b4f3179c3ac30d1ad97e200"
  },
  {
    "url": "assets/js/5.0d6635a1.js",
    "revision": "62c92c0c13f69fb936f9cb81a9d96cf0"
  },
  {
    "url": "assets/js/6.3c934fe9.js",
    "revision": "d503c49bb1da85dabc84804dfe78ede8"
  },
  {
    "url": "assets/js/7.dd44915d.js",
    "revision": "a962399d0554988f3390353df9bcd4e6"
  },
  {
    "url": "assets/js/8.927f9a5c.js",
    "revision": "0192426249160c0a9349cc6ed662dc81"
  },
  {
    "url": "assets/js/app.58848016.js",
    "revision": "00f11d050bbe4c03df62037e52ea239f"
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
    "revision": "2bd87d14d70db41bca171d20ffaad925"
  },
  {
    "url": "ikhtisar/index.html",
    "revision": "042b9669d04af6c797c72b5267224295"
  },
  {
    "url": "index.html",
    "revision": "89561bd6bdbf0397d90314c605738442"
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
    "revision": "75f304624e9cf5e8bd06a7fb3cdb13ce"
  },
  {
    "url": "pengembang/index.html",
    "revision": "23c8a6ec9b38e1b88fa8b9ca5cbafd3c"
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
