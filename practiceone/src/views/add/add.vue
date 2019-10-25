<template>
    <div class='add'>
        <p>编辑地址</p>
        <ul>
            <li><span>联系人</span><input v-model="name"/></li>
            <li><span>手机号</span><input v-model="phone"/></li>
            <li><span>地址</span><input v-model="add"/></li>
            <li><span>详细地址</span><input v-model="ress"/></li>
            <li @click='address'>完成</li>
        </ul>
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
            ress:''
        }
    },
    // computed:{

    // },
    methods:{
        ...mapMutations(['addresslist','eaillist']),
        address(){
            let {name,phone,add,ress}=this
            let {type,ind}=this.$route.query
            if(type=='add'){
                if(!name&&!phone&&!add&&!ress){
                    alert('请完善信息')
                }else{
                    this.addresslist({name,phone,add,ress})
                    this.$router.push({path:'/address'})
                }
            }else{
                this.eaillist({ind,item:{name,phone,add,ress}})
                this.$router.push({path:'/address'})
            }
        }
    },
    created(){
        console.log(this.$route.query)
        let {name,phone,add,ress}=this.$route.query
        this.name=name
        this.phone=phone
        this.add=add
        this.ress=ress
    },
    // mounted(){

    // }
}
</script>
<style scoped>
.add{
    background: whitesmoke;
    width: 100%;
    height: 100%;
}
p{
    height: 50px;
    line-height: 50px;
    background: white;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin-bottom:10px;
}
li{
    height: 50px;
    line-height: 50px;
    background: white;
    margin-bottom: 1px;
    width: 100%;
    display: flex;
}
li span{
    display: inline-block;
    color:gray;
    width: 20%;
    padding-left:10px;
    font-size: 18px;
}
li input{
    width:80% ;
    border:none;
}
ul li:last-child{
    color:orangered;
    padding-left:200px;
}
</style>