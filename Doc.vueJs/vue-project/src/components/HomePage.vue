<template>
    <div class="space-y-6">
        <TaskInput @add_task="(val) => $emit('add_task', val)" />
        <TaskList :tasks="filteredTasks" @done_task="(id) => $emit('done_task', id)"
            @delete_task="(id) => $emit('delete_task', id)" />
        <TaskFilter @filter="(val) => $emit('update_filter', val)" />
    </div>
</template>
<script setup>
import TaskInput from "./TaskInput.vue";
import TaskList from "./TaskList.vue";
import TaskFilter from "./TaskFilter.vue";

defineProps({
    filteredTasks: {
        type: Array,
        required: true
    },
    filter: {
        type: String,
        required: true
    }
});

defineEmits(['add_task', 'done_task', 'delete_task', 'update_filter']);
</script>