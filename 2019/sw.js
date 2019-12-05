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
    "url": "2-bfc7d88c2a33227dec2c.js"
  },
  {
    "url": "2-bfc7d88c2a33227dec2c.js.br",
    "revision": "2b87e53b32c27c4818f5b9a8b2045c43"
  },
  {
    "url": "2-bfc7d88c2a33227dec2c.js.gz",
    "revision": "dbe166b56d9a463741b6be656c51d773"
  },
  {
    "url": "2-bfc7d88c2a33227dec2c.js.map",
    "revision": "2497227ca743f62230cc0108105db425"
  },
  {
    "url": "404.html",
    "revision": "9ccd2733fec003c8a4176c715d868a9b"
  },
  {
    "url": "404/index.html",
    "revision": "6364f93986788547c820d81045af0f19"
  },
  {
    "url": "about/index.html",
    "revision": "94e26645028e3d1389ea39aa618fd600"
  },
  {
    "url": "app-104fe3163c3b8805a968.js"
  },
  {
    "url": "app-104fe3163c3b8805a968.js.br",
    "revision": "9f72cb2089d75cc2dc1c96273f6432f8"
  },
  {
    "url": "app-104fe3163c3b8805a968.js.gz",
    "revision": "32e82a9267318d8f8373eb79fe38d07e"
  },
  {
    "url": "app-104fe3163c3b8805a968.js.map",
    "revision": "f07e6f2468f678cfbb2c05ac46c37161"
  },
  {
    "url": "chunk-map.json",
    "revision": "5ffcbddbf29edfc35050618f96f1699e"
  },
  {
    "url": "code-of-conduct/index.html",
    "revision": "f5574a192e2488f8300af6bdf31231a9"
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
    "url": "component---src-pages-index-tsx-ea0f9a8d759900713893.js"
  },
  {
    "url": "component---src-pages-index-tsx-ea0f9a8d759900713893.js.br",
    "revision": "85b3c2a02daf73e4fae179e805403a7d"
  },
  {
    "url": "component---src-pages-index-tsx-ea0f9a8d759900713893.js.gz",
    "revision": "5ba6ed82210554be9707beda5a458a5b"
  },
  {
    "url": "component---src-pages-index-tsx-ea0f9a8d759900713893.js.map",
    "revision": "61240c82a0182e9d3b4394eacede82ec"
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
    "url": "component---src-pages-speakers-tsx-34bda0eacf8495e7d5d7.js"
  },
  {
    "url": "component---src-pages-speakers-tsx-34bda0eacf8495e7d5d7.js.br",
    "revision": "f8162ce9d1dded5588d8ee1a12b9552d"
  },
  {
    "url": "component---src-pages-speakers-tsx-34bda0eacf8495e7d5d7.js.gz",
    "revision": "3caad138abd39f0d035a373139c0e1aa"
  },
  {
    "url": "component---src-pages-speakers-tsx-34bda0eacf8495e7d5d7.js.map",
    "revision": "afee915323ea3e30f6f2b873ee4bc977"
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
    "revision": "197322566fbf535c7495faaccfa23910"
  },
  {
    "url": "jp-specified-commercial-transactions-act/index.html",
    "revision": "a09ff528179b3560ed0f4b18d2292509"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "b0b98e0dc73e8e051aee487d7bde6f36"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "18b058659fbe76c8678f2e33112312d3"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "7af5c1436b78d1815b617ae352925eac"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "67f30d00c31b4459dd504c8eb064637f"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "f832c56f7375f42fa18a607c2e10f29e"
  },
  {
    "url": "page-data/code-of-conduct/page-data.json",
    "revision": "cf50bd5a6deb8caa2a30faadfac63311"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "77f12731a4656939cc011bd4024eb682"
  },
  {
    "url": "page-data/jp-specified-commercial-transactions-act/page-data.json",
    "revision": "431411f644f2eb02eb66712a8e75ad67"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "bcc43fdc88ce286e088b3036e64c3082"
  },
  {
    "url": "page-data/schedule/page-data.json",
    "revision": "6bbd17ed4349cb6d25dbf3e665915f35"
  },
  {
    "url": "page-data/speakers/page-data.json",
    "revision": "e51de574c45b4e5217d0d81ad4dc3400"
  },
  {
    "url": "page-data/sponsors/page-data.json",
    "revision": "3aec730f72a8c039fc1797a5182085ee"
  },
  {
    "url": "page-data/talk/andrew-betts/page-data.json",
    "revision": "8874572188810bf8bb093bfd479e9ee6"
  },
  {
    "url": "page-data/talk/andy-hall/page-data.json",
    "revision": "964b78cb46ede168b97f9db3054c8407"
  },
  {
    "url": "page-data/talk/benjamin-gruenbaum/page-data.json",
    "revision": "6c2efa93e9b9aae73377e8e742571c65"
  },
  {
    "url": "page-data/talk/claudia-hernandez/page-data.json",
    "revision": "6047ea6c9786f47d99322f1027c65d9c"
  },
  {
    "url": "page-data/talk/day1-break-A-12%3A00/page-data.json",
    "revision": "647cae9e76dddf0a2b3e51d591964a13"
  },
  {
    "url": "page-data/talk/day1-break-A-13%3A00/page-data.json",
    "revision": "b7acaeecd35326117e8f2d5363839d12"
  },
  {
    "url": "page-data/talk/day1-break-A-14%3A00/page-data.json",
    "revision": "5f4fb90def63084c3e2530d816fb0961"
  },
  {
    "url": "page-data/talk/day1-break-A-15%3A15/page-data.json",
    "revision": "36fce59be772a4993231e11b420b5aac"
  },
  {
    "url": "page-data/talk/day1-break-A-16%3A30/page-data.json",
    "revision": "9f22bf248d38cc09cf3d9ff560695a2e"
  },
  {
    "url": "page-data/talk/day1-break-A-17%3A45/page-data.json",
    "revision": "e450484039f98073e319de9960702e2a"
  },
  {
    "url": "page-data/talk/day1-break-A-19%3A35/page-data.json",
    "revision": "55f0ba7d6abba9e31c6a9f1011685599"
  },
  {
    "url": "page-data/talk/day2-break-A-10%3A00/page-data.json",
    "revision": "77100ac48e552a1c19bd321556306ab2"
  },
  {
    "url": "page-data/talk/day2-break-A-12%3A00/page-data.json",
    "revision": "aebfc1c0fb70ce01bfb575fb1c876b39"
  },
  {
    "url": "page-data/talk/day2-break-A-14%3A00/page-data.json",
    "revision": "bc4d5ddb6999da0410a33bd51512f8a4"
  },
  {
    "url": "page-data/talk/day2-break-A-15%3A15/page-data.json",
    "revision": "3871b455ebc2cd5ad529a07135ce451c"
  },
  {
    "url": "page-data/talk/day2-break-A-16%3A30/page-data.json",
    "revision": "11e5417b9856cacfa167ce6ca265918e"
  },
  {
    "url": "page-data/talk/day2-break-A-17%3A45/page-data.json",
    "revision": "6195c583fa1cd9e6cd6d4a35b9afe902"
  },
  {
    "url": "page-data/talk/day2-break-A-19%3A00/page-data.json",
    "revision": "3178f1c255ad8c79d44d0de450658842"
  },
  {
    "url": "page-data/talk/dominic-tarr/page-data.json",
    "revision": "a29701f752b9049182295dbc2bd613e2"
  },
  {
    "url": "page-data/talk/dynamis/page-data.json",
    "revision": "fc784cc573176760d504344a950208e7"
  },
  {
    "url": "page-data/talk/eiji-kitamura/page-data.json",
    "revision": "a7b5b2c066b1a59c40f30aeb3e969f40"
  },
  {
    "url": "page-data/talk/fred-schott/page-data.json",
    "revision": "40e8d577fcf1b8228f471787aacb68fc"
  },
  {
    "url": "page-data/talk/fuji-goro/page-data.json",
    "revision": "b1f25a5dfe8b86f62e6f30e449c70a5d"
  },
  {
    "url": "page-data/talk/ginpei-takanashi/page-data.json",
    "revision": "1dbc464c1dea700b7951a3cc4962978c"
  },
  {
    "url": "page-data/talk/guillermo-rauch/page-data.json",
    "revision": "296730884c9452522a62edd9e29c8cee"
  },
  {
    "url": "page-data/talk/henry-zhu/page-data.json",
    "revision": "56526793d0d636828db21d688b6f7d7e"
  },
  {
    "url": "page-data/talk/hidetaka-okamoto/page-data.json",
    "revision": "6aa8c29b66cc200187e4de14eb300a75"
  },
  {
    "url": "page-data/talk/irina-shestak/page-data.json",
    "revision": "b1082248fe09be2681f4d5318dffcbb0"
  },
  {
    "url": "page-data/talk/jarrod-overson/page-data.json",
    "revision": "dfd0ba20486b18e2dc380206318684b5"
  },
  {
    "url": "page-data/talk/jennifer-wong/page-data.json",
    "revision": "357ec3c1f5dab8a8cbca86fb71d1302a"
  },
  {
    "url": "page-data/talk/jonny-kalambay/page-data.json",
    "revision": "b167b8efd5bec11c6df2d99b6f1d9fc5"
  },
  {
    "url": "page-data/talk/jorge-bucaran/page-data.json",
    "revision": "e68a55ff8001c752e19ae19d48573bc8"
  },
  {
    "url": "page-data/talk/jxck/page-data.json",
    "revision": "88a54e5b19d73f79805bf500f6860ef8"
  },
  {
    "url": "page-data/talk/kitson-kelly/page-data.json",
    "revision": "1bbeb1729aa99a04e26d0d77252083dd"
  },
  {
    "url": "page-data/talk/kohei-kido/page-data.json",
    "revision": "221b19ef36c0723d1be00fe3fb985af6"
  },
  {
    "url": "page-data/talk/lena-morita/page-data.json",
    "revision": "ce0db33ed66a04738c6e5e37db6d4485"
  },
  {
    "url": "page-data/talk/maria-clara/page-data.json",
    "revision": "11c62a3730eb6fb922bf7119bc93a7f8"
  },
  {
    "url": "page-data/talk/mariko-kosaka/page-data.json",
    "revision": "fa3ae36d8c6d8151182a49e31bb29e11"
  },
  {
    "url": "page-data/talk/martin-splitt/page-data.json",
    "revision": "fa0611b55d12eedbe63a223b454a3a55"
  },
  {
    "url": "page-data/talk/masashi-ganeko/page-data.json",
    "revision": "da4765b673601e6a6fdf1f24912f2c2e"
  },
  {
    "url": "page-data/talk/masato-nishihara/page-data.json",
    "revision": "b16d3b8e82af8fa36f0e13c6107db83d"
  },
  {
    "url": "page-data/talk/masato-ohba/page-data.json",
    "revision": "abc471447f487c7efda160d5d6236184"
  },
  {
    "url": "page-data/talk/maxi-ferreira/page-data.json",
    "revision": "0fb1585c621ee8aa6093cd9309c45be7"
  },
  {
    "url": "page-data/talk/nadieh-bremer/page-data.json",
    "revision": "f809aae9301b0951c28bd7d798a9c60c"
  },
  {
    "url": "page-data/talk/nazanin-delam/page-data.json",
    "revision": "35a53de4cd477452b1310c3529dc5a16"
  },
  {
    "url": "page-data/talk/nobuhiko-sawai/page-data.json",
    "revision": "b912912e6a80c20ff375d34ffcc7239a"
  },
  {
    "url": "page-data/talk/okuno-kentaro/page-data.json",
    "revision": "a134fe49fcb350bef913a04441745089"
  },
  {
    "url": "page-data/talk/praveen-yedidi/page-data.json",
    "revision": "3f25095b538e2d7ff7b8fa23608cd46c"
  },
  {
    "url": "page-data/talk/rowdy-rabouw/page-data.json",
    "revision": "4f90b8d3bd2903ee616633fede6e1353"
  },
  {
    "url": "page-data/talk/s-greif-r-benitte/page-data.json",
    "revision": "19ffd6432f8205639ab4eef7a3f79e09"
  },
  {
    "url": "page-data/talk/sakakibara/page-data.json",
    "revision": "722813629ae5e094e44b69e1009732e5"
  },
  {
    "url": "page-data/talk/sam-bellen/page-data.json",
    "revision": "8ff5c0240f7ef849fa2709a7da2d10c0"
  },
  {
    "url": "page-data/talk/samuel-agnew/page-data.json",
    "revision": "d87f43d0697da6275639b0b93d011824"
  },
  {
    "url": "page-data/talk/satoshi-ebihara/page-data.json",
    "revision": "9e2e7de735c1d046aec9b16341bc1dd3"
  },
  {
    "url": "page-data/talk/shirley-wu/page-data.json",
    "revision": "84a1349b40659ebe26bc8dbb7e544507"
  },
  {
    "url": "page-data/talk/sho-miyamoto/page-data.json",
    "revision": "5391b8100a071ed327357ce5ce39052c"
  },
  {
    "url": "page-data/talk/sponsor-recruit/page-data.json",
    "revision": "0c1ad0da197b3db8ab4e87e34c6000f4"
  },
  {
    "url": "page-data/talk/sponsor-talk-1/page-data.json",
    "revision": "670eb978e9207d28cbcbfbb477afa6fc"
  },
  {
    "url": "page-data/talk/sponsor-talk-2/page-data.json",
    "revision": "efb49e9308c0e6c5688fa4ec5b387318"
  },
  {
    "url": "page-data/talk/sponsor-yahoo/page-data.json",
    "revision": "8def1216ac85ee266271e8dcc53510e8"
  },
  {
    "url": "page-data/talk/takeshi-kato/page-data.json",
    "revision": "bc10fa99d3a5a5d49bb4914b0a4526b0"
  },
  {
    "url": "page-data/talk/takuto-wada/page-data.json",
    "revision": "36e610b722c9c976c0df346da8baf321"
  },
  {
    "url": "page-data/talk/tetsuharu-ohzeki/page-data.json",
    "revision": "37dd9e0f436d97343f6c7b58b199871c"
  },
  {
    "url": "page-data/talk/toru-kobayashi/page-data.json",
    "revision": "6eb972d8290289167230c75e1757f34c"
  },
  {
    "url": "page-data/talk/yoshiki-shibukawa/page-data.json",
    "revision": "a03acceb3f7bab1e6097f217e7b78f1f"
  },
  {
    "url": "page-data/talk/yosuke-furukawa/page-data.json",
    "revision": "50477e55f5eb17453f76cafded3117ff"
  },
  {
    "url": "page-data/venue/page-data.json",
    "revision": "fc719e01f6062992861852b19685e359"
  },
  {
    "url": "schedule/index.html",
    "revision": "758fc1a84431f54ef18a0a21c571231d"
  },
  {
    "url": "sitemap.xml",
    "revision": "e87955155b38a7fcc472f3d68ca2170f"
  },
  {
    "url": "speakers/index.html",
    "revision": "67bef06ae3f1d569c79d675e7026cf55"
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
    "revision": "fb1a77356bc85bcdf2be1b3d9ba933ec"
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
    "revision": "7dd21c6cbcbdaeb6a0bb760d140da16a"
  },
  {
    "url": "talk/andy-hall/index.html",
    "revision": "ad8bb04198fbe02bbdf94f5de149e47d"
  },
  {
    "url": "talk/benjamin-gruenbaum/index.html",
    "revision": "f76eb5cb4cdaed562db6f88d18ccf0b7"
  },
  {
    "url": "talk/claudia-hernandez/index.html",
    "revision": "d3c283fc5d3c47193db40a7588e4760e"
  },
  {
    "url": "talk/day1-break-A-12%3A00/index.html",
    "revision": "12fa107ce6d0031f7076ad7fa07d34c2"
  },
  {
    "url": "talk/day1-break-A-13%3A00/index.html",
    "revision": "1400aeb16201c050ea0e89c156f3cee0"
  },
  {
    "url": "talk/day1-break-A-14%3A00/index.html",
    "revision": "1d85012c4a3b87d9f6970155bafd3089"
  },
  {
    "url": "talk/day1-break-A-15%3A15/index.html",
    "revision": "c8169492490abb2e2dea7c3920031a7b"
  },
  {
    "url": "talk/day1-break-A-16%3A30/index.html",
    "revision": "98eb31ff07b8b64d7afa15d35bf62c4a"
  },
  {
    "url": "talk/day1-break-A-17%3A45/index.html",
    "revision": "21fdc5f4dd8551eaf8e5ebbabe28b234"
  },
  {
    "url": "talk/day1-break-A-19%3A35/index.html",
    "revision": "0bd1499597dafa94325ef4a6b6cd57af"
  },
  {
    "url": "talk/day2-break-A-10%3A00/index.html",
    "revision": "59aa9213655c5341c379651c5390402a"
  },
  {
    "url": "talk/day2-break-A-12%3A00/index.html",
    "revision": "551772ced31496161779594718546819"
  },
  {
    "url": "talk/day2-break-A-14%3A00/index.html",
    "revision": "fea343a14567b9b1f17de0d66d081e8a"
  },
  {
    "url": "talk/day2-break-A-15%3A15/index.html",
    "revision": "9356815bc60284e0dba86cb2641e6de8"
  },
  {
    "url": "talk/day2-break-A-16%3A30/index.html",
    "revision": "917dc3fef6b76433f4cb1c85bf9833b6"
  },
  {
    "url": "talk/day2-break-A-17%3A45/index.html",
    "revision": "456635e01f305681f5b6d6222fa3f840"
  },
  {
    "url": "talk/day2-break-A-19%3A00/index.html",
    "revision": "633b590b06c0356bce172c1615483114"
  },
  {
    "url": "talk/dominic-tarr/index.html",
    "revision": "44f7146e493e04d7fd5c5b1d37ba62f3"
  },
  {
    "url": "talk/dynamis/index.html",
    "revision": "c19350c57e3bea36c637c0239d780f6b"
  },
  {
    "url": "talk/eiji-kitamura/index.html",
    "revision": "ec04c0f9b906c7ab8cf891445e567244"
  },
  {
    "url": "talk/fred-schott/index.html",
    "revision": "67c8840969b616df85e029484a25d920"
  },
  {
    "url": "talk/fuji-goro/index.html",
    "revision": "2756942d2247ca0c96d245340520a328"
  },
  {
    "url": "talk/ginpei-takanashi/index.html",
    "revision": "066c06b742bb4b02d39ffefe4218c14a"
  },
  {
    "url": "talk/guillermo-rauch/index.html",
    "revision": "336c4add13c5d9d82798aeaa6b31604b"
  },
  {
    "url": "talk/henry-zhu/index.html",
    "revision": "4a062b4a8853980a1b7bebc5bacafed3"
  },
  {
    "url": "talk/hidetaka-okamoto/index.html",
    "revision": "4558ac9636cb28ef0bddf0756e8b2e00"
  },
  {
    "url": "talk/irina-shestak/index.html",
    "revision": "61b5a4b57c5d607ddd33690f43ee17ee"
  },
  {
    "url": "talk/jarrod-overson/index.html",
    "revision": "7870116ef54fa3633ff6ff308af1fe7b"
  },
  {
    "url": "talk/jennifer-wong/index.html",
    "revision": "5267e2057b0550053a6e62561b414399"
  },
  {
    "url": "talk/jonny-kalambay/index.html",
    "revision": "37bb069663c969ed88e64a359776e47f"
  },
  {
    "url": "talk/jorge-bucaran/index.html",
    "revision": "a6b79311b8529eba98236f1b568bf628"
  },
  {
    "url": "talk/jxck/index.html",
    "revision": "9b9212b68f4812054e02db216924ee36"
  },
  {
    "url": "talk/kitson-kelly/index.html",
    "revision": "4f23af337528450d4786dc607a8ee55c"
  },
  {
    "url": "talk/kohei-kido/index.html",
    "revision": "2625f52a787ee09edf2680c65e932719"
  },
  {
    "url": "talk/lena-morita/index.html",
    "revision": "815e1fbdadfdf1e64fb67a22c13af407"
  },
  {
    "url": "talk/maria-clara/index.html",
    "revision": "ed28d57241cf8c4e0df4f047a23b53f0"
  },
  {
    "url": "talk/mariko-kosaka/index.html",
    "revision": "2b91cc3218b8c0272057fb153f4a275b"
  },
  {
    "url": "talk/martin-splitt/index.html",
    "revision": "b67cbc575936339966e51f783a6094eb"
  },
  {
    "url": "talk/masashi-ganeko/index.html",
    "revision": "4f7db5255cd63f9327b1324ee67edf3b"
  },
  {
    "url": "talk/masato-nishihara/index.html",
    "revision": "f7d51085fe82c0b93e5d113c7c30f9f9"
  },
  {
    "url": "talk/masato-ohba/index.html",
    "revision": "0c2f93d8ba1108c3fe72f1ef3a4dfbe2"
  },
  {
    "url": "talk/maxi-ferreira/index.html",
    "revision": "a5e39777e65dbe916807b1782c6cc8c9"
  },
  {
    "url": "talk/nadieh-bremer/index.html",
    "revision": "f478fd9d57b747de67054c1b83fbddd5"
  },
  {
    "url": "talk/nazanin-delam/index.html",
    "revision": "bbcac95a59f5b71143c7fa92bf206392"
  },
  {
    "url": "talk/nobuhiko-sawai/index.html",
    "revision": "7ecd86451758aa58d14c788cdea5cee6"
  },
  {
    "url": "talk/okuno-kentaro/index.html",
    "revision": "2b2c7c59d96708f18099ca1aba0ff329"
  },
  {
    "url": "talk/praveen-yedidi/index.html",
    "revision": "189e9b58186e1596db2fe3f17f2dd1e5"
  },
  {
    "url": "talk/rowdy-rabouw/index.html",
    "revision": "125446e99bbda2248e8055b7ad83c8e6"
  },
  {
    "url": "talk/s-greif-r-benitte/index.html",
    "revision": "5602706c7fdaf28b4c03c78382e741ad"
  },
  {
    "url": "talk/sakakibara/index.html",
    "revision": "fd937743ae550f57de152dba28da8179"
  },
  {
    "url": "talk/sam-bellen/index.html",
    "revision": "dfb36082e5deb5abb877e93577af23c2"
  },
  {
    "url": "talk/samuel-agnew/index.html",
    "revision": "fd0176ea20db564502e3acf035e4b069"
  },
  {
    "url": "talk/satoshi-ebihara/index.html",
    "revision": "e4efcf4491ef3e8be1315be295b9a636"
  },
  {
    "url": "talk/shirley-wu/index.html",
    "revision": "76c2cc23941f7c8a7a36faaa146c6367"
  },
  {
    "url": "talk/sho-miyamoto/index.html",
    "revision": "4a5d0289a45114aa9b169252e7089bcf"
  },
  {
    "url": "talk/sponsor-recruit/index.html",
    "revision": "b563686727a2d3b20eff650fffffc85b"
  },
  {
    "url": "talk/sponsor-talk-1/index.html",
    "revision": "8c7c6fdc2f1b8ea6162d0ea4c2d4c0ac"
  },
  {
    "url": "talk/sponsor-talk-2/index.html",
    "revision": "1bcd8d79470bf316903d5f0cdda52b61"
  },
  {
    "url": "talk/sponsor-yahoo/index.html",
    "revision": "d1e399c9c5320f18cc0cedec1af992cc"
  },
  {
    "url": "talk/takeshi-kato/index.html",
    "revision": "04b859ab68c73e7863dfc96600f9d05b"
  },
  {
    "url": "talk/takuto-wada/index.html",
    "revision": "3d887103ebb4d4d007bdc9720b4e0e2a"
  },
  {
    "url": "talk/tetsuharu-ohzeki/index.html",
    "revision": "40e093a763ac16b5011ca2c3dcfd4028"
  },
  {
    "url": "talk/toru-kobayashi/index.html",
    "revision": "2b0d2f1afe65e5d8c318ef5fa34067b5"
  },
  {
    "url": "talk/yoshiki-shibukawa/index.html",
    "revision": "80f4a3467915e3ef9663c2249cedfd8c"
  },
  {
    "url": "talk/yosuke-furukawa/index.html",
    "revision": "571dc5b69fd722162774a525c542653a"
  },
  {
    "url": "venue/index.html",
    "revision": "eaaed8bcbd7eec499b59763dc3010182"
  },
  {
    "url": "webpack-runtime-c04efa97d62b4bdf9fdc.js"
  },
  {
    "url": "webpack-runtime-c04efa97d62b4bdf9fdc.js.br",
    "revision": "3c98e9dc9cb0df392e3f472b17a555fc"
  },
  {
    "url": "webpack-runtime-c04efa97d62b4bdf9fdc.js.gz",
    "revision": "d45b299d5a7f25aee6e23b1bf19bf2e9"
  },
  {
    "url": "webpack-runtime-c04efa97d62b4bdf9fdc.js.map",
    "revision": "fc4f7a4b1c97bc5dd78030e44aaf9cf4"
  },
  {
    "url": "webpack.stats.json",
    "revision": "3d7ac59b975b48782024261e5b58d698"
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
