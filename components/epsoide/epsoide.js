// components/epsoide/epsoide.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index:{
      type:Number,
      observer:function(newVal,oldVal,changePath){
        let val=newVal<10?'0'+newVal:newVal
      }
    },
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    year:0,
    month:''
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
