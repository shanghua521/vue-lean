<template>
  <div>
    this is next page
  </div>
</template>
<script lang="ts">
import { emitter } from "./HelloWorld.vue";
import { defineComponent } from "vue";

export default defineComponent({
  mounted() {
    emitter.on("someEvent", (msg) => {
      console.log(msg);
    });
  },
});
</script>
