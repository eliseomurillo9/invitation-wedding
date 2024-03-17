<!-- Parent Component -->
<template>
  <div class="pt-24">
    <section class="flex-grow flex justify-center px-4 pb-7 md:px-96">
      <ConfirmationFormContainer @submit.prevent="onSubmit" :title="$t('FormSection.title')" :messages="isOnline ? messagesOnline : messagesPresential" :isLoading="isLoading">
        <template #form>
          <div class="flex flex-col" v-if="isOnline">
            <label class="text-blue-main font-nanum text-xl dark:text-dark-blue">E-mail</label>
            <input type="email" name="email" id="email" class="bg-pink-white w-80 h-12 p-2 rounded-lg"
              v-model="attendeeInfo.online.email" :placeholder="$t('Common.Form.Placeholderemail')" />
          </div>
          <template v-else>
            <div class="flex flex-col">
              <label class="text-blue-main font-nanum text-xl dark:text-dark-blue">{{ $t('Common.Form.Name') }}</label>
              <input type="text" name="firstname" id="firstname" class="bg-pink-white w-96 h-12 p-2 rounded-lg"
                v-model="attendeeInfo.presential.firstname" :placeholder="$t('Common.Form.PlaceholderName')" />
            </div>
            <div class="flex flex-col">
              <label class="text-blue-main font-nanum text-xl dark:text-dark-blue">{{ $t('Common.Form.LastName')
                }}</label>
              <input type="text" name="lastname" id="lastname" class="bg-pink-white w-96 h-12 p-2 rounded-lg"
                v-model="attendeeInfo.presential.lastname" :placeholder="$t('Common.Form.PlaceholderLastname')" />
            </div>
          </template>
        </template>
      </ConfirmationFormContainer>
    </section>
  </div>
</template>

<script setup>
import ConfirmationFormContainer from "@/components/ConfirmationFormContainer.vue";
import { computed, reactive, ref, emit } from "vue";
import attendeeConfirmation from "@/services/confirmationService.js"
import { useRouter } from "vue-router";

const attendeeInfo = reactive({
  presential: {
    firstname: '',
    lastname: '',
  },
  online: {
    email: '',

  }

});

const messagesPresential = ref([
  'FormSection.Message1.paragraph1',
  'FormSection.Message1.paragraph2'
])

const messagesOnline = ref([
  'FormSection.Message2.paragraph3'
])

const router = useRouter();
const modality = router.currentRoute.value.params.modality;
const isOnline = computed(() => {
  return modality === "online";
});
const isLoading = ref(false)

const onSubmit = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/

  if (attendeeInfo.online.email.match(emailRegex) || (attendeeInfo.presential.firstname.match(nameRegex) && attendeeInfo.presential.lastname.match(nameRegex))) {
    isLoading.value = true;
    attendeeConfirmation({ modality: modality, email: attendeeInfo.online.email, firstname: attendeeInfo.presential.firstname, lastname: attendeeInfo.presential.lastname }).then((response) => {
      console.log(response);
      if (response?.status === 201) {
        isLoading.value = false;
        router.push({ path: "/confirmation" });
      } else {
        emit('submit-error', response?.statusText || response);
        isLoading.value = false;
      }
    })
  } else {
    emit('submit-error', 'base.error.entryNotValid');
  }
}
</script>
