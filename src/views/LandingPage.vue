<template>
    <main class="relative py-5 md:py-8">
        <Counter data-aos="fade-up" class="z-20" />
        <buttonMain label="Presential" />
        <buttonOutlined label="Online" />
    </main>
</template>

<script>
import Counter from "@/components/Counter.vue";
import buttonMain from '../components/shared/buttons/buttonMain.vue'
import buttonOutlined from '../components/shared/buttons/buttonOutlined.vue'
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
export default {
  name: "LandingPage",
  components: {
    Counter,
    buttonMain,
    buttonOutlined
  },
  setup() {
    const { t: $t } = useI18n();

    const updatePageTitle = () => {
      const pageTitle =
        `${$t("base.pageTitles.saveTheDate")} - G&C` || "Default Page Title";
      document.title = pageTitle;
    };
    onMounted(() => {
      updatePageTitle();
    });

    return {};
  },
};
</script>
