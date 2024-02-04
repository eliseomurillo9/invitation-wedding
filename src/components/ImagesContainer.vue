

<template>
  <section>
    <h1 class="text-red uppercase font-nanum text-4xl text-center py-9 px-12" >
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
    <p class="font-klee px-12 text-center mt-5">{{ $t("base.photosAction") }} <a href="#" class="text-blue-800 uppercase">{{ $t("base.here") }}</a></p>
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
  sectionFooter: {
    Type: String,
  },
});
</script>
