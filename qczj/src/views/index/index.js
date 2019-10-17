import React,{Component} from 'react'

import Routerview from '../../router/routerview'

import Head from '../../component/head'

class Index extends Component{
    render(){
        return <div className='index'>
            <Head />
            <Routerview routes={this.props.child}/>
        </div>
    }
}
export default Index