<template>
  <div class="shop-list">
    <Shop v-for="(shop, index) in list" :key="index" :shop="shop"></Shop>
    <BackTop></BackTop>
    <div class="load-more">
      <svg class="load-more__icon">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#loading.001898b"></use>
      </svg>
      <span>正在加载...</span>
    </div>
  </div>
</template>
<script>
  import { getShopList } from '../../utils/getData'
  import Shop from './shop'
  import BackTop from '../backtop'

  export default {
    name: 'ShopList',
    components: {
      Shop,
      BackTop,
    },
    data () {
      return {
        list: [],
      }
    },
    methods: {
      getShopList: async function () {
        let res = await getShopList()
        this.list = [...this.list, ...res.data]
      },
    },
    created: function () {
      this.getShopList()
    },
    mounted: function () {
      //监听scroll是否到达底部
      window.addEventListener('scroll', () => {
        if (document.body.scrollTop === (document.documentElement.scrollHeight - document.documentElement.clientHeight)) {
          this.getShopList()
        }
      })
    },
  }
</script>
<style lang="less">
  @import "../../assets/styles/common.less";
  .shop-list {
    padding-bottom: 1.6rem;
  }
  .load-more {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 1.066667rem;
    background-color: #fff;
    color: @fontGrayColor;
    font-size: .346667rem;
  }
  .load-more__icon {
    display: block;
    margin-right: .2rem;
    width: .4rem;
    height: .4rem;
    transform-origin: 50% 50%;
    animation: loading 1s linear infinite;
  }
  @keyframes loading{
    100% {
      transform: rotate(1turn);
    }
  }

</style>
