<template>
  <div class="flex justify-center items-center w-full">
    <div
      v-for="(image, index) in coupleImages"
      :key="index"
    >
      <img :src="require(`@/assets/${image}`)" :alt="image" class="w-28 focus:scale-115 transition hover:scale-110 ease-in-out" tabindex="0" />
    </div>
  </div>
</template>

<script>
// import image1 from '@/assets/foto-1-web.jpg'
export default {
  name: "ImagesSection",
  props: {
    coupleImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  setup() {},
};
</script>
