<template>
  <div class="flex overflow-hidden py-5">
    <img
      v-for="(image, index) in coupleImages"
      :key="index"
      :src="require(`@/assets/${image}`)"
      :alt="index"
      class="w-28 focus:scale-115 transition hover:scale-110 ease-in-out -translate-x-12"
      tabindex="0"
    />
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
