import httpAxios from '../utils/http'

// 登录
export const login=(params)=>httpAxios.post('/login',params)
// 注册
export const register=(params)=>httpAxios.post('/register',params)