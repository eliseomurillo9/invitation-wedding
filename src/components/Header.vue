<template>
<nav class="flex justify-between w-full py-4 px-5 text-blue-main font-bold text-sm">
  <select name="language" id="language" class="bg-inherit">
    <option class="text-blue-main" value="english">EN</option>
    <option value="spanish" selected="selected">ES</option>
  </select>
<span class="text-sm">Home</span>
</nav>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
