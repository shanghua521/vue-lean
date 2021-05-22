<template>
  <img :src="result && result.imgUrl" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  async setup() {
    const rawData = await axios.get(
      "https://apiblog.jspang.com/default/getGirl1"
    );
    return { result: rawData.data };
  },
});
</script>
