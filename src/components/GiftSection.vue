<template>
  <section
    class="flex flex-col items-center gap-5 py-7 dark:bg-dark-alt font-nanum bg-pink-3 px-10"
  >
    <h1
      class="text-red text-center text-2xl md:text-4xl text-red-main dark:text-pink-clear"
    >
      {{ title }}
    </h1>
    <div
      class="flex flex-col gap-4 justify-center items-center font-klee dark:text-white"
    >
      <p>{{ $t("GiftSection.paragraph1") }}</p>
      <p>{{ $t("GiftSection.paragraph2") }}</p>
    </div>
    <div class="flex gap-8 font-klee">
      <div
        class="flex gap-1 items-center justify-center text-blue-main dark:text-dark-blue font-klee pt-6"
        v-for="(contain, i) in pageContain"
        :key="i"
      >
        <h2 class="align-middle text-center">
          {{ $t(contain.subtitle) }}
        </h2>
        <figure>
          <span class="material-symbols-outlined align-middle">
            {{ contain.icon }}
          </span>
        </figure>
      </div>
    </div>
    <RouterLink to="/giftDetails" class="pt-3">
      <buttonMain :label="$t('Buttons.AccountButton')" />
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
