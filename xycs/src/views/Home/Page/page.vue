// 首页
<template>
    <div class='page'>
        <div class='ban'>
            <swiper :options='swiperOption' ref='mySwiper'>
                <swiper-slide v-for='(item,index) in bannerList' :key='index'>
                    <img :src='item.image'/>
                </swiper-slide>
            </swiper>
        </div>
        <div class='scroll'>
            <div >
                <Item v-for='(item,index) in list' :key='index' :item='item'/>
                <div class='pullUp' v-if='show'>---我是有底线的---</div>
            </div>
        </div>
    </div>
</template>
<script>
import {banner,shop} from '../../../api/api'
import 'swiper/dist/css/swiper.css'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import Item from '../../../components/item'
import BScroll from 'better-scroll'

export default {
    name:'page',
    // props:{

    // },
    components:{
        swiper,
        swiperSlide,
        Item
    },
    data(){
        return {
            bannerList:[],
            list:[],
            swiperOption:{
                autoplay:{
                    delay:1000
                }
            },
            pageid:0,
            limit:10,
            show:false
        }
    },
    computed:{
        swiper(){
            return this.$refs.mySwiper.swiper
        }
    },
    
    async created(){
        let res = await banner();
        this.bannerList=res.data.data
        // console.log(this.bannerList)
        this.getList()
        this.$nextTick(()=>{
            this._initScroll();
        })
    },
    methods:{
        _initScroll(){
            this.myScroll=new BScroll('.scroll',{
                click:true,
                pullDownRefresh:{
                    threshold:50 //下拉刷新
                },
                pullUpLoad:{
                    threshold:-50 //上拉加载
                }
            });
            this.myScroll.on('pullingUp',()=>{
                console.log('上拉加载')
                this.pageid++;
                if(!this.show){
                    this.getList()
                }
            });
            this.myScroll.on('pullingDown',()=>{
                console.log('下拉刷新')
                this.pageid=0
                this.show=false
                this.list=[]
                this.getList()
            })
        },
        async getList(){
        let shoplist=await shop({pageid:this.pageid,limit:this.limit})
        this.list=this.list.concat(shoplist.data.data)
        if(shoplist.data.data.length<10){
            console.log('没有数据')
            this.show=true
        }
        this.myScroll.refresh();
        this.myScroll.finishPullUp();
        this.myScroll.finishPullDown();
        }
    },
    // mounted(){

    // }
}
</script>
<style scoped>
.page{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
.ban{
    width: 100%;
    height: 220px;
}
.ban img{
    width: 100%;
    height: 220px;
}
.scroll{
    flex:1;
    overflow: hidden;
}
.pullUp{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: greenyellow
}
</style>