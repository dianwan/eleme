<template>
  <section id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <TabBar></TabBar>
  </section>
</template>

<script>
  import TabBar from './components/tabBar'

  export default {
    name: 'App',
    components: {
      TabBar,
    }
  }
</script>

<style lang="less">

</style>
