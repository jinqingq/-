import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[]
  },
  mutations: {
    addresslist(state,obj){
      state.list.push(obj)
      console.log(state.list)
    },
    eaillist(state,obj){
      state.list[obj.ind]=obj.item
    },
    shan(state,obj){
      let ind=state.list.filter(item=>item.name==obj.name)
      state.list.splice(ind,1)
    }
  },
  actions: {
  },
  modules: {
  }
})
