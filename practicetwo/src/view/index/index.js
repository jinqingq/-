import React,{Component} from 'react'
// import {NavLink} from 'react-router-dom'
import RouterView from '../../router/routerView'
class Index extends Component{
    state={
        list:[
            {path:'/index/order',text:'点餐'},
            {path:'/index/evaluate',text:'评价'},
            {path:'/index/business',text:'商家'}
        ],
        ind:0
    }
    active=(index)=>{
        this.setState({ind:index})
        this.props.history.push(this.state.list[index].path)
    }
    render(){
        let {list,ind}=this.state
        return <div className='index'>
            <header>
                <ul>
                    {
                        list&&list.map((item,index)=>{
                            return <li
                            key={index}
                            className={ind===index?'active':null}
                            onClick={this.active.bind(this,index)}
                            >
                                {item.text}
                            </li>
                        })
                    }
                </ul>
            </header>
            <main>
                <RouterView routes={this.props.child}/>
            </main>
        </div>
    }
}
export default Index