<template>
  <swiper :options="swiperOption" ref="mySwiper" class="swiper">
    <swiper-slide class="swiper__container" v-for="i in swiperWrapNum" :key="i">
      <div class="swiper-container__item" v-for="(item, index) in swiperList[i-1]" :key="index">
        <img :src="item.image_hash" alt="item.description">
        <span class="title">{{ item.name }}</span>
      </div>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getIndexSwiperList } from '../../utils/getData'

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
      },
      swiperList: [],
      swiperItemNum: 8,//每页显示条数
      swiperWrapNum: 0,//初始化页数
    }
  },
  methods: {
    getList: async function () {
      let res = await getIndexSwiperList()
      this.data = [...res.data[0].entries]
      //算出swiper的页数
      this.swiperWrapNum = Math.ceil(this.data.length / this.swiperItemNum)
      //将this.data分解成多个可遍历的array供template嵌套渲染
      for (let i = 0, k = 0; i < this.swiperWrapNum; i++, k = k + this.swiperItemNum) {
        this.swiperList.push(this.data.slice(k, k + this.swiperItemNum))
      }
    },
  },
  created: function () {
    this.getList()
  }
}
</script>

<style lang="less">
  @import "../../assets/styles/common.less";
  .swiper {
    height: 4rem;
    padding-bottom:.5rem;
  }
  .swiper__container {
    display: flex;
    flex-wrap: wrap;
  }
  .swiper-container__item {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
      width: 1.2rem;
      height: 1.2rem;
      margin: 0 auto;
    }
    span {
      text-align: center;
      font-size: .32rem;
    }
  }
  .swiper-pagination-bullet-active {
    background: @fontDarkGrayColor;
  }
</style>
