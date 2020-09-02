//index.js
//获取应用实例
const app = getApp()

Page({
  jumpDiscoverPage() {
    // 注意：navigaeTo 和 tabBar 不能混用
    wx.navigateTo({
      url: '/pages/discover/discover',
    })
  },

  scanCode() {
    wx.scanCode({
      success(res) {
        console.log(res)
      }
    })
  },

  openLocation() {
    wx.getLocation({
      success(res) {
        wx.openLocation({
          latitude: res.latitude,
          longitude: res.longitude,
        })
      }
    })
  },

  chooseLocation() {
    wx.getLocation({
      success(res) {
        wx.chooseLocation({
          latitude: res.latitude,
          longitude: res.longitude,
        })
      }
    })
  }
})
