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
    "revision": "a4cf55e7da30d04345b5ea794a1621c6"
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
    "url": "assets/css/1.styles.e7075a6d.css",
    "revision": "d38955a642d7927d065b47547db8d5b2"
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
    "url": "assets/css/styles.2c28d648.css",
    "revision": "05208d69d45170a3786622ebaff7870d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.e7075a6d.js",
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
    "url": "assets/js/app.2c28d648.js",
    "revision": "2f0d2fb091c9454271724bb068bceb21"
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
    "revision": "a51103ddcb9187995777939e20811ce5"
  },
  {
    "url": "ikhtisar/index.html",
    "revision": "067baca41db2a94baa1552457c3b5cc4"
  },
  {
    "url": "index.html",
    "revision": "0fc6a7e99c4b5a78dafb96d12e9abdd0"
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
    "revision": "5410ddac8694920184dcf376fdfd2f7a"
  },
  {
    "url": "pengembang/index.html",
    "revision": "8910cde0a5323ff776614226f382dfa3"
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
