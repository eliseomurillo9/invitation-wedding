<template>
  <section
    v-if="toggleMenu"
    class="bg-white w-screen fixed top-0 left-0 z-50 shadow-md fade-out dark:bg-dark-main"
  >
    <header class="bg-pink-clear dark:bg-dark-alt flex justify-center py-2">
      <figure>
        <img :src="isDark ? 'https://storage.googleapis.com/wedding-inv-bucket/logo.svg' :'https://storage.googleapis.com/wedding-inv-bucket/logo-wedding.svg'" alt="Logo con iniciales G y E" class="w-11" />
      </figure>
    </header>
    <nav class="font-klee flex flex-col gap-5 p-7 dark:text-pink-clear">
      <ul class="flex flex-col gap-3 w-2/4">
        <li class="text-blue-main dark:text-dark-blue font-bold w-2/4 pl-2">
          Menu
        </li>
        <li v-for="(menu, i) in menuOptions" :key="i">
          <a
            :href="menu.id"
            @click="emit('closeMenu')"
            class="pl-2"
            :class="[
              {
                'bg-pink-main dark:text-red-alt text-red rounded-xl pr-24 py-1':
                  `/${router.hash}` === menu.id ||
                  (menu.id === '#' && router.hash === ''),
              },
            ]"
            >{{ $t(menu.name) }}</a
          >
        </li>
      </ul>
      <ul>
        <li class="text-blue-main font-bold">Language</li>
        <template class="flex items-center gap-3 mt-2">
          <li
            v-for="lang in i18n.availableLocales"
            :key="`locale-${lang}`"
            @click="changeLang(lang)"
            :class="[
              {
                'bg-pink-clear text-red dark:text-red-alt rounded-xl p-1.5 pl-1.5 transition ease-in-out duration-150':
                  i18n.locale.value === lang,
              },
            ]"
          >
            {{ lang }}
          </li>
        </template>
      </ul>
      <ul class="flex flex-col gap-3">
        <li class="text-blue-main font-bold">Theme</li>
        <li>
          <ul
            v-for="(theme, i) in appThemes"
            :key="i"
            class="flex items-center mb-3"
            @click="toggleDark()"
          >
            {{
              theme.mode
            }}
            <span
              class="material-symbols-outlined ml-3"
              :class="[
                {
                  'bg-pink-clear dark:text-red-alt text-red rounded-xl p-1.5 pl-1.5 ':
                    themeMode === theme.mode,
                },
              ]"
            >
              {{ theme.icon }}
            </span>
          </ul>
        </li>
      </ul>
      <span
        class="material-symbols-outlined self-end text-3xl"
        @click="emit('closeMenu')"
      >
        cancel
      </span>
    </nav>
  </section>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import { useToggle } from "@vueuse/core";
import { UseDarkMode } from "@/composable/useDarkMode";
import { UseLocales } from "@/composable/UseLocales";

const { isDark, themeMode } = UseDarkMode();

const toggleDark = useToggle(isDark);
const i18n = useI18n();
const router = useRoute();
const emit = defineEmits(["closeMenu"]);
const { setLanguage } = UseLocales();
const changeLang = (lang) => {
  i18n.locale.value = lang;
  setLanguage(lang);
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
