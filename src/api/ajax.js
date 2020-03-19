/*
ajax 请求函数模块
返回值：promise对象
 */
 import axios from 'axios'
export default function ajax(url, data={}, type='GET') {

  return new Promise( (resolve, reject) {
    let promise
    if (type === 'GET') {

    //http://localhost:3000/shops?latitude=40.10038&longitude=116.36867

      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.indexOf('&'))
        url = url + '?' + dataStr
      }
      //发送get请求
      promise = axios.get(url)
    } else {
      //发送POST请求
      promise = axios.post(url, data)
    }
    promise.then(function (response) {
      resolve(response.data)
    }).catch(function (error) {
      reject(error)
    })
  })
}
