<template>
    <div id="add">
        <p>编辑地址</p>
        <ul>
            <li><span>联系人</span><input v-model="name"/></li>
            <li><span>手机号</span><input v-model="phone"/></li>
            <li><span>地址</span><input v-model="add"/></li>
            <li><span>详细地址</span><input v-model="address"/></li>
        </ul>
        <button @click="addlist()">完成</button>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    // props:{

    // },
    // components:{

    // },
    data(){
        return {
            name:'',
            phone:'',
            add:'',
            address:''
        }
    },
    // computed:{

    // },
    methods:{
        ...mapMutations(['addresslist','eaillist']),
        addlist(){
            let{name,phone,add,address}=this
            let{type,ind}=this.$route.query
            if(type=='add'){
                if(phone.length<11){
                    alert('手机号格式错误')
                }else{
                    this.addresslist({name,phone,add,address})
                    this.$router.push({path:'/address'})
                }
            }else{
                this.eaillist({ind,item:{name,phone,add,address}})
                this.$router.push({path:'/address'})
            }
        }
    },
    created(){
        console.log(this.$route.query)
        let{name,phone,add,address}=this.$route.query
        this.name=name
        this.phone=phone
        this.add=add
        this.address=address
    },
    // mounted(){

    // }
}
</script>
<style scoped>
#add{
    width: 100%;
    height: 100%;
    background: whitesmoke;
}
p{
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 18px;
    margin-bottom: 10px;
    background: white;
}
ul{
    margin-bottom: 5px;
}
ul li{
    height: 50px;
    line-height: 50px;
    background: white;
    border-bottom: 1px solid #ccc;
}
ul li span{
    display: inline-block;
    width: 100px;
    text-align: center;
}
ul li input{
    border:none;
    width: 300px;
}
button{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color:orangered;
    background: white;
    border:none;
}
</style>