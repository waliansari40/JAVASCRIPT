// promise 
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         isReady = [true,false][Math.floor(Math.random()*2)]
//         isReady ? resolve(' soup is ready '): reject ('no soup today')
//     },2000)
// })
// //console.log(promise1.then(value => console.log(value)));// .then is a promise
// console.log(promise1
//     .then(sucess => console.log({sucess}))
//     .catch(error => console.log({error}))// . catch uses if condition becoming false
//)
// if we try to use dog api

// console.log('fetch:',fetch('https://dog.ceo/api/breeds/image/random')
// .then(resposne => (resposne.json()))
// .then(data => console.log(data))
// );

// now we will see the best thing in useing apis .then functons 

// const getDog = async () => {
//     const url = 'https://dog.ceo/api/breeds/image/random'
//     const resposne = await fetch(url)
//     const data = await resposne.json()
//     console.log(data);
// }
// getDog()

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         isReady = [true,false][Math.floor(Math.random()*2)]
//         isReady ? resolve(' soup is ready '): reject ('no soup today')
//     },2000)
// })
// const soup = async() =>{
//    try{
//     const word = await promise1
//     console.log(word);
//    }catch(error){
//     console.log(error);
//    }
// }
// soup()

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        isReady = [true,false][Math.floor(Math.random()*2)]
        isReady ? resolve(' soup is ready '): reject ('no soup today')
    },2000)
})
let tip 
let rating 
let pay 
let review 

const soup = async() =>{
    const data = {tip:0,rating:0,pay:0,review:0}
   try{
    const word = await promise1
    console.log(word);
    data.tip = 2;
    data.rating = '****';
    data.pay = '$100';
    data.review = '5';
    return data
   }catch(error){
    console.log(error);
    data.tip = 0;
    data.rating = 3;
    data.pay = '$10';
    data.review = '**';
    return data
   }
}
//soup().then(value => console.log(value))
// second method calling all the values
console.log(await soup());