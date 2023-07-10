<template>
  <div
    class="bg-pink-main rounded-full py-3 px-8 flex text-white text-center text-2xl text-shadow-xl justify-center gap-3 w-fit mx-auto"
  >
    <div class="flex flex-col">
      <span>{{ countdownInfo.days }}</span>
      <span class="text-sm -mt-2">Days</span>
    </div>
    <span>:</span>
    <div class="flex flex-col">
      <span>{{ countdownInfo.hours }}</span>
      <span class="text-sm -mt-2">hr</span>
    </div>
    <span>:</span>
    <div class="flex flex-col">
      <span>{{ countdownInfo.minutes }}</span>
      <span class="text-sm -mt-2">min</span>
    </div>
    <span>:</span>
    <div class="flex flex-col">
      <span>{{ countdownInfo.seconds }}</span>
      <span class="text-sm -mt-2">sec</span>
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
