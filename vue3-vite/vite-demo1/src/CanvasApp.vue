<template>
  <piechart
    @click="handleClick"
    :data="state.data"
    :x="200"
    :y="200"
    :z="200"
    :r="200"
  ></piechart>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "",
  setup() {
    const state = reactive({
      data: [
        { name: "大专", count: 200, color: "brown" },
        { name: "本科", count: 300, color: "yellow" },
        { name: "硕士", count: 100, color: "pink" },
        { name: "博士", count: 50, color: "skyblue" },
      ],
    });
    function handleClick() {
      state.data.push({ name: "其他", count: 30, color: "orange" });
    }
    return {
      state,
      handleClick,
    };
  },
});
</script>