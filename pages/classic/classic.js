import { ClassicModel } from '../../models/classic';
import { LikeModel } from '../../models/like';
let classicModel=new ClassicModel();
let likeModel=new LikeModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    test:1,
    first:false,
    latest:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModel.getLateList((res)=>{
       this.setData({
         classicData:res
       })
     })
   
  },
  onLike:function(event){
    let behavior=event.detail.behavior;
    likeModel.like(behavior, this.data.classicData.id, this.data.classicData.type)
  },
  onNext:function(event) {
    let index=this.data.classicData.index;
    classicModel.getNext(index, (res) => {
      console.log(res);
      this.setData({
        classicData: res,
        latest: classicModel.isLatest(res.index),
        first: classicModel.isFirst(res.index)
      })
    }) 
  },
  onPrevious:function(event) {
    let index=this.data.classicData.index;
    classicModel.getPrevious(index,(res)=>{
      console.log(res);
      this.setData({
        classicData:res,
        latest:classicModel.isLatest(res.index),
        first:classicModel.isFirst(res.index)
      })
    })

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