<template>
  <main class="app">
    <section>
      <h2 class="bg-gray-600 text-white text-left pl-2 py-2">Hello <input class="focus:outline-0 bg-gray-600" type="text" id="name" placeholder="Name here" v-model="name" /></h2>
    </section>
    <section>
      <div class="grid grid-cols-12">
        <div class="col-span-12 bg-gray-100">
          <form class="p-16" id="new-todo-form" @submit.prevent="addTodo">
            <div class="">
              <h2 class="text-center text-2xl py-4">MY TODO LIST</h2>
              <div class="flex">
                <input class="w-full py-2 px-4" type="text" name="content" id="content" placeholder="e.g. make a ToDo" v-model="input_content" />
                <input class="bg-gray-700 text-white cursor-pointer py-1 px-8" type="submit" value="Add todo" />
              </div>
            </div>
          </form>
        </div>

        <div class="col-span-12 bg-gray-100">
          <div class="mx-auto flex flex-col gap-1" id="todo-list">
            <div class="bg-gray-500 w-full flex text-white text-center items-center" v-for="todo in todos" :key="todo.id" :class="{'completed': todo.done}" >

              <div @click="checkTodo(todo.id)" class="todo-content flex-grow cursor-pointer">
                {{todo.content}}
              </div>

              <div class="actions">
                <button class="bg-red-500 text-white p-2" @click="removeTodo(todo)">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch, reactive } from "vue";
import {todoType} from './types/Todo'

const name = ref<string | number>("");

const input_content = ref("");



// const todos_asc = computed(() =>
//   todos.value.sort((a, b) => {
  //     return a.createdAt - b.createdAt;
//   })
// );

// watch(name, (newVal: string) => {
  //   localStorage.setItem("name", newVal);
// });

// watch(
  //   todos,
//   (newVal) => {
  //     localStorage.setItem("todos", JSON.stringify(newVal));
//   },
//   {
  //     deep: true,
//   }
// );

const todos = reactive<todoType[]>([
  {id: 1, content: 'watch TV', done: false},
  {id: 2, content: 'playing football', done: false},
  {id: 3, content: 'Learning javascript', done: false},
]);

const addTodo = () => {
  if (input_content.value.trim() === "") {
    return;
  }

  todos.push({
    id: todos.length + 1,
    content: input_content.value,
    done: false,
  });
  input_content.value = ""
};

const checkTodo = (todoId:number) => {
  todos.map((todo)=> {
    if (todo.id == todoId) {
      todo.done = !todo.done
    }
  })
};

const removeTodo = (todoItem:todoType) => {
  const todoIndex = todos.findIndex(todo => todo === todoItem);
  todos.splice(todoIndex, 1)
};

// onMounted(() => {
//   name.value = localStorage.getItem("name") || "";
//   todos.value = JSON.parse(localStorage.getItem("todos")) || [];
// });
</script>


<style scoped>
* {
  font-family: helvetica;
}
.completed {
  color: #ffffff;
  text-decoration: line-through;
}
</style>