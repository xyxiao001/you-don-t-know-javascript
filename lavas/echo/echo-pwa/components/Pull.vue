<template>
  <div class="pull-wrapper" @touchstart="start">
    <div class="scroll-containet" ref="scroll">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    //返回scroll 当前是否可以下拉
    getCanScroll () {
      return this.$refs.scroll.scrollTop === 0
    },
    start () {
      if (!this.getCanScroll()) {
        return false
      }
      // 表示当前滚动条在最上面 可以下拉刷新
      // 给节点
    }
  },
  mounted () {
    console.log(2)
  }
}
</script>

<style lang="stylus" scoped>
  .pull-wrapper
    display: flex
    flex-direction: column
    height: 100%

    .scroll-containet
      flex: 1
      overflow-y: auto
      -webkit-overflow-scrolling: touch
</style>
