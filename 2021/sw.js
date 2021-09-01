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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-2a6552aea793d6d93e30.js"
  },
  {
    "url": "framework-ac828c628c543a13a889.js"
  },
  {
    "url": "app-94349515319ff26eaf54.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "cd9223920dec2b6ba2fe702c17dcaf20"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-62183c16c2d4e069b4e6.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f2c002077289a7e1ac538802bc7f5314"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "5106492d362cfa1d661203309b00ee3f"
  },
  {
    "url": "polyfill-e2b099239cf855a9c750.js"
  },
  {
    "url": "styles.5915ecf2483fd49b14e2.css"
  },
  {
    "url": "7f5bd21a022950e50ca211ae2f5765d6f61633ff-d0b6b6a3b94080db6ca8.js"
  },
  {
    "url": "component---src-templates-markdown-tsx-36e09ba2465022cc0ef6.js"
  },
  {
    "url": "page-data/code-of-conduct/page-data.json",
    "revision": "fd7becfc34eff51e34a9f51b4f593555"
  },
  {
    "url": "page-data/sq/d/1861792574.json",
    "revision": "40af1e9d931994a81d229f56319b2446"
  },
  {
    "url": "page-data/sq/d/2627735464.json",
    "revision": "f57fc9b4341500c4e058312599218de5"
  },
  {
    "url": "component---src-pages-index-tsx-d0ead39ac7dc2ed5106b.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "4e42c3803b95f0f7879fbaef65ba26a7"
  },
  {
    "url": "page-data/sq/d/4219329968.json",
    "revision": "150748106013b182814256fba5727809"
  },
  {
    "url": "page-data/jp-specified-commercial-transactions-act/page-data.json",
    "revision": "a7c6781277e604464904c4709e87dd59"
  },
  {
    "url": "component---src-pages-schedule-tsx-ad0998e7a73132959122.js"
  },
  {
    "url": "page-data/schedule/page-data.json",
    "revision": "6feb448ebef776be78959bd11bd53104"
  },
  {
    "url": "page-data/sq/d/1480216084.json",
    "revision": "645c47f180a328f8f1bdc4af4bcac098"
  },
  {
    "url": "component---src-pages-speakers-tsx-3081a993a625bc2c1e48.js"
  },
  {
    "url": "page-data/speakers/page-data.json",
    "revision": "605a20024be9bce229ac62f7dcba68de"
  },
  {
    "url": "page-data/sq/d/3320513770.json",
    "revision": "0ab9cf0ffa611c04388a4da3cce58f52"
  },
  {
    "url": "component---src-pages-sponsors-tsx-c02b66b8b122265703f0.js"
  },
  {
    "url": "page-data/sponsors/page-data.json",
    "revision": "85fde34874347748f3833dce8607aae9"
  },
  {
    "url": "page-data/sq/d/422937091.json",
    "revision": "5cdd42973c7d05f0baff301d8fcd51c8"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "d3d9515955221e6ee98d14f88a09a3bb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/2021`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/2021/app-94349515319ff26eaf54.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/2021/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
