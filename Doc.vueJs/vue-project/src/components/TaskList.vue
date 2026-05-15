<template>
<div class="space-y-4">
        <div v-for="task in tasks" class="flex items-center justify-between bg-gray-100 rounded-2xl px-5 py-4">
        <p class="text-gray-800 font-medium text-[15px]">{{ task.content }}</p>
        <div class="flex items-center gap-2">
        <button @click="emit('done_task',task.id) " class="bg-green-500 text-white px-4 py-2 rounded-2xl text-sm font-medium">Done</button>
        <button @click="emit('delete_task',task.id)" class="bg-red-500 text-white px-4 py-2 rounded-2xl text-sm font-medium">Delete</button>
        </div>
        </div>
</div>
</template>

<script setup>
import {ref} from 'vue'

const props = defineProps({
 tasks: {
    type: Array
  }
})
const emit = defineEmits(['done_task', 'delete_task'])


</script>