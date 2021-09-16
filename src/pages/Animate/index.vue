<template>
  <div>
    <transition name="fade">
      <div v-if="show">
        Title
      </div>
    </transition>
    <button @click="handleShow">按钮</button>
  </div>
</template>

<script>
  export default {
    name: 'Menu',
    data() {
      return {
        show: false
      }
    },
    methods: {
      handleShow() {
        this.show = !this.show
      }
    }
  }
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>