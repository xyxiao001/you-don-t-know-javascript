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
  }
  console.log(1)
}())
