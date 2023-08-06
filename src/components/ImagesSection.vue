<template >
  <div
    class="flex justify-center overflow-x md:overflow-hidden py-5"
    data-aos="zoom-in"
  >
    <div
      v-for="(image, index) in coupleImages"
      :key="index"
      class="w-max-28 w-full h-full h-max-28 focus:scale-115 focus:z-10 transition hover:scale-110 ease-in-out md:w-[29.5rem] md:h-56"
      tabindex="0"
    >
      <img
        :src="require(`@/assets/${image}`)"
        :alt="$t('imagesAlt.photoAlt')"
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
