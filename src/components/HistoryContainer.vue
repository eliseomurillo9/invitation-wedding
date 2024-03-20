<template>
  <section class="bg-pink-white py-10 px-7 dark:bg-dark-alt">
    <h1 class="text-red-main font-nanum text-4xl text-center pb-6 dark:text-pink-clear">{{ title }}</h1>
    <div class="flex justify-center items-center gap-6 md:flex-row-reverse" :class="{ 'flex-row-reverse': reverseDiv }">
      <article class="w-2/4 ">
        <h2 class="font-klee text-blue-main text-xl md:text-2xl dark:text-dark-blue align-middle">{{ subTitle }} <span
            class="material-symbols-outlined text-xl align-middle">
            favorite
          </span></h2>
        <p class="font-klee dark:text-white pb-5" v-for="(paragraph, i) in historyText" :key="i">{{ $t(`${paragraph}`) }}</p>
      </article>
      <aside>
        <figure>
          <img :src="require(`@/assets/${image}`)" :alt="altImg" class="md:h-52" />
        </figure>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from "vue";
import { useI18n } from "vue-i18n";
const { t: $t } = useI18n();

defineProps({
  title: {
    Type: String,
  },
  subTitle: {
    Type: String,
  },
  historyText: {
    Type: Array,
  },
  image: {
    Type: String,
  },
  altImg: {
    Type: String,
  },
  reverseDiv: {
    Type: Boolean
  }
});
</script>
