<template>
    <router-link to="/confirmation" custom v-slot="{ navigate }">
      <button
        class="font-klee py-2 px-3.5 border-4 border-pink-main rounded-full text-red"
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
});
</script>
