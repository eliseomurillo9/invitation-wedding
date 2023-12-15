<template>
  <div class=" mt-12">
  <button class="py-2.5 px-5 border-4 border-pink-main rounded-full text-red">{{ label }}</button>
  </div>
</template>

<script setup>
import defineProps from "vue";

defineProps({
  label: String,
});
</script>
