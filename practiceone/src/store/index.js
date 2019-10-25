import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shoplist:[],//接数据
    allflag:false,//全选状态
    addList:[],
  },
  getters:{
    getList(state){//循环数据
      return state.shoplist
    },
    getSumPrice(state){//计算总价
      return state.shoplist.reduce((prev,cur)=>{
        return prev+(cur.checked?cur.count*cur.price:0)
      },0)
    },
    getSumCount(state){//计算总条数
      return state.shoplist.reduce((prev,cur)=>{
        return prev+cur.count
      },0)
    }
  },
  mutations: {
    addList(state,obj){//添加购物车添加商品
      // 判断当前要添加的商品是否存在
      let ind=state.shoplist.findIndex(item=>item.id==obj.id)
      if(ind==-1){
        obj.count=1
        obj.checked=false   //控制单选是否被选中
        state.shoplist.push(obj)
      }else{
        obj.count++
        state.shoplist=state.shoplist.concat([])
      }
    },
    changeCheck(state,obj){   //点击单选按钮
      // 点击的是第几个
      let ind=state.shoplist.findIndex(item=>item.id==obj.id)
      // 更改第几个上面checked状态
      state.shoplist[ind].checked=obj.checked
      state.shoplist=state.shoplist.concat([])
      // 全选状态   根据单选全部选中让全选选中
      state.allflag=state.shoplist.every(item=>item.checked)
    },
    changeAll(state,flag){//全选的状态
      // 全选自身状态正确
      state.allflag=flag
      // 点击全选     全部选中
      state.shoplist.forEach(item=>item.checked=flag)
    },
    changeCount(state,obj){//点击+-
      let ind=state.shoplist.findIndex(item=>item.id==obj.id)
      if(obj.count>0){
        state.shoplist[ind].count=obj.count
      }else{
        state.shoplist.splice(ind,1)
      }
      state.shoplist=state.shoplist.concat([])
    },
    addresslist(state,obj){
      state.addList.push(obj)
    },
    eaillist(state,obj){
      state.addList[obj.ind]=obj.item;
    }
  },
  actions: {
  },
  modules: {
  }
})
