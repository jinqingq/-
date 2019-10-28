import React from 'react'
import Loadable from 'react-loadable'
function Loading(){
    return <div>Loading...</div>
}
const Index=Loadable({
    loader:()=>import('../view/index/index.js'),
    loading:Loading
})
const Order=Loadable({
    loader:()=>import('../view/index/order.js'),
    loading:Loading
})
const Evaluate=Loadable({
    loader:()=>import('../view/index/evaluate.js'),
    loading:Loading
})
const Business=Loadable({
    loader:()=>import('../view/index/business.js'),
    loading:Loading
})
const routes=[
    {path:'/index',component:Index,children:[
        {path:'/index/order',component:Order},
        {path:'/index/evaluate',component:Evaluate},
        {path:'/index/business',component:Business},
        {from:'/index',to:'/index/order'}
    ]},
    {from:'/',to:'/index'}
]
export default routes