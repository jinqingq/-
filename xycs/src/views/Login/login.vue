// 登录
<template>
    <div class='login'>
        <h2>登录页面</h2>
        <li><input type='text' placeholder="手机号" v-model="phone"/></li>
        <li><input type='password' placeholder="密码" v-model="pwd"/></li>
        <li><input type='button' value="登录" @click='goToLogin'/></li>
        <li><router-link to='/register'>注册</router-link></li>
    </div>
</template>
<script>
 import {login} from '../../api/api'
export default {
    name:'login',
    // props:{

    // },
    // components:{

    // },
    data(){
        return {
            phone:'',
            pwd:''
        }
    },
    // computed:{

    // },
    methods:{
        async goToLogin(){
            try{
                let res = await login({phone:this.phone,password:this.pwd})
                // console.log(res)
                if(res.data.code==1){
                    window.localStorage.token = res.data.data.token
                }
                this.$router.push({path:this.$route.query.redirect})
            } catch(e){
                if(e.response.data.code===0){
                    
                    alert('用户名获密码有误，请重新输入')
                     //console.log(e.response.data)
                    //this.$toast(e.response.data.msg,3500)
                     this.$router.push({path:'/register'})
                    
                }
            }
        }

        //  axios 
        //  .post('/api/user/login',{phone:this.phone,password:this.pwd})
        //  .then(res=>{
        //      console.log(res)
        //     //  登陆成功   1.存token  2.跳转路由
        //     if(res.data.code==1){
        //         window.localStorage.token=res.data.data.token
        //     }
        //     this.$router.push({path:this.$route.query.redirect})
        //  }).catch((e)=>{
        //      if(e.response.data.code===0){
        //          this.$router.push({path:'/redister'})
        //      }
        //      console.log(e.response.data)
        //  })
    },
    // created(){

    // },
    // mounted(){

    // }
}
</script>
<style scoped>
*{
    list-style: none;
    margin:0;
    padding:0;
}
html,body{
    width: 100%;
    height: 100%;
}
.login{
    width: 100%;
    height: 100%;
    margin-top:150px;
}
li{
    text-align: center;
    height: 60px;
    line-height: 60px;
}
li span{
    width: 100px;
}
li input{
    width: 280px;
    height: 35px;
    border:1px solid orangered;
    border-radius: 5px;
    padding-left:10px;
}
li:nth-child(4) input{
    background: orangered;
    color:white;
    font-size: 16px;
}
h2{
    font-weight: normal;
    margin-bottom:20px;
}
li a{
    text-decoration: none;
    color:black
}
</style>