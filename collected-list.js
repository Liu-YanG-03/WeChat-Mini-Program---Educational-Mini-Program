// pages/course/collected-list.js
Page({
  data: {
    collectedCourses: [],
    searchKeyword: '',
    searchResults: [],
    isSearchPage: false
  },

  onLoad() {
    wx.setNavigationBarTitle({
      title: '我的收藏'
    });
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

  // 跳转学习页面
  gotoStudy(e) {
    const id = e.currentTarget.dataset.id; // 直接使用data-id传递的课程id
    wx.navigateTo({
      url: `/pages/study/study?id=${id}`
    });
  },

  onSearchInput(e) {
    const keyword = e.detail.value;
    this.setData({
      searchKeyword: keyword
    });
    this.onSearch();
  },

  onSearchFocus() {
    this.setData({
      isSearchPage: true,
      searchResults: [],
      searchKeyword: ''
    });
  },

  onSearch() {
    const keyword = this.data.searchKeyword.toLowerCase(); // 不区分大小写
    const allCourses = this.data.collectedCourses;
    const results = allCourses.filter(course => course.title.toLowerCase().includes(keyword));
    if (results.length === 0) {
      wx.showToast({
        title: '未搜索到相关结果',
        icon: 'none'
      });
    } else {
      wx.showToast({
        title: `搜索到 ${results.length} 条结果`,
        icon: 'none'
      });
    }
    this.setData({
      searchResults: results
    });
  },

  onCancelSearch() {
    this.setData({
      isSearchPage: false,
      searchResults: [],
      searchKeyword: ''
    });
  }
});