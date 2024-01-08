export { AUTH } from "@/config/constants.js"
import { removeRefreshToken, setAccessToken, setRefreshToken } from "@/config/storage"
import server from "./server"

let subscribes=[]
let flag=false // 设置开关，保证 refresh token 响应前不会被重复执行

export const addRequest = (request) => {
    subscribes.push(request)
}

export const retryRequest = () => {
    subscribes.forEach(request => request())
    subscribes = []
}

export const refreshToken = () => {
    if (!flag) {
        flag = true
        server.post('/user/refreshtoken').then(res => {
            // 存储新的 token
            setAccessToken(res.data.token)
            setRefreshToken(res.data.refresh_token)
            flag = false
            // 重新请求数据
            retryRequest()
        }).catch((err) => {
            // refresh token 失败，退出登录状态
            flag = false
            removeRefreshToken()
        })
    }
}