import server from "@/utils/server"

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