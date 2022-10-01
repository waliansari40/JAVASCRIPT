// const characters = [
//     {
//         name: 'Tarak Mehta',
//         height : 172,
//         mass : 77 ,
//         eye_color : 'brown',
//         gender : 'male'
//     },
// {
//     name: 'jetha lal',
//     height : 146,
//     mass : 136 ,
//     eye_color : 'black',
//     gender : 'male'
// },
// {
//     name: ' babita ji',
//     height : 150,
//     mass : 49 ,
//     eye_color : 'grey',
//     gender : 'Fe-male'
// },{
//     name: 'krishna iyer',
//     height : 168,
//     mass : 84 ,
//     eye_color : 'black',
//     gender : 'male'
// }]
// 👉 get an array of all names

// findnames = characters.map((element)=>{
// return element.name
// })
// console.log(findnames);

// 👉 get an array of objects with just name and heights properties

// findnames = characters.map((element)=>{
//     return {name:element.name,height:element.height}
//     })
//     console.log(findnames);

// 👉 Get total height of all characters


//  const findnames = characters.reduce((prevHeight,element)=>{
//     return prevHeight = element.height
//     })
//     console.log(findnames);


//Q1 Define a function called cleanNames that accepts an array of strings containing additional space characters at the beginning and end. The cleanNames() function should use the array map method to return a new array full of trimmed names.

// const cleanNames = ( [" avengers", "   captain_america", "ironman   ", " black panther   "])

// newnames = cleanNames.map((element)=>{
//   return element.trim()
// }
// )
// console.log(newnames);

// Q2 Write a function that converts an array of values from miles to kilometres using the map method. In the end, add the kilometres up in a new variable called "totalDistanceInKilometers" and return this variable.

// function mile(number) {
//     return number.map(mile=> mile*1.609)
// }
// function add(acc,current) {
//    return acc+current
// }
// const km = mile([5])
// console.log(km);


// 👉 Square and sum the array elements using the arrow function and then find the average of the array.
// let a = [10,20,30]
//  values1 = a.map((a)=>(a*a*a) )
//  console.log(values1);

//  let average = a.reduce((acc,curr)=> acc+curr,0/a.length   )
//  console.log(average);

// 👉 Create a new array using the map function whose each element is equal to the original element plus 4.

// let values = [4, -4, 10, 203, 53, 11]
//  let arr = values.map(()=> values +4 )
//  console.log(arr);

//  //  👉 string convert into uppercase
//  const strings = ["avengers", "captain america", "ironman", "black panther"];
// const value = strings.map((strings=> strings.toUpperCase()))
// console.log(value);

// 👉 string to make a string 1st word to uppercase

// const string = ["mumbai","delhi","jaipur"]
//   const word= string.map((string=> string.slice(0,1)+string.toUpperCase()))
//   console.log(word);




// 👉  Use the .map() method on the heros array to return a new array.

// The new array should rename the 'name' key to 'hero'.
// The 'name' key should not appear in the new array.
// The new array should have a new key added called (id).
// The key 'id' should be based on the index.
// const heros = [
//   { name: 'Spider-Man' },
//   { name: 'Thor' },
//   { name: 'Black Panther' },
//   { name: 'Captain Marvel' },
//   { name: 'Silver Surfer' }
// ];

// const word = heros.map((hero,index)=>{
// return {id:index , hero: hero.name}
// })
// console.log(word);




// const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

// const word = inputWords.filter(inputWords=>inputWords.length>6)
// console.log(word);

// 👉  Evenly mix two arrays 

// const mix = (firstArray, secondArray) => {
// return [...firstArray,...secondArray]
// }
// console.log(mix(["h", "a", "c"], [7, 4, 17, 10, 48]));

// 👉 Order the arrays by sum, ascending or descending

// const max = (someArray)=>{
// return someArray.sort();
// }
// console.log(max([[1,3], [4,2], [2,1]]))

 // 👉 Shuffle the array
// const shuffle = () => {
//   let shuffledNumbers = shuffle.sort(function(){
//   return Math.random() - 0.5;
// })
// console.log(shuffle[10, 12, 15])
// }

 // 👉 Find the odd one out

//  const odd=(someArray)=>{
//   for(i=0;i<odd.length;i++)
//    if( someArray % 2 == 0){
//     console.log("number is even");
//   }else{
//     console.log("number is odd");
//   } }
//  console.log(odd(9));
 
// 👉 ARROW METHOD FUNCTION

// function createodd(number) {
//   let odd = number.filter((number)=> number%2==0)
//   const createreturn={
//     odd };return createreturn
// }
// console.log(createodd([2, 3, 7, 6, 2, 4, 9]));

  // 👉  Find the smallest and largest numbers

// const numberArr = [23, 122, 1, 23, 4, 56];

// // get highest number
// const highest = Math.max(...numberArr);

// // get lowest number
// const lowest = Math.min(...numberArr);

// console.log("Highest Number: " + highest); // Highest Number: 122

// console.log("Lowest Number: " + lowest); // Lowest Number: 1


// function find(math) {
//   let make = Math.max((math)=> Math(...find) )
//   let make2 = Math.min((math)=> math(...find))
  
//   const createobject ={
//     make,
//     make2
//   };
//   return createobject
// }
// console.log(find([14, 28, 3, 8, 2])) 


//   // 👉  Split the numeric array by odd/even
function splitOddAndEven(number) {
  let odd = number.filter((number) => number% 2 === 1 )
  let even = number.filter((number) => number% 2 === 0 )

  const createobject = {
    odd,
    even
  };
  return createobject;
}
console.log(splitOddAndEven([3,2,5,89,10]));


// 👉 Return only unique values
// function unique(number) {
// let values = number.filter((value,i,array)=>array.indexOf(value) === i);
// return values
// }
// console.log(unique([1, 1, 2, 3, 3, 4, 4, 5])) ///[ 1, 2, 3, 4, 5 ]

 // second method of unique values
//  let myarray = [1, 1, 2, 3, 3, 4, 4, 5]
//  let unique = [...new Set(myarray)]

//  console.log(unique); //[ 1, 2, 3, 4, 5 ]

// function value(number) {
// let added = number.map((mile=> mile*1.6)
// )}
//   function add(acc,current) {
//     return acc + current 
//   }
// console.log(value([5]));

