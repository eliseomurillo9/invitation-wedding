<template>
  <div
    class="pt-24 gap-7 pb-9 px-9 md:pb-0 bg-pink-3 dark:bg-dark-main self-baseline"
  >
    <h1
      class="text-red pb-auto font-nanum text-4xl text-center pb-9 px-12 dark:text-pink-clear text-red-main"
    >
      {{ $t("WhishesSection.title") }}
    </h1>
    <div v-if="isLoading" class="text-center">
      <div
        v-if="isLoading"
        class="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-red-main"
        role="status"
      >
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...</span
        >
      </div>
    </div>
    <div v-else>
      <div
        v-if="notes.length === 0"
        class="text-white pt-20 text-center m-auto"
      >
        {{ $t("Common.NothingToShow") }}
      </div>
      <div
        v-else
        class="columns-1 sm:columns-2 md:columns-xs xl:columns-4 gap-4"
      >
        <InformationCard
          class="break-inside-avoid mb-4 p-4 bg-pink-100 rounded-lg shadow-md text-center"
          v-for="note in notes"
          :key="note.uid"
          data-aos="zoom-in"
        >
          <p>{{ note.content }}</p>
          <span class="text-red-main font-bold text-xs">- {{ note.name }}</span>
        </InformationCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { getWishes } from "@/services/wishesService";
import InformationCard from "@/components/shared/InformationCard.vue";
import { useI18n } from "vue-i18n";

const { t: $t } = useI18n();

const notes = ref([]);
const isLoading = ref(true);
let toggleListener;
const handleWishesUpdate = (data) => {
  if (data) {
    isLoading.value = false;
    notes.value = Object.values(data);
  } else {
    isLoading.value = false;
    notes.value = [];
  }
};

const updatePageTitle = () => {
  const pageTitle = `${$t("Common.pageTitle.wishes")} - G&C`;
  document.title = pageTitle;
};

onMounted(async () => {
  updatePageTitle();
  toggleListener = getWishes(handleWishesUpdate);
});

onUnmounted(() => {
  toggleListener();
});
</script>
