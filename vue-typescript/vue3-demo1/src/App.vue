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
    <div>
      <button @click="overAction">点餐完毕</button>
    </div>
    <div>{{ overText }}</div>
  </div>
</template>
<script lang="ts">
import {
  reactive,
  ToRefs,
  toRefs,
  /* onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onRenderTracked,
  onRenderTriggered, */
  ref,
  watch,
  Ref,
} from "vue";

interface DataProps {
  girls: string[];
  selectGirl: string;
  selectGirlFun: (index: number) => void;
}

export default {
  name: "App",
  setup(): unknown {
    console.log("1-开始创建组件----setup hello");
    const data: DataProps = reactive({
      girls: ["大脚", "刘英", "晓红"],
      selectGirl: "",
      selectGirlFun: (index: number): void => {
        data.selectGirl = data.girls[index];
      },
    });

    const refData: ToRefs<DataProps> = toRefs(data);

    const overText:Ref<string> = ref("红浪漫");

    const overAction = () => {
      overText.value = "点餐完成|" + overText.value;
      // document.title = overText.value;
    };
 
    watch([overText,() => data.selectGirl], (newValue, oldValue) => {
      console.log(`new--->${newValue}`);
      console.log(`old--->${oldValue}`);
      document.title = newValue[0];
    });

    /* onBeforeMount(() => {
      console.log("2-开始创建组件----onBeforeMount");
    });

    onMounted(() => {
      console.log("3-组件挂载到----onMounted");
    });

    onBeforeUpdate(() => {
      console.log("4-组件更新之前----onBeforeUpdate");
    });

    onUpdated(() => {
      console.log("5-组件更新之后----onUpdated");
    }); */

    /* onRenderTracked((event) => {
      console.log("状态跟踪钩子函数");
      console.log(event);
    });

    onRenderTriggered((event) => {
      console.log(event);
    }); */

    return {
      ...refData,
      overText,
      overAction,
    };
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

// befaultCreated created
// onBeforeUnmount() 组件卸载之前执行 vue 2
// onUnmounted
// onActivated  <keep-alive></keep-alive>
// onDeactivated
// onErrorCaptured

// 钩子函数
// onRenderTracked onRenderTriggered