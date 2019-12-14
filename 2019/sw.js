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
    "url": "1-0e96baac54c8999711bf.js"
  },
  {
    "url": "1-0e96baac54c8999711bf.js.br",
    "revision": "4a97f4c5fdd9f1b1cd51713cac9ce4cb"
  },
  {
    "url": "1-0e96baac54c8999711bf.js.gz",
    "revision": "e52d4e154e163ecaed4cd72455ead5fd"
  },
  {
    "url": "1-0e96baac54c8999711bf.js.map",
    "revision": "512215d2384c16f58cc7205156c1fdb2"
  },
  {
    "url": "14-7f0e32c1ddc9c07f836d.js"
  },
  {
    "url": "14-7f0e32c1ddc9c07f836d.js.br",
    "revision": "46359a8a181e4289a240a67106148478"
  },
  {
    "url": "14-7f0e32c1ddc9c07f836d.js.gz",
    "revision": "4302d0f224af9c5df8b610ccc22d5a03"
  },
  {
    "url": "14-7f0e32c1ddc9c07f836d.js.map",
    "revision": "865d3fd2170c6006de791c3a88926f75"
  },
  {
    "url": "15-fff8ff093862e84f9525.js"
  },
  {
    "url": "15-fff8ff093862e84f9525.js.br",
    "revision": "ae51bf0569f42c3bd0d05efb6f3f70f8"
  },
  {
    "url": "15-fff8ff093862e84f9525.js.gz",
    "revision": "72512777263f2f9098a2442a547e37b6"
  },
  {
    "url": "15-fff8ff093862e84f9525.js.map",
    "revision": "54118662b18b45e1ad8564cce72f5408"
  },
  {
    "url": "2-f14aaf640a0d72bf305b.js"
  },
  {
    "url": "2-f14aaf640a0d72bf305b.js.br",
    "revision": "5b49f9e8bb02c5619b496ee0b8ad7cac"
  },
  {
    "url": "2-f14aaf640a0d72bf305b.js.gz",
    "revision": "615211b9b8d2aafc627f46bf1734cc34"
  },
  {
    "url": "2-f14aaf640a0d72bf305b.js.map",
    "revision": "cf210cb465bd21c864e80d659ffc837c"
  },
  {
    "url": "404.html",
    "revision": "d2bca6c8b5f7c671bbd35e8f5511bd3c"
  },
  {
    "url": "404/index.html",
    "revision": "b4011a1f19e58bce42906c3d039a5e50"
  },
  {
    "url": "app-aa106ca4a1e98674be54.js"
  },
  {
    "url": "app-aa106ca4a1e98674be54.js.br",
    "revision": "ccfa06c88a99051f3ea61ebe3ddbec68"
  },
  {
    "url": "app-aa106ca4a1e98674be54.js.gz",
    "revision": "20247a06504a80df66f5c23284f65666"
  },
  {
    "url": "app-aa106ca4a1e98674be54.js.map",
    "revision": "290af441fd0bae3ed706043621e36322"
  },
  {
    "url": "chunk-map.json",
    "revision": "1c3b91cae0f2c09b827ce7d231fece89"
  },
  {
    "url": "code-of-conduct/index.html",
    "revision": "449e70989ba66497dc8d21137c116438"
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
    "url": "component---src-pages-index-tsx-58e8fa66902c86e7e9e0.js"
  },
  {
    "url": "component---src-pages-index-tsx-58e8fa66902c86e7e9e0.js.br",
    "revision": "7aff17a54bdfbbd11632950eb167ec3a"
  },
  {
    "url": "component---src-pages-index-tsx-58e8fa66902c86e7e9e0.js.gz",
    "revision": "09314817cfeb41603a47210a288e925b"
  },
  {
    "url": "component---src-pages-index-tsx-58e8fa66902c86e7e9e0.js.map",
    "revision": "028893d1d04d8da1fff409dabf4ea697"
  },
  {
    "url": "component---src-pages-schedule-tsx-7cd968f1f5a517732458.js"
  },
  {
    "url": "component---src-pages-schedule-tsx-7cd968f1f5a517732458.js.br",
    "revision": "fd4943f26f8009fbded356e51a46035c"
  },
  {
    "url": "component---src-pages-schedule-tsx-7cd968f1f5a517732458.js.gz",
    "revision": "f8f08f6711937ca7ff515351c3f0a4ac"
  },
  {
    "url": "component---src-pages-schedule-tsx-7cd968f1f5a517732458.js.map",
    "revision": "2bea61f87fa33b0ce0921c340d4dd976"
  },
  {
    "url": "component---src-pages-speakers-tsx-8e4593ccc223461a134f.js"
  },
  {
    "url": "component---src-pages-speakers-tsx-8e4593ccc223461a134f.js.br",
    "revision": "6775649b47ededca3d1c6d28b18f32ab"
  },
  {
    "url": "component---src-pages-speakers-tsx-8e4593ccc223461a134f.js.gz",
    "revision": "a191607bb74be225ad3114ca66148aa3"
  },
  {
    "url": "component---src-pages-speakers-tsx-8e4593ccc223461a134f.js.map",
    "revision": "fe1ae783d43c650446757518056257eb"
  },
  {
    "url": "component---src-pages-sponsors-tsx-e6710a18221e133de2d4.js"
  },
  {
    "url": "component---src-pages-sponsors-tsx-e6710a18221e133de2d4.js.br",
    "revision": "1f30d73cf8040fb5fd7d5ebf75371189"
  },
  {
    "url": "component---src-pages-sponsors-tsx-e6710a18221e133de2d4.js.gz",
    "revision": "a0953cb2130594c66aacc3e7120a23d6"
  },
  {
    "url": "component---src-pages-sponsors-tsx-e6710a18221e133de2d4.js.map",
    "revision": "a5ca6807b4cdf3d6720d90b1ada44ea1"
  },
  {
    "url": "component---src-pages-venue-tsx-3ed0b2ea734c9cde8bc1.js"
  },
  {
    "url": "component---src-pages-venue-tsx-3ed0b2ea734c9cde8bc1.js.br",
    "revision": "649e54a42e8e90d726856bc95a49e3ab"
  },
  {
    "url": "component---src-pages-venue-tsx-3ed0b2ea734c9cde8bc1.js.gz",
    "revision": "1f178af5455a283fb4e87b0a3051a485"
  },
  {
    "url": "component---src-pages-venue-tsx-3ed0b2ea734c9cde8bc1.js.map",
    "revision": "42c4be03eb2bb510ce25ab4cb7504024"
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
    "url": "component---src-templates-speaker-tsx-9600ad0d86e319d9cda7.js"
  },
  {
    "url": "component---src-templates-speaker-tsx-9600ad0d86e319d9cda7.js.br",
    "revision": "37d657b28e5cf2e1fd35a669dcc19c73"
  },
  {
    "url": "component---src-templates-speaker-tsx-9600ad0d86e319d9cda7.js.gz",
    "revision": "ddb86d31838ebbc664fc19f65b5483b3"
  },
  {
    "url": "component---src-templates-speaker-tsx-9600ad0d86e319d9cda7.js.map",
    "revision": "d2ef1d6542f9eb9e06b1f2509386cfc4"
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
    "revision": "97fc66a684339af954a0f669a03c6682"
  },
  {
    "url": "jp-specified-commercial-transactions-act/index.html",
    "revision": "fffde25af1af79cf077ec8efa7020f78"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "b0b98e0dc73e8e051aee487d7bde6f36"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "d3229bd1b46a5311043eb94658fab3ea"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "fb20ef428f56d9a3974732369812c521"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "1140f333fcd29688aaed69ad6d7dc029"
  },
  {
    "url": "page-data/code-of-conduct/page-data.json",
    "revision": "9977acaee1931d43ef6507069a4711b0"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "54439df28dc3cec3db5f4fd3d76cfa5e"
  },
  {
    "url": "page-data/jp-specified-commercial-transactions-act/page-data.json",
    "revision": "072864066a724cc2c6fa5f88acc948bf"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "4d92ea70c68381853017ae3bc97ad1ec"
  },
  {
    "url": "page-data/schedule/page-data.json",
    "revision": "0fb43635d6f19ca5e1841a44971a8085"
  },
  {
    "url": "page-data/speakers/page-data.json",
    "revision": "4c50fb2c67042fa552cc9c430e0f8fd7"
  },
  {
    "url": "page-data/sponsors/page-data.json",
    "revision": "e1e178c4e635442d295855907d56ae65"
  },
  {
    "url": "page-data/talk/andrew-betts/page-data.json",
    "revision": "98fd944720bd5acab8722e3b4c7ad985"
  },
  {
    "url": "page-data/talk/andy-hall/page-data.json",
    "revision": "99871f242b9816d097fbb58e2046548a"
  },
  {
    "url": "page-data/talk/benjamin-gruenbaum/page-data.json",
    "revision": "3dfb35d674c5eaa1d6491826e0b659c8"
  },
  {
    "url": "page-data/talk/claudia-hernandez/page-data.json",
    "revision": "995f6a31b70d102300b965c22f41acb6"
  },
  {
    "url": "page-data/talk/day1-break-A-12%3A00/page-data.json",
    "revision": "ad9e92522efac307ae5996d712bfdead"
  },
  {
    "url": "page-data/talk/day1-break-A-13%3A00/page-data.json",
    "revision": "df67daf1869375ac26e26de7c706d87d"
  },
  {
    "url": "page-data/talk/day1-break-A-14%3A00/page-data.json",
    "revision": "4859d10ecd66147e95f905ef069e9e95"
  },
  {
    "url": "page-data/talk/day1-break-A-15%3A15/page-data.json",
    "revision": "21e1550072462092a130771d1c5135e2"
  },
  {
    "url": "page-data/talk/day1-break-A-16%3A30/page-data.json",
    "revision": "f72001380595e3adfb50f46f3a621d04"
  },
  {
    "url": "page-data/talk/day1-break-A-17%3A45/page-data.json",
    "revision": "a66460b32317beff9593544f9a0c4691"
  },
  {
    "url": "page-data/talk/day1-break-A-19%3A35/page-data.json",
    "revision": "f99256bd6e6fc03eaf0580973f0d606f"
  },
  {
    "url": "page-data/talk/day2-break-A-10%3A00/page-data.json",
    "revision": "92cf21a3d347667878f715623f0f7ce4"
  },
  {
    "url": "page-data/talk/day2-break-A-12%3A00/page-data.json",
    "revision": "e7f9ac9f7bf49bc80447463e93dfb275"
  },
  {
    "url": "page-data/talk/day2-break-A-14%3A00/page-data.json",
    "revision": "2f4f8df54395b49cf2ca795a33ffbe24"
  },
  {
    "url": "page-data/talk/day2-break-A-15%3A15/page-data.json",
    "revision": "fe442397d12f497627ab382c626e998b"
  },
  {
    "url": "page-data/talk/day2-break-A-16%3A30/page-data.json",
    "revision": "a5c896ecdef778f3dab283f4d6ff9eaf"
  },
  {
    "url": "page-data/talk/day2-break-A-17%3A45/page-data.json",
    "revision": "909a2e3daaea3073cd5bb65560c90468"
  },
  {
    "url": "page-data/talk/day2-break-A-19%3A00/page-data.json",
    "revision": "8f7f9e860be13ec85e10d321325bb270"
  },
  {
    "url": "page-data/talk/dominic-tarr/page-data.json",
    "revision": "82a4acfb27072ad1dfdc6e27f0ad1ff1"
  },
  {
    "url": "page-data/talk/dynamis/page-data.json",
    "revision": "ac9ad6e60359baa319d43447c3de3e76"
  },
  {
    "url": "page-data/talk/eiji-kitamura/page-data.json",
    "revision": "0bceff3ca97418048b5b77c70e5ceeef"
  },
  {
    "url": "page-data/talk/fred-schott/page-data.json",
    "revision": "a6a507e421458029d12df8489603d209"
  },
  {
    "url": "page-data/talk/fuji-goro/page-data.json",
    "revision": "ffa1866484bf591d5a92af6f0a3c504b"
  },
  {
    "url": "page-data/talk/ginpei-takanashi/page-data.json",
    "revision": "6df8cae293c93f4dc90eb9000cc1eaea"
  },
  {
    "url": "page-data/talk/guillermo-rauch/page-data.json",
    "revision": "7b4cdd1070c4e59b3c7bc95cb88c542d"
  },
  {
    "url": "page-data/talk/henry-zhu/page-data.json",
    "revision": "c388dda98e045aa437b1a55940404447"
  },
  {
    "url": "page-data/talk/hidetaka-okamoto/page-data.json",
    "revision": "b0c2e6a593a7d0771da3f3f99bd7bf34"
  },
  {
    "url": "page-data/talk/irina-shestak/page-data.json",
    "revision": "e137d62ef6513b2f162de3bb6799c540"
  },
  {
    "url": "page-data/talk/jarrod-overson/page-data.json",
    "revision": "cb629494069b85508790ac71c01a1430"
  },
  {
    "url": "page-data/talk/jennifer-wong/page-data.json",
    "revision": "ecc2c22c0e949db9d8028e65e33ff271"
  },
  {
    "url": "page-data/talk/jonny-kalambay/page-data.json",
    "revision": "d80f402642625e42f77895bceb0e271b"
  },
  {
    "url": "page-data/talk/jorge-bucaran/page-data.json",
    "revision": "0773bf990c17f887ac1bd49730ae8086"
  },
  {
    "url": "page-data/talk/jxck/page-data.json",
    "revision": "96a1fd1bd67a0aded14fab3dd8cb876c"
  },
  {
    "url": "page-data/talk/kitson-kelly/page-data.json",
    "revision": "669bcd8f0ca0740600e95a2fa911c70f"
  },
  {
    "url": "page-data/talk/kohei-kido/page-data.json",
    "revision": "8232af749d94403593612dbb64887721"
  },
  {
    "url": "page-data/talk/lena-morita/page-data.json",
    "revision": "6c1dbc1074e23c8d8c4a173252f1a930"
  },
  {
    "url": "page-data/talk/maria-clara/page-data.json",
    "revision": "13f6aa2b30298ad3422ec644e99af7d2"
  },
  {
    "url": "page-data/talk/mariko-kosaka/page-data.json",
    "revision": "b931f5488d610379df17cdbdb3514eec"
  },
  {
    "url": "page-data/talk/martin-splitt/page-data.json",
    "revision": "97fda0f7998291b52464bd7476022158"
  },
  {
    "url": "page-data/talk/masashi-ganeko/page-data.json",
    "revision": "116553b0c45a3e82ba8fa064384252fa"
  },
  {
    "url": "page-data/talk/masato-nishihara/page-data.json",
    "revision": "44beaef376f1855aa610875e3fa62905"
  },
  {
    "url": "page-data/talk/masato-ohba/page-data.json",
    "revision": "00d34f32e7cfec17e1c957e7f8c41441"
  },
  {
    "url": "page-data/talk/maxi-ferreira/page-data.json",
    "revision": "d75bfdefe234a03223ea5049dd3e28f7"
  },
  {
    "url": "page-data/talk/nadieh-bremer/page-data.json",
    "revision": "b07c0fef9d5ef312fe9d101ed5ca02d5"
  },
  {
    "url": "page-data/talk/nazanin-delam/page-data.json",
    "revision": "900346d8ff9aaccc25854891a0d0e3ad"
  },
  {
    "url": "page-data/talk/nobuhiko-sawai/page-data.json",
    "revision": "5602b686727662c250ed79b615707398"
  },
  {
    "url": "page-data/talk/okuno-kentaro/page-data.json",
    "revision": "ec7a57a130ca5571d6fe359097391b81"
  },
  {
    "url": "page-data/talk/praveen-yedidi/page-data.json",
    "revision": "bcff76b6462d40abcfe49f5adf5a85f5"
  },
  {
    "url": "page-data/talk/rowdy-rabouw/page-data.json",
    "revision": "5b31b991d91f9c4d56c5a1cfab3ec78f"
  },
  {
    "url": "page-data/talk/s-greif-r-benitte/page-data.json",
    "revision": "c855d0bb459d8b07f359af6201a975f4"
  },
  {
    "url": "page-data/talk/sakakibara/page-data.json",
    "revision": "b0165b60bb9ddd6e24bcb2f4f1443b0b"
  },
  {
    "url": "page-data/talk/sam-bellen/page-data.json",
    "revision": "246e5689b218fb7df46caf0cd1a48ce2"
  },
  {
    "url": "page-data/talk/samuel-agnew/page-data.json",
    "revision": "c0af69493c21088046e03699d0e8f388"
  },
  {
    "url": "page-data/talk/satoshi-ebihara/page-data.json",
    "revision": "307dc8e0c50ac1938f88343b968054e0"
  },
  {
    "url": "page-data/talk/shirley-wu/page-data.json",
    "revision": "046043c440bce8161ecaef738a52fc35"
  },
  {
    "url": "page-data/talk/sho-miyamoto/page-data.json",
    "revision": "e0246f7a9a677feb6b3da69ae1392184"
  },
  {
    "url": "page-data/talk/sponsor-recruit/page-data.json",
    "revision": "01a60061ced7c7e03e9fb75207da4df0"
  },
  {
    "url": "page-data/talk/sponsor-talk-1/page-data.json",
    "revision": "ca18d52967389afec7a59feaca87b276"
  },
  {
    "url": "page-data/talk/sponsor-talk-2/page-data.json",
    "revision": "c5f354dd157b01a79bac5cd9ab17406c"
  },
  {
    "url": "page-data/talk/sponsor-yahoo/page-data.json",
    "revision": "ce1b89af92e7520387e73c9487529d09"
  },
  {
    "url": "page-data/talk/takeshi-kato/page-data.json",
    "revision": "60180b16e9ecc5fc4c31336c2f1ab207"
  },
  {
    "url": "page-data/talk/takuto-wada/page-data.json",
    "revision": "86f4f59689a0a30a194154d223e17189"
  },
  {
    "url": "page-data/talk/tetsuharu-ohzeki/page-data.json",
    "revision": "6d49736ffa6897d277adb7cbbb97b4bd"
  },
  {
    "url": "page-data/talk/toru-kobayashi/page-data.json",
    "revision": "24d2edae5b33fbf67c7319d003f4c716"
  },
  {
    "url": "page-data/talk/yoshiki-shibukawa/page-data.json",
    "revision": "25d1903648ff003e72339ba29873530f"
  },
  {
    "url": "page-data/talk/yosuke-furukawa/page-data.json",
    "revision": "eb67ccfa3f28fd551f366a69f85e8ee4"
  },
  {
    "url": "page-data/venue/page-data.json",
    "revision": "4104c509c4a0de4d92cd460865e472bd"
  },
  {
    "url": "schedule/index.html",
    "revision": "9d540be675a91836b7ed0243290a658c"
  },
  {
    "url": "sitemap.xml",
    "revision": "6c77b460dd5088216aae6693fcce633f"
  },
  {
    "url": "speakers/index.html",
    "revision": "b225730099b748ec82c4b2511531de0f"
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
    "revision": "9400ed2796141f46da83566f1e935e67"
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
    "url": "styles-6cfe1ca48bffa9d5baf0.js"
  },
  {
    "url": "styles-6cfe1ca48bffa9d5baf0.js.br",
    "revision": "0de25dc17dee71241a4b4523302ad43c"
  },
  {
    "url": "styles-6cfe1ca48bffa9d5baf0.js.gz",
    "revision": "e0e474d14c3510860aec3231a86f6bfa"
  },
  {
    "url": "styles-6cfe1ca48bffa9d5baf0.js.map",
    "revision": "17c71b61a2f35b89c278745d128d972f"
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
    "revision": "cba3c8628f42811246d5f0783bdb1ef3"
  },
  {
    "url": "talk/andy-hall/index.html",
    "revision": "49f5e295dd5b64cc3dc9767096874f85"
  },
  {
    "url": "talk/benjamin-gruenbaum/index.html",
    "revision": "439dc0425a29a359de5fcb235ae37f12"
  },
  {
    "url": "talk/claudia-hernandez/index.html",
    "revision": "b6e90dc4f54e26cfc1cb6ed10c956b57"
  },
  {
    "url": "talk/day1-break-A-12%3A00/index.html",
    "revision": "8ba278b1b9bd90a96de97b3963dfae01"
  },
  {
    "url": "talk/day1-break-A-13%3A00/index.html",
    "revision": "d1724c83853a56c4bc0205ae6d7627d4"
  },
  {
    "url": "talk/day1-break-A-14%3A00/index.html",
    "revision": "4810de00cd21cf76f2a554e69824168d"
  },
  {
    "url": "talk/day1-break-A-15%3A15/index.html",
    "revision": "4a1c177074430ea2a51db43bcf01b09a"
  },
  {
    "url": "talk/day1-break-A-16%3A30/index.html",
    "revision": "5de9dfff2620d89f167cb7365fe4e1f5"
  },
  {
    "url": "talk/day1-break-A-17%3A45/index.html",
    "revision": "613bca62a1bb68cafb4e6c6c30368be5"
  },
  {
    "url": "talk/day1-break-A-19%3A35/index.html",
    "revision": "2181451a6528832ddc7858181e43e836"
  },
  {
    "url": "talk/day2-break-A-10%3A00/index.html",
    "revision": "49e1adb12d09da18aab4e4fe5e8d7561"
  },
  {
    "url": "talk/day2-break-A-12%3A00/index.html",
    "revision": "daa2e72ec18696f83fd901b70e108474"
  },
  {
    "url": "talk/day2-break-A-14%3A00/index.html",
    "revision": "265653d977aaa704d1117cc9a97ad54c"
  },
  {
    "url": "talk/day2-break-A-15%3A15/index.html",
    "revision": "2530866d2e864f9915418344f38d5b02"
  },
  {
    "url": "talk/day2-break-A-16%3A30/index.html",
    "revision": "2bf79219ad1aefc5759d5a1a8b7a9a12"
  },
  {
    "url": "talk/day2-break-A-17%3A45/index.html",
    "revision": "05a0e06caabd45112cbe798b31e2d7b5"
  },
  {
    "url": "talk/day2-break-A-19%3A00/index.html",
    "revision": "d8727df117c8a519f34bdefe4e68926d"
  },
  {
    "url": "talk/dominic-tarr/index.html",
    "revision": "123092403dc082f040aa458f3c80637d"
  },
  {
    "url": "talk/dynamis/index.html",
    "revision": "fc77fd85ebbb0729ad4b4d0eacc9b48f"
  },
  {
    "url": "talk/eiji-kitamura/index.html",
    "revision": "2ab967e517b4b172ba385b25a8da56ea"
  },
  {
    "url": "talk/fred-schott/index.html",
    "revision": "d32e2feb375504cba955aabf3dbf7dc4"
  },
  {
    "url": "talk/fuji-goro/index.html",
    "revision": "0d9c43f0286b9c969ec599018dbcb253"
  },
  {
    "url": "talk/ginpei-takanashi/index.html",
    "revision": "e7500d932ba999f06393e47fa58c844b"
  },
  {
    "url": "talk/guillermo-rauch/index.html",
    "revision": "8f622106a1ab51134e285ed1a3595678"
  },
  {
    "url": "talk/henry-zhu/index.html",
    "revision": "c69271481293e3cb39767e2214a77aa1"
  },
  {
    "url": "talk/hidetaka-okamoto/index.html",
    "revision": "663f95666784c72b3df2538b5e794f98"
  },
  {
    "url": "talk/irina-shestak/index.html",
    "revision": "4053a2e84d700bda494d758aa384368f"
  },
  {
    "url": "talk/jarrod-overson/index.html",
    "revision": "e9e0dceb213ba49c27141b1dc66e878a"
  },
  {
    "url": "talk/jennifer-wong/index.html",
    "revision": "7c8f860b9829f2978e39e5f37e76ac8c"
  },
  {
    "url": "talk/jonny-kalambay/index.html",
    "revision": "e2d1b4d150e0d0aeb72c5f9b2a6e8b2b"
  },
  {
    "url": "talk/jorge-bucaran/index.html",
    "revision": "9e8455ad2999b34adad2c2b89fcf93de"
  },
  {
    "url": "talk/jxck/index.html",
    "revision": "79504dbb06bb8d32c0c78a9338eb9e68"
  },
  {
    "url": "talk/kitson-kelly/index.html",
    "revision": "57255f29c15ec4dcb1c4cc42c5816a00"
  },
  {
    "url": "talk/kohei-kido/index.html",
    "revision": "4492297abb6fc1ffba62eaf53202ca5c"
  },
  {
    "url": "talk/lena-morita/index.html",
    "revision": "63c7f4fd5eb1c78e98fc84d6f316e577"
  },
  {
    "url": "talk/maria-clara/index.html",
    "revision": "4ea838b01e68af97edae09b0953fbd2a"
  },
  {
    "url": "talk/mariko-kosaka/index.html",
    "revision": "4f14353b62128cdf5866f61dcf76c222"
  },
  {
    "url": "talk/martin-splitt/index.html",
    "revision": "65cfee31076e34ba63dfb85adab8ff3f"
  },
  {
    "url": "talk/masashi-ganeko/index.html",
    "revision": "14e4fc0a87aca2813a4fb0d03be7713b"
  },
  {
    "url": "talk/masato-nishihara/index.html",
    "revision": "ab0d5ef818bc6117cfaf854bb989c172"
  },
  {
    "url": "talk/masato-ohba/index.html",
    "revision": "4bce2e854b1aac071f589d983e1af245"
  },
  {
    "url": "talk/maxi-ferreira/index.html",
    "revision": "8a848a0a2641d3de585a2539d135e127"
  },
  {
    "url": "talk/nadieh-bremer/index.html",
    "revision": "14b00fa863546979e8f589f74cb7faa6"
  },
  {
    "url": "talk/nazanin-delam/index.html",
    "revision": "0efda3615f6649816b1491f13315321f"
  },
  {
    "url": "talk/nobuhiko-sawai/index.html",
    "revision": "f8683be947c54b690198b0e7d0878758"
  },
  {
    "url": "talk/okuno-kentaro/index.html",
    "revision": "8d9b4a4b845eb6e3781af474b6d8c3e0"
  },
  {
    "url": "talk/praveen-yedidi/index.html",
    "revision": "ca56749de8ba71967282b3b53a2c38cd"
  },
  {
    "url": "talk/rowdy-rabouw/index.html",
    "revision": "78110b17a23e7e736408fb654ff6e7d7"
  },
  {
    "url": "talk/s-greif-r-benitte/index.html",
    "revision": "3f69e394ff5060ab141e59dbd1f572d9"
  },
  {
    "url": "talk/sakakibara/index.html",
    "revision": "f804c3a32ed6770e8f8cdb8277b59dad"
  },
  {
    "url": "talk/sam-bellen/index.html",
    "revision": "a776428e48ab8b3677046773870f7066"
  },
  {
    "url": "talk/samuel-agnew/index.html",
    "revision": "0bfe1999cdac2f5aa91c0e7146cfd964"
  },
  {
    "url": "talk/satoshi-ebihara/index.html",
    "revision": "a82bbe46accc3c92cfff580d0a2b576e"
  },
  {
    "url": "talk/shirley-wu/index.html",
    "revision": "4e183a3cc7238a6edcd153f64ccdc8a5"
  },
  {
    "url": "talk/sho-miyamoto/index.html",
    "revision": "0f41bc19674f3f06d416abd1ac7d3377"
  },
  {
    "url": "talk/sponsor-recruit/index.html",
    "revision": "9c8b218b90931dbf502b0bd8d7eedbb5"
  },
  {
    "url": "talk/sponsor-talk-1/index.html",
    "revision": "a0dc0547f2f19d409e42003640d632f9"
  },
  {
    "url": "talk/sponsor-talk-2/index.html",
    "revision": "42ce8f6231def279c50caac18a86110c"
  },
  {
    "url": "talk/sponsor-yahoo/index.html",
    "revision": "8e5584094b72c3e1ea1307b706a6e54d"
  },
  {
    "url": "talk/takeshi-kato/index.html",
    "revision": "d9ac8f90be2711e724e7794857982378"
  },
  {
    "url": "talk/takuto-wada/index.html",
    "revision": "e9279a7ffebae9e2240a8e261ec35b52"
  },
  {
    "url": "talk/tetsuharu-ohzeki/index.html",
    "revision": "84dc76e6db760462473526c779639724"
  },
  {
    "url": "talk/toru-kobayashi/index.html",
    "revision": "7055a59bee914666ec37cf2fa6a060d1"
  },
  {
    "url": "talk/yoshiki-shibukawa/index.html",
    "revision": "0c8d9bd739ff58175bbb4241dd67d3b1"
  },
  {
    "url": "talk/yosuke-furukawa/index.html",
    "revision": "516e7a1a3a27404f27e0b675c3a17bcc"
  },
  {
    "url": "venue/index.html",
    "revision": "8ade91e982b11aab80d2f9ee8137a561"
  },
  {
    "url": "webpack-runtime-9affd21fbcd1533ada4e.js"
  },
  {
    "url": "webpack-runtime-9affd21fbcd1533ada4e.js.br",
    "revision": "fbd589971b0f0ebcaf0af1ffe98d657f"
  },
  {
    "url": "webpack-runtime-9affd21fbcd1533ada4e.js.gz",
    "revision": "861182785084c8b3f8106061f6fcb587"
  },
  {
    "url": "webpack-runtime-9affd21fbcd1533ada4e.js.map",
    "revision": "7ec8c991b1dbf113450d13606bc86ca5"
  },
  {
    "url": "webpack.stats.json",
    "revision": "dd737b8522b805e6b37982c45acd3a46"
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
