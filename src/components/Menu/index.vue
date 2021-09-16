<template>
  <div>
    <ul>
      <li
        :class="['app-menu-item', {active: i === cur}]"
        v-for="(m, i) in dataSource"
        :key="i"
        @click="handleClick(i)"
      >
        <router-link :to="m.path">{{m.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    dataSource: {
      type: Array,
      default: () => {
        return [
          {
            path: '/',
            name: 'Home'
          },
          {
            path: '/test1',
            name: 'Test1'
          }
        ]
      }
    }
  },
  data: () => {
    return {
      cur: 0
    }
  },
  mounted() {
    // if(this.$route) {
    //   this.dataSource.forEach((item, i) => {
    //     if(this.$route.path === item.path) {
    //       this.cur = i
    //     }
    //   })
    // }
  },
  methods: {
    handleClick(i) {
      console.log(i)
      // this.cur = i
    }
  }
}
</script>
<style scoped>
  .app-menu-item {
    position: relative;
    display: flex;
    align-items: center;
    padding: 5px 10px;
    margin-bottom: 2px;
  }
  .app-menu-item::after {
    position: absolute;
    top: 0;
    right: 0;
    display: none;
    content: '';
    height: 100%;
    width: 5px;
    background: #f00;
  }
  .active::after {
    display: block;
  }

  .active {
    background: #d4c9e3;
  }
</style>
