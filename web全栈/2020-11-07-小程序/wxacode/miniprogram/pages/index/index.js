// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  canvas: null,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   * 暗号：talk is cheap
   */
  onReady: function () {
    const query = wx.createSelectorQuery()
    query.select('#myCanvas')
      .fields({ node: true, size: true })
      .exec((res) => {
        const canvas = res[0].node;
        this.canvas = canvas;
        const ctx = canvas.getContext('2d');
        const dpr = wx.getSystemInfoSync().pixelRatio;
        console.log(dpr);
        canvas.width = res[0].width * dpr;
        canvas.height = res[0].height * dpr;
        ctx.scale(dpr, dpr);
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, 300, 300);
      });
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

  },

  /**
   * 保存海报
   * 暗号：talk is cheap
   */
  savePoster() {
    if (this.canvas) {
      wx.canvasToTempFilePath({
        canvas: this.canvas,
        success: res => {
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
          })
        }
      }, this)
    }
  }
})