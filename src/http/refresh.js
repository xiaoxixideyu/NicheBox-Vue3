export { AUTH } from "@/common/constants.js"
import { useUserStore } from "@/store/user"

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
        userStore.tryRefreshToken().then(() => {
            flag = false
            // 重新请求数据
            retryRequest()
        }).catch(() => {
            flag = false
        })
    }
}