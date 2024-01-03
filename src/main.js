import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import { routes } from './routers'

// 创建路由实例
const router = createRouter({
    history: createWebHashHistory(), // 使用HTML5的History API
    routes,
});

const app = createApp(App);

app.use(router)

app.mount('#app')