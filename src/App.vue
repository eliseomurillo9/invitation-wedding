<template class="bg-white">
  <main>
    <header>
      <HeaderContainer />
      <router-view />
    </header>
  </main>
</template>
<script>
import HeaderContainer from "./components/HeaderContainer.vue";
import { onMounted } from "vue";
import AOS from "aos";

export default {
  name: "App",
  components: {
    HeaderContainer,
  },
  setup() {
    onMounted(() => {
      AOS.init();
    });
  },
};
</script>
