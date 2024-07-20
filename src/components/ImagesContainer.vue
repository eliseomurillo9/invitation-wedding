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
    <div class="text-center font-klee">
      <p class="font-klee px-12 text-center mt-5 dark:text-white">
        {{ $t("PhotosSection.Text") }}
        <a
          href="http://www.wedshoots.com/fr/download?albumId=FR76bdbca7"
          target="_blank"
        >
          <span
            class="text-blue-800 dark:text-pink-clear uppercase font-bold"
            >{{ $t("PhotosSection.Here") }}</span
          >
        </a>
      </p>
      <p class="mt-5 dark:text-white">
        {{ $t("Common.AccessCode") }}: <span class="font-bold">FR76bdbca7</span>

        <span
          class="material-symbols-outlined cursor-pointer align-middle text-black/60 text-xl ml-2 hover:text-pink-main ease-in-out"
          @click="copy('FR76bdbca7')"
        >
          content_copy
        </span>
      </p>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from "vue";
import { toast } from "vue3-toastify";
defineProps({
  title: {
    Type: String,
  },
  images: {
    Type: Array,
  },
});

const copy = async (code) => {
  try {
    await navigator.clipboard.writeText(code);
    toast.info("Copied to clipboard!");
  } catch (err) {
    toast.error("Failed to copy:");
    // Handle fallback if needed (explained below)
  }
};
</script>
