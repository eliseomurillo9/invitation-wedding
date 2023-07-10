<template class="bg-white">
  <Header />
  <WeddingInformation  :titleMsg="information.title" :weddingDate="information.date" :weddingPlace="information.place"/>
  <Counter class="mt-11" />
  <ImagesSection :coupleImages="images" class="mt-12"/>
</template>

<script>
import Counter from './components/Counter.vue';
import Header from './components/Header.vue'
import WeddingInformation from './components/WeddingInformation.vue';
import ImagesSection from './components/ImagesSection.vue';
export default {
  name: 'App',
  components: {
    Header,
    WeddingInformation,
    Counter,
    ImagesSection
  },
  data() {
    return {
      information: {
        title: 'Georgi & Eli Wedding',
        date: 'July 20, 2024',
        place: 'El Salvador',
      },
      images: [
        'foto-1-web.jpg', 'foto-2-web.jpg', 'foto-3.jpg', 'foto-4.jpg'
      ]
    }
  },
}
</script>
