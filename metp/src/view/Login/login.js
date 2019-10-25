import React,{Component} from 'react'
import {login} from '../../api/api'
class Login extends Component{
    state={
        name:'',
        pwd:'',
        show:false
    }
    render(){
        let {name,pwd,show} = this.state
        return <div className='login'>
            <p>登录页面</p>
            <input placeholder='请输入用户名' name='name' value={name} onChange={this.handleValue.bind(this)}/>
            <input placeholder='请输入密码' name='pwd' value={pwd} onChange={this.handleValue.bind(this)}/>
            <br />
            <button onClick={this.handleSubmit.bind(this)}>登录</button>
            <button onClick={this.handleRegister.bind(this)} style={show?{color:'red'}:{}}>注册</button>
        </div>
    }
    handleValue(e){
        let key=e.target.name
        let val=e.target.value
        this.setState({[key]:val})
    }
    async handleSubmit(){
        let {name,pwd}=this.state
        let res=await login({userName:name,password:pwd})
        console.log(res)
        if(res.data.code == 1){
            window.localStorage.token = res.data.token
            window.localStorage.userId = res.data.userId
            this.props.history.go(-1)
        }else{
            this.setState({show:true})
        }
    }
    handleRegister(){
        this.props.history.push('/register')
    }
}
export default Login