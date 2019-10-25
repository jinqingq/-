import React,{Component} from 'react'
import Head from '../../../componnet/head'
class Board extends Component{
    render(){
        return <div>
        <Head back={true} title='发起投票'/>
        <label>
            标题
            <input placeholder='请输入标题'/>
        </label>
        <label>
            描述
            <input placeholder='请输入描述'/>
        </label>
        </div>
    }
}
export default Board