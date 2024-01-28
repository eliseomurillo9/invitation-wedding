<template>
  <figure class="p-5 bg-white min-w-80 font-klee shadow-lg rounded-md md:w-96" >
    <h2 class="font-nanum text-xl pb-8 text-red text-center">{{ title }}</h2>
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
