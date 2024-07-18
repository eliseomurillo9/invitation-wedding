<template>
  <div class="flex flex-col px-10 pt-24 pb-9 min-w-80 max-w-xl">
    <h1
      class="text-red font-nanum text-4xl text-center pb-9 px-12 dark:text-pink-clear text-red-main"
    >
      {{ $t("WhishesSection.title") }}
    </h1>
    <h1 class="dark:text-white">
      {{ $t("WhishesSection.paragraph") }}
    </h1>
    <form
      action=""
      @submit="postWishNote"
      class="bg-pink-white flex flex-col gap-3 w-full mx-auto mt-5 p-5 rounded-xl shadow-lg"
    >
      <div class="flex flex-col">
        <label for="" class="pb-1">{{ $t("WhishesSection.Form.name") }}</label>
        <input
          type="text"
          name=""
          id=""
          class="rounded border border-red-main p-1 focus:border-red-alt"
          v-model="noteInfo.name"
        />
      </div>
      <div class="flex flex-col justify-center">
        <label for="" class="pb-1"
          >{{ $t("WhishesSection.Form.message") }}
        </label>
        <textarea
          name=""
          id=""
          class="rounded h-64 border border-red-main p-2"
          v-model="noteInfo.content"
        ></textarea>
      </div>
      <ButtonMain
        type="submit"
        :label="$t('Buttons.PostButton')"
        class="w-1/4 m-auto"
        @click="postWishNote"
        :disable="isLoading"
      />
    </form>
  </div>
</template>

<script setup>
import ButtonMain from "@/components/shared/buttons/buttonMain.vue";
import router from "@/router";
import { signInAnonym, getCurrentUser } from "@/services/auth";
import { createWishNote } from "@/services/wishesService";
import { onMounted, ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { useI18n } from "vue-i18n";

const { t: $t } = useI18n();

const isLoading = ref(false);
const noteInfo = ref({
  name: "",
  content: "",
  uid: "",
  timeStamp: "",
});

const postWishNote = async (e) => {
  e.preventDefault();
  isLoading.value = true;
  noteInfo.value.uid = (await getCurrentUser()).uid;
  createWishNote({
    uid: noteInfo.value.uid,
    noteContent: noteInfo.value.content,
    name: noteInfo.value.name,
    timeStamp: new Date().toISOString(),
  })
    .then(() => {
      toast.success("Your message has been posted!");
      isLoading.value = false;
      router.push("/wishes");
    })
    .catch((error) => toast.error($t(error)));
};

const updatePageTitle = () => {
  const pageTitle = `${$t("Common.pageTitle.wishes")} - G&C`;
  document.title = pageTitle;
};

onMounted(async () => {
  signInAnonym();
  updatePageTitle();
});
</script>
