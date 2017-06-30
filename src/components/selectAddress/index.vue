<template>
  <section class="select-address__container">
    <form>
      <svg @click="handleBack(false)">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left"></use>
      </svg>
      <h2>选择地址</h2>
      <input type="search" @input="handleInput" placeholder="请输入地址" autofocus>
    </form>
    <ul>
      <li v-for="item in list" @click="handleClick(item.name)">
        <h5>{{ item.name }}</h5>
        <p>{{ item.address }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import { getAddressList } from '../../utils/getData'

export default {
  data() {
    return {
      list: [],
    }
  },
  methods: {
    handleInput: async function () {
      let res = await getAddressList()
      this.list = [...res.data]
    },
    ...mapMutations({
      handleClick: 'SAVE_ADDRESS',
      handleBack: 'SHOW_SELECT_ADDRESS',
    }),
  }
}
</script>

<style lang="less">
  @import "../../assets/styles/common.less";
  .select-address__container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    overflow: auto;
    background: @bgGrayLightColor;
    form {
      width: 100%;
      background: @bgBlueColor;
      color: @whiteColor;
      display: flex;
      justify-content: center;
      flex-direction: column;
      position: fixed;
      padding-bottom: .32rem;
      h2 {
        text-align: center;
        font-weight: normal;
        line-height: 1.173333rem;
        font-size: .48rem;
      }
    }
    svg {
      fill: @whiteColor;
      position: absolute;
      left: .333333rem;
      top: .333333rem;
      width: .533333rem;
      height: .533333rem;
    }
    input {
      width: 90%;
      margin: 0 auto;
      height: .8rem;
      line-height: .8rem;
      border: none;
      border-radius: .8rem;
      font-size: .333333rem;
      padding: 0 .5rem;
    }
    ul {
      margin-top: 2.346667rem;
    }
    li {
      font-size: .32rem;
      padding: .266667rem .4rem;
      background: @whiteColor;
      border: 1px @borderGrayLightColor solid;
      h5 {
        font-weight: 700;
        font-size: .37rem;
      }
      p {
        font-size: .32rem;
        color: @fontGrayLightColor;
      }
    }
  }
</style>
