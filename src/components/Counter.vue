<template>
  <div
    class="bg-pink-clear rounded-full py-2.5 px-5 flex text-red text-center justify-center gap-2 md:gap-3 md:px-11 md:py-4 w-fit mx-auto dark:text-red-alt"
  >
    <div class="flex flex-col">
      <span class="md:text-2xl font-nanum text-red-main"
        >{{ countdownInfo.days }} {{ $t("WelcomeSection.counter.days") }} : {{ countdownInfo.hours }}  {{ $t("WelcomeSection.counter.hours") }} : {{ countdownInfo.minutes }}  {{ $t("WelcomeSection.counter.minutes") }} : {{ countdownInfo.seconds }} {{ $t("WelcomeSection.counter.seconds") }}
        </span>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
export default {
  name: "CounterComponent",
  props: {},

  setup() {
    let countdownInfo = reactive({
      days: "",
      hours: "",
      minutes: "",
      seconds: "",
    });

    function countDownFunction() {
      const eventDay = new Date("july 20, 2024 00:00:00").getTime();
      const actualDate = new Date().getTime();
      const remainingTime = eventDay - actualDate;
      countdownInfo.days = Math.floor(
        remainingTime / (1000 * 60 * 60 * 24)
      ).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
      });
      countdownInfo.hours = Math.floor(
        (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
      });
      countdownInfo.minutes = Math.floor(
        (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
      ).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
      });
      countdownInfo.seconds = Math.floor(
        (remainingTime % (1000 * 60)) / 1000
      ).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
      });
      setTimeout(countDownFunction, 1000);
    }

    onMounted(() => {
      countDownFunction();
    });
    return {
      countdownInfo,
    };
  },
};
</script>
