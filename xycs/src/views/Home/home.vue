// 主页
<template>
    <div id='home'>
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <dl v-for='(item,index) in foot' :key='index'
            :class="{'active':index===ind}"
            @click='changeTab(index)'>
            <!-- 添加点击事件 跳转路由 -->
                <dt>
                    ❤
                </dt>
                <dd>
                    {{item.text}}
                </dd>
            </dl>
            <!-- <router-link to='/home/page'>首页</router-link>
            <router-link to='/home/classify'>分类</router-link>
            <router-link to='/home/shopping'>购物车</router-link>
            <router-link to='/home/my'>我的</router-link> -->
        </footer>
    </div>
</template>
<script>
export default {
    name:'home',
    // props:{

    // },
    // components:{

    // },
    data(){
        return {
            ind:0,
            foot:[
                {
                    text:'首页',
                    url:'/home/page'
                },
                {
                    text:'分类',
                    url:'/home/classify'
                },{
                    text:'购物车',
                    url:'/home/shopping'
                },{
                    text:'我的',
                    url:'/home/my'
                },
            ]
        }
    },
    // computed:{

    // },
    methods:{
        changeTab(index){
            this.ind = index//添加颜色
            this.$router.push({path:this.foot[index].url})//跳路由  按钮
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
    margin:0;
    padding:0;
    list-style:none;
}

#home{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
main{
    flex:1;
    overflow: hidden;
}
footer{
    display: flex;
    height: 50px;
    width: 100%;
    line-height: 25px;
}
footer dl{
    width: 25%;
    text-align: center;
}
.active{
    color:aquamarine
}
</style>