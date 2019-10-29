<template>
    <div id='index'>
        <main>
            <router-view />
        </main>
        <footer>
            <dl  v-for="(item,index) in list" :key="index"
            @click="active(index)"
            :class="ind===index?'active':''"
            >
                <dt><van-icon :name="item.name" /></dt>
                <dd>{{item.text}}</dd>
            </dl>
        </footer>
    </div>
</template>
<script>
export default {
    // props:{

    // },
    // components:{

    // },
    data(){
        return {
            list:[
                {path:'/index/home',text:'配送到家',name:'wap-home-o'},
                {path:'/index/classfiy',text:'分类',name:'cluster-o'},
                {path:'/index/member',text:'会员',name:'flower-o'},
                {path:'/index/shopping',text:'购物车',name:'shopping-cart-o'},
                {path:'/index/my',text:'我的',name:'user-o'}
            ],
            ind:0
        }
    },
    // computed:{

    // },
    methods:{
        active(index){
            this.ind=index
            this.$router.history.push({path:this.list[index].path})
        }
    },
    // created(){

    // },
    // mounted(){

    // }
}
</script>
<style scoped>
.active{
    color:orangered;
}
#index{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
main{
    flex:1;
    overflow-y: auto;
}
footer{
    height: 60px;
    line-height: 25px;
    display: flex;
    justify-content: space-between;
    padding:10px;
    box-sizing: border-box;
    text-align: center;
}
</style>