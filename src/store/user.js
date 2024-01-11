import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login as httpLogin, 
    refreshToken as httpRefreshToken, 
    getMyBaseInfo as httpGetMyBaseInfo, 
    register as httpRegister, 
    sendForgetPassword as httpSendForgetPassword,
    checkEmailExists as httpCheckEmailExists
     } from '@/http/apis/user'

export const useUserStore = defineStore(
    'userStore',
    () => {
        const router = useRouter()
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

        const register = (email, pwd, code) => {
            return new Promise((resolve, reject) => {
                httpRegister(email, pwd, code).then(res => {
                    if (res.data.login_success) {
                        loggedIn.value = true
                        accessToken.value = res.data.token
                        refreshToken.value = res.data.refresh_token
                    }
                    resolve(res.data.login_success)
                }).catch(err => {
                    if (err && err.response) {
                        switch (err.response.status) {
                            case 400: 
                                err.message = err.response.data
                                break
                            default: err.message = '发生未知错误'
                        }
                    }
                    reject(err)
                })
            })
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

        const forgetPassword = (email, pwd, code) => {
            return new Promise((resolve, reject) => {
                httpSendForgetPassword(email, pwd, code).then(res => {
                    resolve()
                }).catch(err => {
                    if (err && err.response) {
                        switch (err.response.status) {
                            case 400: 
                                err.message = err.response.data
                                break
                            default: err.message = '发生未知错误'
                        }
                    }
                    reject(err)
                })
            })
        }

        const checkEmailExists = (email) => {
            return new Promise((resolve, reject) => {
                httpCheckEmailExists(email).then(res => {
                    resolve(res.data.exist)
                }).catch(err => {
                    if (err && err.response) {
                        switch (err.response.status) {
                            case 400: 
                                err.message = err.response.data
                                break
                            default: err.message = '发生未知错误'
                        }
                    }
                    reject(err)
                })
            })
        }

        return { loggedIn, accessToken, refreshToken, uid, username, introduction,
                 removeAccessToken, removeRefreshToken, login, logout, tryRefreshToken, getMyBaseInfo, register, forgetPassword, checkEmailExists }
    },
    {
        persist: {
            enabled: true
        }
    }
)