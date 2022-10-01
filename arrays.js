// [num.length]

// 👉 DECLARING IN ARRAY    
// const num =[1,2,3,4,5,6,7,8,9];
// console.log(num[num.length]);

// 👉  METHODS USING IN ARRAY    
// 👉 PUSH
// const num =[1,2,3,4,5,6,7,8,9];
// console.log(num.push(10)); // push last vali value meh add ho jata hai

// 👉 POP
 //const num =[1,2,3,4,5,6,7,8,9];
// console.log(num.pop()); // pop last vaali value ko nikkal deta hai
  
// 👉 SHIFT 
//const num =[1,2,3,4,5,6,7,8,9];
//console.log(num.shift());// yeah shuru ki first value nikkal deta hai

// 👉 UNSHIFT 
//const num =[1,2,3,4,5,6,7,8,9];
//console.log(num.shift(0));// yeah shuru meh first value daal deta hai

// KOE VALUE KO CHANGE KARNA HO TOH 
// const num =[1,2,3,4,5,6,7,8,9];
// num [1] = "wali"
// console.log(num);

// 👉 INDEX OF METHOD

// const names = ['vali','aqib','saad','vali'];
// const names2 = names.indexOf('vali') 
//  console.log(names2);

// 👉 LAST INDEXOF METHOD
//  const names = ['vali','aqib','saad','vali'];
// const names2 = names.indexOf('vali',2) // agar hume piche se koe value check karne hue ki word exist karta hai yah nai toh last index of ka use karlehga 
// console.log(names2); 

// 👉 FIND METHOD

// let channels = [{
//    name :  "apna college" ,
//    subscriber : 5000 
// },{
// name :  "apna zayka" ,
// subscriber : 4000 
// },{
// name :  "wali" ,
// subscriber : 3000 
// }
// ];
//  console.log(channels.find (function(element){
//  return element.subscriber === 5000
//  }));

//👉 arrow function

// console.log(channels.find((element) =>{
//     return element.subscriber === 5000
// }));

//👉 OR ARROW METHOD FUNCTION

// console.log(channels.find(element=> element.subscriber === 5000
// ));


//👉 CONCATINATION METHODS 
// let names1 = ['vali','aqib','saad','vali'];
// let names2 = ['saqib','kamil','adarsh','chetan'];

// console.log(names1.concat(names2));


 // 👉  SLICE METHODS

//  slice method works for removing afte and before 
// let names1 = ['vali','aqib','saad','vali'];
// let names2 = ['saqib','kamil','adarsh','chetan'];
//  let name3 = names1.concat(names2);
// console.log(name3.slice(3,5));

// 👉 USING SPREAD OPERATORS

// spread operator 2 arrays ko add kardeta hai ek meh hi

// let names1 = ['vali','aqib','saad','vali'];
// let names2 = ['saqib','kamil','adarsh','chetan'];
//  let name3 = [...names1,...names2] // this is the operator using to add two arrays 
//  console.log(name3);

// 👉 USING JOIN METHOD OPERATORS
// let students = ['W','A','L','I'];
// console.log(students.join());// expected outout is (W,A,L,I)
//console.log(students.join(''));//expected outout is (WALI)
//console.log(students.join('-'));//expected outout is (W-A-L-I)


// 👉  For Each METHOD

// const companies = [
//     {name : "microsoft" , categories : "software" , start : 1999 }
// ]
// companies.forEach(function() {
//     console.log(companies);
// })
// 👉 second method using arrow function
// companies.forEach((companies)=> (console.log(companies.name)));

// 👉 FILTER METHOD 

// const ages = [33,12,60,16,5,54,21,44,61,13,15,45,25,54,32]

// const NewAGes = ages.filter((ages)=> ages < 30)
// console.log(NewAGes);

// 👉 MAP METHOD //The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// let channels = [{
//    name :  "apna college" ,
//    subscriber : 5000 
// },{
// name :  "apna zayka" ,
// subscriber : 4000 
// },{
// name :  "wali" ,
// subscriber : 3000 
// }];
// console.log(channels.map((element)=> element.name
// ));

// 👉  SORTING 

// const companies = [
//     {name : "microsoft" , categories : "software" , start : 1982 },
//     {name : "google" , categories : "software" , start : 1989 },
//     {name : "paytm" , categories : "software" , start : 1969 },
//     {name : "accenture" , categories : "software" , start : 1953 },
// ]

// const sorted = companies.sort(function(c1,c2){
//     if(c1.start > c2.start){
// return 1;
//       }  else{
//         return -1;
// }})
// console.log(sorted);

// const sorted = companies.sort((c1,c2)=> (c1.start > c2.start ? 1 : -1 ))
// // ? iska matlba return karo 1 warna return karo -1
// console.log(sorted);

