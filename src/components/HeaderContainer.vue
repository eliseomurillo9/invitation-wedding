<template>
  <div
    class="flex justify-between items-center gap-3 w-full py-2 px-5 text-sm md:text-2xl bg-pink-clear fixed top-0 z-50  font-nanum dark:bg-dark-alt">
    <router-link to="/"><img src="https://storage.cloud.google.com/wedding-inv-bucket/logo-wedding.svg"
        :alt="$t('imagesAlt.logo')" class="h-11 w-auto md:w-11" /></router-link>
    <nav class="hidden md:block">
      <ul class="flex justify-center items-center gap-6 md:gap-8 text-xl">
        <li v-for="option in menuOptions" :key="option.id" :class="[
          {
            'bg-pink-white text-red rounded-xl p-1':
              router.hash === option.id ||
              (option.id === '#' && router.hash === ''),
          },
        ]">
          <a :href="option.id">{{ option.name }}</a>
        </li>
      </ul>
    </nav>
    <template class="md:flex items-center gap-1 hidden ">
      <figure>
        <img src="../assets/icons/worldIcon.svg" alt="" />
      </figure>
      <select v-model="$i18n.locale" class="bg-inherit text-xl ">
        <option class="bg-inherit" v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
          {{ locale }}
        </option>
      </select>
    </template>
      <span class="material-symbols-outlined md:hidden text-4xl text-red-alt dark:text-white" @click="toggleSideMenu">
        menu
      </span>
    <SideMenu :menuOptions="menuOptions" :toggleMenu="menuToggle" :appThemes="themes" class="md:hidden"
      data-aos="fade-down" @close-menu="() => toggleSideMenu()" />
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import SideMenu from "./shared/SideMenu.vue";
import { useRoute } from "vue-router";

const router = useRoute();

let menuToggle = ref(false);

const toggleSideMenu = () => {
  menuToggle.value = !menuToggle.value;
};

const menuOptions = reactive([
  { name: "Home", id: "#", isActive: false },
  { name: "OurStory", id: "#our-history", isActive: false },
  { name: "Schedule", id: "#schedule", isActive: false },
  { name: "Photos", id: "#gallery", isActive: false },
  { name: "Entourage", id: "#entourage", isActive: false },
  { name: "Your wishes", id: "#wished", isActive: false },
  { name: "Gifts", id: "#gifts", isActive: false },
]);
const themes = reactive(["Light mode", "Dark mode"]);
</script>
