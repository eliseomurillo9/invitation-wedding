<template>
  <section class="flex flex-col gap-9">
    <h1 class="text-red text-2xl font-nanum text-center md:text-4xl dark:text-dark-blue">{{ title }}</h1>
    <p v-for="(message, i) in messages" :key="i" class="dark:text-pink-white">{{ $t(message) }}</p>
    <form class="flex flex-col justify-center items-center gap-9 md:pt-5">
      <slot name="form"></slot>
      <buttonMain type="submit" :label="$t('Buttons.ConfirmButton')" :isLoading="isLoading" />
      
    </form>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';
import buttonMain from './shared/buttons/buttonMain.vue';

defineProps({
  title: {
    type: String
  },
  messages: {
    type: Array
  },
  isLoading: {
    type: Boolean
  }
})
</script>