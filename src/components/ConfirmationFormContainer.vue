<template>
  <section class="flex flex-col gap-9">
    <h1 class="text-red text-2xl font-nanum text-center">{{ title }}</h1>
    <p>{{ message }}</p>
    <form class="flex flex-col justify-center items-center gap-9">
      <slot name="form"></slot>
      <buttonMain type="submit" label="Confirm"/>
    </form>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';
import buttonMain from './shared/buttons/buttonMain.vue';

defineProps({
    title:{
        type: String
    },
    message:{
        type: String
    }
})
</script>