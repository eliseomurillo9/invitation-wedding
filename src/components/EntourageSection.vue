<template>
  <section class="bg-pink-white py-7">
    <h1 class="text-red font-nanum text-4xl text-center pb-4 uppercase 4xl">
      {{ title }}
    </h1>
    <div class="flex justify-center gap-20">
      <div class="flex flex-col" v-for="(section, index) in entouragePeople" :key="index">
        <h2 class="text-blue-main font-nanum text-xl text-center pb-2">{{ section.title }}</h2>
        <figure v-for="(person, i) in section.people" :key="i" class="mb-2.5">
          <img :src="person.image" :alt="person.alt" />
          <figcaption class="text-center font-klee mt-1">{{ person.name }}</figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  title: {
    Type: String,
  },
  entouragePeople: {
    Type: Array,
  },
});
</script>
