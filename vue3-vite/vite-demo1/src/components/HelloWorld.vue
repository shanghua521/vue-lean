<template>
  <h1>{{ msg }}</h1>
  <button @click="counter++">count is: {{ counter }}</button>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <modal-button></modal-button>
  <emits @click="onClick"></emits>
  <!-- 实例方法定义组件 -->
  <comp></comp>

  <!-- v-model -->
  <!-- <comp2 :modelValue="data" @update:modelValue="data = $event"></comp2> -->
  <vmodel-test v-model:counter="counter"></vmodel-test>
  <!-- 等效于 -->
  <vmodel-test
    :counter="counter"
    @update:counter="counter = $event"
  ></vmodel-test>

  <render-test v-model:counter="counter">
    <template v-slot:default>title</template>
    <template v-slot:content>content</template>
  </render-test>

  <!-- 函数式组件 -->
  <functional level="3">这是一个动态的 h 元素</functional>
  <!-- 异步组件 -->
  <async-comp></async-comp>

  <!-- 自定义指令 -->
  <p v-highlight="'green'">Highlight this text!!!</p>

  <!-- 动画 -->
  <transition-test></transition-test>

  <!-- 发送监听事件 -->
  <button @click="sendMsg">emit event</button>
</template>

<script>
import { defineAsyncComponent, h } from "vue";
import ModalButton from "./ModelButton.vue";
import Emits from "./Emits.vue";
import VmodelTest from "./VmodelTest.vue";
import RenderTest from "./RenderTest.vue";
import Functional from "./Functional.vue";
import TransitionTest from "./TransitionTest.vue";

import mitt from "mitt";

export const emitter = mitt();

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      counter: 1,
      count: 0,
    };
  },
  components: {
    ModalButton,
    Emits,
    VmodelTest,
    Functional,
    RenderTest,
    TransitionTest,
    // AsyncComp: defineAsyncComponent(() => import("./NextPage.vue")),
    AsyncComp: defineAsyncComponent({
      loader: () => import("./NextPage.vue"),
      delay: 200,
      timeout: 3000,
    }),
  },
  methods: {
    onClick() {
      console.log("onClick");
    },
    sendMsg() {
      emitter.emit("someEvent", "foo");
    },
  },
};
</script>
<style scoped>
body {
  background-color: yellow;
}
</style>