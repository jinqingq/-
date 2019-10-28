let data={
    list:[]
}
let reducer=(state=data,action)=>{
    if(action.type==='ADD_SHOP'){//添加
        let ind = state.list.findIndex(item=>item.name===action.obj.name)
        if(ind===-1){
            state.list.push(action.obj)
        }else{
            // state.list[ind].count
        }
        // console.log(state.list)
    }
    return {
        ...state,
        list:[...state.list]
    }
}
export default reducer