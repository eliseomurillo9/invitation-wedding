<template>
  <section class="bg-pink-white py-7 dark:bg-dark-main">
    <h1 class="text-red font-nanum text-4xl text-center pb-4 4xl text-red-main dark:text-white">
      {{ title }}
    </h1>
    <div class="flex justify-center gap-10 md:flex-col px-11">
      <div
        class="flex flex-col w-fit mx-auto"
        v-for="(section, index) in entouragePeople"
        :key="index"
      >
      <div class="h-16 flex justify-center md:justify-start md:items-center">
        <h2
          class="text-blue-main font-nanum text-xl text-center md:text-start md:text-2xl dark:text-dark-blue my-auto"
        >
          {{ $t(`${section.title}`) }}
        </h2>
      </div>
        <div
          class="flex flex-col items-center md:flex-row md:justify-center gap-12 md:gap-24 "
        >
          <figure v-for="(person, i) in section.people" :key="i" class="mb-2.5 w-24 h-fit">
            <img :src="person.image" :alt="person.alt"/>
            <figcaption class="text-center font-klee mt-1 dark:text-white">
              {{ person.name }}
            </figcaption>
          </figure>
        </div>
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