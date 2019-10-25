import Index from '../views/index/index'
import Address from '../views/address/address'
import Detail from '../views/detail/detail'
import Add from '../views/add/add'

import Home from '../views/index/home/home'
import Find from '../views/index/find/find'
import Member from '../views/index/member/member'
import Shopping from '../views/index/shopping/shopping'
import My from '../views/index/my/my'

import Ddcs from '../views/index/home/ddcs/ddcs'
import Qqjx from '../views/index/home/qqjx/qqjx'

const routes=[
    {path: '/index',name: 'index',component: Index,children:[
        {path: '/index/home',name: 'home',component: Home,children:[
            {path: '/index/home/ddcs',name: 'ddcs',component:Ddcs},
            {path: '/index/home/qqjx',name: 'qqjx',component:Qqjx},
            {path:'/index/home',redirect:'/index/home/ddcs'}
        ]},
        {path: '/index/find',name: 'find',component: Find},
        {path: '/index/member',name: 'member',component: Member},
        {path: '/index/shopping',name: 'shopping',component: Shopping},
        {path: '/index/my',name: 'my',component: My},
        {path:'/index',redirect:'/index/home'}
    ]},
    {path: '/address',name: 'address',component:Address},
    {path: '/add',name: 'add',component:Add},
    {path: '/detail',name: 'detail',component:Detail},
    {path:'/',redirect:'/index'}
]
export default routes