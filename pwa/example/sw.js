(function () {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js', {
        scoped: '/'
      }).then((registration) => {
        console.log('success', registration)
        this.addEventListener('install', (e) => {
          e.waitUntil(
            caches.open('my-test-cache-v1').then((cache) => {
              return cache.addAll([
                '/',
                '/index.html',
                'main.css',
                'main.js',
                '/image.jpg'
              ])
            })
          )
        })
      }).catch((error) => {
        console.log('fail', error)
      })
    })
  }
}())
