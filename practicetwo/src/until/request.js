// import mock from '../mock/index'
// function request(url){
//     return fetch(url).then(function(res){
//         return res.json
//     })
// }
// function requestMock(url){
//     if(!mock[url]){
//         alert('接口不存在')
//     }
//     return new Promise(res=>{
//         setTimeout(()=>res(mock[url]()),Math.random()*1000)
//     })
// }
// export {requestMock,request}