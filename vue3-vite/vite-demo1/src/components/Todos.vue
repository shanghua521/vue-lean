<template>
  <div>
    <!-- 新增 -->
    <input
      type="text"
      v-model="newTodo"
      @keyup.enter="addTodo"
      autofocus
      placeholder="今日代办"
      autocomplete="off"
    />
    <!-- Todo 列表 -->
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
        :class="{ completed: todo.completed }"
      >
        <!-- 绑定完成状态 -->
        <input type="checkbox" v-model="todo.completed" />
        <label>{{ todo.title }}</label>
        <button @click="removeTodo(todo)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      newTodo: "",
      todos: [],
    });

    function addTodo() {
      state.todos.push({
        id: state.todos.length,
        title: state.newTodo,
        completed: false,
      });
      state.newTodo = "";
    }

    function removeTodo(todo) {
      state.todos.splice(state.todos.indexOf(todo), 1);
    }

    return {
      ...toRefs(state),
      addTodo,
      removeTodo,
    };
  },
};
</script>

<style scoped>
.completed label {
  text-decoration: line-through;
}
</style>