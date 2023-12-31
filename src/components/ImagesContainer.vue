<template>
  <section>
    <h1>
      {{ title }}
    </h1>
    <div class="columns-2xs px-7">
      <figure class="h-48 mb-3">
        <img
          src="../assets/foto-1-web.webp"
          alt="Image 1"
          class="w-full h-full object-cover rounded-xl"
        />
      </figure>
      <figure class="h-36 mb-3">
        <img
          src="../assets/foto-3-web.webp"
          alt="Image 1"
          class="w-full h-full object-cover rounded-xl"
        />
      </figure>
      <figure class="h-56 mb-3">
        <img
          src="../assets/foto-2-web.webp"
          alt="Image 1"
          class="w-full h-full object-cover rounded-xl"
        />
      </figure>
      <figure class="h-32 mb-3">
        <img
          src="../assets/foto-4-web.webp"
          alt="Image 1"
          class="w-full h-full object-cover rounded-xl"
        />
      </figure>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  title: {
    Type: String,
  },
  images: {
    Type: Array,
  },
});
</script>
