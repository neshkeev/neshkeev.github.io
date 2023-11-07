import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: "en-US",
    title: "Home",
    description: "Consulting, Mentoring, Software Development, System Design",
    themeConfig: {
        siteTitle: "Nikita",
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Contacts', link: '/en_US/contacts' },
            { text: 'Knowledge Base', link: '/en_US/courses' },
            { text: 'About', link: '/en_US/about' },
        ],

        sidebar: [
            { text: 'Contacts', link: '/en_US/contacts' },
            { text: 'Knowledge Base', link: '/en_US/courses' },
            { text: 'About', link: '/en_US/about' },
        ]
    }
})
