<template class>
    <footer
        class="flex items-center justify-center gap-2 py-3 font-nanum text-blue-main md:text-2xl dark:bg-dark-main dark:text-dark-blue">
        <h1>{{ title }} </h1>
        <span class="material-symbols-outlined text-xl align-middle">
            favorite
        </span>
        <span class="mx-3 hidden md:block">|</span>
        <div class="flex justify-center items-center mr-5 hidden md:block">
                <span v-for="(theme, i) in themes" :key="i" @click="toggleDark()" class="material-symbols-outlined ml-3 cursor-pointer"
                    :class="[{ 'bg-pink-clear dark:text-red-alt text-red rounded-xl p-1.5 pl-1.5 ': themeMode === theme.mode }]">
                    {{ theme.icon }}
            </span>
        </div>
    </footer>
</template>

<script setup>
import { UseDarkMode } from '@/composable/useDarkMode';
import { defineProps } from 'vue';
import { useToggle } from '@vueuse/core'

const { themes } = UseDarkMode()

defineProps({
    title: {
        Type: String
    },
    icon: {
        Type: String
    },
    iconAlt: {
        Type: String
    }
})

const { isDark, themeMode } = UseDarkMode()

const toggleDark = useToggle(isDark);
</script>