<template>
<nav class="flex justify-between w-full py-6 px-5 text-blue-main font-bold text-sm md:text-2xl">
  <select name="language" id="language" class="bg-inherit rounded-lg" v-model="$i18n.locale">
    <option class="text-blue-main rounded-lg" v-for="(lang,i) in languages" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
  </select>
<router-link to="/"><img :src="require('@/assets/logo.svg')" :alt="$t('imagesAlt.logo')" class="h-11 w-11"></router-link>
</nav>
</template>

<script>
export default {
  name: 'HeaderContainer',
  head() {
    return {
      htmlAttrs: {
        lang: this.currentLocale ? this.currentLocale : 'es'
      }
    }
  },
  data() {
    return {
      languages: ['ES', 'EN']
    }
  },
}
</script>

