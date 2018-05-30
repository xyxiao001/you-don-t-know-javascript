<template>
  <div class="wrapper problem">
    <p class="title">{{ options.title }}</p>
    <section class="problem-list">
      <section class="problem-item" v-for="item in options.list" :key="item.title">
        <p class="p-title">{{ item.title }}</p>
        <p>{{ item.value }}</p>        
      </section>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: this.$t('problem')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/problem.scss';
</style>
