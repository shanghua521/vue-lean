<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <h2>欢迎光临红浪漫洗浴中心</h2>
    <div>请选择一位美女为你服务</div>
    <div>
      <button
        v-for="(item, index) in girls"
        v-bind:key="index"
        @click="selectGirlFun(index)"
      >
        {{ index }}:{{ item }}
      </button>
    </div>
    <div v-show="selectGirl != ''">你选择了[{{ selectGirl }}]为你服务</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, Ref, ref } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const girls: Ref<string[]> = ref(["大脚", "刘英", "晓红"]);
    const selectGirl = ref("");
    const selectGirlFun = (index: number): void => {
      selectGirl.value = girls.value[index];
    };
    return {
      girls,
      selectGirl,
      selectGirlFun,
    };
  },
});
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
</style>
