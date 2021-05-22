<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <p>{{ counter }}</p>
    <p>{{ doubleCounter }}</p>
    <p>{{ msg2 }}</p>
    <p ref="desc"></p>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  onMounted,
  onUnmounted,
  ref,
  toRefs,
  watch,
  Ref,
} from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const { counter, doubleCounter } = useCounter();
    // 单值响应式
    const msg2 = ref("some message");

    const desc: Ref = ref(null);

    watch(counter, (val, oldVal) => {
      const p = desc.value;
      p.textContent = `Counter change from ${oldVal} to ${val}`;
    });

    return { counter, doubleCounter, msg2, desc };
  },
});

function useCounter() {
  // counter 相关
  const data: {
    counter: number;
    doubleCounter: number;
  } = reactive({
    counter: 1,
    doubleCounter: computed(() => data.counter * 2),
  });

  let timer: number;
  onMounted(() => {
    timer = setInterval(() => {
      data.counter++;
    }, 1000);
  });

  onUnmounted(() => {
    clearInterval(timer);
  });
  return toRefs(data);
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
