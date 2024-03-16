<template>
  <main class="relative">
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
      :altImg="$t('imagesAlt.PhotoOurStory')"
    />
    <HistoryContainer
      :subTitle="$t('historySection.subtitleTheProposal')"
      :historyText="proposal"
      image="foto-elipse-2.svg"
      :altImg="$t('imagesAlt.PhotoTheProposal')"
      :reverseDiv="true"
    />
    <ScheduleSection id="schedule" :title="$t('ScheduleSection.title')" />
    <ImagesContainer
    id="gallery"
      :title="$t('PhotosSection.title')"
      :images="photos"
    />
    <EntourageSection id="entourage" :title="$t('EntourageSection.title')" :entouragePeople="bridesGrooms" />
    <!-- <WishesSection id="wished" title="Your Wishes" /> -->
    <GiftSection id="gifts" :title="$t('GiftSection.title')" />
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
    `${$t("Common.pageTitle.landing")} - G&C` || "Default Page Title";
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
    title: "EntourageSection.subtitle1",
    people: [
      {
        name: "Luci",
        image: "https://storage.cloud.google.com/wedding-inv-bucket/luci.svg",
        alt: "imagesAlt.PhotoBridesmaid1",
      },
      {
        name: "Ale",
        image: "https://storage.cloud.google.com/wedding-inv-bucket/ale.svg",
        alt: "imagesAlt.PhotoBridesmaid2",
      },
      {
        name: "Keren",
        image: "https://storage.cloud.google.com/wedding-inv-bucket/keren.svg",
        alt: "imagesAlt.PhotoBridesmaid3",
      },
      {
        name: "Gerald",
        image: "https://storage.cloud.google.com/wedding-inv-bucket/gerald.svg",
        alt: "imagesAlt.PhotoBridesmaid4",
      },
    ],
  },
  {
    title: "EntourageSection.subtitle2",
    people: [
      {
        name: "Alex",
        image: "https://storage.cloud.google.com/wedding-inv-bucket/alex.svg",
        alt: "imagesAlt.PhotoGroomsmen1",
      },
      {
        name: "Kevin",
        image: "https://storage.cloud.google.com/wedding-inv-bucket/kevin.svg",
        alt: "imagesAlt.PhotoGroomsmen2",
      },
      {
        name: "Chele",
        image: "https://storage.cloud.google.com/wedding-inv-bucket/chele.svg",
        alt: "imagesAlt.PhotoGroomsmen3",
      },
      {
        name: "William",
        image: "https://storage.cloud.google.com/wedding-inv-bucket/william.svg",
        alt: "imagesAlt.PhotoGroomsmen4",
      },
    ],
  },
];

const howWeMet = ref([
  'historySection.paragraph1', 'historySection.paragraph2',  'historySection.paragraph3'
])

const proposal = ref([
  'historySection.paragraph4'
])
onMounted(() => {
  updatePageTitle();
});
</script>
