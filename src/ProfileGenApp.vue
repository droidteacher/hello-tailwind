<script setup>
import AppHeader from './components/AppHeader.vue';
import AppProfileForm from './components/AppProfileForm.vue';
import AppProfileDisplay from './components/AppProfileDisplay.vue';
</script>

<template>
    <AppHeader/>
    <div class="flex flex-col md:flex-row">
      <AppProfileForm />
      <AppProfileDisplay />
    </div>
</template>