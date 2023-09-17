<script setup>
import { store } from '../store';
</script>

<!-- <template>
  <section class="md:w-1/3 h-64 bg-blue-200 flex p12">

    <h3 class="font-bold font-lg">{{ formData.name }}</h3>
  </section>
</template> -->

<template>
  <section class="md:w-1/3 bg-blue-200 flex flex-col p-12">
  <!-- Profile Card -->
  <h3 class="font-bold font-lg">{{ store.name }}</h3>
  <p class="mt-2">{{ store.occupation }}</p>
  <p class="mt-2">{{ store.organization }}</p>
  <p class="mt-2">{{ store.email }}</p>
  <p class="mt-2">{{ store.phone }}</p>
  </section>
</template>



