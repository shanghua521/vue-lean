<template>
  <div :class="{active:isActive}" @click="navigate">
    {{ route.name }}
  </div>
</template>

<script>
import {RouterLink, useLink} from 'vue-router'

export default {
  props: {
    ...RouterLink.props,
    inactiveClass: String
  },
  setup(props) {
    // 获取 RouterLink 内的方法和属性
    const {route, href, isActive, isExactActive, navigate} = useLink(props)
    // console.log(route, href, isActive, isExactActive, navigate)
    return {route, isActive, navigate}
  }
}
</script>

<style scoped>
.active {
  background-color: #2baa71;
}
</style>