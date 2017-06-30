<template>
  <header class="app-index__header">
    <div class="app-index-header__address">
      <h4>
        <svg class="icon__location">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#location"></use>
        </svg>
        <span @click="selectAddress">{{ address }}</span>
        <svg class="icon__arrow">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow"></use>
        </svg>
      </h4>
      <aside>
        <div>
          <p>27°</p>
          <p>阴</p>
        </div>
        <img src="../../assets/images/weather.webp">
      </aside>
    </div>
    <input class="app-index-header__search" type="text" value="搜索商家、商品">
    <div class="app-index-header__hotWords">
      <a :href="item.link" v-for="(item, index) in hotSearchWords" :key="index">{{ item.word }}</a>
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { getHotSearchWords } from '../../utils/getData'

export default {
  data() {
    return {
      hotSearchWords: [],
    }
  },
  computed: mapState({
    address: state => state.address,
  }),
  methods: {
    getHotSearchWords: async function () {
      let res = await getHotSearchWords()
      this.hotSearchWords = [...res.data]
    },
    ...mapMutations({
      selectAddress: 'SHOW_SELECT_ADDRESS',
    })
  },
  created: function () {
    this.getHotSearchWords()
  }
}
</script>

<style lang="less">
  @import "../../assets/styles/common.less";
  .app-index__header {
    height: 2.8rem;
    padding: .3rem;
    background-image: linear-gradient(90deg, @bgBlueLightColor, @bgBlueColor);
    color: @whiteColor;
  }
  .app-index-header__address {
    height:1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h4 {
      font-weight: normal;
      display: flex;
      flex-direction: flex-start;
      align-items: center;
      max-width: 60%;
      span {
        font-size: .48rem;
        white-space: nowrap;
        overflow:hidden;
        text-overflow: ellipsis;
        margin-right: 0.185185185rem;
      }
    }
    aside {
      text-align: right;
      display: flex;
      justify-content: space-between;
      img {
        margin-left:0.185185185rem;
        width:0.833333333rem;
        height:0.833333333rem;
      }
    }
    svg.icon__location {
      width: .346667rem;
      height: .413333rem;
      fill: @whiteColor;
    }
    svg.icon__arrow {
      width: .186667rem;
      height: .093333rem;
      fill: @whiteColor;
    }
  }
  .app-index-header__search {
    width: 100%;
    height: .9rem;
    border: none;
    outline: none;
    border-radius: 1rem;
    text-align:center;
    font-size:0.37037037rem;
    color: @fontGrayColor;
    box-shadow: 0 0.026667rem 0.066667rem 0 rgba(0,0,0,.2);
  }
  .app-index-header__hotWords {
    height: .8rem;
    line-height: .8rem;
    overflow: hidden;
    white-space: nowrap;
    overflow-x: auto;
    a {
      text-decoration: none;
      margin-right: 0.37037037rem;
      color: @whiteColor;
    }
  }
</style>
