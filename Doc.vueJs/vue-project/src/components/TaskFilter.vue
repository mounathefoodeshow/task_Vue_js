<template>
<div class="flex items-center justify-center gap-3 pt-2">
        <p class="text-gray-700 font-medium">Filter Votre Task</p>
        <button @click="emit('filter', 'all')" class="px-5 py-2 rounded-xl bg-blue-500 text-white text-sm font-medium">All</button>
        <button @click="emit('filter', 'active')" class="px-5 py-2 rounded-xl bg-red-500 text-white text-sm font-medium">Active</button>
        <button @click="emit('filter', 'completed')" class="px-5 py-2 rounded-xl bg-green-500 text-white text-sm font-medium">Completed</button>
</div>
</template>

<script setup>
const emit = defineEmits(['filter'])
</script>

<style>

</style>