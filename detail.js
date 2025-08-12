// pages/course/detail.js
Page({
  data: {
    courseDetail: {},
    teacher: {
      avatar: '/static/teacher_avatar.png',
      name: '王老师',
      experience: '10年教龄',
      intro: '专注高中数学教学，擅长知识体系构建'
    }
  },

  onLoad(options) {
    const courseId = options.id;
    this.getCourseDetail(courseId);
  },

  getCourseDetail(id) {
    // 模拟接口请求（实际替换为wx.request）
    setTimeout(() => {
      const mockDetail = {
        id: 1,
        title: '高中数学必修一',
        cover: '/static/course5.png',
        studyCount: 3568,
        lessons: 24,
        isFree: true,
        isHot: true,
        price: 99,
        outline: [
          { title: '集合与函数概念', desc: '掌握集合的基本运算，理解函数的定义与表示' },
          { title: '基本初等函数', desc: '学习指数函数、对数函数、幂函数的性质与图像' }
        ]
      };
      this.setData({ courseDetail: mockDetail });
    }, 500);
  }
})