// pages/register/register.js
var util = require("../../utils/util.js");
import Toast from "../../miniprogram_npm/vant-weapp/toast/toast"
const app = getApp()
Page({

  registerFun:function(e){
    var username = e.detail.value.username;
    var userpwd1 = e.detail.value.password1;
    var userpwd2 = e.detail.value.password2;

    if ('' == util.trim(username) || '' == util.trim(userpwd1) || '' == util.trim(userpwd2)) {
      Toast.fail('输入不可为空')
    } else if (userpwd1 != userpwd2) {
      Toast.fail("密码前后不一致")
      this.setData({
        password1:'',
        password2:'',
      })
      }
      else {
        var url = '/login' + '/' + username + '/' + userpwd1
      this.http(url, username, userpwd1,  this.loginCallback)
      }

  },
  http: function (urlAttr, username, userpwd1,  loginCallback) {
    wx.request({
      url: app.globalData.url + urlAttr,
      method: "GET",
      header: app.globalData.header,
      success(res) {
        loginCallback(res.data,username, userpwd1, );
      }
    })  
  },
  loginCallback: function (res, username, userpwd1, ) {
    if (res != null) {
      Toast.fail('用户名已被注册')
      this.setData({
        username:'',
        password1:'',
        password2:'',
      })
    }
    else{
      console.log("名字1："+username)
      var url = '/register' + '/' + username + '/' + userpwd1
      this.https(url, username, this.registerCallback)
    }
   
  },

  https: function (urlAttr, username,  registerCallback) {
    wx.request({
      url: app.globalData.url + urlAttr,
      method: "GET",
      header: app.globalData.header,
      success(res) {
        registerCallback(res.data, username);
      }
    })
  },
  registerCallback: function (res, username) {
    console.log("名字2：" + username)
    if (username == res[0].user_name) {
      Toast.success('注册成功');
      wx.navigateTo({
        url: '../login/login',
      })
    }
  },
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})