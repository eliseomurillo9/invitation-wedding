<template class="bg-white min-h-screen">
    <header>
      <HeaderContainer />
    </header>
    <router-view />
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
