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
    "url": "webpack-runtime-2c0cd7f76ef1b5c6a844.js"
  },
  {
    "url": "framework-d5e16072699c81cc8c67.js"
  },
  {
    "url": "app-fdc0180b5cf7277bd6ac.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "8eb7068dc05af5c01927e3f73e0555b4"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-044073fc530cbf0d0528.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f2c002077289a7e1ac538802bc7f5314"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "95e53f69161aa72e7c362f78d47701fe"
  },
  {
    "url": "polyfill-7ff28b9382f7fa8c1c66.js"
  },
  {
    "url": "styles.5915ecf2483fd49b14e2.css"
  },
  {
    "url": "7f5bd21a022950e50ca211ae2f5765d6f61633ff-531d60810846a5db2d8b.js"
  },
  {
    "url": "component---src-templates-markdown-tsx-3b72870102d95e9713f9.js"
  },
  {
    "url": "page-data/code-of-conduct/page-data.json",
    "revision": "0ad1c42a25f180034c2c1cfd9cd978ce"
  },
  {
    "url": "page-data/sq/d/1715751809.json",
    "revision": "ad2acd25f320386bc70db8e932bc2779"
  },
  {
    "url": "page-data/sq/d/1861792574.json",
    "revision": "40af1e9d931994a81d229f56319b2446"
  },
  {
    "url": "page-data/sq/d/2737205312.json",
    "revision": "617d841d866ec4e52b55622c79b14248"
  },
  {
    "url": "component---src-pages-index-tsx-324b619fd03f112d97af.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "c2f9b23127b2f392fa0c20db643b9dbc"
  },
  {
    "url": "page-data/sq/d/3027076902.json",
    "revision": "e84061490789ee58f147e99b70e5f367"
  },
  {
    "url": "page-data/jp-specified-commercial-transactions-act/page-data.json",
    "revision": "e42d67a0e4e9a44a88fde4d6002dd7f2"
  },
  {
    "url": "component---src-pages-schedule-tsx-029399ab316bd172c34f.js"
  },
  {
    "url": "page-data/schedule/page-data.json",
    "revision": "397dc6561f37b97e2b8d494035aa33e7"
  },
  {
    "url": "page-data/sq/d/792472979.json",
    "revision": "969760d2fda7f1e64137cd06e545cd41"
  },
  {
    "url": "component---src-pages-speakers-tsx-f752eb2dacb11ceda25a.js"
  },
  {
    "url": "page-data/speakers/page-data.json",
    "revision": "ccd8c7e634bd99ca0147aff3089fef39"
  },
  {
    "url": "page-data/sq/d/1393509171.json",
    "revision": "8f24857cdce3a835934739176c623d42"
  },
  {
    "url": "component---src-pages-sponsors-tsx-0c7f04b5a71ea3f9705e.js"
  },
  {
    "url": "page-data/sponsors/page-data.json",
    "revision": "0c38c4c25875735f84c2879164afbedd"
  },
  {
    "url": "page-data/sq/d/4005080047.json",
    "revision": "6045b3135ab8c50bc96fb8e8b20c350f"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "20e41ccb5ca941e10e104f2c71e19e30"
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
  if (!resources || !(await caches.match(`/2021/app-fdc0180b5cf7277bd6ac.js`))) {
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
