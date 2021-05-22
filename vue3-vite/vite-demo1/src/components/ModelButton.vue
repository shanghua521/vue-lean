<template>
  <div>
    <button @click="modalOpen = true">弹出一个模态窗口</button>
    <teleport to="body">
      <div v-if="modalOpen" class="modal">
        <div>
          <p>这是一个弹窗 我的父元素是 body</p>
          <button @click="modalOpen = false">关闭</button>
        </div>
      </div>
    </teleport>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "",
  data() {
    return { modalOpen: "true" };
  },
  methods: {},
  setup() {
    return {};
  },
});
</script>
<style scoped>
.modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.modal div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 300px;
  height: 300px;
  padding: 5px;
}
</style>
