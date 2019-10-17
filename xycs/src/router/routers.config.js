import Home from '../views/Home/home'
import Login from '../views/Login/login'
import Details from '../views/Details/details'
import Register from '../views/Register/register'

import Page from '../views/Home/Page/page'
import Classify from '../views/Home/Classify/classify'
import Shopping from '../views/Home/Shopping/shopping'
import My from '../views/Home/My/my'

const routers=[
    {
        path: '/home',
        name: 'home',
        component: Home,
        children:[
            {
                path:'/home/page',
                name:'page',
                meta:{
                    required:false,
                    title:'首页'
                },
                component:Page
            },{
                path:'/home/classify',
                name:'classify',
                meta:{
                    required:false,
                    title:'分类'
                },
                component:Classify
            },{
                path:'/home/shopping',
                name:'shopping',
                meta:{
                    required:true,
                    title:'购物车'
                },
                component:Shopping
            },{
                path:'/home/my',
                name:'my',
                meta:{
                    required:true,
                    title:'我的'
                },
                component:My
            },{
                path:'/home/',
                redirect:'/home/page'
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        meta:{
            required:false,
            title:'登录'
        },
        component: Login
    },
    {
        path: '/details',
        meta:{
            required:false,
            title:'详情'
        },
        name: 'details',
        component: Details
    },{
        path: '/register',
        meta:{
            required:false,
            title:'注册'
        },
        name: 'register',
        component: Register
    },
    {
        path:'/',
        redirect:'/home'
    }
]
export default routers
