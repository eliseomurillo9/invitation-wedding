<template>
  <section class="bg-pink-3 p-7 dark:bg-dark-main">
    <h1 class="font-nanum text-4xl text-blue-main text-center dark:text-pink-clear">{{ title }}</h1>
    <div class="flex flex-col gap-12 pt-12 md:flex-row md:justify-center">
      <InformationCard :title="$t('ScheduleSection.subtitlePresential')">
        <table>
          <tr>
            <td class="flex gap-1 pr-5 pb-4 text-left">
              <span class="material-symbols-outlined">
                schedule
              </span>
                
              <h3>{{ $t('ScheduleSection.Time') }}</h3>
            </td>
            <td class="pl-5 pb-4">{{ $t('ScheduleSection.Hours') }}</td>
          </tr>
          <tr>
            <td class="flex gap-1 pr-5 text-left pb-4">
              <span class="material-symbols-outlined">
                location_on
              </span>
              <h3>{{ $t('ScheduleSection.Direction') }}</h3>
            </td>
            <td class="pl-5 pb-4 ">
              {{ $t('ScheduleSection.Adresse') }}
            </td>
          </tr>
        </table>
        <div class="flex gap-6 justify-center items-center">
          <ButtonOutlined :label="$t('Buttons.MapButton')" buttonhref="https://maps.app.goo.gl/X5az7FwnsPVxs45VA" />
          <ButtonMain :label="$t('Buttons.CalendarButton')" />
        </div>
      </InformationCard>
      <InformationCard :title="$t('ScheduleSection.subtitleOnline')" class="flex flex-col items-center">
        <p class="pb-9">
         {{ $t('ScheduleSection.Text') }}
        </p>
        <ButtonMain :label="$t('Buttons.CalendarButton')" :isLink="true" class="mt-auto" />
      </InformationCard>
    </div>
  </section>
</template>

<script setup>
import InformationCard from "../components/shared/InformationCard.vue";
import ButtonMain from "./shared/buttons/buttonMain.vue";
import ButtonOutlined from "./shared/buttons/buttonOutlined.vue";
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
  }
})
</script>
