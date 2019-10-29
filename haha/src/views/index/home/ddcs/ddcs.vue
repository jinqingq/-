<template>
    <div id='ddcs'>
        <header>
            <van-swipe :autoplay='1000' indicator-color='white'>
                <van-swipe-item v-for="(item,index) in list" :key="index">
                    <img :src="item.img"/>
                </van-swipe-item>
            </van-swipe>
        </header>
        <nav>
            <dl v-for="(item,index) in arr" :key="index">
                <dt></dt>
                <dd>{{item.text}}</dd>
            </dl>
        </nav>
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
                {img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2634306427,1511025022&fm=26&gp=0.jpg'},
                {img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572347478448&di=8bf6d997fc736896072679ff6ebd6593&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ee95571a2e0832f875a39943b04b.jpg%401280w_1l_2o_100sh.png'},
                {img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572347478445&di=649bd531f3040ea4a01d3c4f91119974&imgtype=0&src=http%3A%2F%2Fpic1.16xx8.com%2Fallimg%2F161122%2F1F0035M6-7.jpg'},
                {img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572347478445&di=2f0d8c7869c37c2ec2c84b0022f4997c&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2e3b0d551ddfb6493ee164559fd009b2d1eaa77870229-DHwSCa_fw658'},
                {img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572347478444&di=697a57419206f086d147ffc3fcde8732&imgtype=0&src=http%3A%2F%2Fhbimg.huabanimg.com%2F101f87a2c8015468fdb50ccc667e3e208c45a2f9fe3f-TnvhB8_fw658'}
            ],
            arr:[
                {text:'蔬菜每日鲜'},{text:'肉蛋禽'},
                {text:'母婴天地'},{text:'进店必买'},
                {text:'美通卡'},{text:'早晚市'},
                {text:'抢便宜'},{text:'每日必看'},
                {text:'新人福利'},{text:'直采品牌'},
                {text:'充值中心'},{text:'支付优惠'},
                {text:'领券中心'},{text:'会员签到'},
                {text:'常购清单'}
            ]
        }
    },
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
#ddcs{
    width: 100%;
    height: 100%;
}
header{
    width: 100%;
    height: 280px;
    margin-bottom:5px;
}
header img{
    width: 100%;
    height: 280px;
}
nav{
    display: flex;
    flex-wrap: wrap;
}
nav dl{
    width: 100px;
    height: 100px;
    text-align: center;
}
nav dl dt{
    width: 80px;
    height: 80px;
    background: cornflowerblue;
    border-radius: 50%;
    margin-left:15px;
}
</style>