import React,{Component} from 'react'
import {BrowserRouter} from 'react-router-dom'
import routes from './routerconfig'
import RouterView from './routerview'

class Routers extends Component{
    render(){
        return <BrowserRouter>
        <RouterView routes={routes}/>
        {/* <Switch>
            <Route path='/index' component={Index}/>
            <Route path='/login' component={Login}/>
            <Redirect from='/' to='/index'/>
        </Switch> */}
        </BrowserRouter>
    }
}
export default Routers