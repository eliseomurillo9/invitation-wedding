<template>
  <section class="bg-pink-white py-10 px-7">
    <h1 class="text-blue-main font-nanum text-4xl text-center pb-6">{{ title }}</h1>
    <div class="flex justify-center items-center gap-6 md:flex-row-reverse" :class="{'flex-row-reverse': reverseDiv}">
      <article class="w-2/4">
        <h2 class="font-nanum text-blue-main text-xl md:text-2xl">{{ subTitle }}</h2>
        <p class="font-klee">{{ historyText }}</p>
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

defineProps({
  title: {
    Type: String,
  },
  subTitle: {
    Type: String,
  },
  historyText: {
    Type: String,
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
