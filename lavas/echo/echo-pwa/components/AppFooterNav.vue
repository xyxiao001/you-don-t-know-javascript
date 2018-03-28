<template>
  <section>
    <v-bottom-nav absolute :value="true" :active.sync="e1" color="transparent">
      <v-btn flat color="teal" value="recent">
        <span>首页</span>
        <v-icon>track_changes</v-icon>
      </v-btn>
      <v-btn flat color="teal" value="fans">
        <span>粉丝群</span>
        <v-icon>people</v-icon>
      </v-btn>
      <v-btn flat color="teal" value="add">
        <span>发布</span>
        <v-icon>add</v-icon>
      </v-btn>
      <v-btn flat color="teal" value="dynamic">
        <span>动态</span>
        <v-icon>camera</v-icon>
      </v-btn>
      <v-btn flat color="teal" value="person">
        <span>我的</span>
        <v-icon>person</v-icon>
      </v-btn>
    </v-bottom-nav>
  </section>
</template>

<script>
export default {
  data () {
    return {
      e1: 'recent'
    }
  }
}
</script>

<style lang="stylus" scoped>
  section
    position fixed
    width 100%
    height 56px
    bottom 0
    z-index 100
    background white

    .bottom-nav .btn--active .btn__content
      font-size 12px
</style>
