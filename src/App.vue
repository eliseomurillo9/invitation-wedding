<template>
  <div class="h-screen flex flex-col">
    <header>
      <HeaderContainer />
    </header>
    <main class="flex-grow flex justify-center bg-white dark:bg-dark-main">
      <router-view />
    </main>
    <footer class="bottom-0 w-full">
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
