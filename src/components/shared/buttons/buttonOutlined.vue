<template>
    <a
    v-if="!!buttonhref"
    class="font-klee py-1.5 px-3 border-3 border-pink-main rounded-full text-red"
    :href="buttonhref"
    target="_blank"
    rel="noopener noreferrer"
  > {{ label }}</a>
  <button
  v-else
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
  buttonhref: {
    type: String
  }
});
</script>
