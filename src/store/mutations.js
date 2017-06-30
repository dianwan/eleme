export default {
  ['SAVE_ADDRESS'] (state, newAdress) {
    state.address = newAdress
    state.showSelectAddress = false
  },
  ['SHOW_SELECT_ADDRESS'] (state, bool) {
    state.showSelectAddress = bool
    state.unScrollAble = bool
  },
}
