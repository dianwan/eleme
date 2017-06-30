<template>
  <section class="rating">
    <div class="rating__star">
      <svg class="fill-gray" v-for="i in 5" :key="i">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use>
      </svg>
    </div>
    <div class="rating__overflow" :style="`width: ${ rating * 2 * 10 }%`">
      <div class="rating__star">
        <svg v-for="i in 5" :key="i">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use>
        </svg>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'Rating',
    props: ['rating'],
    data () {
      return {
      }
    }
  }
</script>
<style lang="less">
  @import "../../assets/styles/common.less";
  .rating {
    position: relative;
  }
  .rating__star {
    width:1.333335rem;
    svg {
      width: .266667rem;
      height: .266667rem;
    }
  }
  .rating__overflow {
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
    svg {
      fill: @bgDarkOrangeColor;
    }
  }
  .fill-gray {
    fill: @borderGrayColor;
  }
</style>
