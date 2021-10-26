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
    "url": "webpack-runtime-3aad2ba059efdc516180.js"
  },
  {
    "url": "framework-ac828c628c543a13a889.js"
  },
  {
    "url": "app-c2991ef04e92af520d3f.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "4f9d0b006703d05e89c6eb51db5a1270"
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
    "revision": "a457e065657946e55569117fbd4b6009"
  },
  {
    "url": "polyfill-a777b7d62ccbfb1011a8.js"
  },
  {
    "url": "styles.5915ecf2483fd49b14e2.css"
  },
  {
    "url": "7f5bd21a022950e50ca211ae2f5765d6f61633ff-80ea024dfa1d7ce82079.js"
  },
  {
    "url": "component---src-templates-markdown-tsx-6ba41f9bba5b19b5e8a8.js"
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
    "url": "component---src-pages-index-tsx-9d5c5181d5f7441a5b65.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "134809cdf3d042f4e2a37008020e6703"
  },
  {
    "url": "page-data/sq/d/3498615268.json",
    "revision": "873cbc951ea7b7e49f8fb1e72f63d790"
  },
  {
    "url": "page-data/jp-specified-commercial-transactions-act/page-data.json",
    "revision": "a7c6781277e604464904c4709e87dd59"
  },
  {
    "url": "component---src-pages-schedule-tsx-1597c0fcbcb1138165e3.js"
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
    "url": "component---src-pages-speakers-tsx-af1263c6f13dae26dbc8.js"
  },
  {
    "url": "page-data/speakers/page-data.json",
    "revision": "605a20024be9bce229ac62f7dcba68de"
  },
  {
    "url": "page-data/sq/d/3320513770.json",
    "revision": "8057ad33acb72442af25459d1bdda0c2"
  },
  {
    "url": "component---src-pages-sponsors-tsx-1c9d98741bf179cb347a.js"
  },
  {
    "url": "page-data/sponsors/page-data.json",
    "revision": "85fde34874347748f3833dce8607aae9"
  },
  {
    "url": "page-data/sq/d/422937091.json",
    "revision": "249d681d8a8c53a1cbf7d8589b39f770"
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
  if (!resources || !(await caches.match(`/2021/app-c2991ef04e92af520d3f.js`))) {
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
