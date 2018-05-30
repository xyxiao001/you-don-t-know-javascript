<template>
  <footer>
    <section class="foot">
      <div class="contact">
        <p class="c-title">{{ options.contact }}</p>
        <p v-for="item in options.contactList" :key="item">{{ item }}</p>
      </div>
      <div class="f-icon">
        <a
          v-for="item in options.iconList"
          :key="item.href"
          :href="item.href"
          target="_blank"
        >
          <img :src="`${baseUrl}common/${item.icon}`" alt="">
        </a>
      </div>
      <div class="f-service">
        <p class="f-phone">{{ options.phone }}</p>
        <p>{{ options.phoneTips }}</p>        
      </div>
    </section>
    <p class="copyright">{{ options.copyright }}</p>
  </footer>
</template>

<script>
  export default {
    data () {
      return {
        baseUrl: process.env.BASE_URL,        
        options: this.$t('footer')
      }
    }
  }
</script>


<style lang="scss" scoped>
  footer {
    background-color: #101120;
    color: white;
  }

  .foot {
    display: flex;
    padding: 0 8.3%;
    justify-content: space-between;

    .contact {
      margin-top: 26px;

      p {
        font-size: 13px;
        line-height: 18px;
        opacity: .5;
      }

      .c-title {
        margin-bottom: 6px;
        font-size: 15px;
        line-height: 21px;
        opacity: .7;
      }
    }

    .f-service {
      width: 300px;
      height: 76px;
      background-color: #1A1B29;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin-top: 25px;

      p {
        font-size: 13px;
        opacity: .5;
        margin-bottom: 14px;
      }

      .f-phone {
        margin-top: 13px;
        font-size: 23px;
        color: #1ACD8C;
        line-height: 32px;
        opacity: 1;
        margin-bottom: 0;
      }
    }

    .f-icon {
      display: flex;
      flex-wrap: wrap;
      margin-top: 21px;

      a {
        width: 45px;
        height: 45px;
        margin-right: 30px;
        margin-top: 20px;
        user-select: none;

        img {
          width: 100%;
        }
      }
    }
  }

  .copyright {
    margin-top: 70px;
    padding-bottom: 14px;
    font-size: 12px;
    opacity: .35;
    text-align: center;
  }

  @media screen and (max-width: 1000px) {
    .foot {
      padding: 0 2%;
      .f-service {
         p {
           font-size: 12px;
         }
      }
    }
  }
</style>