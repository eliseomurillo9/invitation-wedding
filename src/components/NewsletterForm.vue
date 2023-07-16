<template>
  <div class="text-left px-5 h-fit w-64 md:flex md:flex-row md:w-full md:justify-center md:items-center md:gap-2">
    <label for="" class="font-light text-xs md:text-2xl"> Notify me when it’s ready </label>
    <form class="flex bg-pink-clear w-fit rounded-lg">
      <input
        type="email"
        name="email"
        id="email"
        class="bg-pink-clear rounded-lg font-montserrat text-xs px-2 h-7 focus:outline-none w-full  md:text-2xl md:h-11"
        placeholder="Email"

      /> 
      <button type="submit" class="bg-pink-main rounded h-7 w-9 md:h-11 md:w-12">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-6 m-auto">
          <path
            stroke="#0C315F"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="m9 5 6 7-6 7"
          />
        </svg>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "NewsletterForm",
  props: {},

  setup() {},
};
</script>
