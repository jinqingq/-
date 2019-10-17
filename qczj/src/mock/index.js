import city from './city'

let arr=[...new Set(city.data.map(item=>item.Spelling.substr(0,1)))]

let data={}

arr.forEach(item=>{
    data[item]=city.data.filter(item1=>item1.Spelling.substr(0,1) == item)
})
export default data