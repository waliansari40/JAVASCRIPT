
// 👉 CALL BACK FUNCTION
// const data =[
//     {name:"wali",profession:"software enginner"},
//     {name:"vali",profession:"Business man"},
//    ];
//    function getDatas() {
//      setTimeout(() => {
//      let output=""
//        data.forEach((data,index)=>{
//        output+= `<li>${data.profession}</li>`;
//        })
//        document.body.innerHTML=output
//    }, 1000);
//    }
//    function createdata(newdata,callback) {
//        setTimeout(()=> {
//            data.push(newdata);
//            callback();
//        }, 2000);
//    }
//    createdata({name:"wali",profession:"don"},getDatas)


// 👉 PROMISES

// const data =[
//  {name:"wali",profession:"software enginner"},
//  {name:"vali",profession:"Business man"},
// ];
// function getData() {
// setTimeout(() => {
//     let output=""
// data.forEach((data,index)=>{
// })
// }, 1000);
// }
// function createdata(newdata) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             data.push(newdata);
//         let error=  true;
//         if(error){
//             resolve()
//         }else{
//             reject("answer is flase")
//         }
//     }, 2000);
// })}
// createdata({name:"wali",profession:"don"}).then(getDatas)

// 👉  ASYNC & AWAIt

const data = [
    {name:"wali",profession:"software enginner"},
    {name:"aqib",profession:"Builder"},
];

function getData() {
    setTimeout(() => {
        let output=""
        data.forEach((data,index)=>{
        output+= `<li>{data.name}</li>`;
        })
    }, 1000);
}
 function createdata(newdata) {
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
            data.push(newdata);
            let error = true;
            if(error){
                resolve();
            }else{
                reject("kuxh nahi hai");
            }
        }, 2000);
        })
 }
 async function start() {
    await createdata({name:"wali",class:9,profession:"enginner"})
    getDatas();
 }
 start();