<template>
  <div class="wrapper">
    <main class="home">
      <section class="glass-show screen">
        <img :src="`${baseUrl}common/home/ball1.png`" alt="ball" class="bubble bubble1">
        <img :src="`${baseUrl}common/home/ball2.png`" alt="ball" class="bubble bubble2">
        <img :src="`${baseUrl}common/home/ball3.png`" alt="ball" class="bubble bubble3">
        <img :src="`${baseUrl}common/home/ball4.png`" alt="ball" class="bubble bubble4">      
        <img :src="`${baseUrl}${language}/home/sologan.png`" alt="ball" class="bubble bubble-home">
        <transition-group name="fade2" mode="out-in">
          <img 
            v-for="(item, $index) in showGlassList" 
            :key="item"
            v-lazy="`${baseUrl}common/home/${showGlassList[$index]}.png`" 
            v-if="showGlassIndex === $index"
            alt="ball" 
            class="bubble pic-glass">               
        </transition-group>
      </section>

      <section class="introduce">
        <p class="title">{{ $t('about.title') }}</p>
        <div class="des">
          <p 
            v-for="item in $t('about.des')"
            :key="item"
          >{{ item }}</p>
        </div>
        <router-link class="know-more" :to="{path: path + '/product'}">{{ $t('about.more') }}></router-link>
        <glassBox :options="option" type="index"></glassBox>
      </section>

      <section class="exhibition">
        <nav>
          <a
            v-for="(item, $index) in exhibition"
            :key="item.title"
            @click="changeEx($index)"
            :class="[$index === exhibitionIndex ? 'active' : '']"
            class="menu-item">
            {{item.title}}
          </a>
          <span class="border" :style="{'transform': `translateX(${exhibitionIndex === 0 ? -100 : 70}px)`}"></span>
        </nav>
        <div class="ex-content" v-if="exhibitionIndex === 0">
          <div class="ex-img" :style="{'background-image': `url(${baseUrl}common/home/${videoList[videoIndex].img})`}">
            <div class="play-video">
              <img @click="show('video')" :src="`${baseUrl}common/home/playVideo.png`" alt="">
            </div>
          </div>
          <div class="ex-list">
            <div class="ex-item" 
              v-for="(item, $index) in videoList"
              @click="changeIndex($index, 'video')"
              :key="item.name"
              :class="[$index === videoIndex ? 'active' : '']">
              <div class="ex-left">
                <img v-lazy="`${baseUrl}common/home/${item.imgPic}`">
              </div>
              <div class="ex-right">
                <p>{{item.name}}</p>
                <p class="date">{{item.date}}</p>                
              </div>
            </div>
          </div>
        </div>
        <div class="ex-content" v-else>
          <div class="ex-img" @click="show('image')" :style="{'background-image': `url(${baseUrl}common/home/${imgList[imgIndex].img})`}">
          </div>
          <div class="ex-list ex-list-img">
            <div 
              v-for="(item, $index) in imgList"
              :key="item.img"
              :class="[$index === imgIndex ? 'active' : '']"
              class="ex-item ex-item-img"
              @click="changeIndex($index, 'image')"
            >
              <img v-lazy="`${baseUrl}common/home/${item.imgPic}`" alt="">
            </div>
          </div>
        </div>
      </section>

      <!-- 弹出层 -->
      <transition name="fade" mode="out-in">
        <div class="model" v-if="showModel">
          <a class="model-close" @click="() => showModel = false">
            <img :src="`${baseUrl}common/home/close.png`" alt="">
          </a>
          <div class="video" v-if="modelType === 'video'">
            <video :src="videoList[videoIndex].video" controls autoplay ref="video"></video>
          </div>
          <div class="image" v-else>
            <img :src="`${baseUrl}common/home/${imgList[imgIndex].img}`">
          </div>
        </div>
      </transition>
    </main>
  </div>
</template>

<script>
import glassBox from '@/components/glassBox'

var setGlass
export default {
  data () {
    return {
      baseUrl: process.env.BASE_URL,
      language: this.$store.getters.getLanguage,
      showGlassIndex: 0,
      showGlassList: ['index_p1', 'index_p2', 'index_p3', 'index_p4', 'index_p5'],
      option: this.$t('home.options'),
      exhibition: this.$t('home.exhibition'),
      exhibitionIndex: 0,
      videoIndex: 0,
      imgIndex: 0,
      showModel: false,
      modelType: 'video'
    }
  },
  computed: {
    videoList () {
      return this.exhibition[0].list
    },

    imgList () {
      var list = []
      list.length = this.exhibition[1].lens
      list.fill(0)
      list = list.map((item, index) => {
        return {
          img: `home_image_${index + 1}.png`,
          imgPic: `home_image_${index + 1}_s.png`
        }
      })
      return list
    },

    path () {
      return this.$store.getters.getPath
    }
  },
  watch: {
    showModel (val) {
      if (!val && this.modelType === 'video') {
        this.$refs.video.pause()
        this.$refs.video.currentTime = 0
      }
    }
  },
  components: {
    glassBox: glassBox
  },
  methods: {
    changeEx (index) {
      this.exhibitionIndex = index
    },
    changeIndex (index, type) {
      if (type === 'video') {
        this.videoIndex = index
      } else {
        this.imgIndex = index
      }      
    },

    show (type) {
      this.showModel = true
      this.modelType = type 
    },
  },
  mounted () {
    // 首页眼睛的轮询替换
    setGlass = setInterval(() => {
      let index = this.showGlassIndex
      index = index < this.showGlassList.length - 1 ? index + 1 : 0
      this.showGlassIndex = index
    }, 4000)
  },
  destroyed () {
    clearInterval(setGlass)
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/home.scss';
</style>