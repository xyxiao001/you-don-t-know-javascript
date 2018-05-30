<template>
  <section class="product-show">
    <div class="glass-list">
      <div 
        class="glass-item" 
        v-for="(item, $index) in op.glassList"
        :key="item.name"
        >
        <div class="item-img">
          <img :src="`${baseUrl}common/home/${item.colorList[item.colorIndex].name}`" alt="">          
        </div>
        <div class="item-des">
          <p class="title line">{{item.name}}</p>
          <p class="des-t">{{item.des}}</p>
        </div>
         <div class="point-list">
          <span
            @click="changeGlass($index, $i)"
            class="point"
            v-for="(color, $i) in item.colorList"
            :key="color.color"
            :style="{'border-color': $i === item.colorIndex ? color.color : '#E0E0E0'}"
            >
            <i :style="{'background-color': color.color}"></i>
          </span>
          <p v-if="item.colorList[item.colorIndex].tips">{{ item.colorList[item.colorIndex].tips }}</p>
        </div>
      </div>
    </div>
    <div class="product-special">
      <p class="title">{{op.productSpecial.title}}</p>
      <div class="special-list">
        <div
          class="special-item"
          v-for="item in op.productSpecial.list"
          :key="item.name"
        >
          <img v-lazy="`${baseUrl}common/home/${item.img}`" >
          <p>{{ item.name }}</p>
          <p class="des">{{ item.des }}</p>          
        </div>
      </div>
    </div>
    <div class="more-detail" v-if="type === 'product'">
      <p class="title">{{op.moreDetail.title}}</p>
      <div class="more-list">
        <div
          class="more-item"
          v-for="item in op.moreDetail.list"
          :key="item.name"
        >
          <p><img v-lazy="`${baseUrl}common/home/${item.img}`" :class="[item.className ? item.className : '']"> {{ item.name }}</p>
          <p class="des">{{ item.des }}</p>          
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      baseUrl: process.env.BASE_URL,
      op: this.options
    }
  },
  props: {
    options: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      required: true,
      default: 'index'
    }
  },
  methods: {
    changeGlass (index, i) {
      this.op.glassList[index].colorIndex = i
    }
  }
}
</script>

<style lang="scss" scoped>
  .product-show {
    text-align: center;    
  }
  
  .glass-list {
    display: flex;
    justify-content: space-between;
    height: auto;

    .glass-item {
      display: flex;
      flex-wrap: wrap;
      width: 48.8%;
      height: auto;
      background: #F6F6F6;
      justify-content: center;
      padding: 57px 0  49px 0;

      .item-img {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      img {
        // width: 69%;
        height: 210px;
        align-self: flex-start;
      }

      .item-des {
        width: 100%;

        .title {
          font-size: 22px;
          line-height: 33px;
        }

        .des-t {
          max-width: 68.1%;
          margin: auto;
          font-size: 14px;
          color: #999999;
          margin-top: 32px;
          line-height: 21px;
          margin-bottom: 21px;
        }
      }
    }
  }
  
  .point-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 106px;
    height: 16px;

    .point {
      display: flex;
      align-items: center;
      justify-content: center;  
      width: 16px;
      height: 16px;
      border: 1px solid #E0E0E0;
      border-radius: 50%;
      cursor: pointer;

      i {
        width: 10px;
        height: 10px;
        background-color: #E0E0E0;
        border-radius: 50%;        
      }
    }

    p {
      font-size: 12px;
      color: #999999;
      margin-right: 20px;
    }
  }

  .product-special {
    .title {
      font-size: 28px;
      line-height: 64px;
      border-bottom: 1px solid #E8E8E8;
    }

    .special-list {
      width: 87%;
      margin: auto;
      display: flex;
      margin-top: 38px;
      margin-bottom: 51px;
      justify-content: space-around;

      .special-item {
        max-width: 220px;
        img {
          height: 78px;
          margin-bottom: 10px;
        }

        p {
          font-size: 16px;
          color: #12AC74;
        }

        .des {
          padding: 5px;
          font-size: 12px;
          color: #666666;
        }
      }
    }
  }

  .more-detail {
    margin-bottom: 50px;
    .title {
      font-size: 28px;
      line-height: 64px;
      border-bottom: 1px solid #E8E8E8;
    }

    .more-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .more-item {
        width: 22%;
        margin: 20px 20px 0 0;
        background-color: #F6F6F6;
        text-align: left;
        font-size: 14px;
        color: #333333;
        padding: 28px 20px;

        .des {
          font-size: 12px;
          color: #666666;
        }

        img {
          // width: 12px;
          width: auto;
          height: 13px;
        }

        .glass {
          // width: 25px;
        }
      }
    }
  }

  @media screen and (max-width: 1200px) {
    .glass-list .glass-item img {
      height: 200px;
    }
  }

  @media screen and (max-width: 1000px) {
    .glass-list .glass-item img {
      width: 69%;
      height: auto;
    }

    .more-detail {
      .more-list {
        .more-item {
          width: 30%;
        }
      }
    }
  }

  @media screen and (max-width: 800px) {
    .glass-list {
      flex-wrap: wrap;

      .glass-item {
        width: 100%;
        margin-bottom: 20px;
        
      }
    }

    .more-detail {
      .more-list {
        .more-item {
          width: 40%;
        }
      }
    }
  }
</style>

