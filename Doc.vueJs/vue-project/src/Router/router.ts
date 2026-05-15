import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../components/HomePage.vue'
import DashboardPage from '../components/dashboard.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomePage },
        { path: '/dashboard', component: DashboardPage },
    ]
})

export default router