<template>
  <div
    class="flex justify-center overflow-x md:overflow-hidden py-5"
    data-aos="zoom-in"
  >
    <div
      v-for="(image, index) in coupleImages"
      :key="index"
      class="w-full max-w-28 h-full max-h-28 focus:scale-115 focus:z-10 transition hover:scale-110 ease-in-out md:max-w-full md:w-[29.5rem] md:max-h-full md:h-56"
      tabindex="0"
    >
      <img
        :src="require(`@/assets/${image}`)"
        :alt="index"
        class="w-full h-full object-cover"
      />
    </div>
  </div>
</template>

<script>
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
