<template>
  <figure class="p-5 bg-white min-w-80 font-klee shadow rounded-md md:w-96 py-7 dark:bg-pink-clear dark:text-red-alt" >
    <h2 class="font-nanum text-xl pb-8 text-red text-center md:text-2xl">{{ title }}</h2>
    <slot ></slot>
  </figure>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
  },
});
</script>
