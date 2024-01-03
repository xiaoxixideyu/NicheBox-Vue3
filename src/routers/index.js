import { main_router } from './main'
import { search_router } from './search'

export const routes = [
    { path: '/', redirect: main_router.path},
    main_router,
    search_router,
]