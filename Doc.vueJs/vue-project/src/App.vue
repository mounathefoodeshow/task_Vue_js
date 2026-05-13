<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    <div class="w-full max-w-2xl bg-white shadow-xl rounded-3xl p-8 space-y-7">
      <h1 class="text-4xl font-bold text-gray-800 text-center">To Do Management</h1>
      <div class="flex items-center gap-3">
        <input v-model="input"
          placeholder="Ajouter un task..."
          class="flex-1 border border-gray-300 bg-gray-50 rounded-2xl px-5 py-3 text-sm outline-none"/>
        <button @click="AddTask" class="bg-blue-500 text-white px-6 py-3 rounded-2xl text-sm font-medium">Add Task</button>
      </div>
      <div class="space-y-4">
        <div v-for="task in filteredTasks" class="flex items-center justify-between bg-gray-100 rounded-2xl px-5 py-4">
        <p class="text-gray-800 font-medium text-[15px]">{{ task.content }}</p>
        <div class="flex items-center gap-2">
        <button @click="DoneTask(task.id)" class="bg-green-500 text-white px-4 py-2 rounded-2xl text-sm font-medium">Done</button>
        <button @click="DeleteTask(task.id)" class="bg-red-500 text-white px-4 py-2 rounded-2xl text-sm font-medium">Delete</button>
        </div>
        </div>
      </div>
      <div class="flex items-center justify-center gap-3 pt-2">
        <p class="text-gray-700 font-medium">Filter Votre Task</p>
        <button @click="filter = 'all'" class="px-5 py-2 rounded-xl bg-blue-500 text-white text-sm font-medium">All</button>
        <button @click="filter='active'" class="px-5 py-2 rounded-xl bg-red-500 text-white text-sm font-medium">Active</button>
        <button @click="filter='completed'" class="px-5 py-2 rounded-xl bg-green-500 text-white text-sm font-medium">Completed</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import  {ref,computed} from 'vue'

var input=ref("");
const tasks=ref([]);
const all = ref([]);
const filter = ref('all');

var count=ref(0);
function AddTask(){
    if(input.value!==""){
    tasks.value.push({
      id:count.value++,
      content:input.value,
      isDone:false
    })
    input.value="";
  }
}

function DoneTask(id) {
  const task = tasks.value.find(t => t.id === id);
  if (task) {
    task.isDone = true;
  }
}

function DeleteTask(id){
  tasks.value.forEach((task,id)=>{
    if(id===id){
        tasks.value.splice(id,1);
    }
  })
}


function allTasks(){
  all.value = []
  tasks.value.forEach((task)=>{
    all.value.push(task)
  })
  dones.value.forEach((done)=>{
    all.value.push(done)
  })
}

function completedTask(){
    dones.value.forEach((done)=>{
        done.value
    })
}

function ActiveTask(){
    tasks.value.forEach((task)=>{
        task.value
    })
}

const filteredTasks = computed(() => {
  if (filter.value === 'active')  
    return tasks.value.filter(task => !task.isDone);
  if (filter.value === 'completed')
   return tasks.value.filter(task => task.isDone);
  return tasks.value;
});

</script>

<style scoped>
</style>




