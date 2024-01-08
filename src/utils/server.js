import axios from "axios";
import * as storage from "@/config/storage"
import * as constants from "@/config/constants"
import { addRequest, refreshToken } from "./refresh";

const server = axios.create({
    baseURL: '/api/',
    timeout: 60000,
    headers: {
        "Content-type": "application/json;charset=UTF-8"
    }
})

// 请求拦截器
server.interceptors.request.use(config => {
    // 获取 access token，携带到请求头，服务端校验
    let accessToken = storage.getAccessToken()
    if (!accessToken) {
        accessToken = storage.getRefreshToken()
    }
    config.headers[constants.AUTH] = accessToken
    return config
})

// 响应拦截器
server.interceptors.response.use(
    async response => {
        return response
    },
    error => {
        if (error.request) {
            console.log(error.request)
        } else if (error.response) {
            console.log(error.response.data)
            console.log(error.response.status)
        }
        if (error && error.response) {
            switch (error.response.status) {
                case 401:   // 鉴权失败
                    return new Promise((resolve) => {
                        // 移除失效的 access token
                        storage.removeAccessToken()
                        // 把过期请求存储起来，用于请求到新的短 token，再次请求，达到无感刷新
                        addRequest(() => resolve(server(error.config)))
                        // 携带 refresh token 请求新的 token
                        refreshToken()
                    })
                default: error.message = '连接出错'
            }
        }
        return Promise.reject(error)
    }
)

export default server