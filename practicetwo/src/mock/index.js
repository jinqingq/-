// import shop from './shop'
// const mock={
//     'arr/shop'(){
//         return shop
//     }
// }
// export default mock
import Mock from 'mockjs'
import shop from './shop'
Mock.mock('/arr/shop',shop)