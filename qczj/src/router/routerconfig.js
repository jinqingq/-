import React from 'react'
import Loadable from 'react-loadable'

function Loading(){
    return <div>loading...</div>
}

const Index=Loadable({
    loader:()=>import('../views/index/index.js'),
    loading:Loading
})
const Login=Loadable({
    loader:()=>import('../views/login/login.js'),
    loading:Loading
})
const Search=Loadable({
    loader:()=>import('../views/search/search.js'),
    loading:Loading
})
const My=Loadable({
    loader:()=>import('../views/my/my.js'),
    loading:Loading
})

const Home=Loadable({
    loader:()=>import('../views/index/Home/home.js'),
    loading:Loading
})
const Lookcar=Loadable({
    loader:()=>import('../views/index/lookcar/lookcar.js'),
    loading:Loading
})
const Forum=Loadable({
    loader:()=>import('../views/index/forum/forum.js'),
    loading:Loading
})
const Usedcar=Loadable({
    loader:()=>import('../views/index/usedcar/usedcar.js'),
    loading:Loading
})
const Service=Loadable({
    loader:()=>import('../views/index/service/service.js'),
    loading:Loading
})

const routes=[
    {path:'/index',component:Index,children:[
        {path:'/index/home',component:Home},
        {path:'/index/lookcar',component:Lookcar},
        {path:'/index/forum',component:Forum},
        {path:'/index/usedcar',component:Usedcar},
        {path:'/index/service',component:Service},
        {from:'/index',to:'/index/home'}
    ]},
    {path:'/login',component:Login},
    {path:'/search',component:Search},
    {path:'/my',component:My},
    {from:'/',to:'/index'}
]

export default routes