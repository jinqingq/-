<template>
    <div class='shopping'>
        <header>
            <div class='left'>
                <h3>尔晴</h3>
                <p><span>送至：</span><span></span></p>
            </div>
            <div class='right'>
                <van-icon name="arrow" />
            </div>
        </header>
        <main>
            <div 
            class='box'
            v-for="(item,index) in getList" :key="index"
            >
                <div class='top'>
                    <span>{{item.content}}</span>
                    <van-icon name="arrow" />
                </div>
                <div class='bottom'>
                    <p><span 
                    :class="['allflag',item.checked?'active':'']"
                    @click="changeCheck({id:item.id,checked:!item.checked})"></span></p>
                    <dl>
                        <dt>{{item.title}}</dt>
                        <dd>￥{{item.price}}.00</dd>
                    </dl>
                    <li>
                        <span @click="changeCount({id:item.id,count:item.count-1})">-</span>
                        <b>{{item.count}}</b>
                        <span @click="changeCount({id:item.id,count:item.count+1})">+</span>
                    </li>
                </div>
            </div>
            <div class='hj'>
                <p>
                    <span :class="['allflag',allflag?'active':'']"
                    @click="changeAll(!allflag)"
                    ></span>
                    <span>总价：{{getSumPrice}}</span>
                    <span></span></p>
                <button>选好了</button>
            </div>
        </main>
    </div>
</template>
<script>
import {mapGetters,mapMutations,mapState} from 'vuex'
export default {
    name:'shopping',
    // props:{

    // },
    // components:{

    // },
    // data(){
    //     return {

    //     }
    // },
    computed:{
        ...mapGetters(['getList','getSumPrice']),
        ...mapState(['allflag'])
    },
    methods:{
        ...mapMutations(['changeCheck','changeAll','changeCount'])
    },
    // created(){

    // },
    // mounted(){

    // }
}
</script>
<style scoped>
.shopping{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: whitesmoke;
}
header{
    height: 80px;
    line-height: 40px;
    border-top:1px solid orangered;
    background: white;
    display: flex;
    margin-bottom:2px;
}
.left{
    width: 90%;
}
.right{
    width: 10%;
    line-height: 80px
}
main{
    flex:1;
    overflow-y: auto;
}
.box{
    width: 100%;
    height: 130px;
    background: white
}
.top{
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #ccc;
    padding:10px
}
.bottom{
    display: flex;
    height: 80px;
    line-height: 40px;
}
.bottom p{
    width: 10%;
}
.bottom dl{
    width: 70%;
}
.bottom li{
    width: 20%;
    margin-top:20px;line-height: 20px;
}
.bottom li span{
   display: inline-block;
   width: 20px;
   height: 20px;
   border:1px solid orangered;
   text-align: center;
}
.bottom li b{
    display: inline-block;
   width: 20px;
   height: 20px;
   text-align: center;
}
.hj{
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    margin-top:10px;
}
p{
    width: 75%;
}   
button{
    width: 100px;
    height: 48px;
    line-height: 40px;
    border:none;
    background: orangered;
    color:white;
}
.allflag{
    width: 25px;
    height: 25px;
    border:1px solid #ccc;
    border-radius: 50%;
    display: inline-block;
}
.active{
    background: orangered
}
</style>