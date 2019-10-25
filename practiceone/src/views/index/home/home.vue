<template>
    <div class='home'>
        <header>
            <li><van-icon name="location-o" /></li>
            <li @click='address'>
                <span>送至：{{add}}</span>
                <span></span>
                <span><van-icon name="arrow" /></span>
            </li>
            <li><van-icon name="search" /></li>
            <li></li>
        </header>
        <nav>
            <li v-for="(item,index) in list" :key="index"
            @click="active(index)"
            :class="index==ind?'active':null"
            >{{item.text}}</li>
        </nav>
        <main>
            <router-view />
        </main>
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
            list:[
                {to:'/index/home/ddcs',text:'多点超市'},
                {to:'/index/home/qqjx',text:'全球精选'}
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
            this.$router.history.push({path:this.list[index].to})
        },
        address(){
            this.$router.push({path:'/address'})
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
.home{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
header,nav{
    height: 30px;
    line-height: 30px;
    display: flex;
    padding:10px;
    justify-content: space-between;
}
header li:last-child{
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background: greenyellow;
    margin:5px;
}
nav li{
    width: 50%;
    text-align: center;
}
.active{
    color:orangered;
    border-bottom: 1px solid orangered
}
main{
    flex:1;
    /* overflow-y: auto; */
    overflow: hidden;
}
</style>