<template>
  <section class="text-white font-nanum text-4xl px-60 flex flex-col justify-center items-center">
    <p class=" text-center">{{ $t("Common.ConfirmationMessage") }}</p>
    <span class="material-symbols-outlined text-6xl align-middle">
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
        `${$t("Common.pageTitle.landing")} - G&C` || "Default Page Title";
      document.title = pageTitle;
    };

    onMounted(() => {
      updatePageTitle();
    });
  },
};
</script>
