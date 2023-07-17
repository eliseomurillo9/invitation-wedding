<template>
<nav class="flex justify-between w-full py-2 px-5 text-blue-main font-bold text-sm md:text-2xl">
  <select name="language" id="language" class="bg-inherit" v-model="$i18n.locale">
    <option class="text-blue-main" v-for="(lang,i) in languages" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
  </select>
<span>Home</span>
</nav>
</template>

<script>
export default {
  name: 'HeaderContainer',
  data() {
    return {
      languages: ['ES', 'EN']
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
