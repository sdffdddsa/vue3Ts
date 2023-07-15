// @ts-ignore
import {createRouter,createWebHistory,createWebHashHistory} from 'vue-router'
import home from '../pages/home.vue'
import about from '../pages/about.vue'
import login from '../pages/login.vue'
import video from '../pages/video.vue'

const Home: typeof home = home

const routes = [
    {path:'/',component:Home},
    {path:'/about',component:about},
    {path:'/login',component:login},
    {path:'/video/:id',component:video},
]

const router = createRouter({
    routes,
    history:createWebHashHistory()
})

export default router