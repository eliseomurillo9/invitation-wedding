<template>
  <div class="text-center flex flex-col"
  >
<h3 class="text-blue-main font-nanum text-2xl md:text-5xl">{{ $t("base.wait") }}</h3>
<h4 class="text-blue-main font-klee text-sm md:text-2xl">{{ $t("base.workInProgress") }}</h4>
  </div>
</template>

<script>
export default {
  name: "WorkInProgress",
  props: {},

  setup() {

  },
};
</script>
