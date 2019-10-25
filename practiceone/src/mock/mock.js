import Mock from 'mockjs'

// Mock.mock('/api/list',{
//     "list|10-20":[
//         {
//         "id|+1":1,
//         "img":"@image(150x150)",
//         "title":"@ctitle",
//         "content":"@cword(3)",
//         "price|10-30":10,
//         }
//     ]
// })

Mock.mock('/api/list',({body})=>{
    let {page,limit}=JSON.parse (body);

    let start=(page-1)*limit
    if(page<=5){//最多5页数据
        return Mock.mock({
            [`list|${limit}`]:[
                {
                    "id|+1":start,
                    "img":"@image(150x150)",
                    "title":"@ctitle",
                    "content":"@cword(3)",
                    "price|10-30":10
                }
            ]
        }) 
    }else{
        return{
            list:[]
        }
    }
    
})