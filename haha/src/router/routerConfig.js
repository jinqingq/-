import Index from '../views/index/index'
import Address from '../views/address/address'
import Add from '../views/add/add'

import Home from '../views/index/home/home'
import Classfiy from '../views/index/classfiy/classfiy'
import Member from '../views/index/member/member'
import Shopping from '../views/index/shopping/shopping'
import My from '../views/index/my/my'

import Ddcs from '../views/index/home/ddcs/ddcs'
import Qqjx from '../views/index/home/qqjx/qqjx'

const routes=[
    {path:'/index',name:'index',component:Index,children:[
        {path:'/index/home',name:'home',component:Home,children:[
            {path:'/index/home/ddcs',name:'ddcs',component:Ddcs},
            {path:'/index/home/qqjx',name:'qqjx',component:Qqjx}
        ]},
        {path:'/index/classfiy',name:'classfiy',component:Classfiy},
        {path:'/index/member',name:'member',component:Member},
        {path:'/index/shopping',name:'shopping',component:Shopping},
        {path:'/index/my',name:'my',component:My}
    ]},
    {path:'/address',name:'address',component:Address},
    {path:'/add',name:'add',component:Add},
    {path:'/',redirect:'/index/home/ddcs'}
]
export default routes