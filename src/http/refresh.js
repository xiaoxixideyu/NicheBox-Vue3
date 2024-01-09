export { AUTH } from "@/common/constants.js"
import { useUserStore } from "@/store/user"

let subscribes =[ ]
let refreshing = false // 设置开关，保证 refresh token 响应前不会被重复执行
let refreshingCnt = 0
const refreshingThreshold = 10

export const addRequest = (request) => {
    subscribes.push(request)
}

export const retryRequest = () => {
    subscribes.forEach(request => request())
    subscribes = []
}

export const refreshToken = () => {
    if (!refreshing || refreshingCnt >= refreshingThreshold) {
        refreshing = true
        const userStore = useUserStore()
        userStore.tryRefreshToken().then(() => {
            refreshing = false
            refreshingCnt = 0
            // 重新请求数据
            retryRequest()
        }).catch(() => {
            refreshing = false
            refreshingCnt = 0
        })
    } else {
        refreshingCnt++
    }
}