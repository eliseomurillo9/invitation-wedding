<template>
  <section class="bg-white py-7 px-4 md:px-28 dark:bg-dark-alt text-center">
    <h1
      class="text-red-main font-nanum text-4xl text-center pb-4 uppercase 4xl dark:text-pink-clear"
    >
      {{ title }}
    </h1>
    <div class="px-7 font-klee text-center">
      <p class="dark:text-white">{{ $t("WhishesSection.Text1") }}</p>
      <router-link to="/wishes">
        <ButtonMain label="Leave a message" class="mt-4" />
      </router-link>
    </div>
    <div class="columns-2 px-0 md:px-36 pt-2 mt-7">
      <figure
        v-for="(message, i) in notes"
        :key="i"
        class="bg-pink-clear break-inside-avoid mb-4 drop-shadow-md font-klee py-2.5 px-5 rounded text-center"
      >
        <p class="">{{ i }} {{ message.content }}</p>
        <span class="text-red mt-2 font-bold"> -{{ message.name }}</span>
      </figure>
    </div>
    <span class="font-klee dark:text-white"
      >{{ $t("WhishesSection.Text2") }}
      <router-link to="yourWishes">
        <span class="text-blue-800 dark:text-pink-clear uppercase font-bold">{{
          $t("WhishesSection.Text4")
        }}</span></router-link
      ></span
    >
  </section>
</template>

<script setup>
import { defineProps, ref, onMounted, onUnmounted } from "vue";
import ButtonMain from "./shared/buttons/buttonMain.vue";
import { getWishes } from "@/services/wishesService";
import { useI18n } from "vue-i18n";

const { t: $t } = useI18n();

defineProps({
  title: {
    Type: String,
  },
  entouragePeople: {
    Type: Array,
  },
});

const notes = ref([]);
let toggleListener;
const handleWishesUpdate = (data) => {
  if (data) {
    notes.value = Object.values(data).splice(-3);
  } else {
    notes.value = [];
  }
};

onMounted(async () => {
  toggleListener = getWishes(handleWishesUpdate);
});

onUnmounted(() => {
  toggleListener();
});
</script>

<style>
.card-container:nth-child(3n) {
  height: 50px;
}
</style>
