<template>
  <div>
    <h2>欢迎光临红浪漫洗浴中心</h2>
    <div>随机选择一位美女为你服务</div>
    <div v-if="loading">Loading...</div>
    <modal></modal>
    <img v-if="loaded" :src="result.imgUrl" />
  </div>
</template>
<script lang="ts">
import useURLAxios from "./hooks/useURLAxios";
import modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { modal },
  setup(): unknown {
    const { result, loading, loaded, error } = useURLAxios(
      "https://apiblog.jspang.com/default/getGirl"
    );
    return { result, loading, loaded, error };
  },
};
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
