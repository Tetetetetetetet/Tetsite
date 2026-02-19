import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'
import { icons as riIcons } from '@iconify-json/ri'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
  'i-ri-steam-line',
  'i-ri-restaurant-line',
  'i-ri-computer-line',
  'i-ri-thumb-down-line',
  'i-ri-global-line',
  'i-ri-earth-line',
  'i-ri-qq-line',
  'i-ri-github-line',
  'i-ri-mail-line',
  'i-ri-taobao-line',
  'i-ri-alipay-line',
  'i-ri-wechat-pay-line',
  'i-ri-folder-2-line',
  'i-ri-price-tag-3-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',
  markdown: {
    
  },

  unocssPresets: {
    icons: {
      collections: {
        ri: () => riIcons,
      },
    },
  },

  themeConfig: {
    banner: {
      enable: true,
      title: ['Tet\'s','Blog','Website'],
      cloud:{
        enable: true,
      }
    
    },

    pages: [
      {
        name: 'fine food',
        url: '/categories?category=fine+food',
        icon: 'i-ri-restaurant-line',
        color: 'lightblue',
      },
      {
        name: 'valaxy',
        url: '/categories?category=valaxy',
        icon: 'i-ri-global-line',
        color: 'orange',
      },
      {
        name: 'CS',
        url: '/categories?category=cs',
        icon: 'i-ri-computer-line',
        color: 'red',
      }
    ],

    footer: {
      since: 2016,
      beian: {
        enable: true,
        icp: '苏ICP备17038157号',
      },
    },
  },

  unocss: { safelist },
})
