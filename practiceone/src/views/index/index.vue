<template>
    <div class='index'>
        <main>
            <router-view />
        </main>
        <footer>
            <dl v-for="(item,index) in list" :key="index" 
            :class="index==ind?'active':null"
            @click="active(index)"
            >
                <dt><van-icon :name="item.name"/></dt>
                <dd>
                    <span>{{item.text}}</span>
                </dd>
                
            </dl>
            <span class='tiao'>{{getSumCount}}</span>
        </footer>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name:'index',
    // props:{

    // },
    // components:{

    // },
    data(){
        return {
            list:[
                {to:'/index/home',text:'配送到家',name:'home-o'},
                {to:'/index/find',text:'分类',name:'coupon-o'},
                {to:'/index/member',text:'会员',name:'gem-o'},
                {to:'/index/shopping',text:'购物车',name:'shopping-cart-o'},
                {to:'/index/my',text:'我的',name:'manager-o'}
            ],
            ind:0
        }
    },
    computed:{
        ...mapGetters(['getSumCount'])
    },
    methods:{
        active(index){
            this.ind=index
            this.$router.history.push({path:this.list[index].to})
        }
    },
    // created(){

    // },
    // mounted(){

    // }
}
</script>
<style scoped>
.index{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
main{
    flex:1;
    /* overflow-y: auto; */
    overflow: hidden;
}
footer{
    height: 50px;
    line-height: 25px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding:10px;
}

.active{
    color:orangered
}
.tiao{
    display: inline-block;
    width: 25px;
    height: 25px;
    background: orangered;
    border-radius: 50%;
    color:white;
    position: absolute;
    top:680px;
    left:313px;
}
</style>