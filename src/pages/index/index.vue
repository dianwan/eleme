<template>
  <section class="app__container">
    <div>
      <transition name="slide-fade">
        <SelectAddress v-if="showSelectAddress"></SelectAddress>
      </transition>
    </div>
    <div :class="{ 'unscrollable': showSelectAddress }">
      <IndexHeader></IndexHeader>
      <IndexSwiper></IndexSwiper>
      <h3 class="index-title">推荐商家</h3>
      <ShopList></ShopList>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import IndexHeader from '../../components/indexHeader'
import SelectAddress from '../../components/selectAddress'
import IndexSwiper from '../../components/indexSwiper'
import ShopList from '../../components/shopList'

export default {
  name: 'index',
  data() {
    return {
    }
  },
  computed: mapState({
    showSelectAddress: state => state.showSelectAddress,
  }),
  components: {
      IndexHeader,
      SelectAddress,
      IndexSwiper,
      ShopList,
    }
}
</script>

<style lang="less">
  @import "../../assets/styles/common.less";
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all .3s ease;
  }
  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(320px);
    opacity: 0;
  }
  .unscrollable {
    height: 100vh;
    overflow: hidden;
  }
  .index-title {
    margin-top: .266667rem;
    line-height: .906667rem;
    font-weight: 600;
    border-top: .3rem solid @borderGrayLightColor;
    border-bottom: 1px solid @borderGrayLightColor;
    font-size: .4rem;
    padding-left: .4rem;
  }
</style>
