<template>
  <section class="bg-white py-7">
    <h1 class="text-red font-nanum text-4xl text-center pb-4 uppercase 4xl">
      {{ title }}
    </h1>
    <!-- <div class="px-7 font-klee">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
      <p class="pt-6">You can see all the good wishes here: click here</p>
    </div>
    <div class="columns-2xs px-7 pt-2 mt-7">
      <figure
      v-for="(message, i) in messages" :key="i"
        class="bg-pink-clear m-auto mb-4 flex flex-col justify-center items-center drop-shadow-md font-klee h-40 px-3.5 py-2.5 rounded"
        :class="{'h-85': i !== 0 && i % 2 === 0 }"
      >
        <p class="">
         {{ i }} {{ message.message }}
        </p>
        <span class="text-red mt-2 font-bold"> -{{ message.author }}</span>
      </figure>
    </div> -->
    <div class="grid grid-rows-2 grid-cols-2 gap-4">
      <figure
      v-for="(message, i) in messages" :key="i"
        class="bg-pink-clear m-auto mb-4 flex flex-col justify-center items-center drop-shadow-md font-klee h-40 px-3.5 py-2.5 rounded "
        :class="{'col-start-1 col-end-3 row-start-1 row-end-3': i % 2 === 0 }"
      >
        <p class="">
         {{ i }} {{ message.message }}
        </p>
        <span class="text-red mt-2 font-bold"> -{{ message.author }}</span>
      </figure>
    </div>
    <div class="flex flex-col justify-center items-center mt-8 gap-5">
      <span>{{ $t("wishesSection.thanks") }}</span>
      <buttonOutlined label="Leave a message" />
    </div>
  </section>
</template>

<script setup>
import { defineProps, ref } from "vue";
import buttonOutlined from "./shared/buttons/buttonOutlined.vue";

defineProps({
  title: {
    Type: String,
  },
  entouragePeople: {
    Type: Array,
  },
});
const messages = ref([
  {
    author: "Eliseo",
    message:
      "Lorem ipsum dolor sit amet,amet,conse Lorem ipsum...",
  },
  {
    author: "Georgi",
    message:
      "Lorem ipsum dolor sit amet,amet",
  },
  {
    author: "Ricardo",
    message:
      "Lorem ipsum dolor sit amet,amet,conse Lorem ipsum dolor sit amet,amet",
  },
]);



</script>

<style>
.card-container:nth-child(3n) {
height: 50px;
}
</style>