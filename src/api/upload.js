
import request from '@/utils/request'

export function upload(formData) {
  return request({
    url: '/api/upload/uploadFiles',
    method: 'post',
    formData,
    headers: {
      processData: false, // 不处理数据
      contentType: false // 不设置内容类型
    }
  })
}
