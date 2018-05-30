<template>
  <nav>
    <section class="logo">
      <router-link :to="{path: path + '/'}">
        <img :src="`${baseUrl}${language}/logo.png`" alt="logo">        
      </router-link>
    </section>
    <ul class="menu">
      <li v-for="item in list" :key="item.name">
        <router-link :to="{path: path + item.path}" exact>{{ item.name }}</router-link>
      </li>
    </ul>
    <!-- 下拉选择语言 -->
    <div class="select-language">
      <p class="drop" v-popover:popover>
        <img src="../assets/earth.png" alt="">
        <span>{{chooseLanguage}}</span>
        <i class="el-icon-caret-bottom"></i>
      </p>
      <el-popover
        ref="popover"
        placement="bottom"
        width="100"
        trigger="hover"
      >
        <section class="language-list">
          <a
            v-for="item in lansDrop"
            :key="item.key"
            :class="[item.key === language ? 'active' : '']"
            @click="switchLang(item.key)"
            >
            {{item.name}}
          </a>
        </section>
      </el-popover>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      baseUrl: process.env.BASE_URL,
      language: this.$store.getters.getLanguage,      
      lansDrop: this.$t('languageDrop'),
    }
  },
  computed: {
    list () {
      return this.$t('home.list')
    },
    chooseLanguage () {
      let i = 0
      this.lansDrop.forEach((item, index) => {
        if (item.key === this.language) {
          i = index
        }
      })
      return this.lansDrop[i].name
    },

    path () {
      return this.$store.getters.getPath
    }
  },
  methods: {
    switchLang (targetLang) {
      if (this.language === targetLang) return
      localStorage.setItem('MUSICLENS_LANGUAGE', targetLang)
      // 同时记录当前浏览的高度， 切换语言之后跳转到对应高度
      // localStorage.setItem('MUSICLENS_SCROLL', window.scrollY) 
      // 如果是默认的语言， 意味着没有可以替换的， 那么直接在前面加上前缀
      if (this.path === '') {
        this.$router.push(`/${targetLang}${this.$route.path}`)
      } else {
        this.$router.push(this.$route.path.replace(this.language, targetLang))        
      }
      this.$store.dispatch ({
        type: 'setPath',
        path: `/${targetLang}`
      })
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
  nav {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    height: 60px;
    z-index: 999;
    background: #1A1A1A;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:  0 8.3%;


    .logo {
      img {
        height: 24px;
      }
    }

    .menu {
      display: flex;
      width: 55%;
      height: 100%;
      align-items: center;
      justify-content: space-around;

      a {
        display: block;
        min-width: 60px;
        line-height: 60px;
        text-align: center;
        color: white;
        font-size: 14px;
        opacity: .5;
        transition: opacity .2s ease-out;
        margin-left: 5px;

        &:hover {
          opacity: 1;
        }

        &.router-link-active {
          opacity: 1; 
        }   
      }
    }

    .select-language {
      outline: none;
      user-select: none;
      .drop {
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        color: #FFFFFF;
        opacity: .5;
        font-size: 12px;
        line-height: 33px;
        border: 1px solid rgba(255, 255, 255, .5);
        width: 100px;
        text-align: center;
        border-radius: 5px;
        cursor: pointer;
        transition: all .2s ease-out;
        outline: none;

        span {
          margin-left: 5px;
        }

        img {
          margin-left: 10px;
          width: 16px;
        }

        i {
          margin-right: 15px;
        }

        &:hover {
          opacity: 1;
        }
      }
    }
  }
  @media screen and (max-width: 1000px) {
    nav {
      padding: 0 2%;

      .menu {
        width: 70%;
      }
    }
  }
</style>

<style lang="scss">
  .el-popover {
    min-width: 0px;
    padding: 0;
    border: none;
    outline: none;    
  } 

  .el-popper[x-placement^=bottom] .popper__arrow::after {
    border-bottom-color: black;
  }

  .language-list {
    display: flex;
    flex-wrap: wrap;
    background-color: #000;

    a {
      display: block;
      width: 100%;
      line-height: 34px;
      text-align: center;
      color: #fff;
      opacity: .5;
      cursor: pointer;
      border-top: 1px solid rgba(255, 255, 255, .5);
      transtion: all .3s ease-out;

      &:hover {
        opacity: 1;
      }

      &.active {
        opacity: 1;
        color: rgb(0, 223, 169);
        cursor: auto;
      }
    }
  }
</style>