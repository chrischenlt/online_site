import request from '~/utils/request'

export default {

  getList(searchObj) {
    return request({
      url: '/api/edu/article/list',
      method: 'get'
    })
  },

  getById(id) {
    return request({
      url: `/api/edu/article/get/${id}`,
      method: 'get'
    })
  }
}
