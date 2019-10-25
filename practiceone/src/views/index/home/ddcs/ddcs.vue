<template>
    <div class='ddcs'>
        <!-- <header>
            <swiper 
            :options="swiperOption"
            ref="mySwiper"
            >
                <swiper-slide v-for="(item,index) in list" :key="index">
                    <img :src="item.img"/>
                </swiper-slide>
            </swiper>
        </header> -->
        <main class='scroll'>
            <div>
                <Item v-for="(item,index) in item" :key="index" :item="item"/>
                <div v-if='show'>---我是有底线的---</div>
            </div>
           
        </main>
    </div>
</template>
<script>
import '../../../../mock/mock'
// import 'swiper/dist/css/swiper.min.css'
// import {swiper,swiperSlide} from 'vue-awesome-swiper'
import Item from '../../../../components/item'
import BScroll from 'better-scroll'
export default {
    name:'ddcs',
    // props:{

    // },
    components:{
        // swiper,
        // swiperSlide,
        Item
    },
    data(){
        return {
            // swiperOption:{
            //     autoplay:{
            //         delay:1000
            //     },
            //     loop:true
            // },
            // list:[
            //     {img:require('../../../../assets/img/a1.jpg')},
            //     {img:require('../../../../assets/img/a2.jpg')},
            //     {img:require('../../../../assets/img/a3.jpg')},
            //     {img:require('../../../../assets/img/a4.jpg')}
            // ],
            item:[],
            page:1,
            limit:10,
            show:false
        }
    },
    computed:{
        swiper(){
            return this.$refs.mySwiper.swiper
        }
    },
    methods:{
        async getList(){
            let res = await this.$http.post('/api/list',{page:this.page,limit:this.limit})
            // console.log(res)
            this.item=this.item.concat(res.data.list)

            if(res.data.list.length<10){
                this.show=true
            }

            this.myScroll.refresh()
            this.myScroll.finishPullUp();//上拉加载完成之后调用的方法
            this.myScroll.finishPullDown();
        }
    },
    created(){
        this.getList()
        this.$nextTick(()=>{
            this.myScroll=new BScroll(".scroll",{
                click:true,
                pullUpLoad:{ //开启上拉加载
                    threshold:-100//往上拉多少个距离，才能触发上拉加载
                },
                pullDownRefresh:{//下拉加载
                    threshold:50
                }
            })
            this.myScroll.on('pullingUp',()=>{//添加上拉加载
                this.page++
                if(!this.show){ //没有数据就不用再请求
                    this.getList()
                }
            })
            this.myScroll.on('pullingDown',()=>{//所有数据初始化
                this.page=1;
                this.list=[];
                this.show=false;
                this.getList()
            })
        })
    },
    // mounted(){

    // }
}
</script>
<style scoped>
header{
    width: 100%;
    height: 100%;
}
header img{
    width: 100%;
    height: 200px;
}
main{
    flex:1;
    width: 100%;
    height: 100%;
}
main div{
    display: flex;
    flex-wrap: wrap;
}
.ddcs{
    width: 100%;
    height: 100%;
}
</style>