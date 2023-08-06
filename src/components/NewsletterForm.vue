<template>
  <div
    class="text-center px-5 h-fit w-3/4 md:flex md:flex-row md:w-full md:justify-center md:items-center md:gap-2"
  >
    <label for="email" class="font-light text-xs md:text-2xl font-klee">
      {{ $t("base.newsLetter") }}
    </label>
    <form class="flex justify-center items-center bg-pink-clear w-fit rounded-lg">
      <input
        type="email"
        name="email"
        id="email"
        class="bg-pink-clear rounded-l-lg font-klee text-xs px-2 h-7 focus:outline-none w-full max-w-xs md:text-2xl md:h-11"
        :placeholder="$t('placeholders.emailField')"
        v-model="userEmail"
      />
      <button
        type="submit"
        class="bg-pink-main rounded-r-lg px-2 py-2 text-white text-xs md:text-2xl"
        :aria-label="$t('alt.sendButton')"
        @click="registerMail"
      >
        {{ $t('base.sendEmailBottom') }}
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { registerEmail } from "@/services/newsletterService";
import router from "@/router";
export default {
  emits: ["inFocus", "submit"],
  name: "NewsletterForm",
  props: {},

  setup(props, { emit }) {
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
          emit('submit-error', postMail.response);
          isLoading.value = false;
        }
      } else {
        emit('submit-error', 'base.error.notValidEmail');
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
  -webkit-box-shadow: #f6ccc7 inset;
  transition: background-color 5000s ease-in-out 0s;
}
</style>
