export const search_router = {
    path: "/search",
    name: "search",
    component: () => import('@views/search/Search.vue'),
    children: [
    ]
}