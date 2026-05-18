<template>
<div class="flex items-center justify-center gap-3 pt-2">
        <p class="text-gray-700 font-medium">Filter Votre Task</p>
        <button @click="store.setFilter('all')" class="px-5 py-2 rounded-xl bg-blue-500 text-white text-sm font-medium">All</button>
        <button @click="store.setFilter('active')" class="px-5 py-2 rounded-xl bg-red-500 text-white text-sm font-medium">Active</button>
        <button @click="store.setFilter('completed')" class="px-5 py-2 rounded-xl bg-green-500 text-white text-sm font-medium">Completed</button>
</div>
</template>

<script setup>
import { useTaskStore } from '../stores/taskStore'

const store = useTaskStore()
</script>

<style>

</style>