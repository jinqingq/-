import React,{Component} from 'react'
import citydata from '../../../mock/index'
class Lookcar extends Component{
    state={
        data:[]
    }
    render(){
        let {data}=this.state
        console.log(data)
        return <div>
            {
                Object.keys(data).map((item,index)=>{
                    return <div 
                    className='list'
                    key={index} ref={'title_'+item}>
                        <h3>{item}</h3>
                        <ul>
                            {
                                data[item] && data[item].map((item1,index1)=>{
                                    return <li key={index1}>
                                        <img src={item1.CoverPhoto}/>
                                        <span>{item1.Name}</span>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                })
            }
            <ol className='citylist'>
                {
                    Object.keys(data).map((item,index)=>{
                        return <li key={index} onClick={this.clickScroll.bind(this,item)}>
                        {item}
                        </li>
                    })
                }
            </ol>
        </div>
    }
    componentDidMount(){
        this.setState({data:citydata})
    }
    clickScroll(key){
        document.documentElement.scrollTop=this.refs['title_'+key].offsetTop - 50
    }
}
export default Lookcar