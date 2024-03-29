<!-- Parent Component -->
<template>
  <div class="pt-24">
    <section class="flex justify-center px-8 pb-7 sm:mx-24 md:mx-40">
      <ConfirmationFormContainer
        @submit.prevent="onSubmit"
        :title="$t('FormSection.title')"
        :messages="isOnline ? messagesOnline : messagesPresential"
        :isLoading="isLoading"
      >
        <template #form>
          <div class="flex flex-col pb-3 md:pb-12" v-if="isOnline">
            <label class="text-blue-main font-nanum text-xl dark:text-dark-blue"
              >E-mail</label
            >
            <input
              type="email"
              name="email"
              id="email"
              class="bg-pink-white p-2 rounded-lg"
              v-model="attendeeInfo.online.email"
              :placeholder="$t('Common.Form.Placeholderemail')"
            />
          </div>
          <template v-else>
            <div class="flex flex-col pb-3 md:pb-12">
              <label
                class="text-blue-main font-nanum text-xl dark:text-dark-blue"
                >{{ $t("Common.Form.Name") }}</label
              >
              <input
                type="text"
                name="firstname"
                id="firstname"
                class="bg-pink-white p-2 rounded-lg"
                v-model="attendeeInfo.presential.firstname"
                :placeholder="$t('Common.Form.PlaceholderName')"
              />
            </div>
            <div class="flex flex-col pb-3 md:pb-12">
              <label
                class="text-blue-main font-nanum text-xl dark:text-dark-blue"
                >{{ $t("Common.Form.LastName") }}</label
              >
              <input
                type="text"
                name="lastname"
                id="lastname"
                class="bg-pink-white p-2 rounded-lg"
                :class="{ 'border bg-red-500': errorMessage }"
                v-model="attendeeInfo.presential.lastname"
                :placeholder="$t('Common.Form.PlaceholderLastname')"
              />
            </div>
          </template>
        </template>
      </ConfirmationFormContainer>
      <div
        class="fixed left-2/4 -translate-x-2/4 bottom-20 z-50"
        v-if="errorMessage"
      >
        <span
          class="p-3 text-xs text-red-800 rounded-lg bg-red-50 dark:bg-gray-800/80 dark:text-red-400"
          role="alert"
        >
          {{ $t(errorMessage) }}
        </span>
      </div>
    </section>
  </div>
</template>

<script setup>
import ConfirmationFormContainer from "@/components/ConfirmationFormContainer.vue";
import { computed, reactive, ref, onMounted, watch } from "vue";
import attendeeConfirmation from "@/services/confirmationService.js";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const attendeeInfo = reactive({
  presential: {
    firstname: "",
    lastname: "",
  },
  online: {
    email: "",
  },
});

const messagesPresential = ref([
  "FormSection.Message1.paragraph1",
  "FormSection.Message1.paragraph2",
]);

const messagesOnline = ref(["FormSection.Message2.paragraph3"]);

const router = useRouter();
const modality = router.currentRoute.value.params.modality;
let errorMessage = ref(null);
const isOnline = computed(() => {
  return modality === "online";
});
const isLoading = ref(false);

const onSubmit = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/;
  if (
    attendeeInfo.online.email.match(emailRegex) ||
    (attendeeInfo.presential.firstname.match(nameRegex) &&
      attendeeInfo.presential.lastname.match(nameRegex))
  ) {
    isLoading.value = true;
    attendeeConfirmation({
      modality: modality,
      email: attendeeInfo.online.email,
      firstname: attendeeInfo.presential.firstname,
      lastname: attendeeInfo.presential.lastname,
    }).then((response) => {
      if (response?.status === 201) {
        isLoading.value = false;
        router.push({ path: "/confirmated" });
      } else {
        errorMessage.value =
          response?.statusText === "Conflict"
            ? "Common.Form.registredEmail"
            : response?.statusText;
        isLoading.value = false;
      }
    });
  } else {
    errorMessage.value = "base.error.entryNotValid";
  }
};

watch(errorMessage, (newValue) => {
  if (newValue) {
    setTimeout(() => {
      errorMessage.value = null;
    }, 4000);
  }
});
const { t: $t } = useI18n();
const updatePageTitle = () => {
  const pageTitle =
    `${$t("Common.pageTitle.confirmation")} - G&C` || "Default Page Title";
  document.title = pageTitle;
};

onMounted(() => {
  updatePageTitle();
});
</script>
