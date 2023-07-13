<template>
  <div class="text-left px-5 h-fit">
    <label for="" class="font-light text-xs"> Notify me when it’s ready </label>
    <form class="flex bg-pink-clear w-fit rounded-lg">
      <input
        type="email"
        name="email"
        id="email"
        class="bg-pink-clear rounded-lg font-montserrat px-2 h-7 focus:outline-none"
        placeholder="Email"

      /> 
      <button type="submit" class="bg-pink-main rounded h-7 w-9">
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
