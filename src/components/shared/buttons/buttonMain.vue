<template>
  <a
    v-if="isLink"
    href="https://maps.app.goo.gl/uZpMweYfrsPj5BHV6"
    target="_blank"
  >
    <button
      class="font-klee py-2 px-3.5 bg-pink-main rounded-full text-red text-center"
    >
      {{ label }}
    </button>
  </a>
  <router-link v-else to="/confirmation" custom v-slot="{ navigate }">
    <button
      class="font-klee py-2 px-3.5 bg-pink-main rounded-full text-red"
      @click="navigate"
      role="link"
    >
      {{ label }}
    </button>
  </router-link>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  label: String,
  isLink: {
    type: Boolean,
    default: false,
  },
});
</script>
