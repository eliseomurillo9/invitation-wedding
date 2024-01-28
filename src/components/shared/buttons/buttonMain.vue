<template>
  <button
    :type="type"
    class="font-klee py-2 px-3.5 bg-pink-main rounded-full text-red text-center"
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
