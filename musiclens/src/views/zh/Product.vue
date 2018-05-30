<template>
  <div class="wrapper product">
    <section class="nav">
      <nav class="p-nav">
      <a 
        v-for="(item, $index) in nav"
        :key="item.name"
        :class="[navIndex === $index ? 'active' : '']"
        @click="chooseNav($index)"
      >
        {{ item .name }}
      </a>
    </nav>
    <nav class="icon-nav">
      <a v-for="item in iconList" :key="item.name" :href="item.href" target="_blank">
       <img :src="`${baseUrl}common/${item.icon2}`" alt="">
      </a>
    </nav>
    </section>
    <section class="introduce product-section">
      <glassBox :options="option" type="product"></glassBox>      
    </section>
    <section 
      v-for="(item, $index) in nav"
      :key="item.name"
      v-if="$index > 0"
      :class="[item.className, 'produc-section']"
    >
      <section
        v-for="(child, i) in item.list"
        :key="i"
        :class="[item.className, 'product-page']"
      >
        <img class="front" :src="`${baseUrl}${language}/product/${child.front}`">
        <img class="back" :src="`${baseUrl}${language}/product/${child.back}`">        
      </section>
    </section>
  </div>
</template>

<script>
import glassBox from '@/components/glassBox'


export default {
  data () {
    return {
      baseUrl: process.env.BASE_URL,
      language: this.$store.getters.getLanguage,
      option: this.$t('home.options'),
      navIndex: 0,
      nav: [],
      isAinmate: false,
      iconList: this.$t('footer').iconList
    }
  },
  watch: {
  },
  components: {
    glassBox: glassBox
  },
  methods: {
    chooseNav (index) {
      this.navIndex = index
      this.goScroll(this.nav[index].top)      
    },

    updateHeight () {
      let arr = this.nav
      // 计算每一个容器的高低
      let old = 0
      arr.map((item, index) => {
        let el = document.querySelector(`.${item.className}`)
        item.top = el.offsetTop
        if (index === 0) {
          item.top = item.top - 132
        } else {
          item.top = item.top - 100          
        }
        item.height = el.offsetHeight 
        return item
      })
      this.nav = arr
      this.updateNav()
    },

    updateNav () {
      let nowTop = window.scrollY
      let i = -1
      this.nav.forEach((item, index) => {
        if (i === -1 && item.top + item.height  > nowTop) {
          i = index
        }
      })
      this.navIndex = i
    },

    // 点击跳转
    goScroll (top) {
      this.isAinmate = true
      var requestAnimationFrame
      if (window.requestAnimationFrame) {
        requestAnimationFrame = window.requestAnimationFrame
      } else {
        requestAnimationFrame = setTimeout((fn) => {
          fn()
        }, 17)
      }
      // 当前时间
      var t = 0
      // 初始值
      var b = window.scrollY
      // 变化量
      var c = top - b
      // 持续时间
      var d = 30
      var step = () => {
        var v = this.run(t, b, c, d)
        window.scrollTo(0, v)
        t += 1
        if (t <= d) {
          requestAnimationFrame(step)
        } else {
          this.isAinmate = false
        }
      }
      step()
    },
    // 运动
    run (t, b, c, d) {
      return c * (t /= d) * t + b
    },
  },
  mounted () {
    this.nav = this.$t('product.nav')
    setTimeout(() => {
      this.updateHeight()  
    }, 200)

    var canUpdate = true
    window.onscroll = () => {
      if (canUpdate && !this.isAinmate) {
        this.updateHeight()
        canUpdate = false
        setTimeout(() => {
        canUpdate = true
        }, 20)
      }
    }
  },
  destroyed () {
    window.onscroll = null    
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/product.scss';
</style>

