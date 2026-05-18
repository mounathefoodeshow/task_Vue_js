import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTaskStore = defineStore('task', () => {
  const filter = ref("all");
  const tasks = ref([]);
  const count = ref(0);

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

  function setFilter(newFilter) {
    filter.value = newFilter;
  }

  const filteredTasks = computed(() => {
    if (filter.value === "active") return tasks.value.filter((task) => !task.isDone);
    if (filter.value === "completed") return tasks.value.filter((task) => task.isDone);
    return tasks.value;
  });

  return { filter, tasks, count, addTask, doneTask, deleteTask, setFilter, filteredTasks }
})



