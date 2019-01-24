const mMgr = wx.getBackgroundAudioManager()
Component({
  /**
   * 组件的属性列表
   */
  
  properties: {
    musicSrc:String,
    img:String,
    content:String,
    hidden:Boolean,
    title:String
  },
  
  /**
   * 组件的初始数据
   */
  data: {
    pauseSrc:'./images/player@pause.png',
    playSrc:'./images/player@play.png',
    playing:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay:function(event) {
      if(this.data.playing){
        this.setData({
          playing:true
        })
        mMgr.src = this.properties.musicSrc;
        mMgr.title = this.properties.title;
      }
      else {
        this.setData({
          playing:false
        })
        mMgr.pause();
      }
    }
     
  }
})
