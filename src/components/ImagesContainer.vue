<template>
  <section class="dark:bg-dark-alt py-9">
    <h1
      class="text-red font-nanum text-4xl text-center pb-9 px-12 dark:text-pink-clear text-red-main"
    >
      {{ title }}
    </h1>
    <div class="columns-2 md:columns-4 gap-6 px-9">
      <figure v-for="(photo, i) in images" :key="i" data-aos="zoom-in">
        <img
          :src="photo.img"
          :alt="photo.alt"
          class="rounded-xl w-full h-full pt-4"
        />
      </figure>
    </div>
    <p class="font-klee px-12 text-center mt-5 dark:text-white">
      {{ $t("PhotosSection.Text") }}
      <router-link to="/wedding-photos">
        <span class="text-blue-800 dark:text-pink-clear uppercase font-bold">{{
          $t("PhotosSection.Here")
        }}</span></router-link
      >
    </p>
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
