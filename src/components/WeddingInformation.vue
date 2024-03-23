<template>
  <section
    class="flex flex-col justify-center items-center gap-4 pt-24 py-9 dark:bg-dark-main dark:text-pink-alt"
  >
    <i18n-t
      keypath="WelcomeSection.pageTitle"
      tag="h1"
      class="text-red text-4xl text-center font-nanum md:text-6xl text-red-main dark:text-white"
      data-aos="zoom-out"
    >
      <template #wedding>
        <span class="block md:inline-block md:my-4">
          {{ $t("WelcomeSection.weddingTitle") }}
        </span>
      </template>
    </i18n-t>
    <Counter data-aos="fade-up" class="z-20" />
    <img
      src="../assets/foto-5.png"
      alt="Foto Elise y Georgina abrazados"
      class="w-60 h-auto"
      data-aos="zoom-in"
    />
    <div
      class="flex gap-2 font-klee text-blue-main dark:text-pink-main"
      data-aos="fade-down"
    >
      <span class="material-symbols-outlined"> location_on </span>
      <h2>{{ weddingPlace }}</h2>
      <span class="material-symbols-outlined"> event </span>
      <h2>{{ weddingDate }}</h2>
    </div>
    <p class="w-2/4 text-center font-klee dark:text-white">{{ description }}</p>
    <ConfirmationContainerVue :title="$t('WelcomeSection.Subtitle')" />
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
    Type: String,
  },
});
</script>
