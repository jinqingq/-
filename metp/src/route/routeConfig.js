import React from 'react'
import Loadable from 'react-loadable'

function Loading(){
    return <div>Loading...</div>
}

const Index=Loadable({
    loader:()=>import('../view/Index/index.js'),
    loading:Loading
})
const Login=Loadable({
    loader:()=>import('../view/Login/login.js'),
    loading:Loading
})
const Register=Loadable({
    loader:()=>import('../view/Register/register.js'),
    loading:Loading
})

const Home=Loadable({
    loader:()=>import('../view/Index/Home/home.js'),
    loading:Loading
})
const Dynamic=Loadable({
    loader:()=>import('../view/Index/Dynamic/dynamic.js'),
    loading:Loading
})
const Internal=Loadable({
    loader:()=>import('../view/Index/Internal/internal.js'),
    loading:Loading
})
const Board=Loadable({
    loader:()=>import('../view/Index/Board/board.js'),
    loading:Loading
})
const My=Loadable({
    loader:()=>import('../view/Index/My/my.js'),
    loading:Loading
})

const routes=[
    {path:'/index',component:Index,children:[
        {path:'/index/home',component:Home},
        {path:'/index/dynamic',component:Dynamic},
        {path:'/index/internal',component:Internal},
        {path:'/index/board',component:Board},
        {path:'/index/my',component:My},
        {from:'/index',to:'/index/home'}
    ]},
    {path:'/login',component:Login},
    {path:'/register',component:Register},
    {from:'/',to:'/index'}
]
export default routes