
<template>
  <h1>To do Management</h1>
  <input v-model="input"/>
  <button @click="AddTask">Add new Task </button>
  <p v-for="(task,index) in tasks">{{task}}
  <button :style="{background: color}" @click="DoneTask(index)">done</button>
  <button @click="DeleteTask(index)">Delete</button>
  </p>
  <p>Done task</p>
  <p v-for="done in dones">{{done}}</p>
  <p>Filter Task 
  <button @click="allTasks">All</button>
  <p v-for="task in all">{{ task }}</p>
  <button >Active </button>
  <p v-for="task in tasks">{{ task }}</p>
  <button @click="completedTask">Completed</button>
  <p v-for="task in dones">{{ task }}</p>
</p>
</template> 

<script setup>
import  {ref} from 'vue'
var input=ref("");
let color = ref('green');
const tasks=ref([]);
const dones=ref([]);
const all = ref([])
function AddTask(){
  if(input.value!==""){
    tasks.value.push(input.value)
    input.value="";
  }
}
function DoneTask(index){
  dones.value.push(tasks.value[index]);
  tasks.value.splice(index,1);
}
function DeleteTask(index){
  tasks.value.forEach((task,i)=>{
    if(i===index){
        tasks.value.splice(i,1);
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
</script>


<style scoped></style>





