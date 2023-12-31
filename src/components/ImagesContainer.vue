<template>
  <section>
    <h1>
      {{ title }}
    </h1>
    <div
    class="flex flex-wrap w-3/4 m-auto gap-8"
    >
    <figure class="w-36 h-48 flex-basis min-h-48">
        <img src="../assets/foto-1-web.webp" alt="Image 1" class="w-full h-full object-cover rounded-xl" />
    </figure>
    <figure class="w-36 h-56 flex-basis min-h-56">
        <img src="../assets/foto-2-web.webp" alt="Image 1" class="w-full h-full object-cover rounded-xl" />
    </figure>
    <figure class="w-36 h-36 flex-basis min-h-36">
        <img src="../assets/foto-3-web.webp" alt="Image 1" class="w-full h-full object-cover rounded-xl" />
    </figure>
    <figure class="w-36 h-32 flex-basis">
        <img src="../assets/foto-4-web.webp" alt="Image 1" class="w-full h-full object-cover rounded-xl" />
    </figure>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    title:{
        Type: String,
    }
})
 </script>