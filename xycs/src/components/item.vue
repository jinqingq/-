<template>
    <dl @click='goToDetail(item.detail)'>
        <dt>
            <img v-lazy='item.cover'/>
        </dt>
        <dd>
            <h3>{{item.name}}</h3>
            <p>累计{{(item.volume/1000).toFixed(1)}}万份</p>
            <div class='price'>
                <span>价格：{{item.price}}</span>
                <span>购物车</span>
            </div>
        </dd>
    </dl>
</template>
<script>
import {addCar} from '../api/api'
export default {
    props:{
        item:{
            type:Object
        }
    },
    // components:{

    // },
    // data(){
    //     return {

    //     }
    // },
    // computed:{

    // },
    methods:{
      goToDetail(obj){
        // console.log('detail');
        this.$router.push({path:'/details',query:{obj}})
      }
    },
    // created(){

    // },
    // mounted(){

    // }
}
</script>
<style scoped>
dl {
  display: flex;
}
dl dt {
  height: 120px;
  width: 120px;
}
dl dt img {
  height: 100%;
  width: 100%;
}
dl dd {
  flex: 1;
}
dl dd h3 {
  line-height: 30px;
}
.price {
  display: flex;
  justify-content: space-between;
}
</style>