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
      image="foto-elipse-2.png"
      :altImg="$t('imagesAlt.PhotoOurStory')"
      data-aos="fade-up"
    />
    <HistoryContainer
      :subTitle="$t('historySection.subtitleTheProposal')"
      :historyText="proposal"
      image="foto-elipse-1.png"
      :altImg="$t('imagesAlt.PhotoTheProposal')"
      :reverseDiv="true"
      data-aos="fade-up"
    />
    <ScheduleSection
      id="schedule"
      :title="$t('ScheduleSection.title')"
      data-aos="fade-up"
    />
    <ImagesContainer
      id="gallery"
      :title="$t('PhotosSection.title')"
      :images="photos"
      data-aos="fade-up"
    />
    <EntourageSection
      id="entourage"
      :title="$t('EntourageSection.title')"
      :entouragePeople="bridesGrooms"
      data-aos="fade-up"
    />
    <WishesSection id="wished" :title="$t('WhishesSection.title')" />
    <GiftSection
      id="gifts"
      :title="$t('GiftSection.title')"
      data-aos="fade-up"
    />
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
import WishesSection from "@/components/WishesSection.vue";
import GiftSection from "@/components/GiftSection.vue";

const { t: $t } = useI18n();

const updatePageTitle = () => {
  const pageTitle =
    `${$t("Common.pageTitle.landing")} - G&C` || "Default Page Title";
  document.title = pageTitle;
};

const photos = ref([
  {
    img: "https://storage.googleapis.com/wedding-inv-bucket/dunkerke.png",
    alt: "imagesAlt.PhotosNotreVie8",
  },
  {
    img: "https://storage.googleapis.com/wedding-inv-bucket/bruges.png",
    alt: "imagesAlt.PhotosNotreVie4",
  },
  {
    img: "https://storage.googleapis.com/wedding-inv-bucket/paris.png",
    alt: "imagesAlt.PhotosNotreVie3",
  },
  {
    img: "https://storage.googleapis.com/wedding-inv-bucket/noel-maison.png",
    alt: "imagesAlt.PhotosNotreVie5",
  },
  {
    img: "https://storage.googleapis.com/wedding-inv-bucket/valence.png",
    alt: "imagesAlt.PhotosNotreVie7",
  },
  {
    img: "https://storage.googleapis.com/wedding-inv-bucket/madrid.png",
    alt: "imagesAlt.PhotosNotreVie2",
  },
  {
    img: "https://storage.googleapis.com/wedding-inv-bucket/tolede.png",
    alt: "imagesAlt.PhotosNotreVie1",
  },
  {
    img: "https://storage.googleapis.com/wedding-inv-bucket/noel.png",
    alt: "imagesAlt.PhotosNotreVie6",
  },
]);

const bridesGrooms = [
  {
    title: "EntourageSection.subtitle1",
    people: [
      {
        name: "Luci",
        image: "https://storage.googleapis.com/wedding-inv-bucket/luci.png",
        alt: "imagesAlt.PhotoBridesmaid1",
      },
      {
        name: "Ale",
        image: "https://storage.googleapis.com/wedding-inv-bucket/ale.svg",
        alt: "imagesAlt.PhotoBridesmaid2",
      },
      {
        name: "Keren",
        image: "https://storage.googleapis.com/wedding-inv-bucket/keren.png",
        alt: "imagesAlt.PhotoBridesmaid3",
      },
      {
        name: "Geral",
        image: "https://storage.googleapis.com/wedding-inv-bucket/gerald.svg",
        alt: "imagesAlt.PhotoBridesmaid4",
      },
    ],
  },
  {
    title: "EntourageSection.subtitle2",
    people: [
      {
        name: "Alex",
        image: "https://storage.googleapis.com/wedding-inv-bucket/alex.png",
        alt: "imagesAlt.PhotoGroomsmen1",
      },
      {
        name: "Kevin",
        image: "https://storage.googleapis.com/wedding-inv-bucket/kevin.png",
        alt: "imagesAlt.PhotoGroomsmen2",
      },
      {
        name: "Chele",
        image: "https://storage.googleapis.com/wedding-inv-bucket/chele.svg",
        alt: "imagesAlt.PhotoGroomsmen3",
      },
      {
        name: "William",
        image: "https://storage.googleapis.com/wedding-inv-bucket/william.png",
        alt: "imagesAlt.PhotoGroomsmen4",
      },
    ],
  },
];

const howWeMet = ref([
  "historySection.paragraph1",
  "historySection.paragraph2",
  "historySection.paragraph3",
]);

const proposal = ref(["historySection.paragraph4"]);
onMounted(() => {
  updatePageTitle();
});
</script>
