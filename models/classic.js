import {Http} from '../util/http.js';

class ClassicModel extends Http {
    getLateList(callback){
        this.request({
            url:'/classic/latest',
            success:(res)=>{
               callback(res);
               this._setLatestIndex(res.index);
            }
          })
    }
    //缓存中寻找，或者向API请求
    getPrevious(index,callback){
      let key = this._getKey(index-1);
      let classic = wx.getStorageSync(key);
      if(!classic){
        this.request({
          url: '/classic/previous',
          success: (res) => {
            wx.setStorageSync(this._getKey(res.index),res)
            callback(res)
          }
        })
      }
     
    }

  getNext(index, callback) {
    let key=this._getKey(index+1);
    let classic=wx.getStorageSync(key);
    if(!classic){
      this.request({
        url: '/classic/next',
        success: (res) => {
          wx.setStorageSync(this._getKey(res.index),res)
          callback(res)
        }
      })
    }
    else {
      callback(classic)
    }
  }

    isFirst(index) {
      return index ==1 ? true:false
    }
    isLatest(index) {
     
      let latestIndex = this._getLatestIndex();
      return latestIndex== index? true:false
    }

    _setLatestIndex(index) {
      wx.setStorageSync('latest',index)
    }
    _getLatestIndex() {
      let index=wx.getStorageSync('latest')
      return index
    }
    _getKey(index) {
      let key='classic-'+index;
      return key
    }
} 

export {ClassicModel}