<template>
  <a
    v-if="!!buttonhref"
    class="font-klee py-2 px-3.5 bg-pink-main rounded-full text-red text-center  dark:text-red-alt"
    :href="buttonhref"
    target="_blank"
    rel="noopener noreferrer"
  > {{ label }}</a>
  <button
    v-else
    :type="type"
    class="font-klee py-2 px-3.5 bg-pink-main rounded-full text-red text-center dark:text-red-alt"
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
    type: String,
  },
});
</script>
