export const user_router = {
    path: "/user",
    children: [
        {
            path: 'login',
            name: 'login',
            component: () => import('@views/user/login/Login.vue'),
        },
        {
            path: 'register',
            name: 'register',
            component: () => import('@views/user/register/Register.vue'),
        },
        {
            path: 'forgetPassword',
            name: 'forgetPassword',
            component: () => import('@views/user/forgetPassword/ForgetPassword.vue'),
        },
        {
            path: 'uploadAvatar',
            name: 'uploadAvatar',
            component: () => import('@views/user/uploadAvatar/UploadAvatar.vue'),
        }
    ]
}