<template>
  <figure class="shop" v-once>
    <img :src="image_path" :alt="name" class="shop__logo">
    <div class="shop__main">
      <section class="shop-main__body shop-main__body--inline">
        <figcaption :class="{ 'shop-main-body__brand': is_premium }">{{ name }}</figcaption>
        <div class="shop-main-body__supports">
          <i v-for="item in supports">{{ item.icon_name }}</i>
        </div>
      </section>
      <section class="shop-main__body shop-main__body--inline">
        <div class="shop-main-body__rating">
          <Rating :rating="rating"></Rating>
          <em class="rating">{{ rating }}</em>
          <span>月售{{ recent_order_num }}单</span>
        </div>
        <div class="shop-main-body__delivery">
          <span v-if="isPunctual !== -1">准时达</span>
          <span v-if="delivery_mode" class="hollow">{{ delivery_mode.text }}</span>
        </div>
      </section>
      <section class="shop-main__body shop-main__body--inline">
        <div class="shop-main-body__amountLimit">
          <span v-if="float_minimum_order_amount">¥{{ float_minimum_order_amount }}起送</span>
          <span v-if="float_delivery_fee">配送费¥{{ float_delivery_fee }}</span>
          <span v-if="average_cost">{{ average_cost }}</span>
        </div>
        <div class="shop-main-body__timeDistance">
          <span>{{ distance }}</span>
          <span>{{ order_lead_time }}分钟</span>
        </div>
      </section>
    </div>
  </figure>
</template>
<script>
  import Rating from '../rating'

  export default {
    name: 'Shop',
    props: ['shop'],
    components: {
      Rating,
    },
    data () {
      return {
        name: this.shop.name,//商家名称
        image_path: this.shop.image_path,//商家图片
        supports: this.shop.supports,//商家承诺
        is_premium: this.shop.is_premium,//是否品牌
        rating: this.shop.rating,//评分
        float_minimum_order_amount: this.shop.float_minimum_order_amount,//最小起送金额
        float_delivery_fee: this.shop.float_delivery_fee,//配送费
        recent_order_num: this.shop.recent_order_num,//月售
        order_lead_time: this.shop.order_lead_time,//送达估时
        average_cost: this.shop.average_cost,//人均
        delivery_mode: this.shop.delivery_mode,//交货方式为蜂鸟
      }
    },
    computed: {
      isPunctual: function () {
        return this.supports.findIndex(item => item.name === '准时达')
      },
      distance: function () {
        const distance = this.shop.distance
        if (distance > 0 && distance < 1000) {
          return `${distance}m`
        } else {
          return `${(distance / 1000).toFixed(2)}km`
        }
      }
    }
  }
</script>
<style lang="less">
  @import "../../assets/styles/common.less";
  .shop {
    display: flex;
    border-bottom: 1px @borderGrayLightColor solid;
    figcaption {
      color: @fontDarkGrayColor;
      font-size: .4rem;
      width: 5.2rem;
      font-weight: 700;
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .shop__logo {
    width: 1.6rem;
    height: 1.6rem;
    padding: .4rem .266667rem;
    flex-shrink: 0;
  }
  .shop__main {
    box-sizing: border-box;
    padding: .4rem .266667rem .4rem 0;
    flex: 1;
    flex-shrink: 0;
  }
  .shop-main__body {
    color: @fontGrayColor;
  }
  .shop-main-body__brand {
    &::before {
      margin-right: .133333rem;
      padding: 0 .066667rem;
      height: .4rem;
      border-radius: .053333rem;
      background-color: @bgOrangeColor;
      color: @fontBrownColor;
      content: "\54C1\724C";
      text-align: center;
      white-space: nowrap;
      font-weight: 700;
      font-size: .293333rem;
      line-height: .4rem;
    }
  }
  .shop-main-body__supports {
    i {
      color: @fontGrayLightColor;
      font-size: .3rem;
      text-align:center;
      display: inline-block;
      width: .4rem;
      height: .4rem;
      line-height: .4rem;
      border: 1px @borderGrayLightColor solid;
      font-style: normal;
      margin-left: .1rem;
    }
  }
  .shop-main-body__rating {
    &>:first-child,
    &>:nth-child(2) {
      margin-right: .1rem;
    }
  }
  .shop-main__body--inline {
    height:.55rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      display: flex;
      flex-direction: flex-start;
      align-items: center;
    }
    em.rating {
      color: @fontOrangeColor;
      font-style: normal;
    }
  }
  .shop-main-body__amountLimit {
    span:nth-child(3) {
      &::before {
        content : "/";
        padding: 0 .1rem;
        color: @borderGrayColor;
      }
    }
  }
  .shop-main-body__amountLimit,
  .shop-main-body__timeDistance {
    span:nth-child(2) {
      &::before {
        content : "/";
        padding: 0 .1rem;
        color: @borderGrayColor;
      }
    }
  }
  .shop-main-body__delivery {
    span {
      padding: 0 .053333rem;
      border: 1px @borderBlueColor solid;
      border-radius: .053333rem;
      background-color: #fff;
      color: #2395ff;
      font-size: .266667rem;
      line-height: .346667rem;
      margin-left: .1rem;
      &.hollow {
        background: @bgBlueColor;
        color: @whiteColor;
      }
    }
  }
</style>
