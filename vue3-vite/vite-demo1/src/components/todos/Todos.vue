<template>
  <div>
    <edit-todo
        v-model="newTodo"
        @keyup.enter="addTodo"
        autofocus
        placeholder="今日代办"
        autocomplete="off"
    ></edit-todo>
    <!-- 新增 -->

    <!-- Todo 列表 -->
    <ul>
      <todo-item
          v-for="item in filterdTodos"
          :key="item.id"
          :todo="item"
          v-model:edited-todo="editedTodo"
          @remove-todo="removeTodo"
      >
      </todo-item>
    </ul>

    <!-- 过滤 -->
    <Filter :items="filterItems" v-model="visibility"></Filter>

    <!-- aaa -->
    <button @click="backToDash">backToDash</button>
  </div>
</template>

<script>
import {reactive, toRefs, watch} from "vue";
import TodoItem from "./TodoItem.vue";
import Filter from "./Filter.vue";
import useTodos from "./useTodos";
import useFilter from "./useFilter";
import {onBeforeRouteLeave, useRoute, useRouter} from "vue-router";

export default {
  components: {
    TodoItem,
    Filter,
  },
  setup() {
    const todoState = reactive({
      newTodo: "",
      editedTodo: null, // 正在编辑的
    });
    const {todos, addTodo, removeTodo} = useTodos(todoState);
    const filterState = useFilter(todos);

    // 获取路由器实例
    const router = useRouter();

    // route 是响应式对象，可监控变化
    const route = useRoute();
    watch(() => route.query, query => {
      console.log(query)
    });

    // 守卫
    onBeforeRouteLeave((to, from) => {
      const answer = window.confirm('你确定要离开当前页面吗？')
      if (!answer) {
        return false;
      }
    })

    return {
      ...toRefs(todoState),
      ...toRefs(filterState),
      addTodo,
      removeTodo,
      backToDash() {
        router.push('/')
      },
    };
  },
};
</script>

<style scoped></style>
