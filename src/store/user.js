import { defineStore } from 'pinia'
import { ref } from 'vue'
import { login as httpLogin, 
    refreshToken as httpRefreshToken, 
    getMyBaseInfo as httpGetMyBaseInfo, 
    register as httpRegister, 
    sendForgetPassword as httpSendForgetPassword,
    checkEmailExists as httpCheckEmailExists,
    getAvatar as httpGetAvatar,
    uploadAvatar as httpUploadAvatar
     } from '@/http/apis/user'
import { DEFAULT_AVATAR } from '@/common/constants'

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

        // usr avatar url
        const avatarOrigin = ref(DEFAULT_AVATAR)
        const avatarWebp = ref(DEFAULT_AVATAR)

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

        const getAvatar = (uid) => {
            return new Promise((resolve, reject) => {
                httpGetAvatar(uid).then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        }

        const uploadAvatar = (file) => {
            return new Promise((resolve, reject) => {
                httpUploadAvatar(file).then(res => {
                    getAvatar(uid.value).then(res => {
                        setAvatarUrl(res.data.origin_url, res.data.webp_url)
                    })
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        }

        const setAvatarUrl = (origin, webp) => {
            if (origin == 'null') {
                avatarOrigin.value = DEFAULT_AVATAR
            } else {
                avatarOrigin.value = origin
            }
            if (webp == 'null') {
                avatarWebp.value = DEFAULT_AVATAR
            } else {
                avatarWebp.value = webp
            }
        }

        return { loggedIn, accessToken, refreshToken, uid, username, introduction, avatarOrigin, avatarWebp,
                 removeAccessToken, removeRefreshToken, login, logout, tryRefreshToken, getMyBaseInfo, register, forgetPassword, checkEmailExists, getAvatar, uploadAvatar, setAvatarUrl }
    },
    {
        persist: {
            enabled: true
        }
    }
)