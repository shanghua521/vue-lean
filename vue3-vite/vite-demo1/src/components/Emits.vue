<template>
  <div @click="$emit('click')">
    自定义事件
  </div>
</template>
<script>
export default {
  // emits
  emits: ["click"],
};
</script>
