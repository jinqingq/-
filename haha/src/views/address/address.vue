<template>
    <div id='address'>
        <header>
            <p @click="go()">
                <van-icon name="arrow-left" />
                <b></b>
            </p>
            <p>
                <input  placeholder="小区、街道、大厦"/> <button>取消</button>
            </p>
        </header>
        <main>
            <p>历史地址</p>
            <ul v-for="(item,index) in list" :key="index">
                <li
                :class="ind==index?'active':''"
                @click="change(index)"
                ></li>
                <li>
                    <h3>{{item.name}}</h3>
                    <p>{{item.phone}}</p>
                    <p>{{item.address}}</p>
                </li>
                <li @click="gotoadd({type:'eail',item,index})"><van-icon name="edit" /></li>
                <li @click="shan(item)"><van-icon name="close" /></li>
            </ul>
        </main>
        <footer @click="gotoadd({type:'add'})">
            <van-icon name="plus" /><span>新增地址</span>
        </footer>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
    // props:{

    // },
    // components:{

    // },
    data(){
        return {
            ind:null
        }
    },
    computed:{
        ...mapState(['list']),
    },
    methods:{
        ...mapMutations(['shan']),
        gotoadd(obj){
            let {type}=obj
            if(type=='add'){
                this.$router.push({
                    path:'/add',
                    query:{type}
                })
            }else{
                this.$router.push({
                    path:'/add',
                    query:{...obj.item,type,ind:obj.index}
                })
            }
        },
        change(index){
            this.ind=index
            window.localStorage.address=this.list[index].add
            this.$router.push({
                name:'home'
            })
        },
        go(){
            this.$router.push({path:'/index/home/ddcs'})
        }
    },
    // created(){

    // },
    // mounted(){

    // }
}
</script>
<style scoped>
#address{
    width: 100%;
    height: 100%;
    background: whitesmoke;
    display: flex;
    flex-direction: column;
}
header{
    height: 100px;
    line-height: 50px;
    background: white;
}
p{
    height: 50px;
    line-height: 50px;
    padding-left:5px;
}
input{
    width: 280px;
    height: 34px;
    border:1px solid #ccc;
    background: white;
    border-radius: 5px;
    padding-left:10px;
}
button{
    width: 80px;
    height: 35px;
    border-radius: 5px;
    background: gray;
    color:white;
    line-height: 30px;
    border:none;
}
main{
    flex:1;
    overflow-y: auto
}
main ul{
    display: flex;
    height: 100px;
}
main ul li:first-child{
    width: 30px;
    height: 30px;
    border:1px solid #ccc;
    border-radius: 50%;
    margin:30px 10px 0 5px;

}
main ul li:nth-child(2){
    width: 80%;
}
main ul li:nth-child(3){
    width: 5%;
    font-size: 20px;
}
main ul li:last-child{
    width: 5%;
    font-size: 20px;
    margin-left:5px;
}
main ul li:nth-child(2) p {
    height: 30px;
    line-height: 30px;
    padding:0;
}
footer{
    height: 50px;
    line-height: 50px;
    background: white;
    text-align: center;
    color:orangered
}
.active{
    background: orangered
}
</style>