// pages/discover/discover.js
Page({
    jumpMinePage() {
      console.log(getCurrentPages());
      
      wx.redirectTo({
        url: '/pages/mine/mine',
      })
    }
})