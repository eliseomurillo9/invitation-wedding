<template>
  <div
    class="text-left px-5 h-fit w-64 md:flex md:flex-row md:w-full md:justify-center md:items-center md:gap-2"
  >
    <label for="" class="font-light text-xs md:text-2xl">
      {{ $t("base.newsLetter") }}
    </label>
    <form class="flex bg-pink-clear w-fit rounded-lg">
      <input
        type="email"
        name="email"
        id="email"
        class="bg-pink-clear rounded-lg font-montserrat text-xs px-2 h-7 focus:outline-none w-full md:text-2xl md:h-11"
        placeholder="Email"
        v-model="userEmail"
      />
      <button
        type="submit"
        class="bg-pink-main rounded h-7 w-9 md:h-11 md:w-12"
        @click="registerMail"
      >
        <svg
          aria-hidden="true"
          class="w-6 h-6 m-auto text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          v-if="isLoading"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="h-6 m-auto"
          v-else
        >
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
import { ref } from "vue";
import { registerEmail } from "@/services/newsletterService";
import router from "@/router";
export default {
  name: "NewsletterForm",
  props: {},

  setup() {
    let userEmail = ref("");
    let isLoading = ref(false);

    const registerMail = async () => {
      event.preventDefault();
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (userEmail.value.match(emailRegex)) {
        isLoading.value = true;
        const postMail = await registerEmail(userEmail.value);
        if (postMail.status === 201) {
          isLoading.value = false;
          router.push({ path: "/confirmation" });
        } else {
          isLoading.value = false;
        }
      } else {
        console.log("IT NOT A EMAIL");
      }
    };

    return {
      userEmail,
      registerMail,
      isLoading,
    };
  },
};
</script>

<style>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow:  #F6CCC7 inset;
  transition: background-color 5000s ease-in-out 0s;
}
</style>
