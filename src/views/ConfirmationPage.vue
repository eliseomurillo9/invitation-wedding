<template>
 <section class="text-white font-nanum text-4xl px-96">
  <p class="py-24 text-center">{{ $t('Common.ConfirmationMessage') }}</p>
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
        `${$t("Common.pageTitle.landing")} - G&C`  || "Default Page Title";
      document.title = pageTitle;
    };

    onMounted(() => {
      updatePageTitle();
    });
  },
};
</script>
