<template class="bg-white min-h-screen">
    <header>
      <HeaderContainer />
    </header>
    <router-view />
    <FooterSection title="We are looking foward to see you" icon="heart.svg" />
</template>
<script>
import HeaderContainer from "./components/HeaderContainer.vue";
import { watch } from "vue";
import { useI18n } from "vue-i18n";
import FooterSection from "@/components/shared/FooterSection.vue";


export default {
  name: "App",
  components: {
    HeaderContainer,
    FooterSection
  },
  setup() {
     const { locale } = useI18n();

    // Watch for changes in the language and update the HTML lang attribute
    watch(() => locale.value, (newLocale) => {
      document.documentElement.lang = newLocale.toLocaleLowerCase();
    });
  },
};
</script>
