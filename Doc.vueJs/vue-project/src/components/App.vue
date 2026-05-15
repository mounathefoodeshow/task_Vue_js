<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    <div class="w-full max-w-2xl bg-white shadow-xl rounded-3xl p-8 space-y-7">
      <h1 class="text-4xl font-bold text-gray-800 text-center">To Do Management</h1>
      <nav class="flex justify-center gap-4 border-b pb-4">
        <router-link to="/home" class="text-lg font-medium text-gray-600 hover:text-blue-600">Home</router-link>
        <router-link to="/dashboard" class="text-lg font-medium text-gray-600 hover:text-blue-600">Dashboard</router-link>
      </nav>
      <router-view 
        :tasks="tasks"
        :filteredTasks="filteredTasks"
        :filter="filter"
        @add_task="addTask"
        @done_task="doneTask"
        @delete_task="deleteTask"
        @update_filter="(val) => filter = val"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const filter = ref("all");
const tasks = ref([]);
var count = ref(0);

function addTask(content) {
  tasks.value.push({
    id: count.value++,
    content,
    isDone: false,
  });
}

function doneTask(id) {
  const task = tasks.value.find((t) => t.id === id);
  if (task) {
    task.isDone = true;
  }
}

function deleteTask(id) {
  tasks.value = tasks.value.filter((task) => task.id !== id);
}

const filteredTasks = computed(() => {
  if (filter.value === "active") return tasks.value.filter((task) => !task.isDone);
  if (filter.value === "completed") return tasks.value.filter((task) => task.isDone);
  return tasks.value;
});
</script>

<style scoped></style>
