import {Http} from '../util/http.js';

class ClassicModel extends Http {
    getLateList(callback){
        this.request({
            url:'/classic/latest',
            success:(res)=>{
               callback(res)
            }
          })
    }
    getPrevious(index,callback){
      this.request({
        url: '/classic/next',
        success:(res)=>{
          callback(res)
        }
      })
    }
} 

export {ClassicModel}