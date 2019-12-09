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

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1-e7701dd793de080f8174.js"
  },
  {
    "url": "1-e7701dd793de080f8174.js.br",
    "revision": "aeca58e574ae038f21152a3d710a7685"
  },
  {
    "url": "1-e7701dd793de080f8174.js.gz",
    "revision": "1dc0f8e8ed3e0ce367468a60741cbf60"
  },
  {
    "url": "1-e7701dd793de080f8174.js.map",
    "revision": "3d2527d9764c20174770847b1dabd816"
  },
  {
    "url": "15-b4ba9b29dd55c808a7bb.js"
  },
  {
    "url": "15-b4ba9b29dd55c808a7bb.js.br",
    "revision": "79f428de18c6266721c296f4b8ae054a"
  },
  {
    "url": "15-b4ba9b29dd55c808a7bb.js.gz",
    "revision": "c9ccad62872557ec4e02bcd1512db845"
  },
  {
    "url": "15-b4ba9b29dd55c808a7bb.js.map",
    "revision": "ff159433d700e4e55b4e764bd298ae18"
  },
  {
    "url": "16-f21d7cec96f6940ed4dd.js"
  },
  {
    "url": "16-f21d7cec96f6940ed4dd.js.br",
    "revision": "24246975f08fcf747b6f0c36df2697e5"
  },
  {
    "url": "16-f21d7cec96f6940ed4dd.js.gz",
    "revision": "1dea59422ae3beddbb3f0fe6dcdf5c93"
  },
  {
    "url": "16-f21d7cec96f6940ed4dd.js.map",
    "revision": "4d2cc4705a0ca2dbbef54fe3d47eebb0"
  },
  {
    "url": "2-56820a32c3a8b306ab55.js"
  },
  {
    "url": "2-56820a32c3a8b306ab55.js.br",
    "revision": "b671e952e00dae0e6a769661a209a38c"
  },
  {
    "url": "2-56820a32c3a8b306ab55.js.gz",
    "revision": "671b334ed862840122baff259357cd5a"
  },
  {
    "url": "2-56820a32c3a8b306ab55.js.map",
    "revision": "f5e269f670278cbe3db62adb8ed8c8e3"
  },
  {
    "url": "404.html",
    "revision": "0ffbf2d0f1322de1882625c25299f814"
  },
  {
    "url": "404/index.html",
    "revision": "507897400d4a9720abd02a89cea42fc1"
  },
  {
    "url": "about/index.html",
    "revision": "727cf3eaed350fc14a1a7f30ec4a80f5"
  },
  {
    "url": "app-4c80d247b75da121a058.js"
  },
  {
    "url": "app-4c80d247b75da121a058.js.br",
    "revision": "ddbbfb7f2a81492de415e7414bcbe538"
  },
  {
    "url": "app-4c80d247b75da121a058.js.gz",
    "revision": "176be5878f71af2877b963c4c7338170"
  },
  {
    "url": "app-4c80d247b75da121a058.js.map",
    "revision": "7c01b46fd63e878d50ef6870c62b9093"
  },
  {
    "url": "chunk-map.json",
    "revision": "5cf914091ca38a71b596e8a95d03b75a"
  },
  {
    "url": "code-of-conduct/index.html",
    "revision": "e6530678f352cc9b98bfc80c186cb2d2"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-a068f64759391d931def.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-a068f64759391d931def.js.br",
    "revision": "3c873be8776444144f6c796864d338e6"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-a068f64759391d931def.js.gz",
    "revision": "fa0b8b5c3cc5556755d4381574bfe940"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-a068f64759391d931def.js.map",
    "revision": "364357a519808d44a336cd6f5f97d13f"
  },
  {
    "url": "component---src-pages-404-js-98a6d73213dfdb7a17e6.js"
  },
  {
    "url": "component---src-pages-404-js-98a6d73213dfdb7a17e6.js.br",
    "revision": "74d00ffdecdd8110dfa8da0ef336a201"
  },
  {
    "url": "component---src-pages-404-js-98a6d73213dfdb7a17e6.js.gz",
    "revision": "9f2d0c32c5c6f7597cdea42d70715b85"
  },
  {
    "url": "component---src-pages-404-js-98a6d73213dfdb7a17e6.js.map",
    "revision": "34c442e0625a106e2a049101e89d847b"
  },
  {
    "url": "component---src-pages-about-tsx-bf7f48e0b1158fe56b17.js"
  },
  {
    "url": "component---src-pages-about-tsx-bf7f48e0b1158fe56b17.js.br",
    "revision": "d53f0ccfdc1f72e810da1f52ee5ccaa5"
  },
  {
    "url": "component---src-pages-about-tsx-bf7f48e0b1158fe56b17.js.gz",
    "revision": "5dc045307a188715c1e2d6bc8522a876"
  },
  {
    "url": "component---src-pages-about-tsx-bf7f48e0b1158fe56b17.js.map",
    "revision": "1138b0574036cd2a90c7f3659c92aa8a"
  },
  {
    "url": "component---src-pages-index-tsx-c1562d747f45e83913b1.js"
  },
  {
    "url": "component---src-pages-index-tsx-c1562d747f45e83913b1.js.br",
    "revision": "4e14bad23451004f3e197ccc816b6786"
  },
  {
    "url": "component---src-pages-index-tsx-c1562d747f45e83913b1.js.gz",
    "revision": "f5c38cbf5cf7651b2750c0c1b059090f"
  },
  {
    "url": "component---src-pages-index-tsx-c1562d747f45e83913b1.js.map",
    "revision": "67b79b3d1c51d4313a39dd4fb898bdaa"
  },
  {
    "url": "component---src-pages-schedule-tsx-4fdd2f88098b5553e3d8.js"
  },
  {
    "url": "component---src-pages-schedule-tsx-4fdd2f88098b5553e3d8.js.br",
    "revision": "b50244501c7c70945a351e05d3898842"
  },
  {
    "url": "component---src-pages-schedule-tsx-4fdd2f88098b5553e3d8.js.gz",
    "revision": "d2be9b3fee9d60a094b0200f16b2bc5d"
  },
  {
    "url": "component---src-pages-schedule-tsx-4fdd2f88098b5553e3d8.js.map",
    "revision": "9c1dc42f9f851170f9b1fca8b63d79e1"
  },
  {
    "url": "component---src-pages-speakers-tsx-59e1116ee9e5f6c71f66.js"
  },
  {
    "url": "component---src-pages-speakers-tsx-59e1116ee9e5f6c71f66.js.br",
    "revision": "fbb58e7a6b9dbb70e0b483cba44a92ef"
  },
  {
    "url": "component---src-pages-speakers-tsx-59e1116ee9e5f6c71f66.js.gz",
    "revision": "f8227007d4c012a358ad44b0c7c508b2"
  },
  {
    "url": "component---src-pages-speakers-tsx-59e1116ee9e5f6c71f66.js.map",
    "revision": "538e4c6239536110e279b2913864360b"
  },
  {
    "url": "component---src-pages-sponsors-tsx-32606382ea14edc5513f.js"
  },
  {
    "url": "component---src-pages-sponsors-tsx-32606382ea14edc5513f.js.br",
    "revision": "8da4a9a5656768bd0876ece90438430d"
  },
  {
    "url": "component---src-pages-sponsors-tsx-32606382ea14edc5513f.js.gz",
    "revision": "34d03f5fde35972304483507d82e2392"
  },
  {
    "url": "component---src-pages-sponsors-tsx-32606382ea14edc5513f.js.map",
    "revision": "453e8e00dd33ae8275f3ff49c00afdc2"
  },
  {
    "url": "component---src-pages-venue-tsx-4ca172cc9672dd12691f.js"
  },
  {
    "url": "component---src-pages-venue-tsx-4ca172cc9672dd12691f.js.br",
    "revision": "35d543b196c975bbeffd5711e83f0931"
  },
  {
    "url": "component---src-pages-venue-tsx-4ca172cc9672dd12691f.js.gz",
    "revision": "eadd3bd553f4a7f8bdd5a3c64b9ac378"
  },
  {
    "url": "component---src-pages-venue-tsx-4ca172cc9672dd12691f.js.map",
    "revision": "12ed016cc988f8459d436ab3749516dc"
  },
  {
    "url": "component---src-templates-markdown-tsx-888eefed66a40f08a3db.js"
  },
  {
    "url": "component---src-templates-markdown-tsx-888eefed66a40f08a3db.js.br",
    "revision": "b02afb6d5a346fab21cff1bea6afc09f"
  },
  {
    "url": "component---src-templates-markdown-tsx-888eefed66a40f08a3db.js.gz",
    "revision": "a3ae3fdb2cc8831c0c270d7d16c6c347"
  },
  {
    "url": "component---src-templates-markdown-tsx-888eefed66a40f08a3db.js.map",
    "revision": "bfd3c6e132f3621ed552fa026ca81293"
  },
  {
    "url": "component---src-templates-speaker-tsx-e5a8ee310ca70289af63.js"
  },
  {
    "url": "component---src-templates-speaker-tsx-e5a8ee310ca70289af63.js.br",
    "revision": "68030b664b19e5422699a9a0962342c1"
  },
  {
    "url": "component---src-templates-speaker-tsx-e5a8ee310ca70289af63.js.gz",
    "revision": "f258d06c2b4015dbf4f814d65ebb048e"
  },
  {
    "url": "component---src-templates-speaker-tsx-e5a8ee310ca70289af63.js.map",
    "revision": "9c7b588771a50d18698ae764b52a3d2e"
  },
  {
    "url": "google-fonts/s/lato/v16/S6u9w4BMUTPHh6UVSwiPGQ.woff2",
    "revision": "1efbd38aa76ddae2580fedf378276333"
  },
  {
    "url": "google-fonts/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHw.woff",
    "revision": "874b8e7bc7e8d1507b50f56bc6c9b536"
  },
  {
    "url": "google-fonts/s/lato/v16/S6uyw4BMUTPHjx4wWA.woff",
    "revision": "b8ee546acd6cc0c49f42ad3d48ef244f"
  },
  {
    "url": "google-fonts/s/lato/v16/S6uyw4BMUTPHjx4wXg.woff2",
    "revision": "b4d2c4c39853ee244272c04999b230ba"
  },
  {
    "url": "google4d18b7e4a790d37f.html",
    "revision": "b9c04b88707649edf67f8cc3387a24f4"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "c878ff092131976481099b7df06ecc97"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "7c7955e7d500b1d5d8390f18f240c897"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "27ded74f849903a8c765455f78755580"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "0e24538d9af271f8fbc72952abfe10aa"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "3d549be00e838f01cd8c5f80f90ed2db"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "47ead121a4ceb8e15cb6cc79cead514e"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "f8c6dec9cf74451e5541ac278d53aea2"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "9e839c2edb34a88be044c24b33d4d7a1"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "5ea14edd11f9f0ed600fb770804593a1"
  },
  {
    "url": "jp-specified-commercial-transactions-act/index.html",
    "revision": "3d32ecf661293c96002c8d4a2823b358"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "b0b98e0dc73e8e051aee487d7bde6f36"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "f34d33f287df9d6c0f886f16faa6ca9b"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "36ffa7ea1e1dfc9d2fa06a47bb7e0613"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "a78fa470ed8600833b8fde0dc241ff6d"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "24e78bb482ec91407386940dfaf2b486"
  },
  {
    "url": "page-data/code-of-conduct/page-data.json",
    "revision": "42c5709b9782dac5ba181a879c4cebfa"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "e1dbbe6a8a0891b2c9baa55c70259e8b"
  },
  {
    "url": "page-data/jp-specified-commercial-transactions-act/page-data.json",
    "revision": "4875b40460ed2af688f116b27f248b01"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "4bf3c074478c5acb04238ba7c351aa24"
  },
  {
    "url": "page-data/schedule/page-data.json",
    "revision": "85c5f2c404f4abe0732b2f2ef5155c44"
  },
  {
    "url": "page-data/speakers/page-data.json",
    "revision": "47b328523f85854e8e2e08f965267a64"
  },
  {
    "url": "page-data/sponsors/page-data.json",
    "revision": "413190fc2ab87fab85a19c40bdda6c11"
  },
  {
    "url": "page-data/talk/andrew-betts/page-data.json",
    "revision": "e8fb47553717885dd4ee41bd13e27bf8"
  },
  {
    "url": "page-data/talk/andy-hall/page-data.json",
    "revision": "15327f52825d0d69d28cf556dea25d98"
  },
  {
    "url": "page-data/talk/benjamin-gruenbaum/page-data.json",
    "revision": "bdbebafb12b71538af136f42cb841160"
  },
  {
    "url": "page-data/talk/claudia-hernandez/page-data.json",
    "revision": "eb41547c9c15effabe867c148f0cf6a0"
  },
  {
    "url": "page-data/talk/day1-break-A-12%3A00/page-data.json",
    "revision": "e7f3db043b3025a06936e294641d3e21"
  },
  {
    "url": "page-data/talk/day1-break-A-13%3A00/page-data.json",
    "revision": "d237d57b96acbba58c00dee98792ef0b"
  },
  {
    "url": "page-data/talk/day1-break-A-14%3A00/page-data.json",
    "revision": "d7ce74e4e987e602b519432308269123"
  },
  {
    "url": "page-data/talk/day1-break-A-15%3A15/page-data.json",
    "revision": "93bdd84578e8680a3525b6d992ddd8ef"
  },
  {
    "url": "page-data/talk/day1-break-A-16%3A30/page-data.json",
    "revision": "2d2d2ac9a09ed28e0b23a2cbe9d5f54b"
  },
  {
    "url": "page-data/talk/day1-break-A-17%3A45/page-data.json",
    "revision": "964adc8c203f9c71ea6da96d0035122f"
  },
  {
    "url": "page-data/talk/day1-break-A-19%3A35/page-data.json",
    "revision": "df8508bf513dd17c3ae4400a91801247"
  },
  {
    "url": "page-data/talk/day2-break-A-10%3A00/page-data.json",
    "revision": "c268a79d5cd9dc90050a9b10a24bacd9"
  },
  {
    "url": "page-data/talk/day2-break-A-12%3A00/page-data.json",
    "revision": "1e692ff0b09abc7496e1eceea27667cf"
  },
  {
    "url": "page-data/talk/day2-break-A-14%3A00/page-data.json",
    "revision": "59e7cabe091a5f4b1266bfeb2a4760cb"
  },
  {
    "url": "page-data/talk/day2-break-A-15%3A15/page-data.json",
    "revision": "3832653e736a1e4b3f2db52a79b063d8"
  },
  {
    "url": "page-data/talk/day2-break-A-16%3A30/page-data.json",
    "revision": "548be50aeaa230ae857a6f67423b5f79"
  },
  {
    "url": "page-data/talk/day2-break-A-17%3A45/page-data.json",
    "revision": "33b5c6533203f4d05c83728331b7b706"
  },
  {
    "url": "page-data/talk/day2-break-A-19%3A00/page-data.json",
    "revision": "3bb287a43f993ad5835965193810b7ab"
  },
  {
    "url": "page-data/talk/dominic-tarr/page-data.json",
    "revision": "578f304fccf20c079503415981befdf8"
  },
  {
    "url": "page-data/talk/dynamis/page-data.json",
    "revision": "d0aa6e2536bec69e9f7d4dc045ff8983"
  },
  {
    "url": "page-data/talk/eiji-kitamura/page-data.json",
    "revision": "1f9a332c61b6f9d73e45cf1b22f84c9b"
  },
  {
    "url": "page-data/talk/fred-schott/page-data.json",
    "revision": "dd2f1101f5fbbffaa265757035aa5473"
  },
  {
    "url": "page-data/talk/fuji-goro/page-data.json",
    "revision": "3229067ee43ab87b2cdd9cf4132e8a26"
  },
  {
    "url": "page-data/talk/ginpei-takanashi/page-data.json",
    "revision": "d8434fac2390ab2ee9e7d4be8f0c9534"
  },
  {
    "url": "page-data/talk/guillermo-rauch/page-data.json",
    "revision": "9591e6ce6afd76b40b28a57e38b663c8"
  },
  {
    "url": "page-data/talk/henry-zhu/page-data.json",
    "revision": "51c4f6bbea30f6d897801e8acefa2100"
  },
  {
    "url": "page-data/talk/hidetaka-okamoto/page-data.json",
    "revision": "3c1227d51c337f66954f9ce8afc5ea1f"
  },
  {
    "url": "page-data/talk/irina-shestak/page-data.json",
    "revision": "31c5de22d278f6f58e4c1cb5b20fadd2"
  },
  {
    "url": "page-data/talk/jarrod-overson/page-data.json",
    "revision": "191956128a48bac163fc09a8b85876af"
  },
  {
    "url": "page-data/talk/jennifer-wong/page-data.json",
    "revision": "c389ddea2f076ebd6da4792e01ba1eb7"
  },
  {
    "url": "page-data/talk/jonny-kalambay/page-data.json",
    "revision": "bee31eebc6507bb5029d3136628ee5ee"
  },
  {
    "url": "page-data/talk/jorge-bucaran/page-data.json",
    "revision": "f438bd41e7b16c47e9662e149624b27a"
  },
  {
    "url": "page-data/talk/jxck/page-data.json",
    "revision": "ae544eb6363d7602778af3d29d35b7fe"
  },
  {
    "url": "page-data/talk/kitson-kelly/page-data.json",
    "revision": "e31c8a4c4357d7d0b74f8ced3a2ecaac"
  },
  {
    "url": "page-data/talk/kohei-kido/page-data.json",
    "revision": "333951217aa713d6ab318c8d59f4329e"
  },
  {
    "url": "page-data/talk/lena-morita/page-data.json",
    "revision": "42d0a654c25517a40588052eb17ac671"
  },
  {
    "url": "page-data/talk/maria-clara/page-data.json",
    "revision": "0bfd34fafc250a03ef85f86e1bcb99d7"
  },
  {
    "url": "page-data/talk/mariko-kosaka/page-data.json",
    "revision": "d115f9a283f80fbdd5120830a726928f"
  },
  {
    "url": "page-data/talk/martin-splitt/page-data.json",
    "revision": "28c94ac50e63182c2db48749c9fe2a39"
  },
  {
    "url": "page-data/talk/masashi-ganeko/page-data.json",
    "revision": "7295b03ecd27b426e1e06fbe36bf2bb7"
  },
  {
    "url": "page-data/talk/masato-nishihara/page-data.json",
    "revision": "05a54937d8efc412c61cdb0132d3a6bf"
  },
  {
    "url": "page-data/talk/masato-ohba/page-data.json",
    "revision": "7fe2b365c11315f5adf3cc522a46a80f"
  },
  {
    "url": "page-data/talk/maxi-ferreira/page-data.json",
    "revision": "919ef6381e46361547c4d1c62c31a2c0"
  },
  {
    "url": "page-data/talk/nadieh-bremer/page-data.json",
    "revision": "40f243a378fc12b0c16a0272d16d49d9"
  },
  {
    "url": "page-data/talk/nazanin-delam/page-data.json",
    "revision": "3c77a2a424947979657405ec5f9c7d0e"
  },
  {
    "url": "page-data/talk/nobuhiko-sawai/page-data.json",
    "revision": "d3c3957e20006d689355d9dde4d4b15a"
  },
  {
    "url": "page-data/talk/okuno-kentaro/page-data.json",
    "revision": "bc2d0095e3e08ba0188559f9ce46ccbf"
  },
  {
    "url": "page-data/talk/praveen-yedidi/page-data.json",
    "revision": "fb571bee7a800799d00eff87c16b012d"
  },
  {
    "url": "page-data/talk/rowdy-rabouw/page-data.json",
    "revision": "af87fbc35e87b89a2981c52355ff2c12"
  },
  {
    "url": "page-data/talk/s-greif-r-benitte/page-data.json",
    "revision": "56c5ba594f867469f8a3b8d9f38609eb"
  },
  {
    "url": "page-data/talk/sakakibara/page-data.json",
    "revision": "1c315dc7e7beb2112a6f689b3d8d85ec"
  },
  {
    "url": "page-data/talk/sam-bellen/page-data.json",
    "revision": "792e6ccfd2f6f23535ac888330a0d934"
  },
  {
    "url": "page-data/talk/samuel-agnew/page-data.json",
    "revision": "2736795222e8cbdad8c5de104b37619b"
  },
  {
    "url": "page-data/talk/satoshi-ebihara/page-data.json",
    "revision": "13209a69a20e721d47aac338152f5f4d"
  },
  {
    "url": "page-data/talk/shirley-wu/page-data.json",
    "revision": "ad52052532e196634b549d408cb31e11"
  },
  {
    "url": "page-data/talk/sho-miyamoto/page-data.json",
    "revision": "9b143ca9fbf34564131f2b95960451b7"
  },
  {
    "url": "page-data/talk/sponsor-recruit/page-data.json",
    "revision": "999831e9fe905e19f15beb7bc3494f78"
  },
  {
    "url": "page-data/talk/sponsor-talk-1/page-data.json",
    "revision": "432ac1cf1fbe9f23b79b486166ca4314"
  },
  {
    "url": "page-data/talk/sponsor-talk-2/page-data.json",
    "revision": "571e3a64f1958921c1302081ff5e8f71"
  },
  {
    "url": "page-data/talk/sponsor-yahoo/page-data.json",
    "revision": "4b17f8862ad6ab4895a0102059e85c0d"
  },
  {
    "url": "page-data/talk/takeshi-kato/page-data.json",
    "revision": "9c0cd1e1900a9a490f97b9fa12316f33"
  },
  {
    "url": "page-data/talk/takuto-wada/page-data.json",
    "revision": "ce9dacb8ccb51565802c5095c4faa932"
  },
  {
    "url": "page-data/talk/tetsuharu-ohzeki/page-data.json",
    "revision": "42bb82d83a8eac939a96c9fdd6a47c2f"
  },
  {
    "url": "page-data/talk/toru-kobayashi/page-data.json",
    "revision": "e95a8910b165e758fcf9c001702f5881"
  },
  {
    "url": "page-data/talk/yoshiki-shibukawa/page-data.json",
    "revision": "f1abd543ecf806815ec3f602c24733e4"
  },
  {
    "url": "page-data/talk/yosuke-furukawa/page-data.json",
    "revision": "085edd96ed4201d6dd61237fb4d121b4"
  },
  {
    "url": "page-data/venue/page-data.json",
    "revision": "38622bca379be877edc5a666bb04af77"
  },
  {
    "url": "schedule/index.html",
    "revision": "42af9c35907a378ebd93538d7a8c8076"
  },
  {
    "url": "sitemap.xml",
    "revision": "c162e451d1d9707895ac980fa51a1c92"
  },
  {
    "url": "speakers/index.html",
    "revision": "9abef28cbfd1cfdf6770fdef4f1435c0"
  },
  {
    "url": "sponsors/auth0.png",
    "revision": "68b8b1f698c7eca8408d8f1cd30478e7"
  },
  {
    "url": "sponsors/connehito.png",
    "revision": "6b07569972c72d083c06530da17ae8fd"
  },
  {
    "url": "sponsors/cureapp.png",
    "revision": "c54d2711def4016742a8e90198d3710c"
  },
  {
    "url": "sponsors/cybozu.png",
    "revision": "96c3f4bc33267569f404b7901f7aeb3d"
  },
  {
    "url": "sponsors/dena.png",
    "revision": "aaf0870429a77082cdc444fd844d7435"
  },
  {
    "url": "sponsors/dmm.png",
    "revision": "94c6e54c0c7dfaea636c6cfe6e1b220b"
  },
  {
    "url": "sponsors/dwango.png",
    "revision": "e1a177880cd3115eb1ee8b73f3dd6925"
  },
  {
    "url": "sponsors/elastic.png",
    "revision": "3ca8c9e5adcc355c3303596c9be764de"
  },
  {
    "url": "sponsors/future.png",
    "revision": "21e9aa126618d2a88bc3593121b4b9f3"
  },
  {
    "url": "sponsors/hamee.png",
    "revision": "15756874173bd8abb1b6c37d069ebafa"
  },
  {
    "url": "sponsors/index.html",
    "revision": "e4d0d306d865c2ebf03c694811970e9f"
  },
  {
    "url": "sponsors/itsuki.png",
    "revision": "021b47e155d2a8ab61aaccc733a5dc34"
  },
  {
    "url": "sponsors/mediba.png",
    "revision": "6dd6ea753d5f8f3abf88136b4b7fe3f9"
  },
  {
    "url": "sponsors/medley.png",
    "revision": "af26d176a482d53d040a5ae7a99f47cf"
  },
  {
    "url": "sponsors/mercari.png",
    "revision": "715732d5259ce6b3a1f701ca3417c6f0"
  },
  {
    "url": "sponsors/nota.png",
    "revision": "953b79402c7d653b4ad599495cb507d4"
  },
  {
    "url": "sponsors/pixelgrid.svg",
    "revision": "e3125feaee44638b35834e721cc484db"
  },
  {
    "url": "sponsors/rakus.png",
    "revision": "e3f462da0648e7f284672449cef67b2d"
  },
  {
    "url": "sponsors/recruit.jpg",
    "revision": "4b629f170adf870744025da9d88c189a"
  },
  {
    "url": "sponsors/recruit.png",
    "revision": "9121819429651f56f40f6ef936e3a406"
  },
  {
    "url": "sponsors/smartnews.png",
    "revision": "c0f360a48224ad54b2cd6669687e14c5"
  },
  {
    "url": "sponsors/twilio.png",
    "revision": "b154a5ca2d40a38ece2c227c4199f856"
  },
  {
    "url": "sponsors/twilio.svg",
    "revision": "0e04ea745e2c6f1fec53ca74a52de526"
  },
  {
    "url": "sponsors/twitter.png",
    "revision": "fef946b8bba756359e2a1e87ccd915ea"
  },
  {
    "url": "sponsors/yahoo.png",
    "revision": "74ba6b92e04eeca5e39acea7698d9fbd"
  },
  {
    "url": "static/07b3103716876c95cfb793afa4e0de7e/2be9e/jonny-kalambay.jpg"
  },
  {
    "url": "static/07b3103716876c95cfb793afa4e0de7e/2e0c2/jonny-kalambay.jpg"
  },
  {
    "url": "static/07b3103716876c95cfb793afa4e0de7e/5ba61/jonny-kalambay.jpg"
  },
  {
    "url": "static/07b3103716876c95cfb793afa4e0de7e/78dfd/jonny-kalambay.webp"
  },
  {
    "url": "static/07b3103716876c95cfb793afa4e0de7e/79993/jonny-kalambay.jpg"
  },
  {
    "url": "static/07b3103716876c95cfb793afa4e0de7e/7d55c/jonny-kalambay.jpg"
  },
  {
    "url": "static/07b3103716876c95cfb793afa4e0de7e/7fc16/jonny-kalambay.webp"
  },
  {
    "url": "static/07b3103716876c95cfb793afa4e0de7e/82dd0/jonny-kalambay.webp"
  },
  {
    "url": "static/07b3103716876c95cfb793afa4e0de7e/92a13/jonny-kalambay.jpg"
  },
  {
    "url": "static/07b3103716876c95cfb793afa4e0de7e/a4bee/jonny-kalambay.webp"
  },
  {
    "url": "static/07b3103716876c95cfb793afa4e0de7e/b3aeb/jonny-kalambay.webp"
  },
  {
    "url": "static/07b3103716876c95cfb793afa4e0de7e/fabb6/jonny-kalambay.webp"
  },
  {
    "url": "static/088f972033e46e61ba403bf34e2ad321/2be9e/shirley-wu.jpg"
  },
  {
    "url": "static/088f972033e46e61ba403bf34e2ad321/2be9e/sxywu.jpg"
  },
  {
    "url": "static/088f972033e46e61ba403bf34e2ad321/2e0c2/shirley-wu.jpg"
  },
  {
    "url": "static/088f972033e46e61ba403bf34e2ad321/2e0c2/sxywu.jpg"
  },
  {
    "url": "static/088f972033e46e61ba403bf34e2ad321/78dfd/shirley-wu.webp"
  },
  {
    "url": "static/088f972033e46e61ba403bf34e2ad321/78dfd/sxywu.webp"
  },
  {
    "url": "static/088f972033e46e61ba403bf34e2ad321/79993/shirley-wu.jpg"
  },
  {
    "url": "static/088f972033e46e61ba403bf34e2ad321/79993/sxywu.jpg"
  },
  {
    "url": "static/088f972033e46e61ba403bf34e2ad321/7d55c/shirley-wu.jpg"
  },
  {
    "url": "static/088f972033e46e61ba403bf34e2ad321/7d55c/sxywu.jpg"
  },
  {
    "url": "static/088f972033e46e61ba403bf34e2ad321/7fc16/shirley-wu.webp"
  },
  {
    "url": "static/088f972033e46e61ba403bf34e2ad321/7fc16/sxywu.webp"
  },
  {
    "url": "static/088f972033e46e61ba403bf34e2ad321/b3aeb/shirley-wu.webp"
  },
  {
    "url": "static/088f972033e46e61ba403bf34e2ad321/b3aeb/sxywu.webp"
  },
  {
    "url": "static/088f972033e46e61ba403bf34e2ad321/b9fa4/shirley-wu.jpg"
  },
  {
    "url": "static/088f972033e46e61ba403bf34e2ad321/b9fa4/sxywu.jpg"
  },
  {
    "url": "static/088f972033e46e61ba403bf34e2ad321/ba80a/shirley-wu.webp"
  },
  {
    "url": "static/088f972033e46e61ba403bf34e2ad321/ba80a/sxywu.webp"
  },
  {
    "url": "static/088f972033e46e61ba403bf34e2ad321/fabb6/shirley-wu.webp"
  },
  {
    "url": "static/088f972033e46e61ba403bf34e2ad321/fabb6/sxywu.webp"
  },
  {
    "url": "static/0d48c1499f2f0a7aadb615b01ee6cbf4/78dfd/jarrod-overson.webp"
  },
  {
    "url": "static/0d48c1499f2f0a7aadb615b01ee6cbf4/7d911/jarrod-overson.png"
  },
  {
    "url": "static/0d48c1499f2f0a7aadb615b01ee6cbf4/7fc16/jarrod-overson.webp"
  },
  {
    "url": "static/0d48c1499f2f0a7aadb615b01ee6cbf4/92e63/jarrod-overson.png"
  },
  {
    "url": "static/0d48c1499f2f0a7aadb615b01ee6cbf4/a8fe6/jarrod-overson.png"
  },
  {
    "url": "static/0d48c1499f2f0a7aadb615b01ee6cbf4/b3aeb/jarrod-overson.webp"
  },
  {
    "url": "static/0d48c1499f2f0a7aadb615b01ee6cbf4/ba80a/jarrod-overson.webp"
  },
  {
    "url": "static/0d48c1499f2f0a7aadb615b01ee6cbf4/cf5aa/jarrod-overson.png"
  },
  {
    "url": "static/0d48c1499f2f0a7aadb615b01ee6cbf4/d2ba7/jarrod-overson.png"
  },
  {
    "url": "static/0d48c1499f2f0a7aadb615b01ee6cbf4/fabb6/jarrod-overson.webp"
  },
  {
    "url": "static/1d21de2f33eb5593d11d6fb65e5373a5/2be9e/sho-miyamoto.jpg"
  },
  {
    "url": "static/1d21de2f33eb5593d11d6fb65e5373a5/2e0c2/sho-miyamoto.jpg"
  },
  {
    "url": "static/1d21de2f33eb5593d11d6fb65e5373a5/2ea4d/sho-miyamoto.webp"
  },
  {
    "url": "static/1d21de2f33eb5593d11d6fb65e5373a5/78dfd/sho-miyamoto.webp"
  },
  {
    "url": "static/1d21de2f33eb5593d11d6fb65e5373a5/79993/sho-miyamoto.jpg"
  },
  {
    "url": "static/1d21de2f33eb5593d11d6fb65e5373a5/7d55c/sho-miyamoto.jpg"
  },
  {
    "url": "static/1d21de2f33eb5593d11d6fb65e5373a5/7fc16/sho-miyamoto.webp"
  },
  {
    "url": "static/1d21de2f33eb5593d11d6fb65e5373a5/b3aeb/sho-miyamoto.webp"
  },
  {
    "url": "static/1d21de2f33eb5593d11d6fb65e5373a5/ec650/sho-miyamoto.jpg"
  },
  {
    "url": "static/1d21de2f33eb5593d11d6fb65e5373a5/fabb6/sho-miyamoto.webp"
  },
  {
    "url": "static/20dce207e16174fad556decb19cdd5ea/2be9e/tetsuharu-ohzeki.jpg"
  },
  {
    "url": "static/20dce207e16174fad556decb19cdd5ea/2e0c2/tetsuharu-ohzeki.jpg"
  },
  {
    "url": "static/20dce207e16174fad556decb19cdd5ea/3fdfd/tetsuharu-ohzeki.jpg"
  },
  {
    "url": "static/20dce207e16174fad556decb19cdd5ea/78dfd/tetsuharu-ohzeki.webp"
  },
  {
    "url": "static/20dce207e16174fad556decb19cdd5ea/79993/tetsuharu-ohzeki.jpg"
  },
  {
    "url": "static/20dce207e16174fad556decb19cdd5ea/7d55c/tetsuharu-ohzeki.jpg"
  },
  {
    "url": "static/20dce207e16174fad556decb19cdd5ea/7fc16/tetsuharu-ohzeki.webp"
  },
  {
    "url": "static/20dce207e16174fad556decb19cdd5ea/b3aeb/tetsuharu-ohzeki.webp"
  },
  {
    "url": "static/20dce207e16174fad556decb19cdd5ea/b6fcb/tetsuharu-ohzeki.webp"
  },
  {
    "url": "static/20dce207e16174fad556decb19cdd5ea/fabb6/tetsuharu-ohzeki.webp"
  },
  {
    "url": "static/242ca0d330d1ad6927379a658c2467d2/2be9e/toru-kobayashi.jpg"
  },
  {
    "url": "static/242ca0d330d1ad6927379a658c2467d2/2e0c2/toru-kobayashi.jpg"
  },
  {
    "url": "static/242ca0d330d1ad6927379a658c2467d2/2ea4d/toru-kobayashi.webp"
  },
  {
    "url": "static/242ca0d330d1ad6927379a658c2467d2/78dfd/toru-kobayashi.webp"
  },
  {
    "url": "static/242ca0d330d1ad6927379a658c2467d2/79993/toru-kobayashi.jpg"
  },
  {
    "url": "static/242ca0d330d1ad6927379a658c2467d2/7d55c/toru-kobayashi.jpg"
  },
  {
    "url": "static/242ca0d330d1ad6927379a658c2467d2/7fc16/toru-kobayashi.webp"
  },
  {
    "url": "static/242ca0d330d1ad6927379a658c2467d2/b3aeb/toru-kobayashi.webp"
  },
  {
    "url": "static/242ca0d330d1ad6927379a658c2467d2/ec650/toru-kobayashi.jpg"
  },
  {
    "url": "static/242ca0d330d1ad6927379a658c2467d2/fabb6/toru-kobayashi.webp"
  },
  {
    "url": "static/28a136a95d4efd1a2100d3f8a1724af5/2be9e/sakakibara.jpg"
  },
  {
    "url": "static/28a136a95d4efd1a2100d3f8a1724af5/2e0c2/sakakibara.jpg"
  },
  {
    "url": "static/28a136a95d4efd1a2100d3f8a1724af5/78dfd/sakakibara.webp"
  },
  {
    "url": "static/28a136a95d4efd1a2100d3f8a1724af5/79993/sakakibara.jpg"
  },
  {
    "url": "static/28a136a95d4efd1a2100d3f8a1724af5/7d55c/sakakibara.jpg"
  },
  {
    "url": "static/28a136a95d4efd1a2100d3f8a1724af5/7fc16/sakakibara.webp"
  },
  {
    "url": "static/28a136a95d4efd1a2100d3f8a1724af5/b3aeb/sakakibara.webp"
  },
  {
    "url": "static/28a136a95d4efd1a2100d3f8a1724af5/b9fa4/sakakibara.jpg"
  },
  {
    "url": "static/28a136a95d4efd1a2100d3f8a1724af5/ba80a/sakakibara.webp"
  },
  {
    "url": "static/28a136a95d4efd1a2100d3f8a1724af5/fabb6/sakakibara.webp"
  },
  {
    "url": "static/2ccf09daf6f3f2207e59367c60388c5d/2be9e/yosuke-furukawa.jpg"
  },
  {
    "url": "static/2ccf09daf6f3f2207e59367c60388c5d/2e0c2/yosuke-furukawa.jpg"
  },
  {
    "url": "static/2ccf09daf6f3f2207e59367c60388c5d/72cad/yosuke-furukawa.jpg"
  },
  {
    "url": "static/2ccf09daf6f3f2207e59367c60388c5d/78dfd/yosuke-furukawa.webp"
  },
  {
    "url": "static/2ccf09daf6f3f2207e59367c60388c5d/79993/yosuke-furukawa.jpg"
  },
  {
    "url": "static/2ccf09daf6f3f2207e59367c60388c5d/7d55c/yosuke-furukawa.jpg"
  },
  {
    "url": "static/2ccf09daf6f3f2207e59367c60388c5d/7fc16/yosuke-furukawa.webp"
  },
  {
    "url": "static/2ccf09daf6f3f2207e59367c60388c5d/b3aeb/yosuke-furukawa.webp"
  },
  {
    "url": "static/2ccf09daf6f3f2207e59367c60388c5d/b957b/yosuke-furukawa.webp"
  },
  {
    "url": "static/2ccf09daf6f3f2207e59367c60388c5d/fabb6/yosuke-furukawa.webp"
  },
  {
    "url": "static/2e2a3602dc872e8fcff0c78e770c15dc/2ea4d/daiki-kuriyama.webp"
  },
  {
    "url": "static/2e2a3602dc872e8fcff0c78e770c15dc/4b166/daiki-kuriyama.png"
  },
  {
    "url": "static/2e2a3602dc872e8fcff0c78e770c15dc/78dfd/daiki-kuriyama.webp"
  },
  {
    "url": "static/2e2a3602dc872e8fcff0c78e770c15dc/7d911/daiki-kuriyama.png"
  },
  {
    "url": "static/2e2a3602dc872e8fcff0c78e770c15dc/7fc16/daiki-kuriyama.webp"
  },
  {
    "url": "static/2e2a3602dc872e8fcff0c78e770c15dc/92e63/daiki-kuriyama.png"
  },
  {
    "url": "static/2e2a3602dc872e8fcff0c78e770c15dc/a8fe6/daiki-kuriyama.png"
  },
  {
    "url": "static/2e2a3602dc872e8fcff0c78e770c15dc/b3aeb/daiki-kuriyama.webp"
  },
  {
    "url": "static/2e2a3602dc872e8fcff0c78e770c15dc/d2ba7/daiki-kuriyama.png"
  },
  {
    "url": "static/2e2a3602dc872e8fcff0c78e770c15dc/fabb6/daiki-kuriyama.webp"
  },
  {
    "url": "static/2ecf55efae1f997413654cfbdb717d9e/5d238/takuto-wada.webp"
  },
  {
    "url": "static/2ecf55efae1f997413654cfbdb717d9e/737c9/takuto-wada.png"
  },
  {
    "url": "static/2ecf55efae1f997413654cfbdb717d9e/78dfd/takuto-wada.webp"
  },
  {
    "url": "static/2ecf55efae1f997413654cfbdb717d9e/7d911/takuto-wada.png"
  },
  {
    "url": "static/2ecf55efae1f997413654cfbdb717d9e/7fc16/takuto-wada.webp"
  },
  {
    "url": "static/2ecf55efae1f997413654cfbdb717d9e/82dd0/takuto-wada.webp"
  },
  {
    "url": "static/2ecf55efae1f997413654cfbdb717d9e/92e63/takuto-wada.png"
  },
  {
    "url": "static/2ecf55efae1f997413654cfbdb717d9e/9b23f/takuto-wada.png"
  },
  {
    "url": "static/2ecf55efae1f997413654cfbdb717d9e/a8fe6/takuto-wada.png"
  },
  {
    "url": "static/2ecf55efae1f997413654cfbdb717d9e/b3aeb/takuto-wada.webp"
  },
  {
    "url": "static/2ecf55efae1f997413654cfbdb717d9e/d2ba7/takuto-wada.png"
  },
  {
    "url": "static/2ecf55efae1f997413654cfbdb717d9e/fabb6/takuto-wada.webp"
  },
  {
    "url": "static/46656025a0495e6d7b39b986f94a63c8/2be9e/eiji-kitamura.jpg"
  },
  {
    "url": "static/46656025a0495e6d7b39b986f94a63c8/2e0c2/eiji-kitamura.jpg"
  },
  {
    "url": "static/46656025a0495e6d7b39b986f94a63c8/72cad/eiji-kitamura.jpg"
  },
  {
    "url": "static/46656025a0495e6d7b39b986f94a63c8/78dfd/eiji-kitamura.webp"
  },
  {
    "url": "static/46656025a0495e6d7b39b986f94a63c8/79993/eiji-kitamura.jpg"
  },
  {
    "url": "static/46656025a0495e6d7b39b986f94a63c8/7d55c/eiji-kitamura.jpg"
  },
  {
    "url": "static/46656025a0495e6d7b39b986f94a63c8/7fc16/eiji-kitamura.webp"
  },
  {
    "url": "static/46656025a0495e6d7b39b986f94a63c8/b3aeb/eiji-kitamura.webp"
  },
  {
    "url": "static/46656025a0495e6d7b39b986f94a63c8/b957b/eiji-kitamura.webp"
  },
  {
    "url": "static/46656025a0495e6d7b39b986f94a63c8/fabb6/eiji-kitamura.webp"
  },
  {
    "url": "static/4739c96d93cfb1553e97e75d0aa683ae/2be9e/sacha-greif.jpg"
  },
  {
    "url": "static/4739c96d93cfb1553e97e75d0aa683ae/2e0c2/sacha-greif.jpg"
  },
  {
    "url": "static/4739c96d93cfb1553e97e75d0aa683ae/6dc09/sacha-greif.jpg"
  },
  {
    "url": "static/4739c96d93cfb1553e97e75d0aa683ae/78dfd/sacha-greif.webp"
  },
  {
    "url": "static/4739c96d93cfb1553e97e75d0aa683ae/79993/sacha-greif.jpg"
  },
  {
    "url": "static/4739c96d93cfb1553e97e75d0aa683ae/7d55c/sacha-greif.jpg"
  },
  {
    "url": "static/4739c96d93cfb1553e97e75d0aa683ae/7fc16/sacha-greif.webp"
  },
  {
    "url": "static/4739c96d93cfb1553e97e75d0aa683ae/82dd0/sacha-greif.webp"
  },
  {
    "url": "static/4739c96d93cfb1553e97e75d0aa683ae/92a13/sacha-greif.jpg"
  },
  {
    "url": "static/4739c96d93cfb1553e97e75d0aa683ae/b3aeb/sacha-greif.webp"
  },
  {
    "url": "static/4739c96d93cfb1553e97e75d0aa683ae/b8129/sacha-greif.webp"
  },
  {
    "url": "static/4739c96d93cfb1553e97e75d0aa683ae/fabb6/sacha-greif.webp"
  },
  {
    "url": "static/4df73c7f986db6a818d1f8c847200aed/2be9e/maria-clara.jpg"
  },
  {
    "url": "static/4df73c7f986db6a818d1f8c847200aed/2e0c2/maria-clara.jpg"
  },
  {
    "url": "static/4df73c7f986db6a818d1f8c847200aed/78dfd/maria-clara.webp"
  },
  {
    "url": "static/4df73c7f986db6a818d1f8c847200aed/79993/maria-clara.jpg"
  },
  {
    "url": "static/4df73c7f986db6a818d1f8c847200aed/7d55c/maria-clara.jpg"
  },
  {
    "url": "static/4df73c7f986db6a818d1f8c847200aed/7fc16/maria-clara.webp"
  },
  {
    "url": "static/4df73c7f986db6a818d1f8c847200aed/82dd0/maria-clara.webp"
  },
  {
    "url": "static/4df73c7f986db6a818d1f8c847200aed/92a13/maria-clara.jpg"
  },
  {
    "url": "static/4df73c7f986db6a818d1f8c847200aed/b3aeb/maria-clara.webp"
  },
  {
    "url": "static/4df73c7f986db6a818d1f8c847200aed/ba564/maria-clara.webp"
  },
  {
    "url": "static/4df73c7f986db6a818d1f8c847200aed/e2ec4/maria-clara.jpg"
  },
  {
    "url": "static/4df73c7f986db6a818d1f8c847200aed/fabb6/maria-clara.webp"
  },
  {
    "url": "static/4f40187320f52f6f5264b2836b5173b3/2ea4d/fuji-goro.webp"
  },
  {
    "url": "static/4f40187320f52f6f5264b2836b5173b3/4b166/fuji-goro.png"
  },
  {
    "url": "static/4f40187320f52f6f5264b2836b5173b3/78dfd/fuji-goro.webp"
  },
  {
    "url": "static/4f40187320f52f6f5264b2836b5173b3/7d911/fuji-goro.png"
  },
  {
    "url": "static/4f40187320f52f6f5264b2836b5173b3/7fc16/fuji-goro.webp"
  },
  {
    "url": "static/4f40187320f52f6f5264b2836b5173b3/92e63/fuji-goro.png"
  },
  {
    "url": "static/4f40187320f52f6f5264b2836b5173b3/a8fe6/fuji-goro.png"
  },
  {
    "url": "static/4f40187320f52f6f5264b2836b5173b3/b3aeb/fuji-goro.webp"
  },
  {
    "url": "static/4f40187320f52f6f5264b2836b5173b3/d2ba7/fuji-goro.png"
  },
  {
    "url": "static/4f40187320f52f6f5264b2836b5173b3/fabb6/fuji-goro.webp"
  },
  {
    "url": "static/53716f8585a3f1ee90090eeb770772d2/2be9e/maxi-ferreira.jpg"
  },
  {
    "url": "static/53716f8585a3f1ee90090eeb770772d2/2e0c2/maxi-ferreira.jpg"
  },
  {
    "url": "static/53716f8585a3f1ee90090eeb770772d2/328f4/maxi-ferreira.jpg"
  },
  {
    "url": "static/53716f8585a3f1ee90090eeb770772d2/4ce43/maxi-ferreira.webp"
  },
  {
    "url": "static/53716f8585a3f1ee90090eeb770772d2/78dfd/maxi-ferreira.webp"
  },
  {
    "url": "static/53716f8585a3f1ee90090eeb770772d2/79993/maxi-ferreira.jpg"
  },
  {
    "url": "static/53716f8585a3f1ee90090eeb770772d2/7d55c/maxi-ferreira.jpg"
  },
  {
    "url": "static/53716f8585a3f1ee90090eeb770772d2/7fc16/maxi-ferreira.webp"
  },
  {
    "url": "static/53716f8585a3f1ee90090eeb770772d2/82dd0/maxi-ferreira.webp"
  },
  {
    "url": "static/53716f8585a3f1ee90090eeb770772d2/92a13/maxi-ferreira.jpg"
  },
  {
    "url": "static/53716f8585a3f1ee90090eeb770772d2/b3aeb/maxi-ferreira.webp"
  },
  {
    "url": "static/53716f8585a3f1ee90090eeb770772d2/fabb6/maxi-ferreira.webp"
  },
  {
    "url": "static/5671512b7052498c178fffd6fc529c36/2be9e/praveen-yedidi.jpg"
  },
  {
    "url": "static/5671512b7052498c178fffd6fc529c36/2e0c2/praveen-yedidi.jpg"
  },
  {
    "url": "static/5671512b7052498c178fffd6fc529c36/2ea4d/praveen-yedidi.webp"
  },
  {
    "url": "static/5671512b7052498c178fffd6fc529c36/78dfd/praveen-yedidi.webp"
  },
  {
    "url": "static/5671512b7052498c178fffd6fc529c36/79993/praveen-yedidi.jpg"
  },
  {
    "url": "static/5671512b7052498c178fffd6fc529c36/7d55c/praveen-yedidi.jpg"
  },
  {
    "url": "static/5671512b7052498c178fffd6fc529c36/7fc16/praveen-yedidi.webp"
  },
  {
    "url": "static/5671512b7052498c178fffd6fc529c36/b3aeb/praveen-yedidi.webp"
  },
  {
    "url": "static/5671512b7052498c178fffd6fc529c36/ec650/praveen-yedidi.jpg"
  },
  {
    "url": "static/5671512b7052498c178fffd6fc529c36/fabb6/praveen-yedidi.webp"
  },
  {
    "url": "static/602e0e61c4df7e95abf9179e9227b2ab/2be9e/hidetaka-okamoto.jpg"
  },
  {
    "url": "static/602e0e61c4df7e95abf9179e9227b2ab/2e0c2/hidetaka-okamoto.jpg"
  },
  {
    "url": "static/602e0e61c4df7e95abf9179e9227b2ab/78dfd/hidetaka-okamoto.webp"
  },
  {
    "url": "static/602e0e61c4df7e95abf9179e9227b2ab/79993/hidetaka-okamoto.jpg"
  },
  {
    "url": "static/602e0e61c4df7e95abf9179e9227b2ab/7d55c/hidetaka-okamoto.jpg"
  },
  {
    "url": "static/602e0e61c4df7e95abf9179e9227b2ab/7fc16/hidetaka-okamoto.webp"
  },
  {
    "url": "static/602e0e61c4df7e95abf9179e9227b2ab/b3aeb/hidetaka-okamoto.webp"
  },
  {
    "url": "static/602e0e61c4df7e95abf9179e9227b2ab/b9fa4/hidetaka-okamoto.jpg"
  },
  {
    "url": "static/602e0e61c4df7e95abf9179e9227b2ab/ba80a/hidetaka-okamoto.webp"
  },
  {
    "url": "static/602e0e61c4df7e95abf9179e9227b2ab/fabb6/hidetaka-okamoto.webp"
  },
  {
    "url": "static/60f9a4cd2d393c794eacc8355fc48059/14d8c/satoshi-ebihara.webp"
  },
  {
    "url": "static/60f9a4cd2d393c794eacc8355fc48059/2be9e/satoshi-ebihara.jpg"
  },
  {
    "url": "static/60f9a4cd2d393c794eacc8355fc48059/2e0c2/satoshi-ebihara.jpg"
  },
  {
    "url": "static/60f9a4cd2d393c794eacc8355fc48059/78dfd/satoshi-ebihara.webp"
  },
  {
    "url": "static/60f9a4cd2d393c794eacc8355fc48059/79993/satoshi-ebihara.jpg"
  },
  {
    "url": "static/60f9a4cd2d393c794eacc8355fc48059/7d55c/satoshi-ebihara.jpg"
  },
  {
    "url": "static/60f9a4cd2d393c794eacc8355fc48059/7fc16/satoshi-ebihara.webp"
  },
  {
    "url": "static/60f9a4cd2d393c794eacc8355fc48059/82dd0/satoshi-ebihara.webp"
  },
  {
    "url": "static/60f9a4cd2d393c794eacc8355fc48059/92a13/satoshi-ebihara.jpg"
  },
  {
    "url": "static/60f9a4cd2d393c794eacc8355fc48059/94383/satoshi-ebihara.jpg"
  },
  {
    "url": "static/60f9a4cd2d393c794eacc8355fc48059/b3aeb/satoshi-ebihara.webp"
  },
  {
    "url": "static/60f9a4cd2d393c794eacc8355fc48059/fabb6/satoshi-ebihara.webp"
  },
  {
    "url": "static/652d0b490cc8ba23f7fc5f8b2c8daf17/10a58/guillermo-rauch.jpg"
  },
  {
    "url": "static/652d0b490cc8ba23f7fc5f8b2c8daf17/2be9e/guillermo-rauch.jpg"
  },
  {
    "url": "static/652d0b490cc8ba23f7fc5f8b2c8daf17/2e0c2/guillermo-rauch.jpg"
  },
  {
    "url": "static/652d0b490cc8ba23f7fc5f8b2c8daf17/3ff44/guillermo-rauch.webp"
  },
  {
    "url": "static/652d0b490cc8ba23f7fc5f8b2c8daf17/78dfd/guillermo-rauch.webp"
  },
  {
    "url": "static/652d0b490cc8ba23f7fc5f8b2c8daf17/79993/guillermo-rauch.jpg"
  },
  {
    "url": "static/652d0b490cc8ba23f7fc5f8b2c8daf17/7fc16/guillermo-rauch.webp"
  },
  {
    "url": "static/652d0b490cc8ba23f7fc5f8b2c8daf17/fabb6/guillermo-rauch.webp"
  },
  {
    "url": "static/6f500fa402f4d5a6efe24fb8497e9aa8/19351/andrew-betts.webp"
  },
  {
    "url": "static/6f500fa402f4d5a6efe24fb8497e9aa8/2be9e/andrew-betts.jpg"
  },
  {
    "url": "static/6f500fa402f4d5a6efe24fb8497e9aa8/2e0c2/andrew-betts.jpg"
  },
  {
    "url": "static/6f500fa402f4d5a6efe24fb8497e9aa8/78dfd/andrew-betts.webp"
  },
  {
    "url": "static/6f500fa402f4d5a6efe24fb8497e9aa8/79993/andrew-betts.jpg"
  },
  {
    "url": "static/6f500fa402f4d5a6efe24fb8497e9aa8/7d55c/andrew-betts.jpg"
  },
  {
    "url": "static/6f500fa402f4d5a6efe24fb8497e9aa8/7fc16/andrew-betts.webp"
  },
  {
    "url": "static/6f500fa402f4d5a6efe24fb8497e9aa8/82dd0/andrew-betts.webp"
  },
  {
    "url": "static/6f500fa402f4d5a6efe24fb8497e9aa8/92a13/andrew-betts.jpg"
  },
  {
    "url": "static/6f500fa402f4d5a6efe24fb8497e9aa8/b3aeb/andrew-betts.webp"
  },
  {
    "url": "static/6f500fa402f4d5a6efe24fb8497e9aa8/ed30e/andrew-betts.jpg"
  },
  {
    "url": "static/6f500fa402f4d5a6efe24fb8497e9aa8/fabb6/andrew-betts.webp"
  },
  {
    "url": "static/6f81758e8e064693c9703846d98973d9/78dfd/jan-lehnardt.webp"
  },
  {
    "url": "static/6f81758e8e064693c9703846d98973d9/7d911/jan-lehnardt.png"
  },
  {
    "url": "static/6f81758e8e064693c9703846d98973d9/7fc16/jan-lehnardt.webp"
  },
  {
    "url": "static/6f81758e8e064693c9703846d98973d9/92e63/jan-lehnardt.png"
  },
  {
    "url": "static/6f81758e8e064693c9703846d98973d9/a8fe6/jan-lehnardt.png"
  },
  {
    "url": "static/6f81758e8e064693c9703846d98973d9/b3aeb/jan-lehnardt.webp"
  },
  {
    "url": "static/6f81758e8e064693c9703846d98973d9/ba80a/jan-lehnardt.webp"
  },
  {
    "url": "static/6f81758e8e064693c9703846d98973d9/cf5aa/jan-lehnardt.png"
  },
  {
    "url": "static/6f81758e8e064693c9703846d98973d9/d2ba7/jan-lehnardt.png"
  },
  {
    "url": "static/6f81758e8e064693c9703846d98973d9/fabb6/jan-lehnardt.webp"
  },
  {
    "url": "static/775ed3cd709b0ea8a13c2a17a9153dd8/78dfd/henry-zhu.webp"
  },
  {
    "url": "static/775ed3cd709b0ea8a13c2a17a9153dd8/7d911/henry-zhu.png"
  },
  {
    "url": "static/775ed3cd709b0ea8a13c2a17a9153dd8/7fc16/henry-zhu.webp"
  },
  {
    "url": "static/775ed3cd709b0ea8a13c2a17a9153dd8/a8fe6/henry-zhu.png"
  },
  {
    "url": "static/775ed3cd709b0ea8a13c2a17a9153dd8/d2ba7/henry-zhu.png"
  },
  {
    "url": "static/775ed3cd709b0ea8a13c2a17a9153dd8/d6cd1/henry-zhu.webp"
  },
  {
    "url": "static/775ed3cd709b0ea8a13c2a17a9153dd8/f3324/henry-zhu.png"
  },
  {
    "url": "static/775ed3cd709b0ea8a13c2a17a9153dd8/fabb6/henry-zhu.webp"
  },
  {
    "url": "static/7f0f2d61b3aa5eeb75817b98ca070252/2be9e/takeshi-kato.jpg"
  },
  {
    "url": "static/7f0f2d61b3aa5eeb75817b98ca070252/2e0c2/takeshi-kato.jpg"
  },
  {
    "url": "static/7f0f2d61b3aa5eeb75817b98ca070252/56565/takeshi-kato.jpg"
  },
  {
    "url": "static/7f0f2d61b3aa5eeb75817b98ca070252/78dfd/takeshi-kato.webp"
  },
  {
    "url": "static/7f0f2d61b3aa5eeb75817b98ca070252/79993/takeshi-kato.jpg"
  },
  {
    "url": "static/7f0f2d61b3aa5eeb75817b98ca070252/7d55c/takeshi-kato.jpg"
  },
  {
    "url": "static/7f0f2d61b3aa5eeb75817b98ca070252/7fc16/takeshi-kato.webp"
  },
  {
    "url": "static/7f0f2d61b3aa5eeb75817b98ca070252/b3aeb/takeshi-kato.webp"
  },
  {
    "url": "static/7f0f2d61b3aa5eeb75817b98ca070252/d3d47/takeshi-kato.webp"
  },
  {
    "url": "static/7f0f2d61b3aa5eeb75817b98ca070252/fabb6/takeshi-kato.webp"
  },
  {
    "url": "static/8072ee3add3f43576e6b1b5056d51400/2be9e/benjamin-gruenbaum.jpg"
  },
  {
    "url": "static/8072ee3add3f43576e6b1b5056d51400/2e0c2/benjamin-gruenbaum.jpg"
  },
  {
    "url": "static/8072ee3add3f43576e6b1b5056d51400/78dfd/benjamin-gruenbaum.webp"
  },
  {
    "url": "static/8072ee3add3f43576e6b1b5056d51400/79993/benjamin-gruenbaum.jpg"
  },
  {
    "url": "static/8072ee3add3f43576e6b1b5056d51400/7d55c/benjamin-gruenbaum.jpg"
  },
  {
    "url": "static/8072ee3add3f43576e6b1b5056d51400/7fc16/benjamin-gruenbaum.webp"
  },
  {
    "url": "static/8072ee3add3f43576e6b1b5056d51400/b3aeb/benjamin-gruenbaum.webp"
  },
  {
    "url": "static/8072ee3add3f43576e6b1b5056d51400/b9fa4/benjamin-gruenbaum.jpg"
  },
  {
    "url": "static/8072ee3add3f43576e6b1b5056d51400/ba80a/benjamin-gruenbaum.webp"
  },
  {
    "url": "static/8072ee3add3f43576e6b1b5056d51400/fabb6/benjamin-gruenbaum.webp"
  },
  {
    "url": "static/809063852b5b4fae27415c7b5203a149/40243/andy-hall.png"
  },
  {
    "url": "static/809063852b5b4fae27415c7b5203a149/78dfd/andy-hall.webp"
  },
  {
    "url": "static/809063852b5b4fae27415c7b5203a149/7d911/andy-hall.png"
  },
  {
    "url": "static/809063852b5b4fae27415c7b5203a149/7fc16/andy-hall.webp"
  },
  {
    "url": "static/809063852b5b4fae27415c7b5203a149/92e63/andy-hall.png"
  },
  {
    "url": "static/809063852b5b4fae27415c7b5203a149/a8fe6/andy-hall.png"
  },
  {
    "url": "static/809063852b5b4fae27415c7b5203a149/b3aeb/andy-hall.webp"
  },
  {
    "url": "static/809063852b5b4fae27415c7b5203a149/d2ba7/andy-hall.png"
  },
  {
    "url": "static/809063852b5b4fae27415c7b5203a149/d3d47/andy-hall.webp"
  },
  {
    "url": "static/809063852b5b4fae27415c7b5203a149/fabb6/andy-hall.webp"
  },
  {
    "url": "static/88de2bd75495dadeaa1e16ddf46414fa/2be9e/jorge-bucaran.jpg"
  },
  {
    "url": "static/88de2bd75495dadeaa1e16ddf46414fa/2e0c2/jorge-bucaran.jpg"
  },
  {
    "url": "static/88de2bd75495dadeaa1e16ddf46414fa/78dfd/jorge-bucaran.webp"
  },
  {
    "url": "static/88de2bd75495dadeaa1e16ddf46414fa/79993/jorge-bucaran.jpg"
  },
  {
    "url": "static/88de2bd75495dadeaa1e16ddf46414fa/7d55c/jorge-bucaran.jpg"
  },
  {
    "url": "static/88de2bd75495dadeaa1e16ddf46414fa/7fc16/jorge-bucaran.webp"
  },
  {
    "url": "static/88de2bd75495dadeaa1e16ddf46414fa/b3aeb/jorge-bucaran.webp"
  },
  {
    "url": "static/88de2bd75495dadeaa1e16ddf46414fa/b9fa4/jorge-bucaran.jpg"
  },
  {
    "url": "static/88de2bd75495dadeaa1e16ddf46414fa/ba80a/jorge-bucaran.webp"
  },
  {
    "url": "static/88de2bd75495dadeaa1e16ddf46414fa/fabb6/jorge-bucaran.webp"
  },
  {
    "url": "static/9112eca13ea175de4b1f190759b26a1a/0c3c3/irina-shestak.webp"
  },
  {
    "url": "static/9112eca13ea175de4b1f190759b26a1a/2be9e/irina-shestak.jpg"
  },
  {
    "url": "static/9112eca13ea175de4b1f190759b26a1a/2e0c2/irina-shestak.jpg"
  },
  {
    "url": "static/9112eca13ea175de4b1f190759b26a1a/78dfd/irina-shestak.webp"
  },
  {
    "url": "static/9112eca13ea175de4b1f190759b26a1a/79993/irina-shestak.jpg"
  },
  {
    "url": "static/9112eca13ea175de4b1f190759b26a1a/7d55c/irina-shestak.jpg"
  },
  {
    "url": "static/9112eca13ea175de4b1f190759b26a1a/7fc16/irina-shestak.webp"
  },
  {
    "url": "static/9112eca13ea175de4b1f190759b26a1a/82dd0/irina-shestak.webp"
  },
  {
    "url": "static/9112eca13ea175de4b1f190759b26a1a/92a13/irina-shestak.jpg"
  },
  {
    "url": "static/9112eca13ea175de4b1f190759b26a1a/b3aeb/irina-shestak.webp"
  },
  {
    "url": "static/9112eca13ea175de4b1f190759b26a1a/f3a11/irina-shestak.jpg"
  },
  {
    "url": "static/9112eca13ea175de4b1f190759b26a1a/fabb6/irina-shestak.webp"
  },
  {
    "url": "static/921cdfef828989848c881fc7cb988c5c/10a58/nadieh-bremer.jpg"
  },
  {
    "url": "static/921cdfef828989848c881fc7cb988c5c/2be9e/nadieh-bremer.jpg"
  },
  {
    "url": "static/921cdfef828989848c881fc7cb988c5c/2e0c2/nadieh-bremer.jpg"
  },
  {
    "url": "static/921cdfef828989848c881fc7cb988c5c/3ff44/nadieh-bremer.webp"
  },
  {
    "url": "static/921cdfef828989848c881fc7cb988c5c/78dfd/nadieh-bremer.webp"
  },
  {
    "url": "static/921cdfef828989848c881fc7cb988c5c/79993/nadieh-bremer.jpg"
  },
  {
    "url": "static/921cdfef828989848c881fc7cb988c5c/7fc16/nadieh-bremer.webp"
  },
  {
    "url": "static/921cdfef828989848c881fc7cb988c5c/fabb6/nadieh-bremer.webp"
  },
  {
    "url": "static/9b9f3b02ed298d2cf0bb16db141f8259/2e0c2/nobuhiko-sawai.jpg"
  },
  {
    "url": "static/9b9f3b02ed298d2cf0bb16db141f8259/78dfd/nobuhiko-sawai.webp"
  },
  {
    "url": "static/9b9f3b02ed298d2cf0bb16db141f8259/79993/nobuhiko-sawai.jpg"
  },
  {
    "url": "static/9b9f3b02ed298d2cf0bb16db141f8259/7fc16/nobuhiko-sawai.webp"
  },
  {
    "url": "static/9b9f3b02ed298d2cf0bb16db141f8259/9067c/nobuhiko-sawai.jpg"
  },
  {
    "url": "static/9b9f3b02ed298d2cf0bb16db141f8259/d27e9/nobuhiko-sawai.webp"
  },
  {
    "url": "static/9c555c0f8ef94b42f920f5d9cfde093f/2be9e/satoshi-arai.jpg"
  },
  {
    "url": "static/9c555c0f8ef94b42f920f5d9cfde093f/2e0c2/satoshi-arai.jpg"
  },
  {
    "url": "static/9c555c0f8ef94b42f920f5d9cfde093f/78dfd/satoshi-arai.webp"
  },
  {
    "url": "static/9c555c0f8ef94b42f920f5d9cfde093f/79993/satoshi-arai.jpg"
  },
  {
    "url": "static/9c555c0f8ef94b42f920f5d9cfde093f/7d55c/satoshi-arai.jpg"
  },
  {
    "url": "static/9c555c0f8ef94b42f920f5d9cfde093f/7fc16/satoshi-arai.webp"
  },
  {
    "url": "static/9c555c0f8ef94b42f920f5d9cfde093f/b3aeb/satoshi-arai.webp"
  },
  {
    "url": "static/9c555c0f8ef94b42f920f5d9cfde093f/b9fa4/satoshi-arai.jpg"
  },
  {
    "url": "static/9c555c0f8ef94b42f920f5d9cfde093f/ba80a/satoshi-arai.webp"
  },
  {
    "url": "static/9c555c0f8ef94b42f920f5d9cfde093f/fabb6/satoshi-arai.webp"
  },
  {
    "url": "static/a72be6d8f097cc9530a863386c9fd6b1/2be9e/rowdy-rabouw.jpg"
  },
  {
    "url": "static/a72be6d8f097cc9530a863386c9fd6b1/2e0c2/rowdy-rabouw.jpg"
  },
  {
    "url": "static/a72be6d8f097cc9530a863386c9fd6b1/78dfd/rowdy-rabouw.webp"
  },
  {
    "url": "static/a72be6d8f097cc9530a863386c9fd6b1/79993/rowdy-rabouw.jpg"
  },
  {
    "url": "static/a72be6d8f097cc9530a863386c9fd6b1/7d55c/rowdy-rabouw.jpg"
  },
  {
    "url": "static/a72be6d8f097cc9530a863386c9fd6b1/7fc16/rowdy-rabouw.webp"
  },
  {
    "url": "static/a72be6d8f097cc9530a863386c9fd6b1/82dd0/rowdy-rabouw.webp"
  },
  {
    "url": "static/a72be6d8f097cc9530a863386c9fd6b1/92a13/rowdy-rabouw.jpg"
  },
  {
    "url": "static/a72be6d8f097cc9530a863386c9fd6b1/b3aeb/rowdy-rabouw.webp"
  },
  {
    "url": "static/a72be6d8f097cc9530a863386c9fd6b1/b8aa2/rowdy-rabouw.webp"
  },
  {
    "url": "static/a72be6d8f097cc9530a863386c9fd6b1/d9fef/rowdy-rabouw.jpg"
  },
  {
    "url": "static/a72be6d8f097cc9530a863386c9fd6b1/fabb6/rowdy-rabouw.webp"
  },
  {
    "url": "static/a78efdc029147e34669afe249d2c74ee/2be9e/nazanin-delam.jpg"
  },
  {
    "url": "static/a78efdc029147e34669afe249d2c74ee/2e0c2/nazanin-delam.jpg"
  },
  {
    "url": "static/a78efdc029147e34669afe249d2c74ee/2ea4d/nazanin-delam.webp"
  },
  {
    "url": "static/a78efdc029147e34669afe249d2c74ee/78dfd/nazanin-delam.webp"
  },
  {
    "url": "static/a78efdc029147e34669afe249d2c74ee/79993/nazanin-delam.jpg"
  },
  {
    "url": "static/a78efdc029147e34669afe249d2c74ee/7d55c/nazanin-delam.jpg"
  },
  {
    "url": "static/a78efdc029147e34669afe249d2c74ee/7fc16/nazanin-delam.webp"
  },
  {
    "url": "static/a78efdc029147e34669afe249d2c74ee/b3aeb/nazanin-delam.webp"
  },
  {
    "url": "static/a78efdc029147e34669afe249d2c74ee/ec650/nazanin-delam.jpg"
  },
  {
    "url": "static/a78efdc029147e34669afe249d2c74ee/fabb6/nazanin-delam.webp"
  },
  {
    "url": "static/a88e2e12a05e840acaa10d32819626e0/2be9e/mariko-kosaka.jpg"
  },
  {
    "url": "static/a88e2e12a05e840acaa10d32819626e0/2e0c2/mariko-kosaka.jpg"
  },
  {
    "url": "static/a88e2e12a05e840acaa10d32819626e0/78dfd/mariko-kosaka.webp"
  },
  {
    "url": "static/a88e2e12a05e840acaa10d32819626e0/79993/mariko-kosaka.jpg"
  },
  {
    "url": "static/a88e2e12a05e840acaa10d32819626e0/7d55c/mariko-kosaka.jpg"
  },
  {
    "url": "static/a88e2e12a05e840acaa10d32819626e0/7fc16/mariko-kosaka.webp"
  },
  {
    "url": "static/a88e2e12a05e840acaa10d32819626e0/b3aeb/mariko-kosaka.webp"
  },
  {
    "url": "static/a88e2e12a05e840acaa10d32819626e0/b9fa4/mariko-kosaka.jpg"
  },
  {
    "url": "static/a88e2e12a05e840acaa10d32819626e0/ba80a/mariko-kosaka.webp"
  },
  {
    "url": "static/a88e2e12a05e840acaa10d32819626e0/fabb6/mariko-kosaka.webp"
  },
  {
    "url": "static/aed425c7fd62c9736ed09773b10a3bbb/2be9e/yoshiki-shibukawa.jpg"
  },
  {
    "url": "static/aed425c7fd62c9736ed09773b10a3bbb/2e0c2/yoshiki-shibukawa.jpg"
  },
  {
    "url": "static/aed425c7fd62c9736ed09773b10a3bbb/78dfd/yoshiki-shibukawa.webp"
  },
  {
    "url": "static/aed425c7fd62c9736ed09773b10a3bbb/79993/yoshiki-shibukawa.jpg"
  },
  {
    "url": "static/aed425c7fd62c9736ed09773b10a3bbb/7d55c/yoshiki-shibukawa.jpg"
  },
  {
    "url": "static/aed425c7fd62c9736ed09773b10a3bbb/7fc16/yoshiki-shibukawa.webp"
  },
  {
    "url": "static/aed425c7fd62c9736ed09773b10a3bbb/b3aeb/yoshiki-shibukawa.webp"
  },
  {
    "url": "static/aed425c7fd62c9736ed09773b10a3bbb/b9fa4/yoshiki-shibukawa.jpg"
  },
  {
    "url": "static/aed425c7fd62c9736ed09773b10a3bbb/ba80a/yoshiki-shibukawa.webp"
  },
  {
    "url": "static/aed425c7fd62c9736ed09773b10a3bbb/fabb6/yoshiki-shibukawa.webp"
  },
  {
    "url": "static/af4676a4cb10cb6175aacff4aeb65b7c/0b1e9/fred-schott.webp"
  },
  {
    "url": "static/af4676a4cb10cb6175aacff4aeb65b7c/2be9e/fred-schott.jpg"
  },
  {
    "url": "static/af4676a4cb10cb6175aacff4aeb65b7c/2e0c2/fred-schott.jpg"
  },
  {
    "url": "static/af4676a4cb10cb6175aacff4aeb65b7c/383d9/fred-schott.jpg"
  },
  {
    "url": "static/af4676a4cb10cb6175aacff4aeb65b7c/78dfd/fred-schott.webp"
  },
  {
    "url": "static/af4676a4cb10cb6175aacff4aeb65b7c/79993/fred-schott.jpg"
  },
  {
    "url": "static/af4676a4cb10cb6175aacff4aeb65b7c/7d55c/fred-schott.jpg"
  },
  {
    "url": "static/af4676a4cb10cb6175aacff4aeb65b7c/7fc16/fred-schott.webp"
  },
  {
    "url": "static/af4676a4cb10cb6175aacff4aeb65b7c/b3aeb/fred-schott.webp"
  },
  {
    "url": "static/af4676a4cb10cb6175aacff4aeb65b7c/fabb6/fred-schott.webp"
  },
  {
    "url": "static/be8040410481461802a2fa0df8a55b71/2be9e/martin-splitt.jpg"
  },
  {
    "url": "static/be8040410481461802a2fa0df8a55b71/2e0c2/martin-splitt.jpg"
  },
  {
    "url": "static/be8040410481461802a2fa0df8a55b71/78dfd/martin-splitt.webp"
  },
  {
    "url": "static/be8040410481461802a2fa0df8a55b71/79993/martin-splitt.jpg"
  },
  {
    "url": "static/be8040410481461802a2fa0df8a55b71/7d55c/martin-splitt.jpg"
  },
  {
    "url": "static/be8040410481461802a2fa0df8a55b71/7fc16/martin-splitt.webp"
  },
  {
    "url": "static/be8040410481461802a2fa0df8a55b71/b3aeb/martin-splitt.webp"
  },
  {
    "url": "static/be8040410481461802a2fa0df8a55b71/b9fa4/martin-splitt.jpg"
  },
  {
    "url": "static/be8040410481461802a2fa0df8a55b71/ba80a/martin-splitt.webp"
  },
  {
    "url": "static/be8040410481461802a2fa0df8a55b71/fabb6/martin-splitt.webp"
  },
  {
    "url": "static/be9f5547d44799f89dbb316385300897/2be9e/okuno-kentaro.jpg"
  },
  {
    "url": "static/be9f5547d44799f89dbb316385300897/2e0c2/okuno-kentaro.jpg"
  },
  {
    "url": "static/be9f5547d44799f89dbb316385300897/6c12c/okuno-kentaro.jpg"
  },
  {
    "url": "static/be9f5547d44799f89dbb316385300897/78dfd/okuno-kentaro.webp"
  },
  {
    "url": "static/be9f5547d44799f89dbb316385300897/79993/okuno-kentaro.jpg"
  },
  {
    "url": "static/be9f5547d44799f89dbb316385300897/7fc16/okuno-kentaro.webp"
  },
  {
    "url": "static/be9f5547d44799f89dbb316385300897/92734/okuno-kentaro.webp"
  },
  {
    "url": "static/be9f5547d44799f89dbb316385300897/fabb6/okuno-kentaro.webp"
  },
  {
    "url": "static/bg-bc7189674188e93685f3afdbb7230c2d.png"
  },
  {
    "url": "static/bg-flip-x-8e5a19410a59941f6d771d779971b74f.png"
  },
  {
    "url": "static/c26178f8b9e656c239c677a451a56717/1e586/jxck.png"
  },
  {
    "url": "static/c26178f8b9e656c239c677a451a56717/59c88/jxck.webp"
  },
  {
    "url": "static/c26178f8b9e656c239c677a451a56717/78dfd/jxck.webp"
  },
  {
    "url": "static/c26178f8b9e656c239c677a451a56717/7d911/jxck.png"
  },
  {
    "url": "static/c26178f8b9e656c239c677a451a56717/7fc16/jxck.webp"
  },
  {
    "url": "static/c26178f8b9e656c239c677a451a56717/a8fe6/jxck.png"
  },
  {
    "url": "static/c2d1b679fb209be8b877a7c9303da730/2be9e/kitson-kelly.jpg"
  },
  {
    "url": "static/c2d1b679fb209be8b877a7c9303da730/2be9e/kitsonk.jpg"
  },
  {
    "url": "static/c2d1b679fb209be8b877a7c9303da730/2e0c2/kitson-kelly.jpg"
  },
  {
    "url": "static/c2d1b679fb209be8b877a7c9303da730/2e0c2/kitsonk.jpg"
  },
  {
    "url": "static/c2d1b679fb209be8b877a7c9303da730/2ea4d/kitson-kelly.webp"
  },
  {
    "url": "static/c2d1b679fb209be8b877a7c9303da730/2ea4d/kitsonk.webp"
  },
  {
    "url": "static/c2d1b679fb209be8b877a7c9303da730/78dfd/kitson-kelly.webp"
  },
  {
    "url": "static/c2d1b679fb209be8b877a7c9303da730/78dfd/kitsonk.webp"
  },
  {
    "url": "static/c2d1b679fb209be8b877a7c9303da730/79993/kitson-kelly.jpg"
  },
  {
    "url": "static/c2d1b679fb209be8b877a7c9303da730/79993/kitsonk.jpg"
  },
  {
    "url": "static/c2d1b679fb209be8b877a7c9303da730/7d55c/kitson-kelly.jpg"
  },
  {
    "url": "static/c2d1b679fb209be8b877a7c9303da730/7d55c/kitsonk.jpg"
  },
  {
    "url": "static/c2d1b679fb209be8b877a7c9303da730/7fc16/kitson-kelly.webp"
  },
  {
    "url": "static/c2d1b679fb209be8b877a7c9303da730/7fc16/kitsonk.webp"
  },
  {
    "url": "static/c2d1b679fb209be8b877a7c9303da730/b3aeb/kitson-kelly.webp"
  },
  {
    "url": "static/c2d1b679fb209be8b877a7c9303da730/b3aeb/kitsonk.webp"
  },
  {
    "url": "static/c2d1b679fb209be8b877a7c9303da730/ec650/kitson-kelly.jpg"
  },
  {
    "url": "static/c2d1b679fb209be8b877a7c9303da730/ec650/kitsonk.jpg"
  },
  {
    "url": "static/c2d1b679fb209be8b877a7c9303da730/fabb6/kitson-kelly.webp"
  },
  {
    "url": "static/c2d1b679fb209be8b877a7c9303da730/fabb6/kitsonk.webp"
  },
  {
    "url": "static/c4d9afd2a427bf6c89250adea30d2657/2be9e/samuel-agnew.jpg"
  },
  {
    "url": "static/c4d9afd2a427bf6c89250adea30d2657/2e0c2/samuel-agnew.jpg"
  },
  {
    "url": "static/c4d9afd2a427bf6c89250adea30d2657/78dfd/samuel-agnew.webp"
  },
  {
    "url": "static/c4d9afd2a427bf6c89250adea30d2657/79993/samuel-agnew.jpg"
  },
  {
    "url": "static/c4d9afd2a427bf6c89250adea30d2657/7d55c/samuel-agnew.jpg"
  },
  {
    "url": "static/c4d9afd2a427bf6c89250adea30d2657/7fc16/samuel-agnew.webp"
  },
  {
    "url": "static/c4d9afd2a427bf6c89250adea30d2657/82dd0/samuel-agnew.webp"
  },
  {
    "url": "static/c4d9afd2a427bf6c89250adea30d2657/92a13/samuel-agnew.jpg"
  },
  {
    "url": "static/c4d9afd2a427bf6c89250adea30d2657/b3aeb/samuel-agnew.webp"
  },
  {
    "url": "static/c4d9afd2a427bf6c89250adea30d2657/c1b89/samuel-agnew.jpg"
  },
  {
    "url": "static/c4d9afd2a427bf6c89250adea30d2657/d1836/samuel-agnew.webp"
  },
  {
    "url": "static/c4d9afd2a427bf6c89250adea30d2657/fabb6/samuel-agnew.webp"
  },
  {
    "url": "static/d/1220013047.json"
  },
  {
    "url": "static/d/2138572774.json"
  },
  {
    "url": "static/d/2616394776.json"
  },
  {
    "url": "static/d/3213335187.json"
  },
  {
    "url": "static/d/347558166.json"
  },
  {
    "url": "static/d/433895382.json"
  },
  {
    "url": "static/d/55795414.json"
  },
  {
    "url": "static/d10c6f52718e4799003475e7e5062e80/2be9e/kohei-kido.jpg"
  },
  {
    "url": "static/d10c6f52718e4799003475e7e5062e80/2e0c2/kohei-kido.jpg"
  },
  {
    "url": "static/d10c6f52718e4799003475e7e5062e80/78dfd/kohei-kido.webp"
  },
  {
    "url": "static/d10c6f52718e4799003475e7e5062e80/79993/kohei-kido.jpg"
  },
  {
    "url": "static/d10c6f52718e4799003475e7e5062e80/7d55c/kohei-kido.jpg"
  },
  {
    "url": "static/d10c6f52718e4799003475e7e5062e80/7fc16/kohei-kido.webp"
  },
  {
    "url": "static/d10c6f52718e4799003475e7e5062e80/b3aeb/kohei-kido.webp"
  },
  {
    "url": "static/d10c6f52718e4799003475e7e5062e80/b9fa4/kohei-kido.jpg"
  },
  {
    "url": "static/d10c6f52718e4799003475e7e5062e80/ba80a/kohei-kido.webp"
  },
  {
    "url": "static/d10c6f52718e4799003475e7e5062e80/fabb6/kohei-kido.webp"
  },
  {
    "url": "static/ddd8a84701760dca2e84ae8141d68008/2be9e/claudia-hernandez.jpg"
  },
  {
    "url": "static/ddd8a84701760dca2e84ae8141d68008/2e0c2/claudia-hernandez.jpg"
  },
  {
    "url": "static/ddd8a84701760dca2e84ae8141d68008/4e9ca/claudia-hernandez.webp"
  },
  {
    "url": "static/ddd8a84701760dca2e84ae8141d68008/6dfef/claudia-hernandez.jpg"
  },
  {
    "url": "static/ddd8a84701760dca2e84ae8141d68008/78dfd/claudia-hernandez.webp"
  },
  {
    "url": "static/ddd8a84701760dca2e84ae8141d68008/79993/claudia-hernandez.jpg"
  },
  {
    "url": "static/ddd8a84701760dca2e84ae8141d68008/7d55c/claudia-hernandez.jpg"
  },
  {
    "url": "static/ddd8a84701760dca2e84ae8141d68008/7fc16/claudia-hernandez.webp"
  },
  {
    "url": "static/ddd8a84701760dca2e84ae8141d68008/82dd0/claudia-hernandez.webp"
  },
  {
    "url": "static/ddd8a84701760dca2e84ae8141d68008/92a13/claudia-hernandez.jpg"
  },
  {
    "url": "static/ddd8a84701760dca2e84ae8141d68008/b3aeb/claudia-hernandez.webp"
  },
  {
    "url": "static/ddd8a84701760dca2e84ae8141d68008/fabb6/claudia-hernandez.webp"
  },
  {
    "url": "static/ddecbb1d184e5093bbb8de6ed2e9cd50/2be9e/jennifer-wong.jpg"
  },
  {
    "url": "static/ddecbb1d184e5093bbb8de6ed2e9cd50/2e0c2/jennifer-wong.jpg"
  },
  {
    "url": "static/ddecbb1d184e5093bbb8de6ed2e9cd50/78dfd/jennifer-wong.webp"
  },
  {
    "url": "static/ddecbb1d184e5093bbb8de6ed2e9cd50/79993/jennifer-wong.jpg"
  },
  {
    "url": "static/ddecbb1d184e5093bbb8de6ed2e9cd50/7d55c/jennifer-wong.jpg"
  },
  {
    "url": "static/ddecbb1d184e5093bbb8de6ed2e9cd50/7fc16/jennifer-wong.webp"
  },
  {
    "url": "static/ddecbb1d184e5093bbb8de6ed2e9cd50/b3aeb/jennifer-wong.webp"
  },
  {
    "url": "static/ddecbb1d184e5093bbb8de6ed2e9cd50/b9fa4/jennifer-wong.jpg"
  },
  {
    "url": "static/ddecbb1d184e5093bbb8de6ed2e9cd50/ba80a/jennifer-wong.webp"
  },
  {
    "url": "static/ddecbb1d184e5093bbb8de6ed2e9cd50/fabb6/jennifer-wong.webp"
  },
  {
    "url": "static/e0cab28fc074f7a99e422b674368d9ef/2be9e/sam-bellen.jpg"
  },
  {
    "url": "static/e0cab28fc074f7a99e422b674368d9ef/2e0c2/sam-bellen.jpg"
  },
  {
    "url": "static/e0cab28fc074f7a99e422b674368d9ef/5ba61/sam-bellen.jpg"
  },
  {
    "url": "static/e0cab28fc074f7a99e422b674368d9ef/78dfd/sam-bellen.webp"
  },
  {
    "url": "static/e0cab28fc074f7a99e422b674368d9ef/79993/sam-bellen.jpg"
  },
  {
    "url": "static/e0cab28fc074f7a99e422b674368d9ef/7d55c/sam-bellen.jpg"
  },
  {
    "url": "static/e0cab28fc074f7a99e422b674368d9ef/7fc16/sam-bellen.webp"
  },
  {
    "url": "static/e0cab28fc074f7a99e422b674368d9ef/82dd0/sam-bellen.webp"
  },
  {
    "url": "static/e0cab28fc074f7a99e422b674368d9ef/92a13/sam-bellen.jpg"
  },
  {
    "url": "static/e0cab28fc074f7a99e422b674368d9ef/a4bee/sam-bellen.webp"
  },
  {
    "url": "static/e0cab28fc074f7a99e422b674368d9ef/b3aeb/sam-bellen.webp"
  },
  {
    "url": "static/e0cab28fc074f7a99e422b674368d9ef/fabb6/sam-bellen.webp"
  },
  {
    "url": "static/e6645cd0be4ebac5f2932021e38412ec/1e9e2/lena-morita.png"
  },
  {
    "url": "static/e6645cd0be4ebac5f2932021e38412ec/6f910/lena-morita.webp"
  },
  {
    "url": "static/e6645cd0be4ebac5f2932021e38412ec/78dfd/lena-morita.webp"
  },
  {
    "url": "static/e6645cd0be4ebac5f2932021e38412ec/7d911/lena-morita.png"
  },
  {
    "url": "static/e6645cd0be4ebac5f2932021e38412ec/7fc16/lena-morita.webp"
  },
  {
    "url": "static/e6645cd0be4ebac5f2932021e38412ec/a8fe6/lena-morita.png"
  },
  {
    "url": "static/e6645cd0be4ebac5f2932021e38412ec/d2ba7/lena-morita.png"
  },
  {
    "url": "static/e6645cd0be4ebac5f2932021e38412ec/fabb6/lena-morita.webp"
  },
  {
    "url": "static/e74074425d87caa40916814997aedfac/2be9e/masato-ohba.jpg"
  },
  {
    "url": "static/e74074425d87caa40916814997aedfac/2e0c2/masato-ohba.jpg"
  },
  {
    "url": "static/e74074425d87caa40916814997aedfac/2ea4d/masato-ohba.webp"
  },
  {
    "url": "static/e74074425d87caa40916814997aedfac/78dfd/masato-ohba.webp"
  },
  {
    "url": "static/e74074425d87caa40916814997aedfac/79993/masato-ohba.jpg"
  },
  {
    "url": "static/e74074425d87caa40916814997aedfac/7d55c/masato-ohba.jpg"
  },
  {
    "url": "static/e74074425d87caa40916814997aedfac/7fc16/masato-ohba.webp"
  },
  {
    "url": "static/e74074425d87caa40916814997aedfac/b3aeb/masato-ohba.webp"
  },
  {
    "url": "static/e74074425d87caa40916814997aedfac/ec650/masato-ohba.jpg"
  },
  {
    "url": "static/e74074425d87caa40916814997aedfac/fabb6/masato-ohba.webp"
  },
  {
    "url": "static/eb9757fc898379b0e4a23ed6ecd3cf07/2be9e/benitte-raphael.jpg"
  },
  {
    "url": "static/eb9757fc898379b0e4a23ed6ecd3cf07/2e0c2/benitte-raphael.jpg"
  },
  {
    "url": "static/eb9757fc898379b0e4a23ed6ecd3cf07/78dfd/benitte-raphael.webp"
  },
  {
    "url": "static/eb9757fc898379b0e4a23ed6ecd3cf07/79993/benitte-raphael.jpg"
  },
  {
    "url": "static/eb9757fc898379b0e4a23ed6ecd3cf07/7d55c/benitte-raphael.jpg"
  },
  {
    "url": "static/eb9757fc898379b0e4a23ed6ecd3cf07/7fc16/benitte-raphael.webp"
  },
  {
    "url": "static/eb9757fc898379b0e4a23ed6ecd3cf07/b3aeb/benitte-raphael.webp"
  },
  {
    "url": "static/eb9757fc898379b0e4a23ed6ecd3cf07/b9fa4/benitte-raphael.jpg"
  },
  {
    "url": "static/eb9757fc898379b0e4a23ed6ecd3cf07/ba80a/benitte-raphael.webp"
  },
  {
    "url": "static/eb9757fc898379b0e4a23ed6ecd3cf07/fabb6/benitte-raphael.webp"
  },
  {
    "url": "static/f1fe52673557f6f17682e190e03d3d37/2e0c2/masato-nishihara.jpg"
  },
  {
    "url": "static/f1fe52673557f6f17682e190e03d3d37/441dc/masato-nishihara.jpg"
  },
  {
    "url": "static/f1fe52673557f6f17682e190e03d3d37/78dfd/masato-nishihara.webp"
  },
  {
    "url": "static/f1fe52673557f6f17682e190e03d3d37/79993/masato-nishihara.jpg"
  },
  {
    "url": "static/f1fe52673557f6f17682e190e03d3d37/7fc16/masato-nishihara.webp"
  },
  {
    "url": "static/f1fe52673557f6f17682e190e03d3d37/eb042/masato-nishihara.webp"
  },
  {
    "url": "static/f3506a3f8ab61c9eab37f2272da326ab/7175a/dynamis.png"
  },
  {
    "url": "static/f3506a3f8ab61c9eab37f2272da326ab/78dfd/dynamis.webp"
  },
  {
    "url": "static/f3506a3f8ab61c9eab37f2272da326ab/7d911/dynamis.png"
  },
  {
    "url": "static/f3506a3f8ab61c9eab37f2272da326ab/7fc16/dynamis.webp"
  },
  {
    "url": "static/f3506a3f8ab61c9eab37f2272da326ab/82dd0/dynamis.webp"
  },
  {
    "url": "static/f3506a3f8ab61c9eab37f2272da326ab/92e63/dynamis.png"
  },
  {
    "url": "static/f3506a3f8ab61c9eab37f2272da326ab/9b23f/dynamis.png"
  },
  {
    "url": "static/f3506a3f8ab61c9eab37f2272da326ab/a8fe6/dynamis.png"
  },
  {
    "url": "static/f3506a3f8ab61c9eab37f2272da326ab/b3aeb/dynamis.webp"
  },
  {
    "url": "static/f3506a3f8ab61c9eab37f2272da326ab/d1836/dynamis.webp"
  },
  {
    "url": "static/f3506a3f8ab61c9eab37f2272da326ab/d2ba7/dynamis.png"
  },
  {
    "url": "static/f3506a3f8ab61c9eab37f2272da326ab/fabb6/dynamis.webp"
  },
  {
    "url": "static/f9fd3ee94a7ea3fd1d2a72562a3c1334/10a58/dominic-tarr.jpg"
  },
  {
    "url": "static/f9fd3ee94a7ea3fd1d2a72562a3c1334/2be9e/dominic-tarr.jpg"
  },
  {
    "url": "static/f9fd3ee94a7ea3fd1d2a72562a3c1334/2e0c2/dominic-tarr.jpg"
  },
  {
    "url": "static/f9fd3ee94a7ea3fd1d2a72562a3c1334/3ff44/dominic-tarr.webp"
  },
  {
    "url": "static/f9fd3ee94a7ea3fd1d2a72562a3c1334/78dfd/dominic-tarr.webp"
  },
  {
    "url": "static/f9fd3ee94a7ea3fd1d2a72562a3c1334/79993/dominic-tarr.jpg"
  },
  {
    "url": "static/f9fd3ee94a7ea3fd1d2a72562a3c1334/7fc16/dominic-tarr.webp"
  },
  {
    "url": "static/f9fd3ee94a7ea3fd1d2a72562a3c1334/fabb6/dominic-tarr.webp"
  },
  {
    "url": "static/faf9ee6d62fce1be27f7b7f164247120/2e0c2/masashi-ganeko.jpg"
  },
  {
    "url": "static/faf9ee6d62fce1be27f7b7f164247120/59c88/masashi-ganeko.webp"
  },
  {
    "url": "static/faf9ee6d62fce1be27f7b7f164247120/78dfd/masashi-ganeko.webp"
  },
  {
    "url": "static/faf9ee6d62fce1be27f7b7f164247120/79993/masashi-ganeko.jpg"
  },
  {
    "url": "static/faf9ee6d62fce1be27f7b7f164247120/7fc16/masashi-ganeko.webp"
  },
  {
    "url": "static/faf9ee6d62fce1be27f7b7f164247120/c296b/masashi-ganeko.jpg"
  },
  {
    "url": "static/fec746a714af12e96ff312a7ece93147/2cb92/ginpei-takanashi.png"
  },
  {
    "url": "static/fec746a714af12e96ff312a7ece93147/78dfd/ginpei-takanashi.webp"
  },
  {
    "url": "static/fec746a714af12e96ff312a7ece93147/7d911/ginpei-takanashi.png"
  },
  {
    "url": "static/fec746a714af12e96ff312a7ece93147/7fc16/ginpei-takanashi.webp"
  },
  {
    "url": "static/fec746a714af12e96ff312a7ece93147/82dd0/ginpei-takanashi.webp"
  },
  {
    "url": "static/fec746a714af12e96ff312a7ece93147/92e63/ginpei-takanashi.png"
  },
  {
    "url": "static/fec746a714af12e96ff312a7ece93147/9b23f/ginpei-takanashi.png"
  },
  {
    "url": "static/fec746a714af12e96ff312a7ece93147/a8fe6/ginpei-takanashi.png"
  },
  {
    "url": "static/fec746a714af12e96ff312a7ece93147/b17d1/ginpei-takanashi.webp"
  },
  {
    "url": "static/fec746a714af12e96ff312a7ece93147/b3aeb/ginpei-takanashi.webp"
  },
  {
    "url": "static/fec746a714af12e96ff312a7ece93147/d2ba7/ginpei-takanashi.png"
  },
  {
    "url": "static/fec746a714af12e96ff312a7ece93147/fabb6/ginpei-takanashi.webp"
  },
  {
    "url": "static/logo-fec934935a8b84b24adead6e9feaea09.png"
  },
  {
    "url": "styles-df60449df6b81782a809.js"
  },
  {
    "url": "styles-df60449df6b81782a809.js.br",
    "revision": "44a839a501da136ba766f1f0fa91ecc9"
  },
  {
    "url": "styles-df60449df6b81782a809.js.gz",
    "revision": "d65739560114ab015a190442ad434d54"
  },
  {
    "url": "styles-df60449df6b81782a809.js.map",
    "revision": "e8b627f34f39b9cd385530a85b0cc9a0"
  },
  {
    "url": "styles.6e92cd181f40cbf952aa.css"
  },
  {
    "url": "styles.6e92cd181f40cbf952aa.css.br",
    "revision": "3789d4e127c2726f58ec7eadb51276c9"
  },
  {
    "url": "styles.6e92cd181f40cbf952aa.css.gz",
    "revision": "40a525e254fa448ed8266e06fe9739b3"
  },
  {
    "url": "talk/andrew-betts/index.html",
    "revision": "4bf9907bbc3ac3e7b8aed72f0cd1fe43"
  },
  {
    "url": "talk/andy-hall/index.html",
    "revision": "33cec61112c815d615d5ef0de1d4ec5e"
  },
  {
    "url": "talk/benjamin-gruenbaum/index.html",
    "revision": "221288842b031e1e004b4a4daa24b286"
  },
  {
    "url": "talk/claudia-hernandez/index.html",
    "revision": "1ac7ddb92536528f9b53268ee051234b"
  },
  {
    "url": "talk/day1-break-A-12%3A00/index.html",
    "revision": "37406f691c2eddc3c03cc25435cc9787"
  },
  {
    "url": "talk/day1-break-A-13%3A00/index.html",
    "revision": "86e8cbaf1d2277015b98990576bc106d"
  },
  {
    "url": "talk/day1-break-A-14%3A00/index.html",
    "revision": "2f3a6d0f1488643e4317209d6118398d"
  },
  {
    "url": "talk/day1-break-A-15%3A15/index.html",
    "revision": "20883a72a69209dac1a0b4670d30dda1"
  },
  {
    "url": "talk/day1-break-A-16%3A30/index.html",
    "revision": "49d483a80d1b0895c37c3595b5494995"
  },
  {
    "url": "talk/day1-break-A-17%3A45/index.html",
    "revision": "03dcafa13b4a418d9270b892f4a75dff"
  },
  {
    "url": "talk/day1-break-A-19%3A35/index.html",
    "revision": "4a947e7500491867a12908f4e97e0c04"
  },
  {
    "url": "talk/day2-break-A-10%3A00/index.html",
    "revision": "289d6a815f0d71093299229aa32082d5"
  },
  {
    "url": "talk/day2-break-A-12%3A00/index.html",
    "revision": "0050f8e5d02430c42f6b513a064e71f4"
  },
  {
    "url": "talk/day2-break-A-14%3A00/index.html",
    "revision": "84b6dc17dbf0318978151061f377fbb1"
  },
  {
    "url": "talk/day2-break-A-15%3A15/index.html",
    "revision": "70e1db637284964fd0de6f252e2eeb42"
  },
  {
    "url": "talk/day2-break-A-16%3A30/index.html",
    "revision": "f0ee310b0addfe63f00da8713add4026"
  },
  {
    "url": "talk/day2-break-A-17%3A45/index.html",
    "revision": "3d233aadd1a9231b533a2235eed1cb82"
  },
  {
    "url": "talk/day2-break-A-19%3A00/index.html",
    "revision": "33a08f8e58ad09e049fad25564bc43bb"
  },
  {
    "url": "talk/dominic-tarr/index.html",
    "revision": "fd02514c249a16f6be3f1f537bd0c567"
  },
  {
    "url": "talk/dynamis/index.html",
    "revision": "69fd95917291d1050dc5f129cb28aa4d"
  },
  {
    "url": "talk/eiji-kitamura/index.html",
    "revision": "8fd53cb772dbf4dcef334093e1862c23"
  },
  {
    "url": "talk/fred-schott/index.html",
    "revision": "10992ef8b4eb94b74825e7b7cf35a87c"
  },
  {
    "url": "talk/fuji-goro/index.html",
    "revision": "6b1b9b3fc99826d3851726415b92d1ce"
  },
  {
    "url": "talk/ginpei-takanashi/index.html",
    "revision": "4f790ef47a7a9cafcee193bcd4374fed"
  },
  {
    "url": "talk/guillermo-rauch/index.html",
    "revision": "f99f20f650e46a661d1dc3482728add5"
  },
  {
    "url": "talk/henry-zhu/index.html",
    "revision": "a4f2a6e6ef67bc2d3cd240351ffd9556"
  },
  {
    "url": "talk/hidetaka-okamoto/index.html",
    "revision": "33f271b9a192f07f22c43e83036fea4a"
  },
  {
    "url": "talk/irina-shestak/index.html",
    "revision": "bf2edc4f723a716c059cfb7c522a486b"
  },
  {
    "url": "talk/jarrod-overson/index.html",
    "revision": "365d4564d201ca3ecfea409279f17d12"
  },
  {
    "url": "talk/jennifer-wong/index.html",
    "revision": "bcbfe91975102336f94839e3b9e32342"
  },
  {
    "url": "talk/jonny-kalambay/index.html",
    "revision": "9ab88e7ba2a37586ffbdfb53c1a57b34"
  },
  {
    "url": "talk/jorge-bucaran/index.html",
    "revision": "f895b1a03fd966addb6e4395916627fa"
  },
  {
    "url": "talk/jxck/index.html",
    "revision": "95aedefa1e5f9aaf60786a249c350967"
  },
  {
    "url": "talk/kitson-kelly/index.html",
    "revision": "19cb8dfd841ff9c33405ec386971998f"
  },
  {
    "url": "talk/kohei-kido/index.html",
    "revision": "df626b89cd0a8ced88c9b5472718e2be"
  },
  {
    "url": "talk/lena-morita/index.html",
    "revision": "e15547190895d408082ec8db42f5d143"
  },
  {
    "url": "talk/maria-clara/index.html",
    "revision": "7adb9496dde74b025839f224d88a02e8"
  },
  {
    "url": "talk/mariko-kosaka/index.html",
    "revision": "1a3fa36913f927cdfbce27cb493f747e"
  },
  {
    "url": "talk/martin-splitt/index.html",
    "revision": "d899821c80bf18a3d988bf6a3124747b"
  },
  {
    "url": "talk/masashi-ganeko/index.html",
    "revision": "4faaf587a09eef6db58661819fc5081e"
  },
  {
    "url": "talk/masato-nishihara/index.html",
    "revision": "be854e83a83b6e67d5d12773be5aac94"
  },
  {
    "url": "talk/masato-ohba/index.html",
    "revision": "b7d8d5995a46315305c44e45fa49f064"
  },
  {
    "url": "talk/maxi-ferreira/index.html",
    "revision": "925c4cf8875483d96b14d637e44dd1b7"
  },
  {
    "url": "talk/nadieh-bremer/index.html",
    "revision": "1bd6b1c6ebc4a08972f0e8b382765dbb"
  },
  {
    "url": "talk/nazanin-delam/index.html",
    "revision": "a67cab771eda4519b2b1083905dfecda"
  },
  {
    "url": "talk/nobuhiko-sawai/index.html",
    "revision": "3d7e0cb758831244b5367b4872ab188e"
  },
  {
    "url": "talk/okuno-kentaro/index.html",
    "revision": "2d821eba1e82f153dbc95009842ee055"
  },
  {
    "url": "talk/praveen-yedidi/index.html",
    "revision": "11b106e889ef170db1d8b615c474b78c"
  },
  {
    "url": "talk/rowdy-rabouw/index.html",
    "revision": "9680f3d7accc3aaf919e4eab35e6fc20"
  },
  {
    "url": "talk/s-greif-r-benitte/index.html",
    "revision": "fa5246d4afa200ee20ca22d2ad7212a6"
  },
  {
    "url": "talk/sakakibara/index.html",
    "revision": "aeb08013181316fd5e7fadd7f90d1f10"
  },
  {
    "url": "talk/sam-bellen/index.html",
    "revision": "b4d8dd4361f9dcc33db6df7583ec121b"
  },
  {
    "url": "talk/samuel-agnew/index.html",
    "revision": "7442066ea69744bc7f2caec87e4ca4a7"
  },
  {
    "url": "talk/satoshi-ebihara/index.html",
    "revision": "bb6c48ca29f407127218483901c69235"
  },
  {
    "url": "talk/shirley-wu/index.html",
    "revision": "3646938e9bd975c67afdbf139e947e70"
  },
  {
    "url": "talk/sho-miyamoto/index.html",
    "revision": "cc543834846edb98a58a68f0de73c4ec"
  },
  {
    "url": "talk/sponsor-recruit/index.html",
    "revision": "43255ebd32ab12cb95ecfe7cbc93f4f5"
  },
  {
    "url": "talk/sponsor-talk-1/index.html",
    "revision": "4e0ae4cd25b2d10765db76edfe4a19fb"
  },
  {
    "url": "talk/sponsor-talk-2/index.html",
    "revision": "f0eb378b805767a8d2c00b9ef0a4ff41"
  },
  {
    "url": "talk/sponsor-yahoo/index.html",
    "revision": "d09114520dc873ca2817aaa521cdb61a"
  },
  {
    "url": "talk/takeshi-kato/index.html",
    "revision": "9ce9ea0282a44f3a3b35a79d68092182"
  },
  {
    "url": "talk/takuto-wada/index.html",
    "revision": "ae6ad5b9acbd94b6f6b74a7fe39c7e39"
  },
  {
    "url": "talk/tetsuharu-ohzeki/index.html",
    "revision": "adb7eb96cfc51712f8a1524da0a59199"
  },
  {
    "url": "talk/toru-kobayashi/index.html",
    "revision": "9d6d4dd7ac96d13d7907125e6a54f947"
  },
  {
    "url": "talk/yoshiki-shibukawa/index.html",
    "revision": "758bdd88574cd7be091fbf78027bf032"
  },
  {
    "url": "talk/yosuke-furukawa/index.html",
    "revision": "6d9491103ebf4f1a1eea9ad7e9e23955"
  },
  {
    "url": "venue/index.html",
    "revision": "5c0c1819e7782bf414b355e66c1c7d2d"
  },
  {
    "url": "webpack-runtime-fdf8652777a3db0c463f.js"
  },
  {
    "url": "webpack-runtime-fdf8652777a3db0c463f.js.br",
    "revision": "ff4c05f0f3d9817d16e5fab10e8e0803"
  },
  {
    "url": "webpack-runtime-fdf8652777a3db0c463f.js.gz",
    "revision": "a88f25e0ab687edc196bf2e4672508c8"
  },
  {
    "url": "webpack-runtime-fdf8652777a3db0c463f.js.map",
    "revision": "1a9ea31e34a87063fe0f430ee9cda74c"
  },
  {
    "url": "webpack.stats.json",
    "revision": "80d1b73dac4cf2eaae24023d8ea85448"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, workbox.strategies.networkFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, workbox.strategies.staleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)
