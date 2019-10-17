import Vue from 'vue'
import Router from 'vue-router'
import routers from './routers.config'

Vue.use(Router)

// 路由
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routers
})

// 全局守卫
router.beforeEach((to,from,next)=>{
  if(to.matched.some(item => item.meta.required)){
    if(!window.localStorage.token){
      next({
        path:'/login',
        query:{
          redirect:to.fullPath
        }
      })
    }else{
      next()
    }
  }else{
    next()
  }
})

export default router
