<template>
  <div class="flex flex-col min-h-screen">
    <header>
      <HeaderContainer />
    </header>
    <main
      class="flex-grow flex justify-center items-center bg-white dark:bg-dark-main scroll-smooth"
    >
      <router-view />
    </main>
    <footer>
      <FooterSection :title="$t('Common.Footer')" icon="heart.svg" />
    </footer>
  </div>
</template>

<script setup>
import HeaderContainer from "./components/HeaderContainer.vue";
import FooterSection from "@/components/shared/FooterSection.vue";
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { UseLocales } from "./composable/UseLocales";
import { useNavigatorLanguage } from "@vueuse/core";
const { getLanguage } = UseLocales();
const i18n = useI18n();
const { language } = useNavigatorLanguage();
onMounted(() => {
  const navigatorLanguage = language.value.split("-")[1];
  const storedLang = getLanguage();

  if (storedLang) {
    if (i18n.availableLocales.includes(storedLang)) {
      i18n.locale.value = storedLang;
    } else {
      console.warn(
        `Invalid locale found in localStorage: ${storedLang}. Using default locale.`
      );
      i18n.locale.value = navigatorLanguage || "ES"; // Use the first fallback locale
    }
  } else {
    i18n.locale.value = navigatorLanguage || "ES";
  }
});
</script>
