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
    :disabled="isLoading"
    :type="type"
    class="font-klee py-2 px-3.5 bg-pink-main rounded-full text-red text-center dark:text-red-alt"
  >
    {{ label }}
    <div
    v-if="isLoading"
  class="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-red-main"
  role="status">
  <span
    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span
  >
</div>
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
  isLoading: {
    type: Boolean
  }
});
</script>
