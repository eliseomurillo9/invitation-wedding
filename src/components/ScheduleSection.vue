<template>
  <section class="bg-pink-3 p-10 flex flex-col gap-12">
    <h1 class="font-nanum text-4xl text-blue-main text-center">Schedule</h1>
    <InformationCard title="Presencial">
      <table>
        <tr>
          <td class="flex gap-1 pr-5 pb-4 text-left">
            <img src="../assets/icons/clock.svg" alt="" />
            <h3>Time</h3>
          </td>
          <td class="pl-5 pb-4">7 pm</td>
        </tr>
        <tr>
          <td class="flex gap-1 pr-5 text-left pb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="25"
              viewBox="0 0 18 25"
              fill="none"
            >
              <path
                d="M8.93839 1.89404C6.89545 1.89632 4.93683 2.72847 3.49225 4.2079C2.04768 5.68734 1.23514 7.69322 1.23291 9.78546C1.23291 16.9114 7.85481 22.4189 8.13574 22.6501C8.36373 22.8364 8.64674 22.9378 8.93839 22.9378C9.23004 22.9378 9.51305 22.8364 9.74104 22.6501C10.022 22.4189 16.6439 16.9114 16.6439 9.78546C16.6416 7.69322 15.8291 5.68734 14.3845 4.2079C12.94 2.72847 10.9813 1.89632 8.93839 1.89404ZM8.93839 19.8578C7.31553 18.2703 3.8014 14.3091 3.8014 9.78546C3.8014 8.39017 4.34262 7.05203 5.30599 6.06541C6.26936 5.07879 7.57598 4.52451 8.93839 4.52451C10.3008 4.52451 11.6074 5.07879 12.5708 6.06541C13.5342 7.05203 14.0754 8.39017 14.0754 9.78546C14.0754 14.3091 10.5612 18.2703 8.93839 19.8578Z"
                fill="#410001"
              />
              <path
                d="M8.93812 7.15479C8.43012 7.15479 7.93353 7.30906 7.51114 7.5981C7.08876 7.88714 6.75955 8.29796 6.56514 8.77862C6.37074 9.25927 6.31988 9.78817 6.41898 10.2984C6.51809 10.8087 6.76271 11.2774 7.12192 11.6453C7.48113 12.0132 7.9388 12.2637 8.43704 12.3652C8.93527 12.4667 9.45171 12.4146 9.92104 12.2155C10.3904 12.0164 10.7915 11.6792 11.0737 11.2467C11.356 10.8141 11.5066 10.3055 11.5066 9.78526C11.5057 9.08789 11.2348 8.41935 10.7533 7.92624C10.2718 7.43313 9.61906 7.1557 8.93812 7.15479Z"
                fill="#410001"
              />
              <path
                d="M8.93812 7.15479C8.43012 7.15479 7.93353 7.30906 7.51114 7.5981C7.08876 7.88714 6.75955 8.29796 6.56514 8.77862C6.37074 9.25927 6.31988 9.78817 6.41898 10.2984C6.51809 10.8087 6.76271 11.2774 7.12192 11.6453C7.48113 12.0132 7.9388 12.2637 8.43704 12.3652C8.93527 12.4667 9.45171 12.4146 9.92104 12.2155C10.3904 12.0164 10.7915 11.6792 11.0737 11.2467C11.356 10.8141 11.5066 10.3055 11.5066 9.78526C11.5057 9.08789 11.2348 8.41935 10.7533 7.92624C10.2718 7.43313 9.61906 7.1557 8.93812 7.15479Z"
                stroke="black"
              />
            </svg>
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
        <ButtonMain :label="$t('buttons.map')" :isLink="true" />
        <ButtonMain :label="$t('buttons.addCalendar')" :isLink="true" />
      </div>
    </InformationCard>
    <InformationCard title="Online meeting" >
      <p class="pb-9">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
        dignissimos molestias totam? Eaque dolor ipsum eveniet cum provident
        error nobis adipisci, praesentium voluptatum, nostrum aliquam quaerat,
        quibusdam voluptatibus molestias ex.
      </p>
      <ButtonMain :label="$t('buttons.addCalendar')" :isLink="true" />
    </InformationCard>
  </section>
</template>

<script setup>
import InformationCard from "../components/shared/InformationCard.vue";
import ButtonMain from "./shared/buttons/buttonMain.vue";
</script>
