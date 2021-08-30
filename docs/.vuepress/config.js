const friendLink = require("./config/friendLink");
const head = require("./config/head");
const nav = require("./config/nav");

module.exports = {
  title: "李大水",
  description: "李大水",
  head,
  base:"/vuepressBlog/",
  plugins: {
    'permalink-pinyin': {
      lowercase: true, // Converted into lowercase, default: true
      separator: '-' // Separator of the slug, default: '-'
    }
  },
  theme: "reco",
  themeConfig: {
    type: "blog",
    authorAvatar: "/img/xiaoxin.jpg",
    logo: "/img/hero.png",
    subSidebar: 'auto',
    smoothScroll: true,
    // 博客配置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "Category", // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "Tag", // 默认文案 “标签”
      },
    },
    nav,
    
    friendLink,
    // 全局作者名字
    author: '大水',
     // 备案
     record: 'ICP 备案文案',
     recordLink: 'ICP 备案指向链接',
     cyberSecurityRecord: '公安部备案文案',
     cyberSecurityLink: '公安部备案指向链接',
     // 项目开始时间，只填写年份
     startYear: '2017',

  },
};
