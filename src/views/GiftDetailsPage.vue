<template>
  <section
    class="flex flex-col justify-center items-center gap-9 bg-pink-white dark:bg-dark-main w-full pt-24 pb-10 px-4 md:px12"
  >
    <InformationCard :title="$t('GiftSection.title')">
      <div class="md:px-7">
        <div class="text-center mb-10">
          <span class="material-symbols-outlined text-blue-main text-4xl">
            mail
          </span>
          <p class="font-klee">{{ $t("GiftSection.paragraph3") }}</p>
        </div>
        <div class="text-center">
          <span class="material-symbols-outlined text-blue-main text-4xl">
            ios_share
          </span>
          <p class="font-klee mb-3">{{ $t("GiftSection.paragraph4") }}</p>
          <div
            class="flex flex-col md:flex-row justify-center flex-wrap gap-10 mt-16"
          >
            <ul
              v-for="(account, i) in AccountInfo"
              :key="i"
              class="border p-5 rounded-xl border-pink-main"
            >
              <li class="text-blue-main font-bold">Name</li>
              <li>
                {{ account.name }}
                <span
                  class="material-symbols-outlined cursor-pointer align-middle text-black/60 text-xl ml-2 hover:text-pink-main ease-in-out"
                  @click="copy(account.name)"
                >
                  content_copy
                </span>
              </li>
              <li class="text-blue-main font-bold pt-6">Cuenta</li>
              <li class="align-middle">
                {{ account.account }}
                <span
                  class="material-symbols-outlined cursor-pointer align-middle text-black/60 text-xl ml-2 hover:text-pink-main ease-in-out"
                  @click="copy(account.account)"
                >
                  content_copy
                </span>
              </li>

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
import InformationCard from "@/components/shared/InformationCard.vue";
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

const { t: $t } = useI18n();
const AccountInfo = ref([
  {
    name: "Josue Eliseo Murillo Cordova",
    account: "3007489060",
    country: "El Salvador",
  },
  {
    name: "Georgina Lisseth Cierra Moran",
    account: "FR76 3002 7170 1100 0215 9770 173",
    country: "GiftSection.france",
  },
]);

const copy = async (account) => {
  try {
    await navigator.clipboard.writeText(account);
    console.log("Copied to clipboard!");
  } catch (err) {
    console.error("Failed to copy:", err);
    // Handle fallback if needed (explained below)
  }
};

const updatePageTitle = () => {
  const pageTitle =
    `${$t("Common.pageTitle.landing")} - G&C` || "Default Page Title";
  document.title = pageTitle;
};

onMounted(() => {
  updatePageTitle();
});
</script>
