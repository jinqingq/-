import React,{Component} from 'react'
import {register} from '../../api/api'
import {Toast} from 'antd-mobile'
class Register extends Component{
    state={
        username:'',
        name:'',
        pwd:'',
        surepwd:''
    }
    render(){
        let {username,name,pwd,surepwd}=this.state
        return <div>
            <li><input placeholder='请输入用户名' value={username} name='username' onChange={this.handleChange.bind(this)}/></li>
            <li><input placeholder='请输入姓名' value={name} name='name' onChange={this.handleChange.bind(this)}/></li>
            <li><input placeholder='请输入密码' value={pwd} name='pwd' onChange={this.handleChange.bind(this)}/></li>
            <li><input placeholder='请再次输入密码' value={surepwd} name='surepwd' onChange={this.handleChange.bind(this)}/></li>
            <button onClick={this.handleRegister.bind(this)}>注册</button>
        </div>
    }
    handleChange(e){
        let key = e.target.name;
        let val = e.target.value;
        this.setState({[key]:val});
    }
    async handleRegister(){
        let {username,name,pwd,surepwd} = this.state;
        if(pwd == surepwd){
            //注册
            try{
                let res = await register({
                    userName:username,
                    realName:name,
                    password:pwd
                });
                this.props.history.push('/index');
                console.log('密码一致',res);
            }catch(e){
                Toast.info(e.response.data.message, 3);
                console.log(e.response);
            }
        } else {
            Toast.info('密码不一致', 3);
            console.log('');
        }
    }
}
export default Register