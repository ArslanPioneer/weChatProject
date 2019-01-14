// components/like/like.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type:Boolean,
      value:false,
      observer:function(){

      }
    },
    count: {
      type:Number,
      value:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    //封装性 开放性
    //封装在内部，开放出来的
    //粒度
    //非常简单的功能，
    // like: true,
    // count: 99,
    yesSrc: 'images/like.png',
    noSrc: 'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike: function (event) {
      let like=this.properties.like;
      let count=this.properties.count;
      count=like?count-1:count+1;
      this.setData({
        like:!like,
        count:count
      })
      //激活
    let behavior=this.properties.like?'like':'cancel';
    this.triggerEvent('like',{
      behavior:behavior,
    },{})
    }
    
  }
})
