<template>
    <div class='item'>
        <dl>
            <dt>
                <img :src="item.img"/> 
            </dt>
            <dd>
                <p>{{item.title}}</p>
                <b>￥{{item.price}}.00</b>
                <span @click="addList(item)">+</span>
            </dd>
        </dl>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    props:{
        item:{
            type:Object
        }
    },
    // components:{

    // },
    data(){
        return {

        }
    },
    // computed:{

    // },
    methods:{
        ...mapMutations(['addList']),
        // detail(){
        //     this.$router.push({
        //         name:'detail'
        //     })
        // }
    },
    // created(){

    // },
    // mounted(){

    // }
}
</script>
<style scoped>
.item{
    width: 50%;
    margin:5px 0;
    text-align: center;
}
dl{
    margin-left:30px;
}
span{
    display: inline-block;
    width: 20px;
    height: 20px;
    border:1px solid orangered
}
</style>