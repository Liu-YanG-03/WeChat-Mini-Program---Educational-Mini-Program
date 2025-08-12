// app.js
App({
  onLaunch(options) {
    // 小程序初始化完成时触发，全局只触发一次
    console.log('小程序初始化完成', options);
  },
  onShow(options) {
    // 小程序启动，或从后台进入前台显示时触发
    console.log('小程序启动或从后台进入前台', options);
  },
  onHide() {
    // 小程序从前台进入后台时触发
    console.log('小程序从前台进入后台');
  },
  onError(msg) {
    // 小程序发生脚本错误，或者 api 调用失败时触发
    console.error('小程序发生错误', msg);
  },
  globalData: {
    // 全局数据
    userInfo: null
  }
})