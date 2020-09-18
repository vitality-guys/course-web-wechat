// pages/teacher-msg/teacher-msg.js
var util = require('../../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // ListTouch触摸开始
  ListTouchStart(e) {
    this.setData({
      ListTouchStart: e.touches[0].pageX
    })
  },
  // ListTouch计算方向
  ListTouchMove(e) {
    this.setData({
      ListTouchDirection: e.touches[0].pageX - this.data.ListTouchStart > 0 ? 'right' : 'left'
    })
  },
  // ListTouch计算滚动
  ListTouchEnd(e) {
    if (this.data.ListTouchDirection =='left'){
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    } else {
      this.setData({
        modalName: null
      })
    }
    this.setData({
      ListTouchDirection: null
    })
  },

  jumpToIndex() {
    console.log(util.getCurrentPage());
    if (util.getCurrentPage() === "pages/teacher/teacher-index/teacher-index") {
      return;
    }
    wx.redirectTo({
      url: '../teacher-index/teacher-index',
    })
  },

  jumpToMsg() {
    console.log(util.getCurrentPage());
    if (util.getCurrentPage() === "pages/teacher/teacher-msg/teacher-msg") {
      return;
    }
    wx.redirectTo({
      url: '../teacher-msg/teacher-msg',
    })
  },

  jumpToCourse() {
    if (util.getCurrentPage() === "pages/teacher/teacher-course/teacher-course") {
      return;
    }
    wx.redirectTo({
      url: '../teacher-course/teacher-course',
    })
  },

  jumpToMe() {
    if (util.getCurrentPage() === "pages/pages/teacher/teacher-me/teacher-me") {
      return;
    }
    wx.redirectTo({
      url: '../teacher-me/teacher-me',
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