import axios from 'axios'

export const getHotSearchWords = params => {
  return axios.get('../api/shopping/v3/hot_search_words.json', params)
}

export const getAddressList = params => {
  return axios.get('../api/bgs/poi/search_poi_nearby.json', params)
}

export const getShopList = params => {
  return axios.get('../api/shopping/restaurants.json', params)
}

export const getIndexSwiperList = () => {
  return axios.get('../api/shopping/v2/entries.json')
}
