// 购物车
<template>
    <div class='shopping'>
        <header>
            <p>购物车</p>
        </header>
        <main>
            
        </main>
        <footer>
            <ul>
                <li><input type='checkbox'/><span>全选</span></li>
                <li><span>合计：</span><span></span></li>
                <li><button>去计算(<span>0</span>)</button></li>
            </ul>
        </footer>
    </div>
</template>
<script>
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
    // computed:{

    // },
    // methods:{

    // },
    // created(){

    // },
    // mounted(){

    // }
}
</script>
<style scoped>
.shopping{
    display:flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
header p{
    height: 50px;
    line-height: 50px;
    text-align: center
}
main{
    flex:1;
}
footer{
    height: 50px;
    line-height: 50px;
    background: whitesmoke;
}
footer ul{
    display: flex
}
footer ul li{
    width: 33.3%;
    text-align: center;
}
footer button{
    width: 100%;
    height: 48px;
    line-height: 48px;
    background: orangered;
    color:white;
    border:none;
}
</style>