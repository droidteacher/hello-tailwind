<script setup>
import { store } from '../store';
</script>
  
<template>
  <header class="w-full flex flex-row p-4 border-b
    bg-blue-300 border-gray-700">
    <h2 class="text-xl flex text-gray-800">
      Profile Card Generator</h2>
    <button class="flex ml-auto text-gray-800
      items-center" @click="store.clear()">
      Reset

    </button>
  </header>
</template>