<template>
  <figure
    class="p-5 bg-white font-klee shadow rounded-md py-7 dark:bg-pink-clear dark:text-red-alt"
  >
    <h2
      v-if="title"
      class="font-nanum text-xl pb-8 text-red text-center md:text-2xl text-red-main"
    >
      {{ title }}
    </h2>
    <slot></slot>
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
