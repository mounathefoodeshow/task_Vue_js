<template>
  <div class="space-y-6">
    <h2 class="text-2xl font-bold text-gray-800 text-center">Dashboard</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-blue-50 border border-blue-200 p-6 rounded-2xl text-center shadow-sm">
        <h3 class="text-lg font-semibold text-blue-800">Total Tasks</h3>
        <p class="text-4xl font-bold text-blue-600 mt-2">{{ store.tasks.length }}</p>
      </div>
      
      <div class="bg-green-50 border border-green-200 p-6 rounded-2xl text-center shadow-sm">
        <h3 class="text-lg font-semibold text-green-800">Completed</h3>
        <p class="text-4xl font-bold text-green-600 mt-2">{{ completedCount }}</p>
      </div>
      
      <div class="bg-red-50 border border-red-200 p-6 rounded-2xl text-center shadow-sm">
        <h3 class="text-lg font-semibold text-red-800">Active Tasks</h3>
        <p class="text-4xl font-bold text-red-600 mt-2">{{ activeCount }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useTaskStore } from '../stores/taskStore'

const store = useTaskStore()

const completedCount = computed(() => store.tasks.filter(t => t.isDone).length);
const activeCount = computed(() => store.tasks.filter(t => !t.isDone).length);
</script>
