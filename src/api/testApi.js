import request from '@/utils/request'

export function getUserMsg() {
  return request({
    url: '/getUserMsg', // 假地址 自行替换
    method: 'get'
  })
}
