<template>
  <router-link :to="tabUrl">
    <img :src="icon" />
    <img :src="iconActive" />
    {{tabName}}
  </router-link>
</template>

<script>
  export default {
  name: 'Tab',
  props: ['item'],
  data () {
    return {
      tabUrl: this.item.tabUrl,
      tabName: this.item.tabName,
      icon: this.item.icon,
      iconActive: this.item.iconActive,
    }
  }
}
</script>
