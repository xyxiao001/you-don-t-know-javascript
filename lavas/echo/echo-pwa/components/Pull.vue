<template>
  <div
    class="pull-wrapper"
    @touchstart="start"
    ref="scrollWrapper"
    :style="{
      'height': '100%',
      'transform': `translate3d(0, ${current}px, 0)`,
      'transition': `transform ${time}ms cubic-bezier(.25,.8,.5,1)`
    }">
    <div class="action-block">
      <p v-if="!loading">
        <v-icon>{{icon}}</v-icon>
        <span>{{msg}}</span>
      </p>
      <p v-else>
        <v-icon :class="[icon === 'refresh' ? 'spin' : '']">{{icon}}</v-icon>
        <span>{{msg}}</span>
      </p>
    </div>
    <div class="scroll-containet" ref="scroll">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pull: false,
      loading: false,
      startY: 0,
      nowY: 0,
      icon: 'arrow_downward',
      current: 0,
      time: 0,
      msg: '下拉加载'
    }
  },
  computed: {
    change () {
      let change = (this.nowY - this.startY) / 3
      change = change > 0 ? change : 0
      return change
    }
  },
  watch: {
    current (val) {
      if (this.loading || !this.pull) {
        return false
      }
      if (val < 60) {
        this.icon = 'arrow_downward'
        this.msg = '下拉加载'
      } else {
        this.icon = 'arrow_upward'
        this.msg = '释放刷新'
      }
    },
    loading (val) {
      if (val) {
        this.icon = 'refresh'
        this.msg = '加载中...'
        setTimeout(() => {
          console.log(1)
          this.icon = 'done'
          this.msg = '加载成功'
          setTimeout (() => {
            this.current = 0
            this.loading = false
          }, 500)
        }, 2000)
      }
    }
  },
  methods: {
    //返回scroll 当前是否可以下拉
    getCanScroll () {
      return this.$refs.scroll.scrollTop === 0
    },
    start (e) {
      e.preventDefault()
      this.time = 0
      if (!this.getCanScroll() || this.pull || this.loading) {
        return false
      }
      // 表示当前滚动条在最上面 可以下拉刷新
      // 给节点添加属性 可以滚动
      this.pull = true
      this.startY = e.touches[0].clientY
      window.addEventListener('touchmove', this.move)
      window.addEventListener('touchend', this.end)
    },
    move (e) {
      this.nowY = e.touches[0].clientY
      this.current = this.change
    },
    end () {
      console.log('end')
      this.time = 500
      this.startY = 0
      this.nowY = 0
      this.pull = false
      if (this.current > 60) {
        this.current = 50
        this.loading = true
      } else {
        this.current = 0
      }
      window.removeEventListener('touchmove', this.move)
      window.removeEventListener('touchend', this.end)
    }
  },
  mounted () {
  }
}
</script>

<style lang="stylus" scoped>
  .pull-wrapper
    position: relative;
    height: 100%
    background: #f6f6f6

    .scroll-containet
      position: relative
      height: 100%
      overflow-y: auto
      -webkit-overflow-scrolling: touch
      background-color: white

    .action-block
      position: relative
      width: 100%
      height: 50px
      margin-top: -50px

      p
        width: 100%
        height: 100%
        margin: 0
        display: flex
        align-items: center
        justify-content: center

      i
        font-size: 18px

  .spin
    animation: loadingCircle 1s infinite linear

  @keyframes loadingCircle {
    0% {
      transform-origin: 50% 50%
      transform: rotate(0deg)
    }

    to {
      transform-origin: 50% 50%
      transform: rotate(1turn)
    }
  }
</style>
