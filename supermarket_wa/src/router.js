import vueRouter from 'vue-router'
import App from './App'
import User from './components/User'
import Categories from './components/Categories'
import Inventario from './components/Inventarios'

const router = new vueRouter({
        mode: 'history',
        base: __dirname,
        routes: [
            {
                path: '/',
                name: "root",
                component: App
            },
            {
                path: '/user/:username',
                name: "user",
                component: User
            },
            {
                path: '/user/:username/categories/',
                name: "categories",
                component: Categories
            },
            {
                path: '/user/:username/inventarios/',
                name: "inventarios",
                component: Inventario
            }

        ]
    })

export default router
