// 分类
<template>
    <div class='classify'>
        <div class='left'>
            <ul class='leftlist'>
                <li v-for='(item,index) in leftList' :key='index'
                :class="{active : index == ind}"
                @click='goToRight(index)'>
                    {{item.title}}
                </li>
            </ul>
        </div>
        <div class='right'>
            <ol v-if='leftList[ind] && leftList[ind].children.length > 0'>
                <li v-for='(item,index) in leftList[ind].children' :key='index'
                :class="{cur : index == cur}"
                @click='changeSelect(index)'>
                {{item.name}}
                </li>
            </ol>
            <div  v-if="rightList && rightList.length == 0">
                <h2>暂无数据</h2>
            </div>
            <Item v-for='(item,index) in rightList' :key='index' :item='item' v-else/>
        </div>
    </div>
</template>
<script>
import {shopType,selectType} from '../../../api/api'
import Item from '../../../components/item'
export default {
    name:'classify',
    // props:{

    // },
    components:{
        Item
    },
    data(){
        return {
            leftList:[],
            rightList:[],
            ind:0,
            cur:0
        }
    },
    // computed:{

    // },
    async created(){
        let res = await shopType();
        this.leftList=res.data.data
        this.getRightList()
    },
    methods:{
        goToRight(ind){
            this.ind=ind;
            this.cur=0
            this.getRightList()
        },
        changeSelect(ind){
            this.cur=ind
            this.getRightList()
        },
        async getRightList(){
            let category_id = this.leftList[this.ind].children.length > 0 && this.leftList[this.ind].children[this.cur].id;
            let right=await selectType({type_id:this.leftList[this.ind].id,category_id:category_id})
            
            this.rightList = right.data.data
        }
    },
    // mounted(){

    // }
}
</script>
<style scoped>
.classify{
    display: flex;
    /* flex-direction: row */
}
.left{
    width: 120px;
    height: 100%;
    background: gainsboro;
    color:gray;
    text-align: center;
} 
.leftlist li{
    height: 80px;
    line-height: 80px;
}
.leftlist .active{
    color:orangered
}
.right{
    flex:1;
    height: 100%;
    overflow-y: auto;
}
.right ol{
    display:flex;
}
.right ol li{
    flex:1;
    text-align: center;
    height: 50px;
    line-height: 50px;
}
.right ol .cur{
    color:orangered
}
</style>