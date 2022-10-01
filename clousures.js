
// clouser ka matlab hai agar ek baar value store hogaae to woh retain rehti hai kabhi jate nahi hai usko wpas se acess kar sakte hai jasa var meh 10 dia tha toh usko hum log wpas se bhi call karsakte hai

// var sum = function(a) {
//     console.log("live viewvers" +a);
// var c = 10;
// return function(b){
//     return a+b+c
// };
// }
// var store = sum(2); // calling
// console.log(store(200));

// second example
// var sum = function(a,b,c){
// return{
//     getsumoftwo:function(){
//         return a*b
//     },
//     getsumofthree:function(){
//         return a*b*c
//     }
// }
// }
// var str = sum(3,5,6)
// console.log(str.getsumoftwo());
// console.log(str.getsumofthree());