const WHITELIST_KEY = `custom-navigation-whitelist`

const navigationRoute = new workbox.routing.NavigationRoute(({ event }) => {
  const { pathname } = new URL(event.request.url)

  return idbKeyval.get(WHITELIST_KEY).then((customWhitelist = []) => {
    // Respond with the offline shell if we match the custom whitelist
    if (customWhitelist.includes(pathname)) {
      const offlineShell = `/2019/offline-plugin-app-shell-fallback/index.html`
      const cacheName = workbox.core.cacheNames.precache

      return caches.match(offlineShell, { cacheName }).then(cachedResponse => {
        if (cachedResponse) return cachedResponse

        console.error(
          `The offline shell (${offlineShell}) was not found ` +
            `while attempting to serve a response for ${pathname}`
        )

        return fetch(offlineShell).then(response => {
          if (response.ok) {
            return caches.open(cacheName).then(cache =>
              // Clone is needed because put() consumes the response body.
              cache.put(offlineShell, response.clone()).then(() => response)
            )
          } else {
            return fetch(event.request)
          }
        })
      })
    }

    return fetch(event.request)
  })
})

workbox.routing.registerRoute(navigationRoute)

let updatingWhitelist = null

function rawWhitelistPathnames(pathnames) {
  if (updatingWhitelist !== null) {
    // Prevent the whitelist from being updated twice at the same time
    return updatingWhitelist.then(() => rawWhitelistPathnames(pathnames))
  }

  updatingWhitelist = idbKeyval
    .get(WHITELIST_KEY)
    .then((customWhitelist = []) => {
      pathnames.forEach(pathname => {
        if (!customWhitelist.includes(pathname)) customWhitelist.push(pathname)
      })

      return idbKeyval.set(WHITELIST_KEY, customWhitelist)
    })
    .then(() => {
      updatingWhitelist = null
    })

  return updatingWhitelist
}

function rawResetWhitelist() {
  if (updatingWhitelist !== null) {
    return updatingWhitelist.then(() => rawResetWhitelist())
  }

  updatingWhitelist = idbKeyval.set(WHITELIST_KEY, []).then(() => {
    updatingWhitelist = null
  })

  return updatingWhitelist
}

const messageApi = {
  whitelistPathnames(event) {
    let { pathnames } = event.data

    pathnames = pathnames.map(({ pathname, includesPrefix }) => {
      if (!includesPrefix) {
        return `/2019${pathname}`
      } else {
        return pathname
      }
    })

    event.waitUntil(rawWhitelistPathnames(pathnames))
  },

  resetWhitelist(event) {
    event.waitUntil(rawResetWhitelist())
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi } = event.data
  if (gatsbyApi) messageApi[gatsbyApi](event)
})
