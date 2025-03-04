import { DefaultTheme, defineSiteConfig } from 'valaxy'

export interface SocialLink{
  name: 'friends',
  link: '',
  icon: 'fluent-emoji-flat:angry-face-with-horns',
  color: 'blue'
}
export default defineSiteConfig({
  mode: 'auto',
  lang: 'zh-CN',
  title: 'Tet Blogs',
  subtitle: 'A CS 蒟蒻\s Blog',
  description: 'No Game No Life',
  author: {
    name: 'Tet',
    avatar: '/avatar.jpg',
    email: 'tett8107@gmail.com',
    link: 'https://tetetetetetetet.github.io',
    status:
    {
      emoji: "🎮",
    }
  },
  lastUpdated: true,
  favicon:'/avatar.jpg',
  url: 'https://tettet.org',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'steam',
      link:'',
      icon: 'i-ri-steam-line',
      color: 'black',
    },
    {
      name: '1785131421',
      link: '/',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/Tetetetetetetet',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '微博(not set)',
      link: '',
      icon: 'i-ri-weibo-line',
      color: '#E6162D',
    },
    {
      name: '豆瓣(not set)',
      link: '',
      icon: 'i-ri-douban-line',
      color: '#007722',
    },
    {
      name: '网易云音乐(not set)',
      link: '',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: '知乎(not set)',
      link: '',
      icon: 'i-ri-zhihu-line',
      color: '#0084FF',
    },
    {
      name: '哔哩哔哩(not set)',
      link: '',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: '微信公众号(not set)',
      link: '',
      icon: 'i-ri-wechat-2-line',
      color: '#1AAD19',
    },
    {
      name: 'Twitter(not set)',
      link: '',
      icon: 'i-ri-twitter-x-fill',
      color: 'black',
    },
    {
      name: 'Telegram Channel(not set)',
      link: '',
      icon: 'i-ri-telegram-line',
      color: '#0088CC',
    },
    {
      name: 'E-Mail',
      link: 'tet3268688@outlook.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: 'Travelling(not set)',
      link: '',
      icon: 'i-ri-train-line',
      color: 'var(--va-c-text)',
    },
  ],

  search: {
    enable: false,
  },


  sponsor: {
    enable: true,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: '',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: '',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: '',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})
