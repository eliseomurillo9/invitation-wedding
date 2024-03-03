<template>
  <main class="relative pt-24 md:pt-8">
    <WeddingInformation
    id="wedding-info"
      titleMsg="Georgi & Eli"
      :weddingDate="$t('WelcomeSection.weddingDate')"
      :weddingPlace="$t('WelcomeSection.weddingLocation')"
      :description="$t('WelcomeSection.WelcomeMessage')"
    />
    <HistoryContainer
    id="our-history"
      :title="$t('historySection.title')"
      :subTitle="$t('historySection.subtitleHowWeMet')"
      :historyText="howWeMet"
      image="foto-elipse-1.svg"
      :altImg="$t('historySection.imageAlt')"
    />
    <HistoryContainer
      :subTitle="$t('history.theProposalTitle')"
      :historyText="howWeMet"
      image="foto-elipse-2.svg"
      :altImg="$t('history.imageAlt')"
      :reverseDiv="true"
      class="pt-0"
    />
    <ScheduleSection id="schedule" title="Schedule" />
    <ImagesContainer
    id="gallery"
      title="Some photos of our story"
      :images="photos"
      sectionFooter="Photos from the wedding will be available HERE"
    />
    <EntourageSection id="entourage" title="Entourage" :entouragePeople="bridesGrooms" />
    <!-- <WishesSection id="wished" title="Your Wishes" /> -->
    <GiftSection id="gifts" title="Your presence is a gift" />
    <RouterView></RouterView>
  </main>
</template>

<script setup>
import WeddingInformation from "@/components/WeddingInformation.vue";
import HistoryContainer from "@/components/HistoryContainer.vue";
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import ScheduleSection from "@/components/ScheduleSection.vue";
import ImagesContainer from "@/components/ImagesContainer.vue";
import EntourageSection from "@/components/EntourageSection.vue";
// import WishesSection from "@/components/WishesSection.vue";
import GiftSection from "@/components/GiftSection.vue";

const { t: $t } = useI18n();

const updatePageTitle = () => {
  const pageTitle =
    `${$t("base.pageTitles.saveTheDate")} - G&C` || "Default Page Title";
  document.title = pageTitle;
};

const photos = ref([
  { img: "dunkerke.svg", alt: "img2" },
  { img: "bruges.svg", alt: "img1" },
  { img: "paris.svg", alt: "img2" },
  { img: "noel-maison.svg", alt: "img2" },
  { img: "valence.svg", alt: "img2" },
  { img: "madrid.svg", alt: "img3" },
  { img: "tolede.svg", alt: "img2" },
  { img: "noel.svg", alt: "img2" },
]);

const bridesGrooms = [
  {
    title: "Bridesmaids",
    people: [
      {
        name: "Luci",
        image: "https://storage.cloud.google.com/wedding-inv-bucket/luci.svg",
        alt: "imagesAlt.luci",
      },
      {
        name: "Ale",
        image: "https://storage.cloud.google.com/wedding-inv-bucket/ale.svg",
        alt: "imagesAlt.ale",
      },
      {
        name: "Keren",
        image: "https://storage.cloud.google.com/wedding-inv-bucket/keren.svg",
        alt: "imagesAlt.keren",
      },
      {
        name: "Gerald",
        image: "https://storage.cloud.google.com/wedding-inv-bucket/gerald.svg",
        alt: "imagesAlt.keren",
      },
    ],
  },
  {
    title: "Groomsman",
    people: [
      {
        name: "Alex",
        image: "https://storage.cloud.google.com/wedding-inv-bucket/alex.svg",
        alt: "imagesAlt.luci",
      },
      {
        name: "Kevin",
        image: "https://storage.cloud.google.com/wedding-inv-bucket/kevin.svg",
        alt: "imagesAlt.ale",
      },
      {
        name: "Chele",
        image: "https://storage.cloud.google.com/wedding-inv-bucket/chele.svg",
        alt: "imagesAlt.keren",
      },
      {
        name: "William",
        image: "https://storage.cloud.google.com/wedding-inv-bucket/william.svg",
        alt: "imagesAlt.keren",
      },
    ],
  },
];

const howWeMet = ref([
  'historySection.paragraph1', 'historySection.paragraph2',  'historySection.paragraph3'
])
onMounted(() => {
  updatePageTitle();
});
</script>
