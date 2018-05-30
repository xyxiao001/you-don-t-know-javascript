<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/nav'

export default {
  mounted () {
    setTimeout(() => {
      let list = this.$store.getters.getLanList
      // 第一次进入页面 确认默认语言  然后确认即将跳转的路径
      let lang = localStorage.getItem('MUSICLENS_LANGUAGE')
      // 获取第一个路由 然后得到是否是在默认路由 然后修改跳转的默认路径
      let path = this.$route.path.split('/')[1]
      if (list.indexOf(path) === -1) {
        path = ''
      } else {
        path = `/${lang}`
      }          
      this.$store.dispatch ({
        type: 'setPath',
        path: path
      })
    }, 300)
    
    document.querySelector('.body-loading').style.display = 'none'
  }
}
</script>


<style lang="scss">
  @import './assets/scss/common.scss';
</style>
