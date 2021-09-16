<template>
  <div class="app-layout-wrap">
    <div class="app-layout-left">
      <Menu :data-source="NAV_LIST" />
    </div>
    <div class="app-layout-right">
      <keep-alive>
        <!-- 这里是会被缓存的视图组件 -->
        <router-view v-if="$route.meta.keepAlive" />
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" />
    </div>
<!--    <div class="Slider">-->
<!--      <Slider />-->
<!--    </div>-->

  </div>
</template>

<script>
  import Menu from './components/Menu'
  import ConsNav from './cons/consNav'

  const {NAV_LIST} = ConsNav
  console.log(NAV_LIST)
// import HelloWorld from './components/HelloWorld.vue'
// import Slider from './components/Slider/Slider.vue'
// import Home from './pages/Home/index'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Slider,
    // Home,
    Menu
  },
  data() {
    return {
      NAV_LIST
    }
  }
}
</script>

<style scoped>
  .app-layout-wrap {
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }
  .app-layout-left {
    position: absolute;
    left: 0;
    top: 0;
    width: 200px;
    height: 100%;
    background: rgba(225, 225, 225, .5)
  }
  .app-layout-right {
    position: relative;
    margin-left: 200px;
  }


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .Slider {
    width: 400px;
    height: 300px;
  }
</style>
