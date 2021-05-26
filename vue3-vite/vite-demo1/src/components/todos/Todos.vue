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
        v-model:edited-todo="editedtodo"
        @remove-todo="removeTodo"
      >
      </todo-item>
    </ul>

    <!-- 过滤 -->
    <Filter :items="filterItems" v-model="visibility"></Filter>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import TodoItem from "./TodoItem.vue";
import Filter from "./Filter.vue";
import useTodos from "./useTodos";
import useFilter from "./useFilter";

export default {
  components: {
    TodoItem,
    Filter,
  },
  setup() {
    const todoState = reactive({
      newTodo: "",
      editedtodo: null, // 正在编辑的 todo
    });
    const { todos, addTodo, removeTodo } = useTodos(todoState);
    const filterState = useFilter(todos);

    return {
      ...toRefs(todoState),
      ...toRefs(filterState),
      addTodo,
      removeTodo,
    };
  },
};
</script>

<style scoped></style>
