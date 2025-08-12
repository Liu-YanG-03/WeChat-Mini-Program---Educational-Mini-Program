Page({
  data: {
    courseDetail: null,
    isCollected: false,
    teacher: {
      avatar: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/teacher1.png',
      name: '李教授',
      title: '计算机科学博士',
      intro: '拥有15年教学经验，曾在知名科技公司担任高级工程师'
    },
    outline: [
      { title: '课程介绍与环境搭建', time: '25分钟' },
      { title: '基础语法与变量', time: '40分钟' },
      { title: '流程控制与循环', time: '35分钟' },
      { title: '函数与模块', time: '45分钟' },
      { title: '项目实战：小型应用开发', time: '60分钟' }
    ]
  },

  onLoad(options) {
    const id = options.id;
    this.loadCourseDetail(id);
    this.checkCollectStatus(id);
  },

  checkCollectStatus(id) {
    const collected = wx.getStorageSync('collected') || {};
    this.setData({
      isCollected: collected[id] || false
    });
  },
  toggleCollect() {
    const id = this.data.courseDetail.id;
    const collected = wx.getStorageSync('collected') || {};
    const isCollected = !this.data.isCollected;
    collected[id] = isCollected;
    wx.setStorageSync('collected', collected);
    this.setData({
      isCollected
    });
    const operation = isCollected ? '收藏' : '取消收藏';
    wx.showToast({
      title: `${operation}成功`,
      icon: 'none'
    });
  },

  loadCourseDetail(id) {
    // 模拟从服务器获取课程详情
    const courses = [
      {
        id: 0,
        title: 'PS零基础教学',
        cover: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/course1-PS.png',
        teacher: '张老师',
        level: '入门',
        duration: '40课时',
        students: 1258,
        rating: 4.9,
        price: 199,
        description: '从零基础开始，全面掌握Photoshop核心技能，适合设计初学者和爱好者。课程涵盖界面认识、图层操作、选区工具、色彩调整等基础内容，以及海报设计、人像修图、电商美工等实战案例。',
        // 添加对应讲师信息
        teacherInfo: {
          avatar: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/teacher1.png',
          name: '张老师',
          title: '资深设计师',
          intro: '拥有10年设计教学经验，擅长PS软件教学'
        },
        // 添加对应课程大纲
        outline: [
          { title: 'PS界面介绍', time: '20分钟' },
          { title: '图层基础操作', time: '30分钟' },
          { title: '选区工具使用', time: '35分钟' },
          { title: '色彩调整技巧', time: '40分钟' },
          { title: '海报设计实战', time: '60分钟' }
        ]
      },
      {
        id: 1,
        title: 'C++基础教学',
        cover: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/course2-C.png',
        teacher: '王教授',
        level: '初级',
        duration: '60课时',
        students: 876,
        rating: 4.8,
        price: 299,
        description: '系统学习C++编程语言，从基础语法到面向对象编程，适合编程入门者和计算机专业学生。课程内容包括变量与数据类型、控制结构、函数、数组、指针、类与对象、继承与多态等核心知识。',
        // 添加对应讲师信息
        teacherInfo: {
          avatar: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/teacher1.png',
          name: '王教授',
          title: '计算机科学教授',
          intro: '拥有20年编程教学经验，专注于C++语言研究'
        },
        // 添加对应课程大纲
        outline: [
          { title: 'C++环境搭建', time: '25分钟' },
          { title: '基础语法与变量', time: '40分钟' },
          { title: '流程控制与循环', time: '35分钟' },
          { title: '函数与模块', time: '45分钟' },
          { title: '面向对象编程', time: '60分钟' }
        ]
      },
      // 公开体验课
      {
        id: 2,
        title: 'WEB前端高级进阶',
        cover: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/course3-Web.png',
        teacher: '赵老师',
        level: '高级',
        duration: '30课时',
        students: 300,
        rating: 4.7,
        price: 0, // 免费体验课
        description: '深入学习WEB前端高级技术，包括React、Vue.js等框架的使用，适合有一定前端基础的开发者。',
        // 添加对应讲师信息
        teacherInfo: {
          avatar: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/teacher1.png',
          name: '赵老师',
          title: '前端技术专家',
          intro: '拥有8年前端开发经验，精通多种前端框架'
        },
        // 添加对应课程大纲
        outline: [
          { title: 'React框架入门', time: '30分钟' },
          { title: 'Vue.js高级特性', time: '35分钟' },
          { title: '前端性能优化', time: '40分钟' },
          { title: '项目实战：大型前端应用开发', time: '60分钟' }
        ]
      },
      {
        id: 3,
        title: 'MySQL数据库基础',
        cover: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/course4-MySQL.png',
        teacher: '孙老师',
        level: '初级',
        duration: '20课时',
        students: 400,
        rating: 4.6,
        price: 0, // 免费体验课
        description: '学习MySQL数据库的基础知识，包括数据库设计、SQL语句的使用等，适合数据库初学者。',
        // 添加对应讲师信息
        teacherInfo: {
          avatar: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/teacher1.png',
          name: '孙老师',
          title: '数据库专家',
          intro: '拥有12年数据库开发经验，擅长MySQL数据库管理'
        },
        // 添加对应课程大纲
        outline: [
          { title: 'MySQL环境搭建', time: '20分钟' },
          { title: '数据库设计基础', time: '30分钟' },
          { title: 'SQL语句基础', time: '35分钟' },
          { title: '数据库备份与恢复', time: '40分钟' }
        ]
      },
      {
        id: 4,
        title: 'Python 数据分析实战',
        cover: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/course5-Python.png',
        teacher: '陈老师',
        level: '中级',
        duration: '35课时',
        students: 235,
        rating: 4.5,
        price: 150,
        description: '本课程将带领你学习Python在数据分析领域的应用，包括数据采集、清洗、分析和可视化等方面的内容。',
        teacherInfo: {
          avatar: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/teacher1.png',
          name: '陈老师',
          title: '数据分析专家',
          intro: '拥有丰富的数据分析项目经验，擅长使用Python进行数据处理和分析。'
        },
        outline: [
          { title: 'Python基础回顾', time: '20分钟' },
          { title: '数据采集与清洗', time: '30分钟' },
          { title: '数据分析工具与方法', time: '35分钟' },
          { title: '数据可视化', time: '40分钟' },
          { title: '项目实战：电商数据分析', time: '60分钟' }
        ]
      },
      {
        id: 5,
        title: 'React 全栈开发进阶',
        cover: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/course6-React.png',
        teacher: '刘老师',
        level: '高级',
        duration: '40课时',
        students: 95,
        rating: 4.4,
        price: 200,
        description: '本课程深入讲解React全栈开发的高级技术，包括前后端交互、状态管理、性能优化等方面的内容。',
        teacherInfo: {
          avatar: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/teacher1.png',
          name: '刘老师',
          title: '全栈开发工程师',
          intro: '拥有多年的全栈开发经验，擅长使用React进行项目开发。'
        },
        outline: [
          { title: 'React高级特性', time: '25分钟' },
          { title: '前后端交互与API设计', time: '30分钟' },
          { title: '状态管理与性能优化', time: '35分钟' },
          { title: '项目实战：社交网站开发', time: '60分钟' }
        ]
      },
      {
        id: 6,
        title: 'UI/UX 设计原理与工具',
        cover: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/course7-UI.png',
        teacher: '杨老师',
        level: '中级',
        duration: '30课时',
        students: 78,
        rating: 4.3,
        price: 120,
        description: '本课程将介绍UI/UX设计的基本原理和常用工具，帮助你掌握设计的核心技能。',
        teacherInfo: {
          avatar: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/teacher1.png',
          name: '杨老师',
          title: 'UI/UX设计师',
          intro: '拥有丰富的UI/UX设计经验，擅长使用各种设计工具进行界面设计。'
        },
        outline: [
          { title: 'UI/UX设计基础', time: '20分钟' },
          { title: '设计工具介绍与使用', time: '30分钟' },
          { title: '用户体验设计原则', time: '35分钟' },
          { title: '项目实战：APP界面设计', time: '60分钟' }
        ]
      },
      {
        id: 7,
        title: '网络安全基础与渗透测试',
        cover: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/course8-WebSafe.png',
        teacher: '吴老师',
        level: '中级',
        duration: '35课时',
        students: 85,
        rating: 4.2,
        price: 180,
        description: '本课程将带你了解网络安全的基础知识和渗透测试的方法，提高你的网络安全意识。',
        teacherInfo: {
          avatar: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/teacher1.png',
          name: '吴老师',
          title: '网络安全专家',
          intro: '拥有多年的网络安全工作经验，擅长进行渗透测试和安全评估。'
        },
        outline: [
          { title: '网络安全基础概念', time: '20分钟' },
          { title: '渗透测试工具与方法', time: '30分钟' },
          { title: '漏洞扫描与修复', time: '35分钟' },
          { title: '项目实战：网站渗透测试', time: '60分钟' }
        ]
      },
      {
        id: 8,
        title: '人工智能基础入门',
        cover: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/course9-AI.png',
        teacher: '周老师',
        level: '初级',
        duration: '30课时',
        students: 120,
        rating: 4.1,
        price: 100,
        description: '本课程将为你介绍人工智能的基本概念和常用算法，让你对人工智能有一个初步的了解。',
        teacherInfo: {
          avatar: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/teacher1.png',
          name: '周老师',
          title: '人工智能研究员',
          intro: '专注于人工智能领域的研究，对机器学习和深度学习有深入的了解。'
        },
        outline: [
          { title: '人工智能概述', time: '20分钟' },
          { title: '机器学习基础', time: '30分钟' },
          { title: '深度学习入门', time: '35分钟' },
          { title: '项目实战：图像识别', time: '60分钟' }
        ]
      },
      {
        id: 9,
        title: 'Java 高级编程',
        cover: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/course10-Java.png',
        teacher: '郑老师',
        level: '高级',
        duration: '40课时',
        students: 150,
        rating: 4.0,
        price: 220,
        description: '本课程将深入讲解Java的高级特性和应用，包括多线程、网络编程、数据库操作等方面的内容。',
        teacherInfo: {
          avatar: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/teacher1.png',
          name: '郑老师',
          title: 'Java开发工程师',
          intro: '拥有多年的Java开发经验，擅长使用Java进行企业级应用开发。'
        },
        outline: [
          { title: 'Java高级特性回顾', time: '20分钟' },
          { title: '多线程与并发编程', time: '30分钟' },
          { title: '网络编程与数据库操作', time: '35分钟' },
          { title: '项目实战：电商系统开发', time: '60分钟' }
        ]
      },
      {
        id: 10,
        title: '大数据处理与分析',
        cover: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/course11-BigDate.png',
        teacher: '王老师',
        level: '中级',
        duration: '35课时',
        students: 180,
        rating: 4.6,
        price: 160,
        description: '本课程将介绍大数据处理和分析的基本概念和常用工具，帮助你掌握大数据处理的核心技能。',
        teacherInfo: {
          avatar: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/teacher1.png',
          name: '王老师',
          title: '大数据分析师',
          intro: '拥有丰富的大数据处理和分析经验，擅长使用Hadoop、Spark等工具进行数据处理。'
        },
        outline: [
          { title: '大数据概述', time: '20分钟' },
          { title: 'Hadoop与MapReduce', time: '30分钟' },
          { title: 'Spark与数据挖掘', time: '35分钟' },
          { title: '项目实战：电商大数据分析', time: '60分钟' }
        ]
      },
      {
        id: 11,
        title: '区块链技术原理',
        cover: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/course12-Blockchain.png',
        teacher: '李老师',
        level: '中级',
        duration: '30课时',
        students: 110,
        rating: 4.5,
        price: 130,
        description: '本课程将介绍区块链技术的基本原理和应用场景，帮助你了解区块链的核心概念。',
        teacherInfo: {
          avatar: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/teacher1.png',
          name: '李老师',
          title: '区块链专家',
          intro: '专注于区块链技术的研究和应用，对区块链的底层原理有深入的了解。'
        },
        outline: [
          { title: '区块链概述', time: '20分钟' },
          { title: '区块链技术原理', time: '30分钟' },
          { title: '智能合约与应用开发', time: '35分钟' },
          { title: '项目实战：区块链钱包开发', time: '60分钟' }
        ]
      }
    ];
  
  
    const course = courses[id];
    if (course) {
      this.setData({ 
        courseDetail: course,
        teacher: course.teacherInfo,
        outline: course.outline
      });
    }
  }
});