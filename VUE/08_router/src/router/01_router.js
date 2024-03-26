import {createRouter, createWebHashHistory,createWebHistory} from 'vue-router';

import HomeView from '@/views/01_router/HomeView.vue';
import pathVariable from '@/views/01_router/PathVariable.vue';
const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'HomeView',
            component: HomeView
        },
        {
            path: '/pathvariable',
            name: 'path',
            component: pathVariable
        }
    ]

})

// 라우터 내보냄
export default router;