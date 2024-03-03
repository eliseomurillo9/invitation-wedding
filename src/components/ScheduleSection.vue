<template>
  <section class="bg-pink-3 p-7 dark:bg-dark-main">
    <h1 class="font-nanum text-4xl text-blue-main text-center dark:text-pink-main">Schedule</h1>
    <div class="flex flex-col gap-12 pt-12 md:flex-row md:justify-center">
      <InformationCard title="Presencial">
        <table>
          <tr>
            <td class="flex gap-1 pr-5 pb-4 text-left">
              <span class="material-symbols-outlined">
                schedule
              </span>
              <h3>Time</h3>
            </td>
            <td class="pl-5 pb-4">7 pm</td>
          </tr>
          <tr>
            <td class="flex gap-1 pr-5 text-left pb-4">
              <span class="material-symbols-outlined">
                location_on
              </span>
              <h3>Place</h3>
            </td>
            <td class="pl-5 pb-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
              natus, nihil exercitationem soluta aliquam earum illo et cupiditate,
              impedit nisi possimus tempora expedita obcaecati, odio velit
              suscipit quisquam esse veritatis?
            </td>
          </tr>
        </table>
        <div class="flex gap-6 justify-center items-center">
          <ButtonOutlined :label="$t('buttons.map')" buttonhref="https://maps.app.goo.gl/X5az7FwnsPVxs45VA" />
          <ButtonMain :label="$t('buttons.addCalendar')" />
        </div>
      </InformationCard>
      <InformationCard title="Online meeting" class="flex flex-col items-center">
        <p class="pb-9">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
          dignissimos molestias totam? Eaque dolor ipsum eveniet cum provident
          error nobis adipisci, praesentium voluptatum, nostrum aliquam quaerat,
          quibusdam voluptatibus molestias ex.
        </p>
        <ButtonMain :label="$t('buttons.addCalendar')" :isLink="true" class="mt-auto" />
      </InformationCard>
    </div>
  </section>
</template>

<script setup>
import InformationCard from "../components/shared/InformationCard.vue";
import ButtonMain from "./shared/buttons/buttonMain.vue";
import ButtonOutlined from "./shared/buttons/buttonOutlined.vue";
</script>
