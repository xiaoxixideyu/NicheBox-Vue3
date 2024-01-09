// import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import App from './App.vue'
import { routes } from './routers'

// 创建路由实例
const router = createRouter({
    history: createWebHashHistory(), // 使用HTML5的History API
    routes,
});

// 创建 pinia
const pinia = createPinia()
pinia.use(piniaPersist)

const app = createApp(App);
app.use(router)
app.use(pinia)
app.mount('#app')