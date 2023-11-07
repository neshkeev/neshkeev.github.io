import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: "ru-RU",
    title: "Главная",
    description: "Консультации, Обучение, Архитектура, Разработка, Программирование",

    themeConfig: {
        siteTitle: "Никита",
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Контакты', link: '/contacts' },
            { text: 'Повышение квалификации', link: '/courses' },
            { text: 'Обо мне', link: '/about' },
        ],

        sidebar: [
            { text: 'Контакты', link: '/contacts' },
            { text: 'Повышение квалификации', link: '/courses' },
            { text: 'Обо мне', link: '/about' },
        ],
        docFooter: {
            prev: "Назад",
            next: "Далее"
        }
    }
})
