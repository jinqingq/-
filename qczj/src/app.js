import React,{Component} from 'react'
import './css/style.min.css'

import Routers from './router/index'
class App extends Component{
    render(){
        return <>
            <Routers />
        </>
    }
}
export default App