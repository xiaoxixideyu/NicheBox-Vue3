import server from "@/http"

export const login = (email, pwd) => {
    return server({
        url: '/user/login',
        method: 'post',
        data: {
            email: email,
            password: pwd
        }
    })
}

export const register = (email, pwd, code) => {
    return server({
        url: '/user/register',
        method: 'post',
        data: {
            email: email,
            password: pwd,
            code: code
        }
    })
}

export const checkEmailExists = (email) => {
    return server({
        url: '/user/checkemailexists',
        method: 'post',
        data: {
            email: email
        }
    })
}

export const sendForgetPassword = (email, newPwd, code) => {
    return server({
        url: '/user/forgetpassword',
        method: 'post',
        data: {
            email: email,
            new_password: newPwd,
            code: code
        }
    })
} 

export const refreshToken = () => {
    return server({
        url: '/user/refreshtoken',
        method: 'post',
    })
}

export const getMyBaseInfo = () => {
    return server({
        url: '/user/getmybaseinfo',
        method: 'post'
    })
}

export const getAvatar = (uid) => {
    return server({
        url: '/user/getavatar',
        method: 'post',
        data: {
            uid: uid,
        },
    })
}

export const uploadAvatar = (file) => {
    return server({
        url: '/user/uploadavatar',
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: file
    })
}