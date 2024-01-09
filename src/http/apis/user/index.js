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

export const getMyBaseInfo = () => {
    return server({
        url: '/user/getmybaseinfo',
        method: 'post'
    })
}