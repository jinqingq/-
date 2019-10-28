import React,{Component} from 'react'
import {connect} from 'react-redux'

class Item extends Component{
    render(){
        let {item,ind}=this.props

        return <div className={`title${ind}`} id='item'>
            <p className='title'>{item.name}</p>
            {
                item.foods&&item.foods.map((item1,index1)=>
                <dl key={index1}>
                    <dt>
                        <img src={item1.image}/>
                    </dt>
                    <dd>
                        <h3>{item1.name}</h3>
                        <p>{item1.description}</p>
                        <b>￥{item1.price}起</b>
                        {
                            item1.count>0?<>
                            <span
                            onClick={this.handleChangecount.bind(this,ind,index1,item1.count-1)}
                            >-</span>
                            <span>{item1.count}</span>
                        </>:null
                        }
                        <span 
                        onClick={this.handleChangecount.bind(this,ind,index1,item1.count+1)}>+</span>
                    </dd>
                </dl>
                )
            }
        </div>
    }
    handleChangecount(ind,index,count){
        // 通知父组件更新count
        this.props.changecount(ind,index,count);
        // 通知仓库添加
        this.props.addshop(this.props.item.foods[index])
    }
}

let mapStateToProps=(state)=>{
    return {

    }
}

let mapDispatchToProps=(dispatch)=>{
    return {
        addshop(obj){
            dispatch({type:'ADD_SHOP',obj})
        }
    }
}

Item=connect(mapStateToProps,mapDispatchToProps)(Item)

export default Item