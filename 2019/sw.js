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
    "url": "1-0e682193536e32df710b.js"
  },
  {
    "url": "1-0e682193536e32df710b.js.br",
    "revision": "d24b15b9e00973e2ec9855697df264ea"
  },
  {
    "url": "1-0e682193536e32df710b.js.gz",
    "revision": "4e6ed2e78d03a9aa86d991035efa2b43"
  },
  {
    "url": "1-0e682193536e32df710b.js.map",
    "revision": "488b133caf4348c7f19587b87c0a382c"
  },
  {
    "url": "14-4b8c51b2bde8f44c0207.js"
  },
  {
    "url": "14-4b8c51b2bde8f44c0207.js.br",
    "revision": "bf007354aaf2926d4518d1af46e6bc57"
  },
  {
    "url": "14-4b8c51b2bde8f44c0207.js.gz",
    "revision": "62417fee5015d67c7ea97fcbb9994682"
  },
  {
    "url": "14-4b8c51b2bde8f44c0207.js.map",
    "revision": "316bdde096bbf053923a4e8d070bcf6e"
  },
  {
    "url": "15-b04201d674c4f6f25890.js"
  },
  {
    "url": "15-b04201d674c4f6f25890.js.br",
    "revision": "c272204702d0b7791d119dd1e6e8e1f9"
  },
  {
    "url": "15-b04201d674c4f6f25890.js.gz",
    "revision": "87cb89350645b7da5eaf7b3300e0d20d"
  },
  {
    "url": "15-b04201d674c4f6f25890.js.map",
    "revision": "1be90397bda5cb0ae4fd4a6ba0613bca"
  },
  {
    "url": "2-f1d9ee3b8f9e44e1fe5b.js"
  },
  {
    "url": "2-f1d9ee3b8f9e44e1fe5b.js.br",
    "revision": "95e35bba542274d3382ff6133e7ab889"
  },
  {
    "url": "2-f1d9ee3b8f9e44e1fe5b.js.gz",
    "revision": "0b5738f6f4d853c2cbfcf8972ccc03f9"
  },
  {
    "url": "2-f1d9ee3b8f9e44e1fe5b.js.map",
    "revision": "2f01f7db56322a3b46e607f9959eb2d5"
  },
  {
    "url": "404.html",
    "revision": "a67d22e8bed4e243e9947c91e6abc87b"
  },
  {
    "url": "404/index.html",
    "revision": "49070ec9e01c6b75308c2887c5828c6b"
  },
  {
    "url": "app-11dc057bf04b106586c6.js"
  },
  {
    "url": "app-11dc057bf04b106586c6.js.br",
    "revision": "7049140c6a8a366eed2358e639c3a4d8"
  },
  {
    "url": "app-11dc057bf04b106586c6.js.gz",
    "revision": "50d0286973a8281be9f049606d18d746"
  },
  {
    "url": "app-11dc057bf04b106586c6.js.map",
    "revision": "988d3be9cf6bacb7a77f0e79f3874b98"
  },
  {
    "url": "chunk-map.json",
    "revision": "7d22cc3078c72c9342cf34822ca62d23"
  },
  {
    "url": "code-of-conduct/index.html",
    "revision": "b8013b9718e567830f0189072bead147"
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
    "url": "component---src-pages-404-js-71f4ba7b45f6cfce2fb1.js"
  },
  {
    "url": "component---src-pages-404-js-71f4ba7b45f6cfce2fb1.js.br",
    "revision": "b8c62d51761a5594b54b08bc4d7224d8"
  },
  {
    "url": "component---src-pages-404-js-71f4ba7b45f6cfce2fb1.js.gz",
    "revision": "dbc0c5ff9d6868883c7f813f9573e4cd"
  },
  {
    "url": "component---src-pages-404-js-71f4ba7b45f6cfce2fb1.js.map",
    "revision": "21b9a7fa1caf31542601b33a0f971e54"
  },
  {
    "url": "component---src-pages-index-tsx-777470aef0715b2d50f3.js"
  },
  {
    "url": "component---src-pages-index-tsx-777470aef0715b2d50f3.js.br",
    "revision": "aa22246527f73db4444a8fecf1f4f7ac"
  },
  {
    "url": "component---src-pages-index-tsx-777470aef0715b2d50f3.js.gz",
    "revision": "289aa6ee11af6e85b09b421d5265dbaa"
  },
  {
    "url": "component---src-pages-index-tsx-777470aef0715b2d50f3.js.map",
    "revision": "99c7e34ec9d52dd32e5ebb4dd9de8fae"
  },
  {
    "url": "component---src-pages-schedule-tsx-3f00e21aca0d8c90a1a8.js"
  },
  {
    "url": "component---src-pages-schedule-tsx-3f00e21aca0d8c90a1a8.js.br",
    "revision": "dd9cef3426ac0166e31bce259cb74c7f"
  },
  {
    "url": "component---src-pages-schedule-tsx-3f00e21aca0d8c90a1a8.js.gz",
    "revision": "b083683817ae70c510fd855a76bf061f"
  },
  {
    "url": "component---src-pages-schedule-tsx-3f00e21aca0d8c90a1a8.js.map",
    "revision": "ea5b8d1958c6f861b6a1728c20cbf703"
  },
  {
    "url": "component---src-pages-speakers-tsx-3f9881e4ddcc492602c3.js"
  },
  {
    "url": "component---src-pages-speakers-tsx-3f9881e4ddcc492602c3.js.br",
    "revision": "f2d8c43b7f491ff997b1ea51a6c9317c"
  },
  {
    "url": "component---src-pages-speakers-tsx-3f9881e4ddcc492602c3.js.gz",
    "revision": "1ea365237ea54d7e1037c6a6cea71782"
  },
  {
    "url": "component---src-pages-speakers-tsx-3f9881e4ddcc492602c3.js.map",
    "revision": "7938559a49106e5492c1fa7f0dd69d42"
  },
  {
    "url": "component---src-pages-sponsors-tsx-dc71f21160d0f5ad69d5.js"
  },
  {
    "url": "component---src-pages-sponsors-tsx-dc71f21160d0f5ad69d5.js.br",
    "revision": "bbb222a14cf4ecca98d42eca144cdb11"
  },
  {
    "url": "component---src-pages-sponsors-tsx-dc71f21160d0f5ad69d5.js.gz",
    "revision": "3b798e1bf4503a64ae93afa5a34c8899"
  },
  {
    "url": "component---src-pages-sponsors-tsx-dc71f21160d0f5ad69d5.js.map",
    "revision": "54cedf8e3313b3aa455a12214dc96ab5"
  },
  {
    "url": "component---src-pages-venue-tsx-aac71338ce5440d1b513.js"
  },
  {
    "url": "component---src-pages-venue-tsx-aac71338ce5440d1b513.js.br",
    "revision": "caddba7e2502c200156ee9ee32e122ee"
  },
  {
    "url": "component---src-pages-venue-tsx-aac71338ce5440d1b513.js.gz",
    "revision": "3794ed70d1e2e80951282c4b579fea7c"
  },
  {
    "url": "component---src-pages-venue-tsx-aac71338ce5440d1b513.js.map",
    "revision": "a7bebced26a9341cfb7d7cd83259f97b"
  },
  {
    "url": "component---src-templates-markdown-tsx-df902a3bf254192bb71c.js"
  },
  {
    "url": "component---src-templates-markdown-tsx-df902a3bf254192bb71c.js.br",
    "revision": "41358039fbec6baea7b8bd588f2d6c5e"
  },
  {
    "url": "component---src-templates-markdown-tsx-df902a3bf254192bb71c.js.gz",
    "revision": "fc0b14c8cc5f181a2d39216b63384931"
  },
  {
    "url": "component---src-templates-markdown-tsx-df902a3bf254192bb71c.js.map",
    "revision": "247a67c8149c5717e3580f1a21f647fe"
  },
  {
    "url": "component---src-templates-speaker-tsx-fe05d051d01b6c4c5b3f.js"
  },
  {
    "url": "component---src-templates-speaker-tsx-fe05d051d01b6c4c5b3f.js.br",
    "revision": "2eebbb414ee1c8e157a34914333ac338"
  },
  {
    "url": "component---src-templates-speaker-tsx-fe05d051d01b6c4c5b3f.js.gz",
    "revision": "c41ad08b9c2013de285d71fb45be916e"
  },
  {
    "url": "component---src-templates-speaker-tsx-fe05d051d01b6c4c5b3f.js.map",
    "revision": "27544e55612084a48117f671eb6d2dcc"
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
    "revision": "517f1d3ded9757059e12e569628b04dd"
  },
  {
    "url": "jp-specified-commercial-transactions-act/index.html",
    "revision": "ab93cee237a113a1dc445cc9864ab616"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "b0b98e0dc73e8e051aee487d7bde6f36"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "1b7b99125a34c9083c0dac000a77b701"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "eed86bc0966e103beb2b70514e6092a3"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "b29f94aba36723b789bacc69400dd365"
  },
  {
    "url": "page-data/code-of-conduct/page-data.json",
    "revision": "dc4a4f3d628401866c3d3413ff26ea06"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "85b27fbf02b1dd352e6b9961d963080a"
  },
  {
    "url": "page-data/jp-specified-commercial-transactions-act/page-data.json",
    "revision": "0dc5cd47818a058c3fdd9c0b9014b487"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "9741219e7400c620cc75b878a3682215"
  },
  {
    "url": "page-data/schedule/page-data.json",
    "revision": "d9cd1e11ce799df0b56196970779d1b7"
  },
  {
    "url": "page-data/speakers/page-data.json",
    "revision": "965d5f42ff768e3f063048357ed0f18b"
  },
  {
    "url": "page-data/sponsors/page-data.json",
    "revision": "442ff43736e51226c96496fbb4e3a857"
  },
  {
    "url": "page-data/talk/andrew-betts/page-data.json",
    "revision": "1fe73f42ece56c75ecf48d69e5fc26f2"
  },
  {
    "url": "page-data/talk/andy-hall/page-data.json",
    "revision": "75fc7236804699975d8ed19b5f4580b4"
  },
  {
    "url": "page-data/talk/benjamin-gruenbaum/page-data.json",
    "revision": "246f9a5d680ea05962b4194362232b18"
  },
  {
    "url": "page-data/talk/claudia-hernandez/page-data.json",
    "revision": "3b586ae50dbf30096af191bb70ed2f5e"
  },
  {
    "url": "page-data/talk/day1-break-A-12%3A00/page-data.json",
    "revision": "9d35dd33de7571510b6920b550134245"
  },
  {
    "url": "page-data/talk/day1-break-A-13%3A00/page-data.json",
    "revision": "470d1144d7a353552f587f8b04a15646"
  },
  {
    "url": "page-data/talk/day1-break-A-14%3A00/page-data.json",
    "revision": "c2e2079eebcf0385944da2553c278796"
  },
  {
    "url": "page-data/talk/day1-break-A-15%3A15/page-data.json",
    "revision": "4bb8a41d7541811ebd3c9938915374de"
  },
  {
    "url": "page-data/talk/day1-break-A-16%3A30/page-data.json",
    "revision": "f28e0407255719478e6930159538a7b0"
  },
  {
    "url": "page-data/talk/day1-break-A-17%3A45/page-data.json",
    "revision": "426067014cdeef72d4a441c282837bca"
  },
  {
    "url": "page-data/talk/day1-break-A-19%3A35/page-data.json",
    "revision": "ea351fff0bcef17e2983f32b587e0b9d"
  },
  {
    "url": "page-data/talk/day2-break-A-10%3A00/page-data.json",
    "revision": "7a1463ac12c78e8adbc5dede521b6334"
  },
  {
    "url": "page-data/talk/day2-break-A-12%3A00/page-data.json",
    "revision": "5c468f0ce4f71e316b13234102bc66be"
  },
  {
    "url": "page-data/talk/day2-break-A-14%3A00/page-data.json",
    "revision": "7e21cdc9b4aaa32c7e5863218301eaa7"
  },
  {
    "url": "page-data/talk/day2-break-A-15%3A15/page-data.json",
    "revision": "51fb5fc6471af1f90ba35b044195e86b"
  },
  {
    "url": "page-data/talk/day2-break-A-16%3A30/page-data.json",
    "revision": "a98746c12ba287a78e2d9402c7454bb2"
  },
  {
    "url": "page-data/talk/day2-break-A-17%3A45/page-data.json",
    "revision": "cca65393f2d9ebbafbc7915f95f230b9"
  },
  {
    "url": "page-data/talk/day2-break-A-19%3A00/page-data.json",
    "revision": "232f100968fd00a7407c322d6f7fd7a9"
  },
  {
    "url": "page-data/talk/dominic-tarr/page-data.json",
    "revision": "62d567f97e56504e03367b0e19c234b2"
  },
  {
    "url": "page-data/talk/dynamis/page-data.json",
    "revision": "d0fbb8542826689062be34f3a2781fdf"
  },
  {
    "url": "page-data/talk/eiji-kitamura/page-data.json",
    "revision": "ffef8b1611a6a83cc4cef55f6047c41d"
  },
  {
    "url": "page-data/talk/fred-schott/page-data.json",
    "revision": "7a69f99233fe80e28a21a7f53776fb72"
  },
  {
    "url": "page-data/talk/fuji-goro/page-data.json",
    "revision": "d69aa596f105fad6958c185aa65a534b"
  },
  {
    "url": "page-data/talk/ginpei-takanashi/page-data.json",
    "revision": "c5ba6c9045022cfe11a56a10d3d04c85"
  },
  {
    "url": "page-data/talk/guillermo-rauch/page-data.json",
    "revision": "e05e106f60a9219fea93e4c51831bec7"
  },
  {
    "url": "page-data/talk/henry-zhu/page-data.json",
    "revision": "c4506fcc4571d7dfc46e06de73c685d1"
  },
  {
    "url": "page-data/talk/hidetaka-okamoto/page-data.json",
    "revision": "2cc7515acc7a90e50542be2e1d2cb5dc"
  },
  {
    "url": "page-data/talk/irina-shestak/page-data.json",
    "revision": "03d61510aeb53eb7095b77ac481b02b7"
  },
  {
    "url": "page-data/talk/jarrod-overson/page-data.json",
    "revision": "2ecf340a492ec37bec9ae12162a30af8"
  },
  {
    "url": "page-data/talk/jennifer-wong/page-data.json",
    "revision": "60508e8c6ec4a9662252fda0d82eea4b"
  },
  {
    "url": "page-data/talk/jonny-kalambay/page-data.json",
    "revision": "4fc10f90b3b6f85bdb5e69ef108c2da7"
  },
  {
    "url": "page-data/talk/jorge-bucaran/page-data.json",
    "revision": "424e2659a2a0c601d2ce94103ee26b3c"
  },
  {
    "url": "page-data/talk/jxck/page-data.json",
    "revision": "e68d5f17e668b9fce1ee869cdda95719"
  },
  {
    "url": "page-data/talk/kitson-kelly/page-data.json",
    "revision": "53655f7cd3f83a2ca04e1907059b5d98"
  },
  {
    "url": "page-data/talk/kohei-kido/page-data.json",
    "revision": "4a818b20f4b0a2ab7f239a40a7ff4d1d"
  },
  {
    "url": "page-data/talk/lena-morita/page-data.json",
    "revision": "2ae6b985071c13f3a7f8b3228df34835"
  },
  {
    "url": "page-data/talk/maria-clara/page-data.json",
    "revision": "39c6b02d16c12e01ce84c63c1b16662c"
  },
  {
    "url": "page-data/talk/mariko-kosaka/page-data.json",
    "revision": "0b96ce03fff2fc6c35e892a293e4bc5c"
  },
  {
    "url": "page-data/talk/martin-splitt/page-data.json",
    "revision": "6f486d3f0a1e1b2be65127b8a8c4c7c1"
  },
  {
    "url": "page-data/talk/masashi-ganeko/page-data.json",
    "revision": "126790e3c200f09a03a4115ab4280899"
  },
  {
    "url": "page-data/talk/masato-nishihara/page-data.json",
    "revision": "3405df1e2af95f75e40e1b7127a4d85e"
  },
  {
    "url": "page-data/talk/masato-ohba/page-data.json",
    "revision": "d54032e23bb5461cf83fcddd69e000d0"
  },
  {
    "url": "page-data/talk/maxi-ferreira/page-data.json",
    "revision": "b354f9a815d6e62a372a004173548dbd"
  },
  {
    "url": "page-data/talk/nadieh-bremer/page-data.json",
    "revision": "fce2fda9e26fabb0ef46c7c19a697aa3"
  },
  {
    "url": "page-data/talk/nazanin-delam/page-data.json",
    "revision": "4bad3984fbfb23a3b458dd3a1c0eeb65"
  },
  {
    "url": "page-data/talk/nobuhiko-sawai/page-data.json",
    "revision": "f42e1e96b690aa8ea1bbf506edf8fea2"
  },
  {
    "url": "page-data/talk/okuno-kentaro/page-data.json",
    "revision": "d2e97c1c33f787c423a4fe210a135ec1"
  },
  {
    "url": "page-data/talk/praveen-yedidi/page-data.json",
    "revision": "e53539e77ca734b1df243318266c06cd"
  },
  {
    "url": "page-data/talk/rowdy-rabouw/page-data.json",
    "revision": "5a75688b8b0832f0d850b0a12adf84b1"
  },
  {
    "url": "page-data/talk/s-greif-r-benitte/page-data.json",
    "revision": "b41597044671e1cc33ce2c4bec9d93a7"
  },
  {
    "url": "page-data/talk/sakakibara/page-data.json",
    "revision": "0bce45a49640c9492ed44ec01b4fe399"
  },
  {
    "url": "page-data/talk/sam-bellen/page-data.json",
    "revision": "50d1da0a098934925e9b549e92e7a447"
  },
  {
    "url": "page-data/talk/samuel-agnew/page-data.json",
    "revision": "f33ed6495219e7cbac462bb72e616aea"
  },
  {
    "url": "page-data/talk/satoshi-ebihara/page-data.json",
    "revision": "3174991b575db71acbd880c20f2a9bf3"
  },
  {
    "url": "page-data/talk/shirley-wu/page-data.json",
    "revision": "f2cc01cee275daa0d9de61a82f3ed3b8"
  },
  {
    "url": "page-data/talk/sho-miyamoto/page-data.json",
    "revision": "46ab7373ac307b52787aa69007c419e7"
  },
  {
    "url": "page-data/talk/sponsor-recruit/page-data.json",
    "revision": "0255269f1573fa401719538c12f26703"
  },
  {
    "url": "page-data/talk/sponsor-talk-1/page-data.json",
    "revision": "721aca2dad454d34b70281049abf2763"
  },
  {
    "url": "page-data/talk/sponsor-talk-2/page-data.json",
    "revision": "ee0f1b8125d1f838ded55024afc965dc"
  },
  {
    "url": "page-data/talk/sponsor-yahoo/page-data.json",
    "revision": "7a8aea3af49583ac3ae892e403c29bf6"
  },
  {
    "url": "page-data/talk/takeshi-kato/page-data.json",
    "revision": "275905ed8205a89283e8529268f75480"
  },
  {
    "url": "page-data/talk/takuto-wada/page-data.json",
    "revision": "f5e01da7744e7547aee109a90302f4db"
  },
  {
    "url": "page-data/talk/tetsuharu-ohzeki/page-data.json",
    "revision": "9e0989d42f43a75a817e531deb080fde"
  },
  {
    "url": "page-data/talk/toru-kobayashi/page-data.json",
    "revision": "658080cb20b699e551b67c16e8eeef68"
  },
  {
    "url": "page-data/talk/yoshiki-shibukawa/page-data.json",
    "revision": "fa83df3511ca80fc635b23b2d61d258f"
  },
  {
    "url": "page-data/talk/yosuke-furukawa/page-data.json",
    "revision": "89673f8169a5c88f310702ebb59b317d"
  },
  {
    "url": "page-data/venue/page-data.json",
    "revision": "3650a675456550b7f830f4304f50391c"
  },
  {
    "url": "schedule/index.html",
    "revision": "b4aeb0c344595dba0bbf9d7649d75b8b"
  },
  {
    "url": "sitemap.xml",
    "revision": "6c77b460dd5088216aae6693fcce633f"
  },
  {
    "url": "speakers/index.html",
    "revision": "875b1bb6ce78b6298cfb50c68cbcc80f"
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
    "revision": "1ccda708f55c897565c6ff3d59e5f59c"
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
    "url": "static/d/2138572774.json"
  },
  {
    "url": "static/d/2616394776.json"
  },
  {
    "url": "static/d/3213335187.json"
  },
  {
    "url": "static/d/3374654888.json"
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
    "revision": "70d91192f2055ed4a2fcfc1746280659"
  },
  {
    "url": "talk/andy-hall/index.html",
    "revision": "8ae4d09310e24ecc55f3054a376b246c"
  },
  {
    "url": "talk/benjamin-gruenbaum/index.html",
    "revision": "4e1e3621e02ffc42e16a0d7e8070f3d4"
  },
  {
    "url": "talk/claudia-hernandez/index.html",
    "revision": "f51974833262981d667b0003fa0da114"
  },
  {
    "url": "talk/day1-break-A-12%3A00/index.html",
    "revision": "3d074989f33889c88231171de78bedbe"
  },
  {
    "url": "talk/day1-break-A-13%3A00/index.html",
    "revision": "7e744f8eff0b4ea501517df2dd556725"
  },
  {
    "url": "talk/day1-break-A-14%3A00/index.html",
    "revision": "65d7189bfa65b81da914238496b9c0fc"
  },
  {
    "url": "talk/day1-break-A-15%3A15/index.html",
    "revision": "d9cf08946b5d5a47e49047404f0af2fb"
  },
  {
    "url": "talk/day1-break-A-16%3A30/index.html",
    "revision": "5752c99c01a939e6896af0b4dd9f0c2f"
  },
  {
    "url": "talk/day1-break-A-17%3A45/index.html",
    "revision": "7cf1ef83987b79be6c5d375f0e62dfb5"
  },
  {
    "url": "talk/day1-break-A-19%3A35/index.html",
    "revision": "b7928bf987dc2ab6c0519d89995a905d"
  },
  {
    "url": "talk/day2-break-A-10%3A00/index.html",
    "revision": "83177569197f097981c896c4121b0fb3"
  },
  {
    "url": "talk/day2-break-A-12%3A00/index.html",
    "revision": "d3561ba13f0c412e26a11f27c8e17036"
  },
  {
    "url": "talk/day2-break-A-14%3A00/index.html",
    "revision": "a101cf3fbcba21349f32135aa0414af7"
  },
  {
    "url": "talk/day2-break-A-15%3A15/index.html",
    "revision": "ddecc59a0c05a811343e4d4161fccb3e"
  },
  {
    "url": "talk/day2-break-A-16%3A30/index.html",
    "revision": "663dd22201dcec26f9cf1550faaa98e0"
  },
  {
    "url": "talk/day2-break-A-17%3A45/index.html",
    "revision": "c45bf34105f0b07b866228a4e69537fe"
  },
  {
    "url": "talk/day2-break-A-19%3A00/index.html",
    "revision": "c0d35cb618710a67c0805e02fefb3286"
  },
  {
    "url": "talk/dominic-tarr/index.html",
    "revision": "cd1b828a0811b13f354d0c3c81187a58"
  },
  {
    "url": "talk/dynamis/index.html",
    "revision": "009ab5a492a39449691d717144b65873"
  },
  {
    "url": "talk/eiji-kitamura/index.html",
    "revision": "c4615ce7e2ca9e47212c89b80b37899c"
  },
  {
    "url": "talk/fred-schott/index.html",
    "revision": "43636a4d73b03f5eb99047527a082e98"
  },
  {
    "url": "talk/fuji-goro/index.html",
    "revision": "02919bdd1ec1fe14050be635b6d2dc18"
  },
  {
    "url": "talk/ginpei-takanashi/index.html",
    "revision": "1f53d8f45cee6e72d6f1c1e90f8f709a"
  },
  {
    "url": "talk/guillermo-rauch/index.html",
    "revision": "696d40860bbf7e1bfe4d9f4e86dfbf73"
  },
  {
    "url": "talk/henry-zhu/index.html",
    "revision": "d7354e1ced55b8dd3dcc4cec98a1a9a4"
  },
  {
    "url": "talk/hidetaka-okamoto/index.html",
    "revision": "2482b9dbb89f910c386fd12dd6e65da8"
  },
  {
    "url": "talk/irina-shestak/index.html",
    "revision": "ea840d2bfe3bb4c3b996c094273c103b"
  },
  {
    "url": "talk/jarrod-overson/index.html",
    "revision": "bbbf887d4b0d8daf2fdcbefc11c1eecd"
  },
  {
    "url": "talk/jennifer-wong/index.html",
    "revision": "9d6d86e51348acb723c7dbdf2f108bdf"
  },
  {
    "url": "talk/jonny-kalambay/index.html",
    "revision": "282ce25f0879e492f8b9746beeef118d"
  },
  {
    "url": "talk/jorge-bucaran/index.html",
    "revision": "465aac27b85a2eda43b690500415d8d5"
  },
  {
    "url": "talk/jxck/index.html",
    "revision": "f949d2ceaaff1971f8c18fc8ad275a95"
  },
  {
    "url": "talk/kitson-kelly/index.html",
    "revision": "0003b91dd787bb22cee76fcabe76ca5c"
  },
  {
    "url": "talk/kohei-kido/index.html",
    "revision": "f5f49d74839f3dce5e39a007c3f2d784"
  },
  {
    "url": "talk/lena-morita/index.html",
    "revision": "c9ee49aae8d4ced0d91105214619b69a"
  },
  {
    "url": "talk/maria-clara/index.html",
    "revision": "f78e6cb40a777dd4a2e9f1f4ff9b7ca8"
  },
  {
    "url": "talk/mariko-kosaka/index.html",
    "revision": "ec951af553e12d1baed660a8c34ebb7a"
  },
  {
    "url": "talk/martin-splitt/index.html",
    "revision": "6f8b2a465b59c2767b7a6d0499e4f152"
  },
  {
    "url": "talk/masashi-ganeko/index.html",
    "revision": "67fce1f74523da26e1d772d75c43e5ea"
  },
  {
    "url": "talk/masato-nishihara/index.html",
    "revision": "13400ded620f22b33e421c2347c8237b"
  },
  {
    "url": "talk/masato-ohba/index.html",
    "revision": "4087779d0447eaa46bca65e88ed278a8"
  },
  {
    "url": "talk/maxi-ferreira/index.html",
    "revision": "f5cc6eaa1341aae52ff7cdd1ff633b56"
  },
  {
    "url": "talk/nadieh-bremer/index.html",
    "revision": "53b5f61ea421cbf5d8de7ab972b37fb5"
  },
  {
    "url": "talk/nazanin-delam/index.html",
    "revision": "69247eeb598d0738c39180e420a8e3f8"
  },
  {
    "url": "talk/nobuhiko-sawai/index.html",
    "revision": "ffa37e11cb6b5a4cacc054faf590de67"
  },
  {
    "url": "talk/okuno-kentaro/index.html",
    "revision": "046768c8fda1b3eb8434b89c2f5612a1"
  },
  {
    "url": "talk/praveen-yedidi/index.html",
    "revision": "50aa86254ccf67bab389569d49d81f62"
  },
  {
    "url": "talk/rowdy-rabouw/index.html",
    "revision": "f55fd49a047051f7192a0ce0f3a47fca"
  },
  {
    "url": "talk/s-greif-r-benitte/index.html",
    "revision": "1687c9215485e68ab53915bde3570853"
  },
  {
    "url": "talk/sakakibara/index.html",
    "revision": "8657a0f193c43683db9672cc6c6d825b"
  },
  {
    "url": "talk/sam-bellen/index.html",
    "revision": "66cda7bfc5006876dc17e54d3ff4d9a5"
  },
  {
    "url": "talk/samuel-agnew/index.html",
    "revision": "aa660fc4d7fca84be8739ca70a53c318"
  },
  {
    "url": "talk/satoshi-ebihara/index.html",
    "revision": "e35871c5eb070d81df54e644410aa20d"
  },
  {
    "url": "talk/shirley-wu/index.html",
    "revision": "6e79be98c16fb4fc7f126c69c5a1e547"
  },
  {
    "url": "talk/sho-miyamoto/index.html",
    "revision": "e9ee3380e69f11e323f416caee379c25"
  },
  {
    "url": "talk/sponsor-recruit/index.html",
    "revision": "ddf9930667a1b0327db1a2bb809b46fa"
  },
  {
    "url": "talk/sponsor-talk-1/index.html",
    "revision": "f3034dde3546babf8214505d32fce778"
  },
  {
    "url": "talk/sponsor-talk-2/index.html",
    "revision": "61b06152580b4dc1ec6019415b4089a4"
  },
  {
    "url": "talk/sponsor-yahoo/index.html",
    "revision": "6b980a6e1aac6de2b6871138e9062d64"
  },
  {
    "url": "talk/takeshi-kato/index.html",
    "revision": "c92d900325b37e740c856c2e7b6c0eaa"
  },
  {
    "url": "talk/takuto-wada/index.html",
    "revision": "5224caa4425b1ed30ea2ef5445f96d29"
  },
  {
    "url": "talk/tetsuharu-ohzeki/index.html",
    "revision": "a91f7c9e7d3aee4585195caaf4cf8ff4"
  },
  {
    "url": "talk/toru-kobayashi/index.html",
    "revision": "4e4272013c0e3240849933b4c65925ea"
  },
  {
    "url": "talk/yoshiki-shibukawa/index.html",
    "revision": "53db500eae4dee493b975dbc2ff506fd"
  },
  {
    "url": "talk/yosuke-furukawa/index.html",
    "revision": "c5c5f8b38a11815a2c82fb7f709964ab"
  },
  {
    "url": "venue/index.html",
    "revision": "fd21d10b85d95259b1f553bc4f1c9454"
  },
  {
    "url": "webpack-runtime-cd8b6d674acf6ed214fa.js"
  },
  {
    "url": "webpack-runtime-cd8b6d674acf6ed214fa.js.br",
    "revision": "8b98680b8023955c2df9304e75799c05"
  },
  {
    "url": "webpack-runtime-cd8b6d674acf6ed214fa.js.gz",
    "revision": "5c87d43c7ff55a02345d3e7a5250b969"
  },
  {
    "url": "webpack-runtime-cd8b6d674acf6ed214fa.js.map",
    "revision": "89cd433b911b733706d18315a5be6761"
  },
  {
    "url": "webpack.stats.json",
    "revision": "9fdbd52562bf1e1dfc7ea54cd0fbe946"
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
