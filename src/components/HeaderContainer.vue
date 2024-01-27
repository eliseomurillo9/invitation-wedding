<template>
  <header
    class="flex justify-between w-full py-2 px-5 text-sm md:text-2xl bg-pink-clear fixed top-0 z-50"
  >
    <router-link to="/"
      ><img
        :src="require('@/assets/logo.svg')"
        :alt="$t('imagesAlt.logo')"
        class="h-11 w-11"
    /></router-link>
    <figure @click="toggleSideMenu">
      <img src="../assets/icons/menu.svg" alt="icono de menu" />
    </figure>
    <SideMenu
      :menuOptions="menuOptions"
      :toggleMenu="menuToggle"
      :appThemes="themes"
      data-aos="fade-down"
      @close-menu="() => toggleSideMenu()"
    />
  </header>
</template>

<script setup>
import { ref, reactive } from "vue";
import SideMenu from "./shared/SideMenu.vue";


let menuToggle = ref(false);

const toggleSideMenu = () => {
  menuToggle.value = !menuToggle.value;
};



const menuOptions = reactive([
  { name: "Home", id: "#" },
  { name: "OurStory", id: "#our-history" },
  { name: "Schedule", id: "#schedule" },
  { name: "Photos", id: "#gallery" },
  { name: "Entourage", id: "#entourage" },
  { name: "Your wishes", id: "#wished" },
  { name: "Gifts", id: "#gifts" },
]);
const themes = reactive(["Light mode", "Dark mode"]);
</script>
