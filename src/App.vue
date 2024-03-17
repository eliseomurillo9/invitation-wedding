<template>
  <div class="flex flex-col min-h-screen">
    <header>
      <HeaderContainer />
    </header>
    <main class="flex-grow flex justify-center items-center bg-white dark:bg-dark-main">
      <router-view />
    </main>
    <footer>
      <FooterSection :title="$t('Common.Footer')" icon="heart.svg" />
    </footer>
  </div>
</template>

<script>
import HeaderContainer from "./components/HeaderContainer.vue";
import FooterSection from "@/components/shared/FooterSection.vue";

export default {
  name: "App",
  components: {
    HeaderContainer,
    FooterSection,
  },
};
</script>

<style scoped>
</style>
