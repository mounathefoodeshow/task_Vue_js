<template>
    <div class="space-y-6">
        <TaskInput />
        <TaskList />
        <TaskFilter />
    </div>
</template>
<script setup>
import TaskInput from "./TaskInput.vue";
import TaskList from "./TaskList.vue";
import TaskFilter from "./TaskFilter.vue";
</script>