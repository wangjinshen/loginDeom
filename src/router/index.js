import VueRouter from 'vue-router'
import Home from '../content/heom/index.vue'
import login from '../content/login/login.vue'
import Register from '../content/register/index.vue'


const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: "/login",
            component: login
        },
        {
            path: "/Home",
            component: Home
        },{
            path: "/Register",
            component: Register
        }
    ]
})
export default router