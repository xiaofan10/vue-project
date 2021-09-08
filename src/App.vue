<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="Slider">
      <Slider />
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Slider from './components/Slider/Slider.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Slider
  }
}
</script>

<style>
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
