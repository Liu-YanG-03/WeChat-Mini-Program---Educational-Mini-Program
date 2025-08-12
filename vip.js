Page({
  data: {
    vipLevel: 3,
    benefits: [
      {
        icon: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/benefit1.png',
        text: '无限课程畅学'
      },
      {
        icon: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/benefit2.png',
        text: '专属客服服务'
      },
      {
        icon: 'https://gitee.com/Liu-YanGG-Bond/educational-we-chat-mini-programs/raw/master/benefit3.png',
        text: '优先参与活动'
      }
    ],
    expiryDate: '2025-12-31',
    privilegeDesc: '成为 VIP 会员，您将享受无限课程畅学、专属客服服务、优先参与活动等特权。让您的学习之旅更加便捷和高效！'
  },

  onRenew() {
    wx.showToast({
      title: '跳转续费页面',
      icon: 'none'
    });
  }
});