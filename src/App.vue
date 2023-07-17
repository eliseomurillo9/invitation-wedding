<template class="bg-white">
  <header>
    <HeaderContainer />
  </header>
  <main class="py-5">
    <WeddingInformation
      :titleMsg="information.title"
      :weddingDate="information.date"
      :weddingPlace="information.place"
    />
    <Counter class="mt-9" />
    <ImagesSection :coupleImages="images" class="mt-8" />
    <WorkInProgress class="mt-8" />
    <NewsletterForm class="mt-8" />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="84"
      height="76"
      viewBox="0 0 74 66"
      fill="none"
      class="absolute right-0 md:hidden"
    >
      <path
        d="M54.6467 6.6879C49.5502 7.83932 50.1563 13.9932 50.1563 13.9932L48.9289 9.48615C48.9289 9.48615 54.4223 -2.65568 49.2827 0.536111C44.1431 3.72791 49.6711 15.378 49.6711 15.378C49.6711 15.378 43.5651 4.6517 42.9456 8.47739C42.3261 12.3031 50.128 17.3274 50.128 17.3274C51.0105 21.0767 52.074 24.7024 53.2625 28.1217C50.2055 24.2717 43.0342 15.8791 43.6472 20.2668C44.3084 25.0468 54.0774 30.4568 54.0774 30.4568C55.3689 34.0723 56.7502 37.4518 58.1313 40.54C53.6988 36.3955 42.0929 25.9354 43.3998 31.2058C44.8255 36.9277 55.0012 41.9377 59.7091 43.9815C60.1032 44.8276 60.5109 45.6626 60.9253 46.4922C63.7064 52.0818 66.1253 56.0883 67.1619 57.7537C63.9408 56.9952 60.7609 56.0446 57.6393 54.9071C55.2184 46.3785 47.3523 37.4071 46.987 43.2651C46.7318 47.1099 49.4302 50.4348 51.7828 52.5712C47.0757 50.5051 42.4927 48.1457 38.0611 45.5072C36.6681 41.018 32.1877 27.3867 29.4271 31.7492C27.2491 35.2073 31.2325 40.171 34.1299 43.0895C29.9174 40.4222 26.1541 37.74 22.9684 35.312C22.5058 33.3556 19.2216 20.0477 17.0743 24.0289C15.7181 26.5171 17.3781 29.8102 18.9966 32.1927C14.4279 28.5319 11.7839 25.9673 11.7839 25.9673C11.7839 25.9673 5.95283 10.7273 2.22828 14.1931C-1.49628 17.6589 9.84896 26.1619 9.84896 26.1619C12.6138 28.8616 15.3641 31.3631 18.0785 33.6957C11.6565 30.7461 -1.45179 25.3529 0.728022 30.9642C3.23487 37.3943 17.1686 36.2763 20.6981 35.8836C25.0046 39.4285 29.4955 42.7357 34.1499 45.7899C27.1922 44.5926 4.64511 41.17 9.53404 47.9288C15.2793 55.8815 37.3952 47.8199 37.3952 47.8199C42.632 51.0527 48.0765 53.916 53.688 56.3883C47.4447 55.8354 30.4326 54.9629 33.232 62.1001C36.6194 70.8353 58.2693 58.29 58.2693 58.29C68.9745 62.4272 75.7601 63.2045 75.7601 63.2045C76.7677 60.6612 73.3902 58.9951 73.3902 58.9951C72.4614 58.8627 71.528 58.7108 70.6025 58.5409C66.3964 52.8925 62.7995 46.8195 59.8759 40.4299C60.8354 39.0333 70.0453 25.426 63.5455 25.1395C56.7179 24.8511 58.2668 36.8389 58.2693 36.8836C57.2421 34.5226 56.2944 32.1903 55.4231 29.9243C56.4948 26.4895 60.6446 12.5117 55.797 15.5365C52.7565 17.4328 52.6981 20.8963 53.2537 23.605L50.9475 16.604C50.9475 16.604 59.75 5.53098 54.6467 6.6879Z"
        fill="#567651"
        fill-opacity="0.4"
        
      />
    </svg>
  </main>
</template>

<script>
import Counter from "./components/Counter.vue";
import HeaderContainer from "./components/HeaderContainer.vue";
import WeddingInformation from "./components/WeddingInformation.vue";
import ImagesSection from "./components/ImagesSection.vue";
import WorkInProgress from "./components/WorkInProgress.vue";
import NewsletterForm from "./components/NewsletterForm.vue";
import { useI18n } from "vue-i18n";
export default {
  name: "App",
  components: {
    HeaderContainer,
    WeddingInformation,
    Counter,
    ImagesSection,
    WorkInProgress,
    NewsletterForm,
  },
  data() {
    return {
      information: {
        title: "Georgi & Eli Wedding",
        date: "July 20, 2024",
        place: "El Salvador",
      },
      test: "var to commit - test",
      images: ["foto-1-web.jpg", "foto-2-web.jpg", "foto-3.jpg", "foto-4.jpg"],
    };
  },
  setup() {
    const { t } = useI18n();
    return {
      t,
    };
  },
};
</script>
