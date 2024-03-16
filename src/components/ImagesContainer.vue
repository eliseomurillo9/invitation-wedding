

<template>
  <section class="dark:bg-dark-alt  py-9">
    <h1 class="text-red font-nanum text-4xl text-center pb-9 px-12 dark:text-pink-clear text-red-main " >
      {{ title }}
    </h1>
    <div class="columns-2 md:columns-4 gap-6 px-9">
      <figure
        v-for="(photo, i) in images"
        :key="i"
      >
        <img
          :src="require(`../assets/${photo.img}`)"
          alt="Image 1"
          class="rounded-xl w-full h-full pt-4"
        />
      </figure>
    </div>
    <p class="font-klee px-12 text-center mt-5 dark:text-white">{{ $t("PhotosSection.Text") }} <a href="#" class="text-blue-800 dark:text-pink-clear uppercase font-bold">{{ $t("PhotosSection.Here") }}</a></p>
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
