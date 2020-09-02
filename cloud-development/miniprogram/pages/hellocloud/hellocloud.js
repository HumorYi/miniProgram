// miniprogram/pages/hellocloud/hellocloud.js
Page({
  requestHelloCloud() {
    wx.cloud.callFunction({
      name: 'hellocloud',
      data: {
        a: 10,
        b: 20
      },
      success(res) {
        console.log(res);
      }
    })
  },

  requestGetWeRun() {
    wx.getWeRunData({
      success: (result) => {
        wx.cloud.callFunction({
          name: 'getwerun',
          data: {
            werundata: wx.cloud.CloudID(result.cloudID)
          },
          success(res) {
            console.log(res);
          }
        })
      },
    })
  },

  scanCode() {
    wx.scanCode({
      success(res) {
        wx.cloud.callFunction({
          name: 'getbook',
          data: {
            isbn: res.result
          },
          success(result) {
            console.log(result);
          }
        })
      }
    })
  }
})