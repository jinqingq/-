<template>
    <div class='address'>
        <header>
            <ul>
                <li><input type='text' placeholder="小区、街道、大厦"/></li>
                <li>
                    <button>取消</button>
                </li>
            </ul>
        </header>
        <main>
            <p>历史地址</p>
            <div v-if="addList.length>0" >
                <ul v-for='(item,index) in addList' :key='index'>
                    <li><span 
                    :class="['radio',ind==index?'active':'']"
                    @click="changecheck(index)"
                    ></span></li>
                    <li>
                        <h3>{{item.name}}</h3>
                        <span>{{item.phone}}</span>
                        <span>{{item.add}}</span>
                    </li>
                    <li @click="add({type:'eail',item,index})"><van-icon name="edit" /></li>
                </ul>
            </div>
            
            <div v-else class='box'>
                暂无地址
            </div>
        </main>
        <footer>
            <p @click="add({type:'add'})">+新增地址</p>
        </footer>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    // props:{

    // },
    // components:{

    // },
    name:'Address',
    data(){
        return {
            list:[],
            ind:null
        }
    },
    computed:{
        ...mapState(['addList'])
    },
    methods:{
        add(obj){
            console.log(obj)
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
        changecheck(index){
            this.ind=index
            window.localStorage.address=this.addList[index].add
            this.$router.push({
                name:'home'
            })
        }
    },
    // created(){

    // },
    // mounted(){

    // }
}
</script>
<style scoped>
.address{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
header,footer{
    height: 50px;
    line-height: 50px;
    background: whitesmoke;
}
main{
    flex:1;
    overflow-y: auto;
    margin-top:5px
}

header ul{
    display: flex;
    justify-content: space-between;
    padding:0 15px
}
header ul input{
    width: 280px;
    height: 35px;
    line-height: 35px;
    border:1px solid #ccc;
    border-radius: 5px;
    padding:0 5px;
}
header ul button{
    width: 80px;
    height: 37px;
    line-height: 37px;
    border-radius: 5px;
    background: rgb(206, 204, 204);
    color:white;
    border:1px solid #ccc;
}
footer{
    text-align: center;
    font-size: 18px;
    color:orangered
}
main p{
    height: 50px;
    line-height: 50px;
    padding:0 10px;
    background: whitesmoke;
    border-bottom: 1px solid #ccc;
}
main ul{
    display: flex;
    width: 100%;
    height: 100px;
    justify-content: space-between;
    padding:0 10px;
    box-sizing: border-box;
}
.radio{
    width:25px ;
    height: 25px;
    border:1px solid #ccc;
    border-radius: 50%;
    display: inline-block;
    margin-top:35px;
}
main ul li:nth-child(2) span{
    display: block;
    height: 30px;
    line-height: 30px;
}
.van-icon-edit{
    font-size: 30px;
}
.box{
    font-size: 20px;
    text-align: center;
    line-height: 200px;
}
.active{
    background: orangered;
}
</style>