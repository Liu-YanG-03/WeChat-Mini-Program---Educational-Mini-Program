// pages/login/login.js
Page({
  data: {
    username: '',
    password: ''
  },

  onUsernameInput(e) {
    this.setData({
      username: e.detail.value
    });
  },

  onPasswordInput(e) {
    this.setData({
      password: e.detail.value
    });
  },

  onLogin() {
    const { username, password } = this.data;
    if (username && password) {
      const userInfo = {
        username,
        password
      };
      wx.setStorageSync('userInfo', userInfo);
      wx.showToast({
        title: '登录成功',
        icon: 'success'
      });
      wx.navigateBack({
        delta: 1
      });
    } else {
      wx.showToast({
        title: '请输入用户名和密码',
        icon: 'none'
      });
    }
  }
});