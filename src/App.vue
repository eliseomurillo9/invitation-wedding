<template class="bg-white min-h-screen">
    <header>
      <HeaderContainer />
    </header>
    <router-view />
</template>
<script>
import HeaderContainer from "./components/HeaderContainer.vue";
import { onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";
import AOS from "aos";

export default {
  name: "App",
  components: {
    HeaderContainer,
  },
  setup() {
     const { locale } = useI18n();

    // Watch for changes in the language and update the HTML lang attribute
    watch(() => locale.value, (newLocale) => {
      document.documentElement.lang = newLocale.toLocaleLowerCase();
    });
    onMounted(() => {
      AOS.init();
    });
  },
};
</script>
