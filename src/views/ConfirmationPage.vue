<template>
  <section class="text-black dark:text-white font-nanum text-2xl md:text-4xl px-16 md:px-60 flex flex-col justify-center items-center">
    <p class=" text-center pb-4">{{ $t("Common.ConfirmationMessage") }}</p>
    <span class="material-symbols-outlined text-6xl align-middle text-pink-main dark:text-dark-blue">
      favorite
    </span>
  </section>
</template>

<script>
import { useI18n } from "vue-i18n";
import { onMounted } from "vue";

export default {
  name: "ConfirmationPage",
  setup() {
    const { t: $t } = useI18n();
    const updatePageTitle = () => {
      const pageTitle =
        `${$t("Common.pageTitle.confirmation")} - G&C` || "Default Page Title";
      document.title = pageTitle;
    };

    onMounted(() => {
      updatePageTitle();
    });
  },
};
</script>
