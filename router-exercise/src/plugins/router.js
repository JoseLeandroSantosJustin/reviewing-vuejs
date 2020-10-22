import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home        = () => import(/* webpackChunkName: "coreApplication" */'@/components/Home')
const Login       = () => import(/* webpackChunkName: "coreApplication" */'@/components/Login')
const About       = () => import(/* webpackChunkName: "coreApplication" */'@/components/About')
const NotFound    = () => import(/* webpackChunkName: "coreApplication" */'@/components/NotFound')
const System      = () => import(/* webpackChunkName: "coreApplication" */'@/components/System')
const ListUser    = () => import(/* webpackChunkName: "justAuthenticated" */'@/components/user/List')
const ProfileUser = () => import(/* webpackChunkName: "justAuthenticated" */'@/components/user/Profile')

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '*',
            component: NotFound
        },
        {
            path: '/system',
            component: System,
            beforeEnter: (to, from, next) => {
                if(
                    to.query.username != null &&
                    to.query.username != undefined
                ){
                    next()
                }else{
                    next('/login?notAuthenticate=true')
                }
            }
        },
        {
            path: '/users',
            component: ListUser,
            children: [
                { 
                    path: ':id/profile',
                    component: ProfileUser,
                    props: true
                }
            ]
        }
    ]
})