import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useTaskStore = defineStore('task', () => {
  const filter = ref("all");
  const tasks = ref([]);
  const count = ref(0);

  if (localStorage.getItem('tasks')) {
    tasks.value = JSON.parse(localStorage.getItem('tasks'));
  }

  if (localStorage.getItem('count')) {
    count.value = Number(localStorage.getItem('count'));
  }

  watch(tasks, (newTasks) => {
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  });

  watch(count, (newCount) => {
    localStorage.setItem('count', newCount.toString());
  });

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



