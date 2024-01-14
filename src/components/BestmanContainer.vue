<template>
  <section class="bg-pink-white py-9">
    <h1 class="text-blue-main font-nanum text-4xl text-center py-6">{{ title }}</h1>
    <div class="flex justify-center items-center gap-6" :class="{'flex-row-reverse': reverseDiv}">
      <article class="w-2/4">
        <h2 class="font-nanum text-blue-main text-xl">{{ subTitle }}</h2>
        <p class="font-klee">{{ historyText }}</p>
      </article>
      <aside>
        <figure>
          <img :src="require(`@/assets/${image}`)" :alt="altImg" />
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
