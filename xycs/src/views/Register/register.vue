<template>
    <div class='register'>
        <h2>注册页面</h2>
        <li><input type='text' placeholder="手机号" v-model="phone"/></li>
        <li><input type='password' placeholder="密码" v-model="pwd"/></li>
        <li><input type='button' value="提交" @click='goToRegister'/></li>
    </div>
</template>
<script>
import {registry} from '../../api/api'
export default {
    name:'register',
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
        async goToRegister(){
            // let phone = this.phone,
            //     pwd = this.pwd;
            //     console.log(phone,pwd)

                // let res = await registry({phone:this.phone,password:this.pwd})
            try{
                //let res = await registry({phone:this.phone,password:this.pwd})
                this.$router.go(-1)
                //let res = await registry({phone,password:pwd });
                
            } catch(e){
                consolr.log(e)
            }
        }
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
.register{
    width: 100%;
    height: 100%;
    margin-top:150px;
}
li{
    text-align: center;
    height: 60px;
    line-height: 60px;
}
li input{
    width: 280px;
    height: 35px;
    border:1px solid orangered;
    border-radius: 5px;
    padding-left:10px;
}
li:last-child input{
    background: orangered;
    color:white;
    font-size: 16px;
}
h2{
    font-weight: normal;
    margin-bottom:20px;
}
</style>