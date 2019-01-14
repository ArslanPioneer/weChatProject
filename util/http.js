import {config} from '../config.js';
const tips={
  1:'出现了一个默认错误',
  1005:'appKey无效',
  3000:'期刊不存在'
}
class Http {
    request(params){
        if(!params.method){
            params.method="GET"
        }
        wx.request({
            url:config.api_base_url+params.url,
            method:params.method,
            data:params.data,
            header:{
                'content-type':'application/json'
            },
            success:(res)=>{
              debugger
                let code=res.statusCode.toString();
                if(code.startsWith('2')){
                    params.success && params.success(res.data)
                }   
            },
            fail:(err)=>{

            }
        })
    }
    _show_error(error_code){
        wx.showToast({
            title:tips[error_code],
            icon:'none',
            duration:2000
        })
    }
}
export {Http}