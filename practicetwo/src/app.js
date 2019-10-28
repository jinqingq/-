import React,{Component} from 'react'
import Routes from './router/index'
import {Provider} from 'react-redux'
import store from './store/index'
import './css/index.min.css'
class App extends Component{
    render(){
        return <Provider store={store}>
            <Routes />
        </Provider>
    }
}
export default App