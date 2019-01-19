export default [{
  title: '首页',
  icon: 'home',
  key: '/index',
},
  {
    title: '虚拟菜单',
    icon: 'ordered-list',
    key: '/other',
    children: [{
      title: '菜单一',
      icon: 'ordered-list',
      key: '/other/mOne',
    },
      {
        title: '菜单二',
        icon: 'ordered-list',
        key: '/other/mTwo',
      },
      {
        title: '菜单三',
        icon: 'ordered-list',
        key: '/other/mThree',
      },
    ]
  },
  {
    title: '系统管理',
    icon: 'setting',
    key: '/manage',
    children: [{
      title: '个人信息',
      icon: 'user',
      key: '/manage/selfManage',
    },
      {
        title: '角色管理',
        icon: 'database',
        key: '/manage/roleManage',
      },
      {
        title: '用户管理',
        icon: 'team',
        key: '/manage/authorityManage',
      },
    ]
  },
]
