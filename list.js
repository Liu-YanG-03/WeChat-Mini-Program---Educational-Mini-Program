// pages/course/list.js
Page({
  data: {
    banners: ['https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/banner1.jpg', 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/banner2.jpg'],
    courseList: [
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
    ],
    collectedCourses: []
  },

onLoad(options) {
  // 初始化数据
  const collected = wx.getStorageSync('collected') || {};
  const newCourseList = this.data.courseList.map(course => {
      course.collected = collected[course.id] || false;
      return course;
  });

  let finalCourseList = newCourseList;
  if (options.showCollected === 'true') {
      finalCourseList = newCourseList.filter(course => course.collected);
  }

  this.setData({
      courseList: finalCourseList
  });
},

  // 跳转详情
  navToDetail(e) {
    console.log('跳转详情', e);
    const id = e.currentTarget.dataset.id; // 直接使用data-id传递的课程id
    wx.navigateTo({
      url: `/pages/course/detail?id=${id}`
    });
  },

  // 收藏功能
  toggleCollect(e) {
    const id = e.currentTarget.dataset.id;
    const courseList = this.data.courseList;
    const index = courseList.findIndex(course => course.id === id);
    const collected = courseList[index].collected;
    const operation = collected ? '取消收藏' : '收藏';

    wx.showToast({
      title: `${operation}成功`,
      icon: 'none'
    });

    courseList[index].collected = !collected;
    const collectedCourses = courseList.filter(course => course.collected);
    const collectedObj = {};
    collectedCourses.forEach(course => {
      collectedObj[course.id] = true;
    });
    wx.setStorageSync('collected', collectedObj);

    this.setData({
      courseList,
      collectedCourses
    });
  },

  // 跳转学习页面
  gotoStudy(e) {
    const id = e.currentTarget.dataset.id; // 直接使用data-id传递的课程id
    wx.navigateTo({
      url: `/pages/study/study?id=${id}`
    });
  }
});