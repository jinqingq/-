import React,{Component} from 'react'
import {NavLink,withRouter} from 'react-router-dom'
class Head extends Component{
    state={
        list:[
            {name:'首页',link:'/index/home'},
            {name:'找车',link:'/index/lookcar'},
            {name:'论坛',link:'/index/forum'},
            {name:'二手车',link:'/index/usedvar'},
            {name:'服务',link:'/index/serivce'}
        ],
        flag:false,
        sticky:false,
    }
    render(){
        let {list,flag,sticky} =this.state
        return <>
            <div className='title'>
                <h2>汽车之家</h2>
                <span><input placeholder='搜索' onClick={()=>{this.search(this)}}/></span>
                <span onClick={()=>{this.my(this)}}>我的</span>
            </div>
            <div className={`nav ${sticky?'sticky':''}`}>
                <ul>
                {
                    list.map((item,index)=>{
                        return <li key={index}>
                            <NavLink to={item.link}>{item.name}</NavLink>
                        </li>
                    })
                }
                </ul>
                <img
                className={flag ? 'imgactive' : ''}
                 src={require('../img/jt.jpg')}
                 onClick={()=>{this.setState({flag:!flag})}}
                 />
            </div>
            <div className={flag?'mark':'none'}
            onClick={()=>{this.setState({flag:false})}}>
                <div className='box'>
                    <li>金融</li>
                    <li>车商城</li>
                </div>
            </div>
        </>
    }
    componentDidMount(){
        document.addEventListener('scroll',this.handleScroll)
    }
    handleScroll=()=>{
        // let {sticky} = this.state

        if(document.documentElement.scrollTop > 50){
            this.setState({sticky:true})
        }else{
            this.setState({sticky:false})
        }
    }
    search(){
        this.props.history.push('/search')
    }
    my(){
        this.props.history.push('/my')
    }
}
export default withRouter(Head)