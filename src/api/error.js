import request from '@/utils/request'
// const Qs = require('qs')

export function sendErrorMsg(params) {
  return request({
    url: '/logApi/index/webLogs',
    method: 'post',
    data: params,
    headers: {
      // 'Content-Type': 'multipart/form-data'
      'Content-Type': 'application/json'
    }
  })
}
