<template>
  <h1>{{ result }}</h1>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "",
  methods: {},
  setup() {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve({ result: "Hello" });
      }, 2000);
    });
  },
});
</script>