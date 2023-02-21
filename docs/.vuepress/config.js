const nav = require('./config/nav/')
const sidebar = require('./config/sidebar/')
module.exports = {
  "title": "Blank",
  "base": "/blog/",
  "description": "以蝼蚁之行，展鸿鹄之志。",
  "dest": "./blog",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/img/other/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    [
      "script", {
          "language": "javascript",
          "type": "text/javascript",
          "src": "https://cdn.staticfile.org/jquery/1.7.2/jquery.min.js"
      }
    ],
    [
        "script", {
            "language": "javascript",
            "type": "text/javascript",
            "src": "/js/MouseClickEffect.js"
        }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": nav,
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 7,
        "text": "分类"
      },
      "tag": {
        "location": 8,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/img/other/avatar.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": sidebar,
    "sidebarDepth": 0,
    "lastUpdated": "Last Updated",
    "author": "Blank",
    "authorAvatar": "/img/other/avatar.jpg",
    "record": "Blank",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  },
  plugins: [
    ["@vuepress-reco/vuepress-plugin-kan-ban-niang"],
    [require('./plugins/musicPlayer/index')],
    [require('./plugins/enhanced-search'), { // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
      thirdparty: [ // 可选，默认 []
          {
              title: '在 Baidu 中搜索',
              frontUrl: 'https://www.baidu.com/s?wd=',
          }
      ]
    }],
    ["vuepress-plugin-boxx"]
  ]
}