<template>
  <section
    v-if="toggleMenu"
    class="bg-white w-screen fixed top-0 left-0 z-50 shadow-md fade-out"

  >
    <header class="bg-pink-clear flex justify-center py-2">
      <figure>
        <img src="../../assets/logo-dark.svg" alt="Logo con iniciales G y E" />
      </figure>
    </header>
    <nav class="font-klee flex flex-col gap-5 p-7">
      <ul class="flex flex-col gap-3 w-2/4">
        <li class="text-blue-main font-bold w-2/4 pl-2">Menu</li>
        <li
          v-for="(menu, i) in menuOptions"
          :key="i"
        >
          <a :href="menu.id" @click="emit('closeMenu')" class="pl-2" :class="[{'bg-pink-white text-red rounded-xl pr-24 py-1': router.hash === menu.id || (menu.id === '#' && router.hash === '')}]">{{ menu.name }}</a>
        </li>
      </ul>
      <ul>
        <li class="text-blue-main font-bold">Language</li>
        <template class="flex items-center gap-3 mt-2" >
          <li  v-for="lang in i18n.availableLocales" :key="`locale-${lang}`" @click="changeLang(lang)" :class="[{'bg-pink-white text-red rounded-xl p-1.5 pl-1.5 transition ease-in-out duration-150': i18n.locale.value === lang}]">
           {{ lang }} 
          </li>
        </template>
      </ul>
      <ul class="flex flex-col gap-3">
        <li class="text-blue-main font-bold">Theme</li>
        <li v-for="(theme, i) in appThemes" :key="i">
          <ul>{{ theme }}</ul>
        </li>
      </ul>
    </nav>
    <figure class="flex justify-end p-3" @click="emit('closeMenu')">
      <img src="../../assets/close.svg" alt="Logo con iniciales G y E" />
    </figure>
  </section>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
const i18n = useI18n();
const router = useRoute();
const emit= defineEmits(['closeMenu']);

const changeLang = (lang) => {
  i18n.locale.value = lang;
};
defineProps({
  menuOptions: {
    Type: Array,
    Required: true,
  },
  langs: {
    Type: Array,
    Required: true,
  },
  toggleMenu: {
    Type: Boolean,
    Default: false,
  },
  appThemes: {
    Type: Array,
  },
});
</script>
