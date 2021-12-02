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
    "url": "webpack-runtime-10ca70864f45f6c5f20e.js"
  },
  {
    "url": "framework-ac828c628c543a13a889.js"
  },
  {
    "url": "app-5bd918f6ce764ab14286.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "3f700c49cbdf40982ed55ae9a35cea88"
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
    "revision": "e40f9da9156e854ed71cf9466457e0f6"
  },
  {
    "url": "polyfill-a777b7d62ccbfb1011a8.js"
  },
  {
    "url": "styles.5915ecf2483fd49b14e2.css"
  },
  {
    "url": "7f5bd21a022950e50ca211ae2f5765d6f61633ff-bbf15d022be1bba40bce.js"
  },
  {
    "url": "component---src-templates-markdown-tsx-d80cae6a8be2753b721f.js"
  },
  {
    "url": "page-data/code-of-conduct/page-data.json",
    "revision": "0ad1c42a25f180034c2c1cfd9cd978ce"
  },
  {
    "url": "page-data/sq/d/1715751809.json",
    "revision": "25744ab870320d587e4c47e1c1024847"
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
    "url": "component---src-pages-index-tsx-07018e304351cf8fcd77.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "c2f9b23127b2f392fa0c20db643b9dbc"
  },
  {
    "url": "page-data/sq/d/3027076902.json",
    "revision": "e64fc9818c6da790c7ca3e14bf1aca1d"
  },
  {
    "url": "page-data/jp-specified-commercial-transactions-act/page-data.json",
    "revision": "e42d67a0e4e9a44a88fde4d6002dd7f2"
  },
  {
    "url": "component---src-pages-schedule-tsx-a3390fa7b416d21f8c88.js"
  },
  {
    "url": "page-data/schedule/page-data.json",
    "revision": "5243bc5286b5af474e2d54c845671c53"
  },
  {
    "url": "page-data/sq/d/1480216084.json",
    "revision": "06e3d836b58ccb63b02a72de2c54cd29"
  },
  {
    "url": "component---src-pages-speakers-tsx-c15121cf34b0352d249f.js"
  },
  {
    "url": "page-data/speakers/page-data.json",
    "revision": "ccd8c7e634bd99ca0147aff3089fef39"
  },
  {
    "url": "page-data/sq/d/1393509171.json",
    "revision": "53a944dfedf9999c61feb7d6794ade05"
  },
  {
    "url": "component---src-pages-sponsors-tsx-373a428f6faf0294578e.js"
  },
  {
    "url": "page-data/sponsors/page-data.json",
    "revision": "0c38c4c25875735f84c2879164afbedd"
  },
  {
    "url": "page-data/sq/d/4005080047.json",
    "revision": "06b58ef94034f66f4c14c12a6cec72cb"
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
  if (!resources || !(await caches.match(`/2021/app-5bd918f6ce764ab14286.js`))) {
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
