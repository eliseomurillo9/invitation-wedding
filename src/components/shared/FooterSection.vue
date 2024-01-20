<template class>
    <footer class="flex items-center justify-center gap-2 py-3 font-nanum text-blue-main">
        <h1>{{ title }} </h1>
        <figure>
            <img :src="require(`@/assets/icons/${icon}`)" :alt="{iconAtl}">
        </figure>
    </footer>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    title:{
        Type: String
    },
    icon:{
        Type: String
    },
    iconAlt:{
        Type: String
    }
})
</script>