<template>
  <h1>To do Management</h1>
  <input v-model="input"/>
  <button @click="AddTask">Add new Task </button>
<div v-for="task in tasks" >
  <p>{{ task.content }} 
  <button :style="{background: color}" @click="DoneTask(task.id)">done</button>
  <button @click="DeleteTask(id)">Delete</button></p>
</div>

  <p>Filter Task</p>
  <button @click="filter = 'all'">All</button>
  <button @click="filter='active'">Active </button>
  <button @click="filter='completed'">Completed</button>
  <span>{{filteredTasks}}</span>

</template> 

<script setup>

import  {ref,computed} from 'vue'

var input=ref("");
let color = ref('green');
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
<style scoped></style>