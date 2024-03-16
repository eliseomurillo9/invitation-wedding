<template>
  <section class="flex flex-col items-center gap-5 bg-pink-white py-7 dark:bg-dark-alt">
    <h1 class="uppercase text-red text-center font-nanum text-4xl dark:text-white px-10">
      {{ title }}
    </h1>
    <div v-for="(contain, i) in pageContain" :key="i" class="text-container">
      <header class="flex gap-2 items-center ">
        <h2 class="text-blue-main dark:text-pink-main">{{ $t(contain.subtitle) }}</h2>
        <figure>
          <span class="material-symbols-outlined text-blue-main dark:text-pink-main">
            {{ contain.icon }}
          </span>
        </figure>
      </header>
      <p class="font-klee dark:text-pink-clear">{{ $t(contain.text) }}</p>
    </div>
    <buttonMain label="See account details" />
  </section>
</template>

<script setup>
import { ref, defineProps } from "vue";
import buttonMain from "./shared/buttons/buttonMain.vue";

defineProps({
  title: {
    Type: String,
    mandatory: true,
  },
});
const pageContain = ref([
  {
    subtitle: "GiftSection.subtitle1",
    icon: "mail",
    text: "GiftSection.paragraph1",
  },
  {
    subtitle: "giftSection.subtitleBank",
    icon: "ios_share",
    text: "giftSection.textBank",
  },
]);
</script>

<style>
.text-container {
  min-width: 18.18rem;
}
</style>
