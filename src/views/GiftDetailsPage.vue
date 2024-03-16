<template>
  <section class="flex flex-col justify-center items-center gap-9 bg-pink-white w-full">
    <InformationCard :title="$t('GiftSection.title')">
      <div class="px-7">
        <div class="text-center mb-10">
          <span class="material-symbols-outlined text-blue-main dark:text-pink-main text-4xl">
            mail
          </span>
          <p class="font-klee">{{ $t('GiftSection.paragraph3') }}</p>
        </div>
        <div class="text-center">
          <span class="material-symbols-outlined text-blue-main dark:text-pink-main text-4xl">
            ios_share
          </span>
          <p class="font-klee mb-3">{{ $t('GiftSection.paragraph4') }}</p>
          <div class="flex justify-center gap-10 mt-6">
            <ul v-for="(account, i) in AccountInfo" :key="i">
              <li class="text-blue-main font-bold">Name</li>
              <li>{{ account.name }}</li>
              <li class="text-blue-main font-bold pt-6">Cuenta</li>
              <li>{{ account.account }}</li>
              <li class="text-blue-main font-bold pt-6">Pais</li>
              <li>{{ $t(account.country) }}</li>
            </ul>
          </div>
        </div>
      </div>
    </InformationCard>
  </section>
</template>

<script setup>
import InformationCard from '@/components/shared/InformationCard.vue';
import { ref } from "vue";

const AccountInfo = ref([
  {
    name: 'Josue Eliseo Murillo Cordova',
    account: 'FR76 3002 7170 1100 0215 9840 110',
    country: 'GiftSection.france'
  },
  {

    name: 'Georgina Lisseth Cierra Moran',
    account: 'FR76 3002 7170 1100 0215 9840 110',
    country: 'El Salvador'
  }
])
</script>
