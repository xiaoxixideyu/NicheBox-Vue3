export const user_router = {
    path: "/user",
    children: [
        {
            path: 'login',
            name: 'login',
            component: () => import('@views/user/login/Login.vue'),
        }
    ]
}