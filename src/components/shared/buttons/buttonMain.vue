<template>
  <div>
    <span class="py-3.5 px-8 bg-pink-main rounded-full text-red">{{ label }}</span>
  </div>
</template>

<script setup>
import defineProps from "vue";

defineProps({
  label: String,
});
</script>
