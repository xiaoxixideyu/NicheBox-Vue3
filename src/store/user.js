import { defineStore } from 'pinia'
import { ref } from 'vue'
import { login as httpLogin, refreshToken as httpRefreshToken, getMyBaseInfo as httpGetMyBaseInfo } from '@/http/apis/user'

export const useUserStore = defineStore(
    'userStore',
    () => {
        // token
        const accessToken = ref('')
        const refreshToken = ref('')

        // user base info
        const loggedIn = ref(false)
        const uid = ref('')
        const username = ref('')
        const introduction = ref('')

        const removeAccessToken = () => {
            accessToken.value = ''
        }

        const removeRefreshToken = () => {
            refreshToken.value = ''
        }

        const login = (email, pwd) => {
            return new Promise((resolve, reject) => {
                httpLogin(email, pwd).then(res => {
                    loggedIn.value = true
                    accessToken.value = res.data.token
                    refreshToken.value = res.data.refresh_token
                    resolve()
                }).catch(err => {
                    if (err && err.response) {
                        switch (err.response.status) {
                            case 400: 
                                err.message = '邮箱或密码错误'
                                break
                            default: err.message = '发生未知错误'
                        }
                    }
                    reject(err)
                })
            })
        }

        const logout = () => {
            loggedIn.value = false
            removeAccessToken()
            removeRefreshToken()
        }

        const tryRefreshToken = () => {
            return new Promise((resolve, reject) => {
                httpRefreshToken().then(res => {
                    accessToken.value = res.data.token
                    refreshToken.value = res.data.refresh_token
                    resolve()
                }).catch(err => {
                    if (err && err.response && err.response.status === 401) {
                        removeRefreshToken()
                    }
                    reject(err)
                })
            })
        }

        const getMyBaseInfo = () => {
            return new Promise((resolve, reject) => {
                httpGetMyBaseInfo().then(res => {
                    loggedIn.value = true
                    uid.value = res.data.uid
                    username.value = res.data.username
                    introduction.value = res.data.introduction
                    resolve()
                }).catch(err => {
                    loggedIn.value = false
                    reject(err)
                })
            })
        }

        return { loggedIn, accessToken, refreshToken, uid, username, introduction,
                 removeAccessToken, removeRefreshToken, login, logout, tryRefreshToken, getMyBaseInfo }
    },
    {
        persist: {
            enabled: true
        }
    }
)