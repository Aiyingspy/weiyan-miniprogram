// pages/login/login.js
var util = require("../../utils/util.js");
import Toast from "../../miniprogram_npm/vant-weapp/toast/toast"

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    password:'',
  },

  /**
   * 登录
   */
  loginFun: function (e) {
    
    var username = e.detail.value.username;
    var userpwd = e.detail.value.password;

    if ('' == util.trim(username) || '' == util.trim(userpwd)) {
    Toast.fail('输入不能为空');
    } else {
      var url = '/login'+'/'+username+'/'+userpwd
      console.log("名字:" + this.username)
      this.http(url, username, this.loginCallback);
     }

  },
  http: function (urlAttr, username, loginCallback) {
    wx.request({
      url: app.globalData.url + urlAttr,
      method: "GET",
      header: app.globalData.header,
      success(res) {
        loginCallback(username, res.data);
      }
    })
  },
  loginCallback: function (username, res) {
    if (username == res[0].user_name) {
      Toast.success("登陆成功")
      wx.switchTab({
        url: '../my/my',
      })
    }
    else {
      Toast.fail('账号或密码有误')
    }
  },


  toRegister:function(){
    wx.navigateTo({
      url: '../register/register',
    })
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