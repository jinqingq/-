import React,{Component} from 'react'
import axios from 'axios'
import '../../mock/index'
import Item from '../../component/item'
import BScroll from 'better-scroll'
import {connect} from 'react-redux'
// import {requestMock} from '../../until/request'
class Order extends Component{
    state={
        list:[],
        ind:0,
        // leftBScroll:null,
        // rightBScroll:null
        scrollH:[],
        show:false
    }
    active=(index)=>{
        this.setState({ind:index})
        this.rightBScroll.scrollToElement('.title'+index,200)
    }
    render(){
        let {list,ind,show}=this.state
        let {buylist}=this.props
        let sum=buylist.reduce((prev,cur)=>prev+cur.count,0)
         console.log(buylist)
        return <div className='order'>
            <main>
                <div className='left'>
                   <ol>
                    {
                        list&&list.map((item,index)=>{
                            return <li 
                            className={ind===index?'aaa':null}
                            onClick={this.active.bind(this,index)}
                            
                            key={index}>{item.name}{item.num?item.num:''}</li>
                        })
                    }
                   </ol>
                </div>
                <div className='right'>
                    <div ref='right'>
                    {
                        list&&list.map((item,index)=>
                        <Item key={index} 
                        ind={index} 
                        changecount={this.handlechangecount.bind(this)}
                        item={item}/>)
                    }
                    </div>
                </div>
            </main>
            <footer onClick={this.display.bind(this)}>
                购物车{sum}
            </footer>
            <div className={show?'bbb':'ccc'} id='box' onClick={this.none.bind(this)} >
                <div className='mask'>
                    {
                        buylist&&buylist.map((item,index)=>{
                            return <div key={index}>
                                <p>{item.name}</p>
                                <span>-</span>
                                <span>{item.count}</span>
                                <span>+</span>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    }
    handlechangecount(ind,index,count){//点击右侧加减的时候触发事件
        let{list}=this.state;
        list[ind].foods[index].count=count

        list.forEach(item=>{
            item.num=item.foods.reduce((prev,cur)=>prev+cur.count,0)
        })

        this.setState({list})
    }
    display(){
        this.setState({show:true})
    }
    none(){
        this.setState({show:false})
    }
    // componentDidMount(){
    //     requestMock('/arr/shop').then(data=>{
    //         console.log(data)
    //     })
    // }
    async componentDidMount(){
        let res=await axios.get('/arr/shop')
        console.log(res)
        res.data.goods.forEach(item=>{
            item.num=0;//左侧的数量
            item.foods.map(item1=>item1.count=0)//右侧的数量
        })


        this.setState({list:res.data.goods})
        let {scrollH}=this.state
        let child=Array.from(this.refs.right.children)
        let last=child[child.length-1]
        // console.log(child)

        child.forEach(item=>{
            scrollH.push(item.offsetTop-50)
        })
        scrollH.push(last.offsetHeight+last.offsetTop)
        this.setState({scrollH})

        // console.log(scrollH)
        this._initScroll()
    }
    _initScroll(){
        new BScroll('.left',{
            click:true
        })
        this.rightBScroll=new BScroll('.right',{
            click:true,
            probeType:3
        })

        this.rightBScroll.on('scroll',({y})=>{
            let scrollY=Math.abs(y)
            // console.log(scrollY,'lalaal')
            let {scrollH}=this.state
            scrollH.forEach((item,index)=>{
                if(scrollY>=item&&scrollY<scrollH[index+1]){
                    // console.log(index)
                    this.setState({ind:index})
                }
            })
        })
    }
}

let mapStateToProps=(state)=>{
    let buylist=state.list
    return {
        buylist
    }
}

let mapDispatchToProps=(dispatch)=>{
    return {

    }
}

Order=connect(mapStateToProps,mapDispatchToProps)(Order)

export default Order