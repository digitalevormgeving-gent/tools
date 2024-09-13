import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/tools/',
  title: "Tools",
  description: "Syllabus Digital Tools",
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Coderen', link: '/coding' },
      { text: 'Design', link: '/design' },
      { text: 'SCM', link: '/scm' },
    ],

    sidebar: {
      '/coding/': [
        {
          text: 'Coderen',
          items: [
            { text: 'Introductie', link: '/coding' },
            { text: 'Visual Studio Code', link: '/coding/vscode' },
          ]
        }
      ],
      '/design/': [
        {
          text: 'Design',
          items: [
            { text: 'Introductie', link: '/design' },
            { text: 'Adobe Creative Cloud', link: '/design/adobecc' },
          ]
        }
      ],
      '/scm/': [
        {
          text: 'Source Code Management',
          items: [
            { text: 'Introductie', link: '/scm' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      license: {
        text: 'MIT License',
        link: 'https://opensource.org/licenses/MIT'
      },
      copyright: `Copyright © ${new Date().getFullYear()} Arteveldehogeschool & LUCA School of Arts`
    }
  }
})
