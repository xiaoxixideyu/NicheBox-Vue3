import server from "@/http"

export const sendRegisterCode = (email) => {
    return server({
        url: '/user/sendverificationcode/register',
        method: 'post',
        data: {
            destination: email
        }
    })
}

export const sendForgetPasswordCode = (email) => {
    return server({
        url: '/user/sendverificationcode/forgetpassword',
        method: 'post',
        data: {
            destination: email
        }
    })
}