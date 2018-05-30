<template>
  <div class="music-lens">
    <nav-bar></nav-bar>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <foot></foot>
  </div>
</template>

<script>
import NavBar from '@/components/nav'
import foot from '@/components/foot'


export default {
  computed: {
    list () {
      return this.$t('home.list')
    },
    lang() {
      return 'zh'
    }
  },
  components: {
    NavBar,
    foot
  },
  created () {
    let language = this.lang
    this.$i18n.locale = language    
    this.$store.dispatch ({
      type: 'setLanguage',
      language: language
    })
    localStorage.setItem('MUSICLENS_LANGUAGE', language)
    document.querySelector('#app').className = `language-${this.lang}`   
  },
  mounted () {
    let top = ~~localStorage.getItem('MUSICLENS_SCROLL')
    if (top > 0) {
      this.$nextTick(() => {
        window.scroll(0, top)
      })
    }
    localStorage.setItem('MUSICLENS_SCROLL', 0)
  }
}
</script>

<style scoped>
  .music-lens {
    margin-top: 60px;
  }
</style>