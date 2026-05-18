<template>
  <div class="flex items-center gap-3">
    <input v-model="input" placeholder="Ajouter un task..."
      class="flex-1 border border-gray-300 bg-gray-50 rounded-2xl px-5 py-3 text-sm outline-none" />
    <button @click="AddTask" class="bg-blue-500 text-white px-6 py-3 rounded-2xl text-sm font-medium">Add Task</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTaskStore } from '../stores/taskStore' 

const store = useTaskStore()
const input = ref("");

function AddTask() {
  if (input.value !== "") {
    store.addTask(input.value);
    input.value = "";
  }
}
</script>
