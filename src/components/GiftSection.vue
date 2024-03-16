<template>
  <section class="flex flex-col items-center gap-5 py-7 dark:bg-dark-alt font-nanum bg-pink-3">
    <h1 class="text-red text-center text-4xl text-red-main dark:text-white px-10">
      {{ title }}
    </h1>
    <div class="flex flex-col justify-center items-center font-klee">
      <p>{{ $t('GiftSection.paragraph1') }}</p>
      <p>{{ $t('GiftSection.paragraph2') }}</p>
    </div>
    <div v-for="(contain, i) in pageContain" :key="i" class="text-container ">
      <header class="flex gap-1 items-center justify-center">
        <h2 class="text-blue-main dark:text-pink-main">{{ $t(contain.subtitle) }}</h2>

        <figure>
          <span class="material-symbols-outlined text-blue-main dark:text-pink-main">
            {{ contain.icon }}
          </span>
        </figure>
      </header>

    </div>
    <RouterLink to="/giftDetails">
    <buttonMain label="See account details" />
    </RouterLink>
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
    subtitle: "GiftSection.subtitle2",
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
