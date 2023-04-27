import { defineConfig, DefaultTheme } from 'vitepress'

const ogDescription = 'ເຄື່ອງມື Frontend ລຸ້ນຕໍ່ໄປ'
const ogImage = 'https://vitejs.dev/og-image.png'
const ogTitle = 'Vite'
const ogUrl = 'https://vitejs.dev'

// netlify envs
const deployURL = process.env.DEPLOY_PRIME_URL || ''
const commitRef = process.env.COMMIT_REF?.slice(0, 8) || 'dev'

const deployType = (() => {
  switch (deployURL) {
    case 'https://main--vite-docs-main.netlify.app':
      return 'main'
    case '':
      return 'local'
    default:
      return 'release'
  }
})()
const additionalTitle = ((): string => {
  switch (deployType) {
    case 'main':
      return ' (main branch)'
    case 'local':
      return ' (local)'
    case 'release':
      return ''
  }
})()
const versionLinks = ((): DefaultTheme.NavItemWithLink[] => {
  switch (deployType) {
    case 'main':
    case 'local':
      return [
        {
          text: 'ເອກະສານ Vite 4 (ປ່ອຍ)',
          link: 'https://vitejs.dev',
        },
        {
          text: 'ເອກະສານ Vite 3',
          link: 'https://v3.vitejs.dev',
        },
        {
          text: 'ເອກະສານ Vite 2',
          link: 'https://v2.vitejs.dev',
        },
      ]
    case 'release':
      return [
        {
          text: 'ເອກະສານ Vite 3',
          link: 'https://v3.vitejs.dev',
        },
        {
          text: 'ເອກະສານ Vite 2',
          link: 'https://v2.vitejs.dev',
        },
      ]
  }
})()

