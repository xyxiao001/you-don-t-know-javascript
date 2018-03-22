if ('serviceWorker' in navigator) {
  var version = '1.0.1'
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js', {
      scoped: '/'
    }).then((registration) => {
      // 判断版本号 更新
      if (localStorage.getItem('sw_version') !== version) {
        registration.update().then(() => {
          localStorage.setItem('sw_version', version)
        })
      }
    }).catch((error) => {
      console.log('fail', error)
    })
  })
}

document.querySelector('#app').innerHTML = '测试service work'
