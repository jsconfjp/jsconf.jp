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
    "url": "webpack-runtime-b45178065228ea166136.js"
  },
  {
    "url": "framework-c4d097170909825a693e.js"
  },
  {
    "url": "app-236ad5532e6e78e1b339.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "0fefc7d8ae9965a0ee59d8f3b1e88988"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-62183c16c2d4e069b4e6.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "2f3d91f05f198fb3ada331452c3df976"
  },
  {
    "url": "polyfill-82faf8a71e76227ac16b.js"
  },
  {
    "url": "styles.5915ecf2483fd49b14e2.css"
  },
  {
    "url": "7f5bd21a022950e50ca211ae2f5765d6f61633ff-b9c794702f149d25ccb3.js"
  },
  {
    "url": "component---src-templates-markdown-tsx-36e09ba2465022cc0ef6.js"
  },
  {
    "url": "page-data/code-of-conduct/page-data.json",
    "revision": "f600bec9a0042074734efedd619ba5b3"
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
    "url": "component---src-pages-index-tsx-92a5c891be895a9b0201.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "2e26668082af36adc4b5a247dd2acaa0"
  },
  {
    "url": "page-data/sq/d/4219329968.json",
    "revision": "777a4a9a71714d44cded99b39b88c742"
  },
  {
    "url": "page-data/jp-specified-commercial-transactions-act/page-data.json",
    "revision": "e21260c3e323149e83fea6d7f3e6809a"
  },
  {
    "url": "component---src-pages-schedule-tsx-0483cfcab0fb4cef47a8.js"
  },
  {
    "url": "page-data/schedule/page-data.json",
    "revision": "8dbd1826832d420fa2c268ce3d6b08f8"
  },
  {
    "url": "page-data/sq/d/1480216084.json",
    "revision": "645c47f180a328f8f1bdc4af4bcac098"
  },
  {
    "url": "component---src-pages-speakers-tsx-17b1e14fcac8da29db1a.js"
  },
  {
    "url": "page-data/speakers/page-data.json",
    "revision": "e2ec9627165860732290e8026f7e9bf1"
  },
  {
    "url": "page-data/sq/d/3320513770.json",
    "revision": "df277691d1ff0e30142fcb136d10d1fc"
  },
  {
    "url": "component---src-pages-sponsors-tsx-c02b66b8b122265703f0.js"
  },
  {
    "url": "page-data/sponsors/page-data.json",
    "revision": "00cafb4cace6cf8a913cda1b2177fa24"
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
  if (!resources || !(await caches.match(`/2021/app-236ad5532e6e78e1b339.js`))) {
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
