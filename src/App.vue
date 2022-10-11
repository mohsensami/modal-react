<template>
  <main class="app">
    <section>
      <h2 class="bg-indigo-600 text-white text-center py-2">Hello <input class="focus:outline-0 bg-indigo-600" type="text" id="name" placeholder="Name here" v-model="name" /></h2>
      <h2 class="bg-indigo-500 text-center text-white py-4">What's on your todo list?</h2>
    </section>
    <section>
      <div class="grid grid-cols-12">
        <div class="col-span-6 bg-indigo-100">
          <h2 class="bg-indigo-300 text-center text-white py-2">Add ToDo</h2>
          <form class="p-8" id="new-todo-form" @submit.prevent="addTodo">
            <div class="flex justify-between gap-2">
              <div class="flex-1">
                <input class="w-full p-4" type="text" name="content" id="content" placeholder="e.g. make a ToDo" v-model="input_content" />
              </div>
              <div class="flex-2">
                <div class="flex flex-col gap-2">
                  <div>
                    <label class="flex items-center">
                      <input class="hidden peer" type="radio" name="category" id="category1" value="business" checked v-model="input_category" />
                      <div class="cursor-pointer px-2 py-1 text-xs">Business</div>
                      <span class="hidden peer-checked:block text-green-600 font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                    </label>
                  </div>
                  <div>
                    <label class="flex items-center">
                      <input class="hidden peer" type="radio" name="category" id="category2" value="personal" v-model="input_category" />
                      <div class="cursor-pointer px-2 py-1 text-xs">Personal</div>
                      <span class="hidden peer-checked:block text-green-600 font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg
                      ></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <input class="bg-indigo-700 text-white p-2 cursor-pointer" type="submit" value="Add todo" />
          </form>
        </div>
        <div class="col-span-6 bg-indigo-200">
          <h3 class="bg-indigo-300 text-center text-white py-2">TODO LIST</h3>
          <div class="p-8">
            <div class="flex flex-col gap-4" id="todo-list">
              <div class="flex items-center" v-for="todo in todos_asc" :key="todo.category" :class="`todo-item ${todo.done && 'done'}`">
                <label class="">
                  <input type="checkbox" v-model="todo.done" />
                  <span :class="`bubble ${todo.category == 'business' ? 'business' : 'personal'}`"></span>
                </label>

                <div class="todo-content flex-grow">
                  <input class="w-full p-2 bg-indigo-200 focus:outline-0" :class="{'completed' : todo.done}" type="text" v-model="todo.content" />
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
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";

const todos = ref([]);
const name = ref("");

const input_content = ref("");
const input_category = ref(null);

const todos_asc = computed(() =>
  todos.value.sort((a, b) => {
    return a.createdAt - b.createdAt;
  })
);

watch(name, (newVal) => {
  localStorage.setItem("name", newVal);
});

watch(
  todos,
  (newVal) => {
    localStorage.setItem("todos", JSON.stringify(newVal));
  },
  {
    deep: true,
  }
);

const addTodo = () => {
  if (input_content.value.trim() === "" || input_category.value === null) {
    return;
  }

  todos.value.push({
    content: input_content.value,
    category: input_category.value,
    done: false,
    editable: false,
    createdAt: new Date().getTime(),
  });
};

const removeTodo = (todo) => {
  todos.value = todos.value.filter((t) => t !== todo);
};

onMounted(() => {
  name.value = localStorage.getItem("name") || "";
  todos.value = JSON.parse(localStorage.getItem("todos")) || [];
});
</script>


<style scoped>
.completed {
    color: #767676;
    text-decoration: line-through;
}
</style>