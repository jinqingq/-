<template>
    <div id='home'>
        <header>
            <ul>
                <li><van-icon name="location-o" /></li>
                <li
                @click="gotoaddress()"
                ><span>送至：</span><span>{{add}}</span><van-icon name="arrow" /></li>
                <li><van-icon name="search" /></li>
                <li></li>
            </ul>
        </header>
        <nav>
            <ul>
                <li v-for="(item,index) in list" 
                :key="index"
                @click="active(index)"
                :class="ind===index?'active':''"
                >{{item.text}}</li>
            </ul>
        </nav>
        <main>
            <router-view/>
        </main>
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
                {path:'/index/home/ddcs',text:'多点超市'},
                {path:'/index/home/qqjx',text:'全球精选'}
            ],
            ind:0,
            add:''
        }
    },
    // computed:{

    // },
    methods:{
        active(index){
            this.ind=index
            this.$router.history.push({path:this.list[index].path})
        },
        gotoaddress(){
            this.$router.history.push({path:'/address'})
        }
    },
    created(){
        this.add=window.localStorage.address
    },
    // mounted(){

    // }
}
</script>
<style scoped>
.active{
    color:orangered;
    border-bottom: 1px solid orangered
}
#home{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
header ul{
    display: flex;
    justify-content: space-between;
    height: 40px;
    line-height: 25px;
    padding:10px;
    box-sizing: border-box;
    text-align: center;
}
nav ul{
    display: flex;
    height: 40px;
    line-height: 40px;
}
nav ul li{
    width: 30%;
    text-align: center;
}
</style>