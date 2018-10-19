import request from '../utils/request'


export default {
    // 获取用户信息
    getUserInfo(data){
        return request('/veToken',{
            method: 'POST',
            body: JSON.stringify(data)
          });
    }
   

}