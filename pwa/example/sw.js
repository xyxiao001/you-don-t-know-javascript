// console.log('self', self)

var cacheNameTest = 'my-test-cache-v1'
var ENV = 'development'

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheNameTest).then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        'main.js',
      ])
    }).catch((error) => {
      console.log(error)
    })
  )
  if (ENV === 'development') {
    self.skipWaiting()
  }
})

self.addEventListener('active', (e) => {
  e.waitUntil(
    Promise.all(
      [
        // 更新客户端
        self.clients.claim(),

        // 清理旧版本
        caches.keys().then((cacheList) => {
          return Promise.all(
            cacheList.map((cacheName) => {
              if (cacheName !== cacheNameTest) {
                return caches.delete(cacheName)
              }
            })
          )
        })
      ]
    )
  )
})

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      if (response) {
        return response
      }

      var request = e.request.clone()
      return fetch(request).then((httpRes) => {

        //请求失败
        if (!httpRes || httpRes.status !== 200) {
          return httpRes
        }

        // 请求成功
        var responseClone = httpRes.clone()
        caches.open(cacheNameTest).then((cache) => {
          cache.put(e.request, responseClone)
        })

        return httpRes
      })
    })
  )
})