export default defineConfig({
  title: `Vite${additionalTitle}`,
  description: 'Next Generation Frontend Tooling',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@vite_js' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'CBDFBSLI',
        'data-spa': 'auto',
        defer: '',
      },
    ],
  ],

  locales: {
    root: { label: 'English' },
    zh: { label: '简体中文', link: 'https://cn.vitejs.dev' },
    ja: { label: '日本語', link: 'https://ja.vitejs.dev' },
    es: { label: 'Español', link: 'https://es.vitejs.dev' },
    pt: { label: 'Português', link: 'https://pt.vitejs.dev' },
  },

  vue: {
    reactivityTransform: true,
  },

  themeConfig: {
    logo: '/logo.svg',

    editLink: {
      pattern: 'https://github.com/vitejs/vite/edit/main/docs/:path',
      text: 'ແນະນຳການປ່ຽນແປງສຳລັບໜ້ານີ້',
    },

    socialLinks: [
      { icon: 'mastodon', link: 'https://elk.zone/m.webtoo.ls/@vite' },
      { icon: 'twitter', link: 'https://twitter.com/vite_js' },
      { icon: 'discord', link: 'https://chat.vitejs.dev' },
      { icon: 'github', link: 'https://github.com/vitejs/vite' },
    ],

    algolia: {
      appId: '7H67QR5P0A',
      apiKey: 'deaab78bcdfe96b599497d25acc6460e',
      indexName: 'vitejs',
      searchParameters: {
        facetFilters: ['tags:en'],
      },
    },

    carbonAds: {
      code: 'CEBIEK3N',
      placement: 'vitejsdev',
    },

    footer: {
      message: `ເຜີຍແຜ່ພາຍໃຕ້ໃບອະນຸຍາດ MIT. (${commitRef})`,
      copyright: 'ສະຫງວນລິຂະສິດ © 2019-present Evan You ແລະ ຜູ້ມີສ່ວນຮ່ວມພັດທະນາ Vite',
    },

    nav: [
      { text: 'ຄູ່ມື', link: '/guide/', activeMatch: '/guide/' },
      { text: 'ການຕັ້ງຄ່າ', link: '/config/', activeMatch: '/config/' },
      { text: 'Plugins', link: '/plugins/', activeMatch: '/plugins/' },
      {
        text: 'ແຫຼ່ງທີ່ມາ',
        items: [
          { text: 'ທີມ', link: '/team' },
          {
            items: [
              {
                text: 'Twitter',
                link: 'https://twitter.com/vite_js',
              },
              {
                text: 'Discord Chat',
                link: 'https://chat.vitejs.dev',
              },
              {
                text: 'Awesome Vite',
                link: 'https://github.com/vitejs/awesome-vite',
              },
              {
                text: 'ຊຸມຊົນ DEV',
                link: 'https://dev.to/t/vite',
              },
              {
                text: 'Rollup Plugins Compat',
                link: 'https://vite-rollup-plugins.patak.dev/',
              },
              {
                text: 'ບັນທຶກການປ່ຽນແປງ',
                link: 'https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md',
              },
            ],
          },
        ],
      },
      {
        text: 'ເວີຊັ່ນ',
        items: versionLinks,
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'ຄູ່ມື',
          items: [
            {
              text: 'ເປັນຫຍັງຕ້ອງເປັນ Vite',
              link: '/guide/why',
            },
            {
              text: 'ເລີ່ມຕົ້ນໃຊ້ງານ',
              link: '/guide/',
            },
            {
              text: 'ຄຸນສົມບັດ',
              link: '/guide/features',
            },
            {
              text: 'CLI',
              link: '/guide/cli',
            },
            {
              text: 'ນຳໃຊ້ Plugins',
              link: '/guide/using-plugins',
            },
            {
              text: 'Dependency Pre-Bundling',
              link: '/guide/dep-pre-bundling',
            },
            {
              text: 'Static Asset Handling',
              link: '/guide/assets',
            },
            {
              text: 'Building for Production',
              link: '/guide/build',
            },
            {
              text: 'Deploying a Static Site',
              link: '/guide/static-deploy',
            },
            {
              text: 'Env Variables and Modes',
              link: '/guide/env-and-mode',
            },
            {
              text: 'Server-Side Rendering (SSR)',
              link: '/guide/ssr',
            },
            {
              text: 'ການເຊື່ອມຕໍ່ Backend ',
              link: '/guide/backend-integration',
            },
            {
              text: 'ການປຽບທຽບ',
              link: '/guide/comparisons',
            },
            {
              text: 'ການແກ້ໄຂບັນຫາ',
              link: '/guide/troubleshooting',
            },
            {
              text: 'ການຍ້າຍຈາກ v3',
              link: '/guide/migration',
            },
          ],
        },
        {
          text: 'APIs',
          items: [
            {
              text: 'Plugin API',
              link: '/guide/api-plugin',
            },
            {
              text: 'HMR API',
              link: '/guide/api-hmr',
            },
            {
              text: 'JavaScript API',
              link: '/guide/api-javascript',
            },
            {
              text: 'ອ້າງອີງການຕັ້ງຄ່າ',
              link: '/config/',
            },
          ],
        },
      ],
      '/config/': [
        {
          text: 'ການຕັ້ງຄ່າ',
          items: [
            {
              text: 'ການຕັ້ງຄ່າ Vite',
              link: '/config/',
            },
            {
              text: 'ຕົວເລືອກ Shared',
              link: '/config/shared-options',
            },
            {
              text: 'ຕົວເລືອກ Server',
              link: '/config/server-options',
            },
            {
              text: 'ຕົວເລືອກ Build',
              link: '/config/build-options',
            },
            {
              text: 'ຕົວເລືອກ Preview',
              link: '/config/preview-options',
            },
            {
              text: 'ຕົວເລືອກ Dep Optimization',
              link: '/config/dep-optimization-options',
            },
            {
              text: 'ຕົວເລືອກ SSR',
              link: '/config/ssr-options',
            },
            {
              text: 'ຕົວເລືອກ Worker',
              link: '/config/worker-options',
            },
          ],
        },
      ],
    },
  },
})
