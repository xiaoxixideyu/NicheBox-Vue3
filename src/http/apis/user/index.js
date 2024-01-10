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

export const sendRegisterCode = (email) => {
    return server({
        url: '/user/sendverificationcode/register',
        method: 'post',
        data: {
            destination: email
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