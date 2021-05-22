<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <modal-button></modal-button>
</template>

<script>
import ModalButton from "./ModelButton.vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    ModalButton,
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>
<style scoped>
body {
  background-color: yellow;
}
</style>