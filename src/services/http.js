import request from '../utils/request'


export default {
    // 获取用户信息
    getUserInfo(data){
        return request('/weatch/veToken',{
            method: 'POST',
            body: JSON.stringify(data)
          });
    },
    // 获取领取红包信息
    getRewardRed(data){
        return request('/weatch/redActivity',{
            method: 'POST',
            body: JSON.stringify(data)
          });
    }
   

}