<template>
  <button
    class="font-klee py-1.5 px-3 border-3 border-pink-main rounded-full text-red"
  >
    {{ label }}
  </button>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  label: {
    type: String,
  },
  type: {
    type: String,
    default: "button",
  },
});
</script>
