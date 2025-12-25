const CACHE_NAME = "v0.5"

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  )
})


self.skipWaiting()
navigator.serviceWorker.addEventListener("controllerchange", () => location.reload())
