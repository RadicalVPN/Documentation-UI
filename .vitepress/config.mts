import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'RadicalVPN',
  description: 'A modern, high-performance VPN',
  appearance: 'dark',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    logo: {
      dark: '/logo_dark.svg',
      light: 'logo.svg',
    },
    outline: [2, 3],
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/markdown-examples' },
      {
        text: 'Login',
        link: 'https://radicalvpn.com/portal/auth/login',
      },
    ],

    socialLinks: [
      {
        icon: 'discord',
        link: 'https://discord.gg',
      },
      { icon: 'github', link: 'https://github.com/RadicalVPN' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
      {
        text: 'About Us',
      },
    ],

    editLink: {
      pattern: 'https://github.com/vuejs/pinia/edit/v2/packages/docs/:path',
      text: 'Suggest changes',
    },

    footer: {
      copyright: 'Copyright © 2023',
      message: 'Made with ❤️',
    },
  },

  vite: {
    server: {
      proxy: {
        '/geoip': {
          target: 'https://radicalvpn.com',
          changeOrigin: true,
        },
      },
    },
  },
})
