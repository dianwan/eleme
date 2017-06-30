import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  isLogined: true,//是否登录
  address: '上海第一八佰伴新世纪商厦',//当前收货地址
  showSelectAddress: false,//是否重新选择地址
  unScrollAble: false,//是否禁止元素滚动
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
