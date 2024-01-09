export { AUTH } from "@/common/constants.js"
import { useUserStore } from "@/store/user";
import server from "./index"

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
        const userStore = useUserStore()
        server.post('/user/refreshtoken').then(res => {
            // 存储新的 token
            userStore.accessToken = res.data.token
            userStore.refreshToken = res.data.refresh_token
            flag = false
            // 重新请求数据
            retryRequest()
        }).catch((err) => {
            // refresh token 失败，退出登录状态
            flag = false
            userStore.removeRefreshToken
        })
    }
}