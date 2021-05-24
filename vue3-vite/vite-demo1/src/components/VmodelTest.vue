<template>
  <div @click="$emit('update:counter', counter + 1)">
    counter : {{ counter }}
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    counter: {
      type: Number,
      default: 0,
    },
  },
});
</script>