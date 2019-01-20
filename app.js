//app.js
App({

  onShow:function(){
    wx.navigateTo({
      url: '/pages/login/login',
      success:function(e){
        console.log(e)
      }
    })
  },
  globalData: {
    header:{
      'content-type': 'application/json' // 默认值
    },
    url:"https://aiying.club"
  }
})