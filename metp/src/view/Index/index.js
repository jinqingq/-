import React,{Component} from 'react'
import RouteView from '../../route/routeView'
import islogin from '../../utils/islogin'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'
class Index extends Component{
    state={
        list:[
            {to:'/index/home',text:'首页',type:'home'},
            {to:'/index/dynamic',text:'动态',type:'bank'},
            {to:'/index/internal',text:'资料',type:'video-camera'},
            {to:'/index/board',text:'留言板',type:'switcher'},
            {to:'/index/my',text:'我的',type:'heart'}
        ],
        ind:0
    }
    render(){
        let {list,ind}=this.state
        console.log(this.props)
        return <div className='index'>
            <div className='main'>
                <RouteView routes={this.props.child}/>
            </div>
            <div className='footer'>
                {
                    list.map((item,index)=>
                    <dl key={index} onClick={this.active.bind(this,index)}
                    className={ind==index?'active':null}>
                        <dt>
                        <Icon type={item.type} theme="filled" />
                        </dt>
                        <dd>
                            <Link key={index} to={item.to}>{item.text}</Link>
                        </dd>
                    </dl>)
                }
            </div>
        </div>
    }
    active=(index)=>{
        this.setState({ind:index})
    }
}
export default islogin(Index)