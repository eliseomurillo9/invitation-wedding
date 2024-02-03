<template>
  <section class="flex flex-col justify-center items-center gap-4 text-blue-main py-9">
    <h1 class="text-red text-2xl font-nanum uppercase md:text-8xl">{{ $t(titleMsg) }}</h1>
    <Counter data-aos="fade-up" class="z-20" />
    <img
      src="../assets/foto-5.png"
      alt="Foto Elise y Georgina abrazados"
      class="w-60"
    />
    <div class="flex gap-2 font-nanum">
      <img src="../assets/icons/location.svg" alt="" srcset="" />
      <h2>{{ weddingPlace }}</h2>
      <img src="../assets/icons/calendar.svg" alt="" srcset="" class="w-7" />
      <h2>{{ weddingDate }}</h2>
    </div>
    <p class="w-2/4 text-center font-klee">{{ description }}</p>
  <ConfirmationContainerVue :title="$t('base.assistanceConfirmation')" />
  </section>
</template>

<script setup>
import Counter from "@/components/Counter.vue";
import { defineProps } from "vue";
import ConfirmationContainerVue from "./ConfirmationContainer.vue";

defineProps({
  titleMsg: {
    type: String,
  },
  weddingDate: {
    type: String,
  },
  weddingPlace: {
    Type: String,
  },
  description: {
    Type: String
  }
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
