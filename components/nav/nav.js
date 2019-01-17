// components/nav/nav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String,
    latest:Boolean,
    first:Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    title:'',
    leftSrc:'./images/triangle@left.png',
    disLeftSrc:'./images/triangle.dis@left.png',
    rightSrc:'./images/triangle@right.png',
    disRightSrc:'./images/triangle.dis@right.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft:function(){
      if(!this.properties.left){
        this.triggerEvent('left', {}, {})
      }
      
    },
    onRight:function() {
      if(!this.properties.right){
        this.triggerEvent('right', {}, {})
      }
      
    }
  }
})
