<template>
  <footer class="app__footer">
    <Tab v-for="item of list" :key="item.id" :item="item"></Tab>
  </footer>
</template>
<script>
  import Tab from './tab'

  export default {
    name: 'TabBar',
    components: {
      Tab,
    },
    data () {
      return {
        list: [
          {
            id: 0,
            tabUrl: '/index',
            tabName: '外卖',
            icon: '../assets/images/msite.svg',
            iconActive: '../assets/images/msite_active.svg',
          },
          {
            id: 1,
            tabUrl: '/discover',
            tabName: '发现',
            icon: '../assets/images/discover.svg',
            iconActive: '../assets/images/discover_active.svg',
          },
          {
            id: 2,
            tabUrl: '/order',
            tabName: '订单',
            icon: '../assets/images/order.svg',
            iconActive: '../assets/images/order_active.svg',
          },
          {
            id: 3,
            tabUrl: '/profile',
            tabName: '我的',
            icon: '../assets/images/profile.svg',
            iconActive: '../assets/images/profile_active.svg',
          },
        ]
      }
    }
  }
</script>
<style lang="less">
  @import "../../assets/styles/common.less";
  .app__footer {
    height: 1.3333333rem;
    position: fixed;
    z-index: 10000;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    background: @whiteColor;
    box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
    a {
      display: flex;
      text-align: center;
      flex-direction: column;
      color: @fontGrayColor;
      width: 25%;
      img:first-child {
        display: block;
      }
      img:last-child {
          display: none;
        }
      &:link {
        text-decoration: none;
      }
      &.router-link-active {
        color: @fontBlueColor;
        img:first-child {
          display: none;
        }
        img:last-child {
          display: block;
        }
      }
      img {
        width: .51rem;
        height: .51rem;
        margin: 0.046296296rem auto;
      }
    }
  }
</style>
