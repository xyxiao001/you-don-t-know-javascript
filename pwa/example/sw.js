(function () {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js', {
        scoped: '/'
      }).then((registration) => {
        console.log('success', registration)
      }).catch((error) => {
        console.log('fail', error)
      })
    })

    self.addEventListener('install', (e) => {
      e.waitUntil(
        caches.open('my-test-cache-v1').then((cache) => {
          return cache.addAll([
            '/',
            '/index.html',
            'main.css',
            'main.js',
            '/image.jpg'
          ])
        }).catch((error) => {
          console.log(error)
        })
      )
    })

    self.addEventListener('fetch', (e) => {
      e.respondWith(
        caches.match(e, request).then((response) => {
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
            caches.open('my-test-cache-v1').then((cache) => {
              cache.put(e.request, responseClone)
            })

            return httpRes
          })
        })
      )
    })
  }
}())
