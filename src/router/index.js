import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Compact from '../components/Compact.vue'
import Borders from '../components/Borders-modular.vue'
import Buttons from '../components/Buttons.vue'
import Kit from '../components/Kit.vue'
import Shadows from '../components/Shadows.vue'
import Typography from '../components/Typography.vue'
import Backgrounds from '../components/Backgrounds.vue'
const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/compact',
        name: 'Compact',
        component: Compact,
    },
    {
        path: '/borders',
        name: 'Borders',
        component: Borders,
    },
    {
        path: '/kit',
        name: 'Kit',
        component: Kit,
        alias: '',
    },
    {
        path: '/Typography',
        name: 'Typography',
        component: Typography,
    },
    {
        path: '/shadows',
        name: 'Shadows',
        component: Shadows,
    },
    {
        path: '/Backgrounds',
        name: 'Backgrounds',
        component: Backgrounds,
    },
    {
        path: '/Buttons',
        name: 'Buttons',
        component: Buttons,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router