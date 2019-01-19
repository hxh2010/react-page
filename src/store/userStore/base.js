export default {
  userInfo: {
    userId: 1,
    userName: '张三'
  },
  userMenu:[
    {
      title: '首页',
      icon:'home',
      key: '/index',
    },
    {
      title: '虚拟菜单',
      icon:'ordered-list',
      key: '/other',
      children: [
        {
          title: '菜单一',
          icon:'ordered-list',
          key: '/other/mOne',
        },
        {
          title: '菜单二',
          icon:'ordered-list',
          key: '/other/mTwo',
        },
        {
          title: '菜单三',
          icon:'ordered-list',
          key: '/other/mThree',
        },
      ]
    }
  ],
}
