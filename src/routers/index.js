import { main_router } from './main'
import { search_router } from './search'
import { user_router } from './user'

export const routes = [
    { path: '/', redirect: main_router.path},
    main_router,
    search_router,
    user_router
]