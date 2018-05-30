<template>
  <main class="news">
    <p class="news-title">{{ options.title }}</p>
  </main>
</template>

<script>
export default {
  data () {
    return {
      options: this.$t('news')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/news.scss';
</style>
