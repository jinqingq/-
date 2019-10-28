import React,{Component} from 'react'
import {BrowserRouter} from 'react-router-dom'
import RouterView from './routerView'
import routes from './routerConfig'
class Routers extends Component{
    render(){
        return <BrowserRouter>
            <RouterView routes={routes}/>
        </BrowserRouter>
    }
}
export default Routers