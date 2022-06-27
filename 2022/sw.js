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
    "url": "webpack-runtime-082529dbd6fc5237f21c.js"
  },
  {
    "url": "framework-b938e312ae3754b1ec42.js"
  },
  {
    "url": "app-f4238ad1f00a5afd08b0.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "8a504e545259eb65a78931fa71a96790"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-56df767c31626327852b.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f2c002077289a7e1ac538802bc7f5314"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "7534c62867060d10d54d6aa45ed18fd2"
  },
  {
    "url": "polyfill-5d142cb9ac6417d6bf2b.js"
  },
  {
    "url": "styles.5915ecf2483fd49b14e2.css"
  },
  {
    "url": "7f5bd21a022950e50ca211ae2f5765d6f61633ff-030b75aeab09812a5081.js"
  },
  {
    "url": "component---src-templates-markdown-tsx-b7233a0b9722f8f557f4.js"
  },
  {
    "url": "page-data/code-of-conduct/page-data.json",
    "revision": "524b3602742f8e37e641f132c457e171"
  },
  {
    "url": "page-data/sq/d/1861792574.json",
    "revision": "968dd6bfffbd4774f2377d0bb6b229b5"
  },
  {
    "url": "page-data/sq/d/2737205312.json",
    "revision": "c3b57c0b2be41f24d5d1f9d341c5daba"
  },
  {
    "url": "page-data/sq/d/3175298815.json",
    "revision": "882c9fa22918f84705cec4703a321bbb"
  },
  {
    "url": "component---src-pages-index-tsx-ae7e907205677c554025.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "3169cdd1eb4046ff034aac10192fe923"
  },
  {
    "url": "page-data/sq/d/3027076902.json",
    "revision": "2e144451a85e843ed13426ffb8fbc164"
  },
  {
    "url": "page-data/jp-specified-commercial-transactions-act/page-data.json",
    "revision": "9cc05da1875383d879dee59348a7f444"
  },
  {
    "url": "component---src-pages-schedule-tsx-fafdc9e89b74b6591a0b.js"
  },
  {
    "url": "page-data/schedule/page-data.json",
    "revision": "8e78ce6047cf1afcaa5c97d32eb3b43d"
  },
  {
    "url": "page-data/sq/d/792472979.json",
    "revision": "157a5f3064c2ed5ce05d704e8f5839f3"
  },
  {
    "url": "component---src-pages-speakers-tsx-99898f77823bf3e29b40.js"
  },
  {
    "url": "page-data/speakers/page-data.json",
    "revision": "c4adae822a5e1ad130d03864fc270652"
  },
  {
    "url": "page-data/sq/d/1393509171.json",
    "revision": "7e5b89a7ea31badd1076a418ce5a7845"
  },
  {
    "url": "component---src-pages-sponsors-tsx-a61294ec14799ade1502.js"
  },
  {
    "url": "page-data/sponsors/page-data.json",
    "revision": "7d0e48caad3667b644849f4765191cad"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "ff718778d86fa57e40e50e921c141917"
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
  pathname = pathname.replace(new RegExp(`^/2022`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/2022/app-f4238ad1f00a5afd08b0.js`))) {
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

  const offlineShell = `/2022/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
