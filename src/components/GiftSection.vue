<template>
  <section class="flex flex-col items-center gap-5 bg-pink-white py-7">
    <h1 class="uppercase text-red text-center font-nanum text-4xl">
      {{ title }}
    </h1>
    <div v-for="(contain, i) in pageContain" :key="i" class="text-container">
      <header class="flex gap-2 items-center">
        <h2 class="text-blue-main">{{ $t(contain.subtitle) }}</h2>
        <figure>
          <img :src="require(`@/assets/icons/${contain.icon}`)" alt="" />
        </figure>
      </header>
      <p class="font-klee">{{ $t(contain.text) }}</p>
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
    subtitle: "giftSection.subtitleEnvelope",
    icon: "envelope.svg",
    text: "gifSection.textEnvelope",
  },
  {
    subtitle: "giftSection.subtitleBank",
    icon: "share.svg",
    text: "giftSection.textBank",
  },
]);
</script>

<style>
.text-container {
  min-width: 18.18rem;
}
</style>
