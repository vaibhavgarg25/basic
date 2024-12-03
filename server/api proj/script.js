function getdata(data,nextdata)
{
    console.log("fetching data.....")
    setTimeout(()=>{
        console.log("data ",data);
        nextdata()
    },4000)
}

getdata(1,()=>{
    getdata(2,()=>{
        getdata(3,()=>{
            getdata(4)
        })
    })
}); 

// function asyncfunc(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data ",id)
//             resolve("success")
//         }, 4000);
//     })
// }

// asyncfunc(1).then((res)=>{
//     console.log(res)
//     asyncfunc(2).then(()=>{
//         console.log(res)
//     })
// })