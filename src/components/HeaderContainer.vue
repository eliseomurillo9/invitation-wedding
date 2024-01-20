<template>
  <header
    class="flex justify-between w-full py-2 px-5 text-blue-main font-bold text-sm md:text-2xl bg-pink-clear"
  >
    <router-link to="/"
      ><img
        :src="require('@/assets/logo.svg')"
        :alt="$t('imagesAlt.logo')"
        class="h-11 w-11"
    /></router-link>

    <figure @click="toggleSideMenu">
      <img src="../assets/icons/menu.svg" alt="icono de menu">
    </figure>
  </header>
</template>

<script setup>
let menutoggle = false
const toggleSideMenu = () => {
  menutoggle = !menutoggle
}
</script>
