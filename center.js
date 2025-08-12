// pages/user/center.js
Page({
  data: {
    user: {
      avatar: '/static/user_avatar.png',
      name: '小明同学',
      email: 'xiaoming@example.com'
    },
    collectedCourses: [],
    studyRecords: [
      { id: 1, title: 'Python基础语法', time: '2025-05-10 14:30' },
      { id: 2, title: '数据结构与算法', time: '2025-05-09 19:15' },
      { id: 3, title: 'Web前端开发', time: '2025-05-08 10:45' }
    ],
    navItems: [
      { icon: '/static/icons/home.png', label: '首页', pagePath: '/pages/index/index' },
      { icon: '/static/icons/course.png', label: '课程', pagePath: '/pages/course/list' },
      { icon: '/static/icons/user_active.png', label: '我的', pagePath: '/pages/user/center' },
      { icon: '/static/icons/vip.png', label: '会员', pagePath: '/pages/vip/index' }
    ]
  },

  onShow() {
    this.loadCollectedCourses();
  },

loadCollectedCourses() {
  const collected = wx.getStorageSync('collected') || {};
  // 使用和 pages/course/list/list.js 相同的课程列表数据
  const courseList = [
      {
          id: 4,
          cover: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/course5-Python.png',
          title: 'Python 数据分析实战',
          subject: 'Python',
          students: 235,
          collected: false
      },
      {
          id: 5,
          title: 'React 全栈开发进阶',
          cover: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/course6-React.png',
          subject: 'React',
          students: 95,
          collected: false
      },
      {
          id: 6,
          title: 'UI/UX 设计原理与工具',
          cover: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/course7-UI.png',
          subject: 'UI',
          students: 78,
          collected: false
      },
      {
          id: 7,
          title: '网络安全基础与渗透测试',
          cover: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/course8-WebSafe.png',
          subject: '网络',
          students: 85,
          collected: false
      },
      {
          id: 8,
          title: '人工智能基础入门',
          cover: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/course9-AI.png',
          subject: 'AI',
          students: 120,
          collected: false
      },
      {
          id: 9,
          title: 'Java 高级编程',
          cover: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/course10-Java.png',
          subject: 'Java',
          students: 150,
          collected: false
      },
      {
          id: 10,
          title: '大数据处理与分析',
          cover: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/course11-BigDate.png',
          subject: '大数据',
          students: 180,
          collected: false
      },
      {
          id: 11,
          title: '区块链技术原理',
          cover: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/course12-Blockchain.png',
          subject: '区块链',
          students: 110,
          collected: false
      }
  ];
  
  const collectedList = courseList.filter(item => collected[item.id]);
  this.setData({ collectedCourses: collectedList });
},

  gotoPage(e) {
    const index = e.currentTarget.dataset.index;
    const pagePath = this.data.navItems[index].pagePath;
    
    // 更新导航栏图标状态
    const navItems = this.data.navItems.map((item, i) => {
      const iconName = item.icon.split('/').pop();
      const isActive = i === index;
      
      if (isActive) {
        item.icon = item.icon.replace(iconName, iconName.replace('.png', '_active.png'));
      } else {
        item.icon = item.icon.replace('_active.png', '.png');
      }
      return item;
    });
    
    this.setData({ navItems });
    wx.switchTab({ url: pagePath });
  },

  onLogout() {
    wx.removeStorageSync('userInfo');
    wx.showToast({
      title: '退出成功',
      icon: 'success'
    });
    setTimeout(() => {
      wx.navigateTo({ url: '/pages/login/login' });
    }, 1000);
  }
});