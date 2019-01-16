// components/epsoide/epsoide.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index:{
      type:String,
      observer:function(newVal,oldVal,changePath){
        let val=newVal<10?'0'+newVal:newVal;
        this.setData({
          _index:val
        })
      }
    },
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    months:[
      '一月',
      '二月'
    ],
    year:0,
    month:'',
    _index:''
  },
  attached: function(){
    let date=new Date();
    let year=date.getFullYear();
    let month=date.getMonth();
    this.setData({
      year:year,
      month:this.data.months[month]
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
