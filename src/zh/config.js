const config = {
  home: '/zh/',
  // 将会被设置为 <html> 的 lang 属性
  lang: 'zh',
  // 语言选择栏的标签名称
  selectText: '简体中文',
  // 默认标题(用于SEO)
  title: '埃尔兰根中德促进协会',
  // 默认页面描述(用于SEO)
  description: '埃尔兰根中德促进协会的中文描述',
  // 导航列表
  navList: [{
    title: '我们的课程',
    url: '/lesson'
  }, {
    title: '我们的活动',
    url: '/activity'
  }, {
    title: '学习园地',
    url: '/learn'
  }, {
    title: '互助与关怀',
    url: '/care'
  }, {
    title: '关于我们',
    url: '/about'
  }, {
    title: '下载专区',
    url: '/download'
  }]
}

module.exports = config
