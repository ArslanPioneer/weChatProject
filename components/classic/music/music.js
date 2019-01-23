const player = wx.getBackgroundAudioManager()
Component({
  /**
   * 组件的属性列表
   */
  
  properties: {
    musicSrc:String,
    img:String,
    content:String,
    hidden:Boolean,
    
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
      debugger
      this.setData({
        playing:!(this.data.playing)
      })
      player.src=this.properties.musicSrc
    }
     
  }
})
