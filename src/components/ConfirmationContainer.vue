<template>
  <div class="flex flex-col justify-center items-center gap-4">
    <h3 class="font-nanum text-2xl text-red">{{ title }}</h3>
    <div class="flex gap-3">
      <buttonMain :label="$t('buttons.presential')" />
      <ButtonOutlined :label="$t('buttons.online')" />
    </div>
  </div>
</template>

<script setup>
import buttonMain from "./shared/buttons/buttonMain.vue";
import ButtonOutlined from "./shared/buttons/buttonOutlined.vue";
import { defineProps } from "vue";

defineProps({
  title: {
    Type: String,
  },
});
</script>
