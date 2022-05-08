import request from '@/utils/request'

export default {

  isCollect(courseId) {
    return request({
      url: `/api/edu/course/auth/is-collect/${courseId}`,
      method: 'get'
    })
  },

  getCollectList() {
    return request({
      url: '/api/edu/course/auth/get/collect/list',
      method: 'get'
    })
  },

  /**
   * 获取对应课程点赞数
   */
  getLikeCountByCourse(courseId) {
    return request({
      url: `/api/edu/course/get/collect/like/count/${courseId}`,
      method: 'get'
    })
  },

  insertOrUpdateCollectByCourseId(courseId, isCollect) {
    return request({
      url: `/api/edu/course/auth/add/collect/${courseId}/${isCollect}`,
      method: 'post'
    })
  },

  insertOrUpdateLikeByCourseId(courseId, isLike) {
    return request({
      url: `/api/edu/course/auth/add/like/${courseId}/${isLike}`,
      method: 'post'
    })
  },

  isLike(courseId) {
    return request({
      url: `/api/edu/course/auth/is-like/${courseId}`,
      method: 'get'
    })
  }
}
