import { useDark } from '@vueuse/core'
import { ref, watch, reactive } from 'vue'

export const UseDarkMode = () => {
  const isDark = useDark()

  const themeMode = isDark ? ref('Dark mode') : ref('Light mode')
  const themes = reactive([
    { mode: 'Light mode', icon: 'light_mode' },
    { mode: 'Dark mode', icon: 'dark_mode' },
  ])

  watch(
    isDark,
    async (newValue) => {
      themeMode.value = newValue ? 'Dark mode' : 'Light mode'
    },
    { immediate: true },
  )

  return { themeMode, isDark, themes }
}
