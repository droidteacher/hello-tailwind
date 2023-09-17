<script setup>
import { store } from '../store';
import { ref } from 'vue'
const emit = defineEmits(['submit'])
const name = ref('');
const occupation = ref('');

function submitForm() {
  // emit('submit', {
  //   name: this.name
  // });

  window.alert('When using store the app does not NEED neither an explicit submit button nor any emitting.');
}

</script>

<template>
  <section class="md:w-2/3 flex flex-col p-12 items-center
      bg-red-200">
    <!-- Inputs -->
    <div class="flex flex-col">
      <label class="flex text-gray-800 mb-2" for="name">
        Name
      </label>
      <input id="name" type="text" name="name" class="border-2 border-solid border-blue-200
          rounded px-2 py-1" v-model="store.name" />

      <div class="flex flex-col mt-2">
        <label class="flex text-gray-800 mb-2" for="occupation">Occupation</label>
        <input id="occupation" type="text" name="occupation" class="border-2 border-solid border-blue-200
          rounded px-2 py-1" v-model="store.occupation" />
      </div>

      <div class="flex flex-col mt-2">
        <label class="flex text-gray-800 mb-2" for="occupation">Organization</label>
        <input id="organization" type="text" name="organization" class="border-2 border-solid border-blue-200
          rounded px-2 py-1" v-model="store.organization" />
      </div>

      <div class="flex flex-col mt-2">
        <label class="flex text-gray-800 mb-2" for="occupation">Email</label>
        <input id="email" type="email" name="email" class="border-2 border-solid border-blue-200
          rounded px-2 py-1" v-model="store.email" />
      </div>

      <div class="flex flex-col mt-2">
        <label class="flex text-gray-800 mb-2" for="occupation">Phone</label>
        <input id="phone" type="tel" name="phone" class="border-2 border-solid border-blue-200
          rounded px-2 py-1" v-model="store.phone" />
      </div>

      <!-- <div class="flex flex-row mt-12">
        <button type="submit" @click="submitForm()">Submit
        </button>
      </div> -->

    </div>




  </section>
</template>
  