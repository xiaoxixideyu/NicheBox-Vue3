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
        }
    ]
}