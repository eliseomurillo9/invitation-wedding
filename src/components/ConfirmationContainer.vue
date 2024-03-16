<template>
  <div class="flex flex-col justify-center items-center gap-4">
    <h3 class="font-nanum text-2xl dark:text-dark-blue text-red-main  ">{{ title }}</h3>
    <div class="flex gap-3">
      <router-link  to="/confirmation/presential">
        <buttonMain :label="$t('Buttons.PresentialButton')" type="button"/>
      </router-link>
      <router-link  to="/confirmation/online">
        <ButtonOutlined :label="$t('Buttons.OnlineButton')" type="button"/>
      </router-link>
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
