<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    <div class="w-full max-w-2xl bg-white shadow-xl rounded-3xl p-8 space-y-7">
      <h1 class="text-4xl font-bold text-gray-800 text-center">To Do Management</h1>
      <nav class="flex justify-center gap-4 border-b pb-4">
        <router-link to="/home" class="text-lg font-medium text-gray-600 hover:text-blue-600">Home</router-link>
        <router-link to="/dashboard" class="text-lg font-medium text-gray-600 hover:text-blue-600">Dashboard</router-link>
      </nav>
      <router-view />
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped></style>
