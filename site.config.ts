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
      name: 'steam',
      link:'https://s.team/p/cmrq-bmdc/DWRRDTNJ',
      icon: 'i-ri-steam-line',
      color: 'black',
    },
    {
      name: '1785131421',
      link: 'https://qm.qq.com/q/fY2JVDJdFQ',
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
      name: 'E-Mail: tet3268688@outlook.com',
      link: '/email',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: '闲鱼',
      link:'https://m.tb.cn/h.TvCSCVO?tk=S6wwelfeQpD',
      icon:'i-ri-taobao-line',
      color: 'orange',
    },
  ],

  search: {
    enable: true,
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
