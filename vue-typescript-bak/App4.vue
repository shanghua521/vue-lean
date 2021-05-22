<template>
  <div>
    <Suspense>
      <template #default>
        <async-show/>
      </template>
      <template #fallback>
        <h1>Loading...</h1>
      </template>
    </Suspense>
  </div>
</template>
<script lang="ts">
import AsyncShow from "./components/AsyncShow.vue";
import GirlShow from "./components/GirlShow.vue";

export default {
  name: "App",
  components: { AsyncShow },
  setup(): unknown {
    return {};
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
