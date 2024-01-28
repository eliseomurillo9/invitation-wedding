<!-- Parent Component -->
<template>
  <div class="pt-24">
    <main class="flex-grow flex justify-center px-10">
      <ConfirmationFormContainer
      @submit.prevent="onSubmit"
        title="Confirm my assistance"
        message="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma Nemo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma Nemo."
      >
        <template #form >
          <div class="flex flex-col" v-if="isOnline">
            <label class="text-blue-main font-nanum text-xl">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              class="bg-pink-white w-80 h-12 p-2 rounded-lg"
              placeholder="enter your email"
            />
          </div>
          <template v-else>
            <div>
              <label class="text-blue-main font-nanum text-xl">Firstname</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                class="bg-pink-white w-80 h-12 p-2 rounded-lg"
                placeholder="enter your name"
              />
            </div>
            <div>
              <label class="text-blue-main font-nanum text-xl">Lastname</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                class="bg-pink-white w-80 h-12 p-2 rounded-lg"
                placeholder="enter your lastname"
              />
            </div>
          </template>
        </template>
      </ConfirmationFormContainer>
    </main>
  </div>
</template>

<script setup>
import ConfirmationFormContainer from "@/components/ConfirmationFormContainer.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

const router = useRoute();
const isOnline = computed(() => {
  return router.params.modality === "online";
});

const onSubmit = (() => {
    console.log('Ill handle the submit');
})
</script>
