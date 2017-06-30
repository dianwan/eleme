<template>
  <transition name="fade" mode="out-in">
    <div class="back-top" @click="backTop" v-if="showBackTopButton">
      <svg class="back-top__icon">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#back-top.7a234e5"></use>
      </svg>
    </div>
  </transition>
</template>

<script>
import { backTop } from '../../utils/methods'
export default {
  data() {
    return {
      showBackTopButton: false,
    }
  },
  methods: {
    backTop,
  },
  mounted: function () {
    document.addEventListener('scroll', () => {
      document.body.scrollTop > 700 ? this.showBackTopButton = true : this.showBackTopButton = false
    }, false)
  },
}
</script>

<style lang="less">
  @import "../../assets/styles/common.less";
  .back-top {
    position: fixed;
    right: .4rem;
    bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.133333rem;
    height: 1.133333rem;
    border: 1px solid @borderGrayColor;
    border-radius: 50%;
    background: @whiteColor;
    transition: opacity .3s;
  }
  .back-top__icon {
    display: block;
    width: .533333rem;
    height: .533333rem;
    fill: @fontGrayLightColor;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>
