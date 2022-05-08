import request from '@/utils/request'
export default {

  getUserLoginTime() {
    return request({
      url: '/api/ucenter/member/auth/get/user/login/time',
      method: 'get'
    })
  }
}
