import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    [
      'link',
      { rel: 'icon', type: 'image/x-icon',  href: '/logo.png' }
    ]
  ],
  title: "Encinet",
  titleTemplate: ':title',// disable suffix title
  description: "繁星棋布无遗处，空念独善憾自知",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'BiliBili', link: 'https://mikwiki.netlify.app' },
      { text: 'Mik', link: 'https://mikwiki.netlify.app' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/encinet' }
    ]
  }
})
