<template>
  <main class="relative py-5 md:py-8">
    <WeddingInformation
      titleMsg="Georgi & Eli"
      :weddingDate="$t('base.weddingDate')"
      weddingPlace="El Salvador"
      :description="$t('base.description')"
    />
    <HistoryContainer
      :title="$t('history.title')"
      :subTitle="$t('history.subtitle')"
      :historyText="$t('history.paragraph')"
      image="foto-elipse-1.svg"
      :altImg="$t('history.imageAlt')"
    />
    <HistoryContainer
      :subTitle="$t('history.theProposalTitle')"
      :historyText="$t('history.proposalParaagraph')"
      image="foto-elipse-2.svg"
      :altImg="$t('history.imageAlt')"
      :reverseDiv="true"
    />
    <ScheduleSection title="Schedule" />
    <ImagesContainer title="Some photos of us" />
  </main>
</template>

<script setup>
import WeddingInformation from "@/components/WeddingInformation.vue";
import HistoryContainer from "@/components/HistoryContainer.vue";
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
import ScheduleSection from "@/components/ScheduleSection.vue";
import ImagesContainer from "@/components/ImagesContainer.vue";

const { t: $t } = useI18n();

const updatePageTitle = () => {
  const pageTitle =
    `${$t("base.pageTitles.saveTheDate")} - G&C` || "Default Page Title";
  document.title = pageTitle;
};
onMounted(() => {
  updatePageTitle();
});
</script>
