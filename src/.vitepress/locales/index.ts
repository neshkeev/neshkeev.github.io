import { defineConfig } from 'vitepress'
import en_US from './en_US'
import ru_RU from './ru_RU'

export default defineConfig({
  locales: {
    root: {
      label: 'Русский',
      lang: ru_RU.lang,
      themeConfig: ru_RU.themeConfig,
      description: ru_RU.description,
    },
    en_US: {
      title: "Nikita Eshkeev",
      label: 'English',
      lang: en_US.lang,
      themeConfig: en_US.themeConfig,
      description: en_US.description      
    }
  }
})