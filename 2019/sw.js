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
    "url": "2-1ae78630d1daf0d01f4b.js"
  },
  {
    "url": "2-1ae78630d1daf0d01f4b.js.br",
    "revision": "3ffce4ac88907f29405004314123c778"
  },
  {
    "url": "2-1ae78630d1daf0d01f4b.js.gz",
    "revision": "5ea6a53e0d9be56fdad0529901b175cc"
  },
  {
    "url": "2-1ae78630d1daf0d01f4b.js.map",
    "revision": "0cf340a5ebe5c9f859e009977d4da9a7"
  },
  {
    "url": "404.html",
    "revision": "4f673cc06a9cfc18753b9e00cfe391a1"
  },
  {
    "url": "404/index.html",
    "revision": "57f0e5d3ab2c4efe2065a5c835a46b12"
  },
  {
    "url": "about/index.html",
    "revision": "4ba775849a15a60437e1d114c82eeca1"
  },
  {
    "url": "app-163aa20d723bea2b95ed.js"
  },
  {
    "url": "app-163aa20d723bea2b95ed.js.br",
    "revision": "fe837f923c4d9b6af4a75229beffce52"
  },
  {
    "url": "app-163aa20d723bea2b95ed.js.gz",
    "revision": "2e92ccf9c750df23ef49763d6a29a853"
  },
  {
    "url": "app-163aa20d723bea2b95ed.js.map",
    "revision": "52f0c176d8635738a88fb81a07859404"
  },
  {
    "url": "chunk-map.json",
    "revision": "41dc5dab4e3e28bd7592029d0c7dad75"
  },
  {
    "url": "code-of-conduct/index.html",
    "revision": "380ccc647fc39c0155b764cabeddabc0"
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
    "url": "component---src-pages-about-tsx-72cc494b86c639fdd170.js"
  },
  {
    "url": "component---src-pages-about-tsx-72cc494b86c639fdd170.js.br",
    "revision": "2bba967d7683284511300d3529f71c4b"
  },
  {
    "url": "component---src-pages-about-tsx-72cc494b86c639fdd170.js.gz",
    "revision": "1e894a596b12d68fa433d6e10189d0c5"
  },
  {
    "url": "component---src-pages-about-tsx-72cc494b86c639fdd170.js.map",
    "revision": "1a726d5d7649a7854a7301443f5ffb1f"
  },
  {
    "url": "component---src-pages-index-tsx-ad11c8a22319fa23b3ec.js"
  },
  {
    "url": "component---src-pages-index-tsx-ad11c8a22319fa23b3ec.js.br",
    "revision": "510f6a01e7f9f9c83c64c952879aa862"
  },
  {
    "url": "component---src-pages-index-tsx-ad11c8a22319fa23b3ec.js.gz",
    "revision": "7277e233ffeb664386348b40ef85713c"
  },
  {
    "url": "component---src-pages-index-tsx-ad11c8a22319fa23b3ec.js.map",
    "revision": "21b428eb039f228f559aaed3e8f2de3a"
  },
  {
    "url": "component---src-pages-schedule-tsx-273b02c5a45dfea1e52a.js"
  },
  {
    "url": "component---src-pages-schedule-tsx-273b02c5a45dfea1e52a.js.br",
    "revision": "d0390799fb9bf777b192a69361529ac3"
  },
  {
    "url": "component---src-pages-schedule-tsx-273b02c5a45dfea1e52a.js.gz",
    "revision": "cba8f37db1fa04a73633cbe2eacc880f"
  },
  {
    "url": "component---src-pages-schedule-tsx-273b02c5a45dfea1e52a.js.map",
    "revision": "3f14f80e455256f4d0237c9fa6498303"
  },
  {
    "url": "component---src-pages-speakers-tsx-27d04c022f4329d6be7d.js"
  },
  {
    "url": "component---src-pages-speakers-tsx-27d04c022f4329d6be7d.js.br",
    "revision": "52b5ebf1d14ee2bc89813176f21a4d97"
  },
  {
    "url": "component---src-pages-speakers-tsx-27d04c022f4329d6be7d.js.gz",
    "revision": "9854f4beb03b63f03201be3d649d78cf"
  },
  {
    "url": "component---src-pages-speakers-tsx-27d04c022f4329d6be7d.js.map",
    "revision": "a04b7b9b4793e02075b8761eb2b0402a"
  },
  {
    "url": "component---src-pages-sponsors-tsx-90a35dd3d82fd17ac531.js"
  },
  {
    "url": "component---src-pages-sponsors-tsx-90a35dd3d82fd17ac531.js.br",
    "revision": "e5d70ba77f007b65f5cace385c2ca3e3"
  },
  {
    "url": "component---src-pages-sponsors-tsx-90a35dd3d82fd17ac531.js.gz",
    "revision": "668bc5f6be43020e709f306f2e842385"
  },
  {
    "url": "component---src-pages-sponsors-tsx-90a35dd3d82fd17ac531.js.map",
    "revision": "552df845fcb0e973f7c8205865ce077f"
  },
  {
    "url": "component---src-pages-venue-tsx-11e85471515466b974d6.js"
  },
  {
    "url": "component---src-pages-venue-tsx-11e85471515466b974d6.js.br",
    "revision": "af0f9a560fa8259f1e2bf24b313e7b58"
  },
  {
    "url": "component---src-pages-venue-tsx-11e85471515466b974d6.js.gz",
    "revision": "eeca564c85e1e73071058348d8a32889"
  },
  {
    "url": "component---src-pages-venue-tsx-11e85471515466b974d6.js.map",
    "revision": "34b07c0747070e33e1821560a3cc15a5"
  },
  {
    "url": "component---src-templates-markdown-tsx-a554b64680371b7a36d8.js"
  },
  {
    "url": "component---src-templates-markdown-tsx-a554b64680371b7a36d8.js.br",
    "revision": "2f50b072fdf78070e1c18e06352102a0"
  },
  {
    "url": "component---src-templates-markdown-tsx-a554b64680371b7a36d8.js.gz",
    "revision": "5f68da30d7d1da7c72af9d9ab4badf53"
  },
  {
    "url": "component---src-templates-markdown-tsx-a554b64680371b7a36d8.js.map",
    "revision": "cee31548a0c2525468c6dc7d5286c072"
  },
  {
    "url": "component---src-templates-speaker-tsx-299cb3bcf00aecba8b4d.js"
  },
  {
    "url": "component---src-templates-speaker-tsx-299cb3bcf00aecba8b4d.js.br",
    "revision": "d871de2c11bab0e63892e41b90ba3fdd"
  },
  {
    "url": "component---src-templates-speaker-tsx-299cb3bcf00aecba8b4d.js.gz",
    "revision": "0767259a847780e61a0d35cdd96fdca9"
  },
  {
    "url": "component---src-templates-speaker-tsx-299cb3bcf00aecba8b4d.js.map",
    "revision": "006b489dd6805de0fdadbe548234dcad"
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
    "revision": "9d982156088be79c63a043b193e74b7a"
  },
  {
    "url": "jp-specified-commercial-transactions-act/index.html",
    "revision": "56ba288f0ad904adbabec637f871b571"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "b0b98e0dc73e8e051aee487d7bde6f36"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "1872ad11b9095b87e940dff71ec27b59"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "25f739b5fea1b8df985639ec72dae399"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "ac6d49d60b984739ee74801175353c30"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "ba7eea65c0fb5ede8c0460d056b2d036"
  },
  {
    "url": "page-data/code-of-conduct/page-data.json",
    "revision": "147c4ee8e9f93b9d7dae079165b09ed9"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "3415aeede2f870d2434503e481e7c241"
  },
  {
    "url": "page-data/jp-specified-commercial-transactions-act/page-data.json",
    "revision": "ff6ac177929f0b950d75ad468584672c"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "ca7ab0f40506f2c6d4c283270d28b2e1"
  },
  {
    "url": "page-data/schedule/page-data.json",
    "revision": "ec0f6cc37f1a4fa71d6788cacfe69e54"
  },
  {
    "url": "page-data/speakers/page-data.json",
    "revision": "7431816065c9cc0dcc447150a3e3b9f6"
  },
  {
    "url": "page-data/sponsors/page-data.json",
    "revision": "d9a9781d041456554784dbaf850dc6dd"
  },
  {
    "url": "page-data/talk/andrew-betts/page-data.json",
    "revision": "211e6002ed368e446809a8f4ab78bb66"
  },
  {
    "url": "page-data/talk/andy-hall/page-data.json",
    "revision": "cf41a07ccb03a6d416daddf66a4c51d1"
  },
  {
    "url": "page-data/talk/benjamin-gruenbaum/page-data.json",
    "revision": "d99669e594c5ac244827f6a2e96c521e"
  },
  {
    "url": "page-data/talk/claudia-hernandez/page-data.json",
    "revision": "ee92306914656302a857a75f6f67618c"
  },
  {
    "url": "page-data/talk/day1-break-A-12%3A00/page-data.json",
    "revision": "57b16d36e6ea9ce634b8fdafc96008bf"
  },
  {
    "url": "page-data/talk/day1-break-A-13%3A00/page-data.json",
    "revision": "a945e888685b1c824c7521cccf295092"
  },
  {
    "url": "page-data/talk/day1-break-A-14%3A00/page-data.json",
    "revision": "5dfa5f598995db42b63ba3ed1c447e9e"
  },
  {
    "url": "page-data/talk/day1-break-A-15%3A15/page-data.json",
    "revision": "748bf25a2b302d29ac0e50137302c49c"
  },
  {
    "url": "page-data/talk/day1-break-A-16%3A30/page-data.json",
    "revision": "75f2047de8cb412be537f3667e770b78"
  },
  {
    "url": "page-data/talk/day1-break-A-17%3A45/page-data.json",
    "revision": "0d62e21d667760a299037e1a92cf75c4"
  },
  {
    "url": "page-data/talk/day1-break-A-19%3A35/page-data.json",
    "revision": "75aabac007d55af360819991ecbf2e2e"
  },
  {
    "url": "page-data/talk/day2-break-A-10%3A00/page-data.json",
    "revision": "a29b28465ff14346487b081c237e040c"
  },
  {
    "url": "page-data/talk/day2-break-A-12%3A00/page-data.json",
    "revision": "9a27becb9ecf7a2016534f05e3464f50"
  },
  {
    "url": "page-data/talk/day2-break-A-14%3A00/page-data.json",
    "revision": "11f191f6d1d8581f90ae443a6edea109"
  },
  {
    "url": "page-data/talk/day2-break-A-15%3A15/page-data.json",
    "revision": "61febf8a53d89025c2ea0b1ec0ae864f"
  },
  {
    "url": "page-data/talk/day2-break-A-16%3A30/page-data.json",
    "revision": "17bdf3250b23e2784f3640f9ee70492f"
  },
  {
    "url": "page-data/talk/day2-break-A-17%3A45/page-data.json",
    "revision": "f35f805f7c70e7c6946c7ad3d71af25b"
  },
  {
    "url": "page-data/talk/day2-break-A-19%3A00/page-data.json",
    "revision": "f93a85a5ca07809ad0e0edb85a4f612a"
  },
  {
    "url": "page-data/talk/dominic-tarr/page-data.json",
    "revision": "5fbbecb186bfeb687ba448fc9bf3b250"
  },
  {
    "url": "page-data/talk/dynamis/page-data.json",
    "revision": "3af63e5da34a0b16480263805ce5ab8c"
  },
  {
    "url": "page-data/talk/eiji-kitamura/page-data.json",
    "revision": "6f9fdad70904d48b86b0b72ca1b2610a"
  },
  {
    "url": "page-data/talk/fred-schott/page-data.json",
    "revision": "78513f603e6422e1b929d8c7230d9210"
  },
  {
    "url": "page-data/talk/fuji-goro/page-data.json",
    "revision": "a2a3f782a1fb6f61c6b990a0159ad8b0"
  },
  {
    "url": "page-data/talk/ginpei-takanashi/page-data.json",
    "revision": "1a49683a489134052cac33a2cbab7712"
  },
  {
    "url": "page-data/talk/guillermo-rauch/page-data.json",
    "revision": "0e6a3131f97002195770cd7011232fac"
  },
  {
    "url": "page-data/talk/henry-zhu/page-data.json",
    "revision": "9ed89bf13b97e359dc97029db1e4d1de"
  },
  {
    "url": "page-data/talk/hidetaka-okamoto/page-data.json",
    "revision": "3bed929f2d41948a484499803d7fa46a"
  },
  {
    "url": "page-data/talk/irina-shestak/page-data.json",
    "revision": "83f28096d4ee3e8cf17163ceb6f14368"
  },
  {
    "url": "page-data/talk/jarrod-overson/page-data.json",
    "revision": "49e19a420386e4365d6d1333ae45501d"
  },
  {
    "url": "page-data/talk/jennifer-wong/page-data.json",
    "revision": "049abf78e4427831d979959bb35bfa91"
  },
  {
    "url": "page-data/talk/jonny-kalambay/page-data.json",
    "revision": "b3102c04a8b70c0e17a17351483918c4"
  },
  {
    "url": "page-data/talk/jorge-bucaran/page-data.json",
    "revision": "58d1853780fe28aa135daea2226167eb"
  },
  {
    "url": "page-data/talk/jxck/page-data.json",
    "revision": "35a0fb80d6b529903dd9f7541778a2b2"
  },
  {
    "url": "page-data/talk/kitson-kelly/page-data.json",
    "revision": "3b223c296be16fd69bd6e91a041e1f6b"
  },
  {
    "url": "page-data/talk/kohei-kido/page-data.json",
    "revision": "e884e4d1d582cfa9663d07b703b18244"
  },
  {
    "url": "page-data/talk/lena-morita/page-data.json",
    "revision": "238ab66dc6a2904548e4a16ec659acee"
  },
  {
    "url": "page-data/talk/maria-clara/page-data.json",
    "revision": "e1a0d7a83488823b540aa4ee2ce59e92"
  },
  {
    "url": "page-data/talk/mariko-kosaka/page-data.json",
    "revision": "1231be028fa669bad638451136ff0a77"
  },
  {
    "url": "page-data/talk/martin-splitt/page-data.json",
    "revision": "57fb55859f6714039ff252b759e51025"
  },
  {
    "url": "page-data/talk/masashi-ganeko/page-data.json",
    "revision": "3445edb6a6cdee690cab3518768424da"
  },
  {
    "url": "page-data/talk/masato-nishihara/page-data.json",
    "revision": "f870543be4c2323469da2647c71c8c30"
  },
  {
    "url": "page-data/talk/masato-ohba/page-data.json",
    "revision": "3dd839cacb20cad5791f80363ed157e0"
  },
  {
    "url": "page-data/talk/maxi-ferreira/page-data.json",
    "revision": "02bec28095f3423112fba3f79eb3095b"
  },
  {
    "url": "page-data/talk/nadieh-bremer/page-data.json",
    "revision": "3b822a09e0204cb143d70c968f680cf0"
  },
  {
    "url": "page-data/talk/nazanin-delam/page-data.json",
    "revision": "8beb22e4b4ccacf0c94e7f8ffb82a012"
  },
  {
    "url": "page-data/talk/nobuhiko-sawai/page-data.json",
    "revision": "97074843270cc223a7e33a4679fe51b6"
  },
  {
    "url": "page-data/talk/okuno-kentaro/page-data.json",
    "revision": "ba649e61c1731e6f12d7c81308c38f88"
  },
  {
    "url": "page-data/talk/praveen-yedidi/page-data.json",
    "revision": "97994da6aede797e718776d92746c185"
  },
  {
    "url": "page-data/talk/rowdy-rabouw/page-data.json",
    "revision": "2c89b49adef574aff2fc1df254b63dcb"
  },
  {
    "url": "page-data/talk/s-greif-r-benitte/page-data.json",
    "revision": "2fe64ea67fcd5c903d91dcb5a8e7b463"
  },
  {
    "url": "page-data/talk/sakakibara/page-data.json",
    "revision": "6253c7331d6cfca852024d54dacd4ed7"
  },
  {
    "url": "page-data/talk/sam-bellen/page-data.json",
    "revision": "ac17b86103d9166a82de9e35b78a7cbe"
  },
  {
    "url": "page-data/talk/samuel-agnew/page-data.json",
    "revision": "3256a5d2f6159219842e2370d85edfe4"
  },
  {
    "url": "page-data/talk/satoshi-ebihara/page-data.json",
    "revision": "f1e913b4392df76f39712b6b1325a616"
  },
  {
    "url": "page-data/talk/shirley-wu/page-data.json",
    "revision": "e3b624f8e4bd12535ea61471b555f802"
  },
  {
    "url": "page-data/talk/sho-miyamoto/page-data.json",
    "revision": "4bee15b134d71bc49fcc515084b49dec"
  },
  {
    "url": "page-data/talk/sponsor-recruit/page-data.json",
    "revision": "5f05908348671f47289bec4b3feaf05a"
  },
  {
    "url": "page-data/talk/sponsor-talk-1/page-data.json",
    "revision": "aefef9b24e4848bd6c0846f2e16ac139"
  },
  {
    "url": "page-data/talk/sponsor-talk-2/page-data.json",
    "revision": "68b7fab611497ebeb090edb04aeb76f2"
  },
  {
    "url": "page-data/talk/sponsor-yahoo/page-data.json",
    "revision": "e7b62a5935d670d050df841fdbfc2112"
  },
  {
    "url": "page-data/talk/takeshi-kato/page-data.json",
    "revision": "c26dfec59a8cc284e2b0a9ab117b98dd"
  },
  {
    "url": "page-data/talk/takuto-wada/page-data.json",
    "revision": "18cfc103f90f564e2d8de7ae157f10ba"
  },
  {
    "url": "page-data/talk/tetsuharu-ohzeki/page-data.json",
    "revision": "29ab8b28d567495170e8b59c2e0b629b"
  },
  {
    "url": "page-data/talk/toru-kobayashi/page-data.json",
    "revision": "1c03e0c03a36f61cc997826c51860c44"
  },
  {
    "url": "page-data/talk/yoshiki-shibukawa/page-data.json",
    "revision": "a40a712b2850403e9efbf48bdc3fe1ff"
  },
  {
    "url": "page-data/talk/yosuke-furukawa/page-data.json",
    "revision": "1b4b401e6663a5a985d36d9679074c3b"
  },
  {
    "url": "page-data/venue/page-data.json",
    "revision": "2a6944deb6a2c1b09a1a17afee91668a"
  },
  {
    "url": "schedule/index.html",
    "revision": "90e6d43c613e6cc63593ffbaf4caaf73"
  },
  {
    "url": "sitemap.xml",
    "revision": "c162e451d1d9707895ac980fa51a1c92"
  },
  {
    "url": "speakers/index.html",
    "revision": "af4b7ebc05e0fd96533514647fd02eba"
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
    "revision": "c35cb88c454f30ef6e5f71db31f5a40b"
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
    "url": "static/d/1868227758.json"
  },
  {
    "url": "static/d/2179042433.json"
  },
  {
    "url": "static/d/2616394776.json"
  },
  {
    "url": "static/d/3213335187.json"
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
    "url": "styles.dc991f3d413c0e17bb41.css"
  },
  {
    "url": "styles.dc991f3d413c0e17bb41.css.br",
    "revision": "6c8a33b79f7a97a7e22317db6fb03cfc"
  },
  {
    "url": "styles.dc991f3d413c0e17bb41.css.gz",
    "revision": "fc4cb9b24a1988de26e366864c95f7b4"
  },
  {
    "url": "talk/andrew-betts/index.html",
    "revision": "a935b13f8665880aa2c66272ec85fd2f"
  },
  {
    "url": "talk/andy-hall/index.html",
    "revision": "13301448181ae1fba404aedd38d50e5b"
  },
  {
    "url": "talk/benjamin-gruenbaum/index.html",
    "revision": "a2eac74ba79f36632c628aa1ef74098b"
  },
  {
    "url": "talk/claudia-hernandez/index.html",
    "revision": "eb6708fe775c3807a544f0778a938e03"
  },
  {
    "url": "talk/day1-break-A-12%3A00/index.html",
    "revision": "9e7e39cf8786f46e41ce327be97b225a"
  },
  {
    "url": "talk/day1-break-A-13%3A00/index.html",
    "revision": "7bae1c055775451d11cdecd7bf63cdb1"
  },
  {
    "url": "talk/day1-break-A-14%3A00/index.html",
    "revision": "9be7eabdf8aa1cd7fca86b182e32ce9a"
  },
  {
    "url": "talk/day1-break-A-15%3A15/index.html",
    "revision": "35deb03248a55a7c51267506346edd04"
  },
  {
    "url": "talk/day1-break-A-16%3A30/index.html",
    "revision": "72e0e8de4a8ba48bf15947ed08c5c713"
  },
  {
    "url": "talk/day1-break-A-17%3A45/index.html",
    "revision": "73a91e36c24594ba6cc7fed07fb55fb4"
  },
  {
    "url": "talk/day1-break-A-19%3A35/index.html",
    "revision": "25a249c4c33b1723ff348902289fa398"
  },
  {
    "url": "talk/day2-break-A-10%3A00/index.html",
    "revision": "10505803acb12d5fe4b0d538c4806f9a"
  },
  {
    "url": "talk/day2-break-A-12%3A00/index.html",
    "revision": "ebc7fdf5afd1e89f500d7a4b82419373"
  },
  {
    "url": "talk/day2-break-A-14%3A00/index.html",
    "revision": "509db99a816d14c9a7033292f184786c"
  },
  {
    "url": "talk/day2-break-A-15%3A15/index.html",
    "revision": "0cedc493d105436c7169cf0c7f32193b"
  },
  {
    "url": "talk/day2-break-A-16%3A30/index.html",
    "revision": "7a408900339e84b50e6d5f7da1a18957"
  },
  {
    "url": "talk/day2-break-A-17%3A45/index.html",
    "revision": "3dc230621c72a8f2b6adf808a1a6f795"
  },
  {
    "url": "talk/day2-break-A-19%3A00/index.html",
    "revision": "c2fa7cbf6d4c6ad960ef89304d6337db"
  },
  {
    "url": "talk/dominic-tarr/index.html",
    "revision": "fb3d81df4a938bea395f2e3dfc0e5aa2"
  },
  {
    "url": "talk/dynamis/index.html",
    "revision": "b5ba3dc33821cc8cdd7ea3c28b3cb03b"
  },
  {
    "url": "talk/eiji-kitamura/index.html",
    "revision": "a0e4391a7aaf4ad806f67473f3403b85"
  },
  {
    "url": "talk/fred-schott/index.html",
    "revision": "365097cbc8d4593bad536ae9d5a8864f"
  },
  {
    "url": "talk/fuji-goro/index.html",
    "revision": "7656d2729f4fd6214ed8ea075e86f718"
  },
  {
    "url": "talk/ginpei-takanashi/index.html",
    "revision": "de97f2f219deac59308d3b8b71f21ba7"
  },
  {
    "url": "talk/guillermo-rauch/index.html",
    "revision": "463b391f4c53965f95a9f513b83c5d7d"
  },
  {
    "url": "talk/henry-zhu/index.html",
    "revision": "f099022b8812c356d5cb8b4b0311037d"
  },
  {
    "url": "talk/hidetaka-okamoto/index.html",
    "revision": "069669d279b505b8706376c6344bf623"
  },
  {
    "url": "talk/irina-shestak/index.html",
    "revision": "fdb146cab77b724cd45db8b80c732a41"
  },
  {
    "url": "talk/jarrod-overson/index.html",
    "revision": "8792916ac2ab405ab54c5c37118eca50"
  },
  {
    "url": "talk/jennifer-wong/index.html",
    "revision": "74310e84a3d2865d3e47734415fdd6d6"
  },
  {
    "url": "talk/jonny-kalambay/index.html",
    "revision": "22e4b673b0aa0f398e6651d481cf9b28"
  },
  {
    "url": "talk/jorge-bucaran/index.html",
    "revision": "d191c5b4c56c3a4dac7b3ce266dfd1d9"
  },
  {
    "url": "talk/jxck/index.html",
    "revision": "e1fe960b19cc5044c30f554572f537c4"
  },
  {
    "url": "talk/kitson-kelly/index.html",
    "revision": "3dd9d6d8d92d8cb7be4c663361392a59"
  },
  {
    "url": "talk/kohei-kido/index.html",
    "revision": "e23eb484302f7ee6c976818d47687813"
  },
  {
    "url": "talk/lena-morita/index.html",
    "revision": "c4de709b1d14dd3671ba52a2bb61daaa"
  },
  {
    "url": "talk/maria-clara/index.html",
    "revision": "d29727c6a7962f61bbc7c1366d0ef35a"
  },
  {
    "url": "talk/mariko-kosaka/index.html",
    "revision": "5b0cdbf28d4ce0bea9917af36184744e"
  },
  {
    "url": "talk/martin-splitt/index.html",
    "revision": "ae2872e1fee6495b5db8dfc6239d4af0"
  },
  {
    "url": "talk/masashi-ganeko/index.html",
    "revision": "56f7056cd8396e1b702dc67c24c23494"
  },
  {
    "url": "talk/masato-nishihara/index.html",
    "revision": "b725e88d66e565f50ae1d21bd3ffe149"
  },
  {
    "url": "talk/masato-ohba/index.html",
    "revision": "395cf98b171e92fcf5b65ea2581beb5d"
  },
  {
    "url": "talk/maxi-ferreira/index.html",
    "revision": "bd09cab5680e32cb5708b1f9fbaa99f9"
  },
  {
    "url": "talk/nadieh-bremer/index.html",
    "revision": "72fad34880759759e51e727b77b5b0a3"
  },
  {
    "url": "talk/nazanin-delam/index.html",
    "revision": "3fbc625efbbbf85d1674d4b034db3199"
  },
  {
    "url": "talk/nobuhiko-sawai/index.html",
    "revision": "b3dfe6b14211898fdd27b6eee66fefbb"
  },
  {
    "url": "talk/okuno-kentaro/index.html",
    "revision": "ebcdb08fed91d8f3213b3622574ae603"
  },
  {
    "url": "talk/praveen-yedidi/index.html",
    "revision": "105884eb568fcc17a979fa19197a0f88"
  },
  {
    "url": "talk/rowdy-rabouw/index.html",
    "revision": "0bf4997113fd33afa2ad4297fcadf68d"
  },
  {
    "url": "talk/s-greif-r-benitte/index.html",
    "revision": "d3775896874ea9c0390770be74a28dec"
  },
  {
    "url": "talk/sakakibara/index.html",
    "revision": "531c83823dad13e89951c7c26e0ca43e"
  },
  {
    "url": "talk/sam-bellen/index.html",
    "revision": "b1037d4047fcd158ef130ff864722ee8"
  },
  {
    "url": "talk/samuel-agnew/index.html",
    "revision": "ed2264f7deac913e84eeb32f4c0bee0e"
  },
  {
    "url": "talk/satoshi-ebihara/index.html",
    "revision": "0566ba91ab11e88249d197faefd99de9"
  },
  {
    "url": "talk/shirley-wu/index.html",
    "revision": "fe35d7e3290069934b70914bb8d488f0"
  },
  {
    "url": "talk/sho-miyamoto/index.html",
    "revision": "46ebf55270f16eae0bfb8ea2932a7198"
  },
  {
    "url": "talk/sponsor-recruit/index.html",
    "revision": "857320e4d127070b99e3655e61aba26b"
  },
  {
    "url": "talk/sponsor-talk-1/index.html",
    "revision": "a56153e6a80ef687690b505f5d745ebd"
  },
  {
    "url": "talk/sponsor-talk-2/index.html",
    "revision": "82e74ed3bac4482215519104669de0d7"
  },
  {
    "url": "talk/sponsor-yahoo/index.html",
    "revision": "639e98d21eb787b03508c1d0c6eff6c1"
  },
  {
    "url": "talk/takeshi-kato/index.html",
    "revision": "2619d985dfa0c5e9deea55c864477615"
  },
  {
    "url": "talk/takuto-wada/index.html",
    "revision": "48ef76236847f90d582aae802639c62d"
  },
  {
    "url": "talk/tetsuharu-ohzeki/index.html",
    "revision": "a6864228c4a404b8b8d68f6e7942151f"
  },
  {
    "url": "talk/toru-kobayashi/index.html",
    "revision": "6d620928a984031987ad9fdeb26665b0"
  },
  {
    "url": "talk/yoshiki-shibukawa/index.html",
    "revision": "16e1e3962ebbc97eb3f0b92d5c11e0e4"
  },
  {
    "url": "talk/yosuke-furukawa/index.html",
    "revision": "67c4094a2dd05baf6bc3fd23b1aea333"
  },
  {
    "url": "venue/index.html",
    "revision": "d6e0148854333bc5a017e9789b0e51df"
  },
  {
    "url": "webpack-runtime-6534a9518d8f461f6cd1.js"
  },
  {
    "url": "webpack-runtime-6534a9518d8f461f6cd1.js.br",
    "revision": "ea51c2a2833397c3f759268d85df47be"
  },
  {
    "url": "webpack-runtime-6534a9518d8f461f6cd1.js.gz",
    "revision": "4d14bf05ec4016a130d9d64be30b3d86"
  },
  {
    "url": "webpack-runtime-6534a9518d8f461f6cd1.js.map",
    "revision": "67dc9b79e470bed019d2efa61bd68f29"
  },
  {
    "url": "webpack.stats.json",
    "revision": "a3c3c1d110d350efe4e62c19219c055e"
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
