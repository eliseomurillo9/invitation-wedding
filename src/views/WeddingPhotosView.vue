<!-- Parent Component -->
<template>
    <section class="flex flex-col justify-center items-center  gap-5 px-8 pb-7 sm:mx-24 md:mx-40 pt-24">
      <figure>
        <img src="../assets/cat.jpg" alt="" class="w-96 h-xl rounded-xl">
      </figure>
      <h2 class="text-red-main font-bold text-4xl font-nanum text-center dark:text-white">{{ $t('PhotosPage.notYet') }}...</h2>
    </section>
</template>

<script setup>
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";



const { t: $t } = useI18n();
const updatePageTitle = () => {
  const pageTitle =
    `${$t("Common.pageTitle.confirmation")} - G&C` || "Default Page Title";
  document.title = pageTitle;
};

onMounted(() => {
  updatePageTitle();
});
</script>
