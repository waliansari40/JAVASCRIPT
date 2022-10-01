// string tutorial

//Q1 using template literals 

// let name1 = "wali"

// let name2 = "vali rahman"

// //now we are compiling bth of them using back tick 

// let sentence = `${name1} both are friends ${name2}`
// console.log(sentence);

// Q2 Escape Sequence Characters 

// let fruit = 'bana\'na'
// console.log(fruit);

//Q4 use for a loop to print strings

// let fr ="shivika"
// for(let i=0;i<fr.length;i++){
//     console.log(fr[i]);
// }

//Q6 what will the following print in javascript
// let harry = "har \" ".length
// console.log(harry); // output = 6

//Q6 explore the includes 
// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const words = 'fox';

// console.log(`The word "${words}" ${sentence.includes(words) ? 'is' : 'is not'} in the sentence`);

//Q7 write a programm to convert a given string to lowercase 

// let word = "WALI ULLAH ANSARI"
// console.log(word.toLowerCase())

//Q8 extract the amount out of this string "please give me rs200"

// let amount ="please give rs 100"
// console.log(amount.slice(11,16));

//09 change 4th character of a given string

// let string = " wala"
// const replaced = string.slice(0, -1) + 'i';
// console.log(replaced);

// Q10 uppercase of the first letter of the word

// const list = document.querySelector('.output ul');
// list.innerHTML = '';
// let cities = ["mumBai" ,"DELhi", "JaIPuR" ,"gOa"];
// for(let i=0; i<cities.length;i++){
// let LowerCaseCity  =  cities[i].toLowerCase();
// let first = LowerCaseCity.slice(0,1);
// LowerCaseCity = LowerCaseCity.replace(first,first.toUpperCase());
// let listItem = document.createElement('li')
//  listItem.textContent = LowerCaseCity;
//  list.appendChild(listItem)
// }

// //Q11 find holi words 
// const list = document.querySelector('.output ul');
// list.innerHTML = '';
// let greetings = [ 'Happy Birthday',
// 'Happpy Holi to All Of you guys',
// 'Holi mubbraka ho',
// 'get well soon',
// 'Happy aniversary Mom and Dad'
// ];
// //main code 
// for(let i=0;i<greetings.length;i++){
//  if( greetings[i].indexOf("Holi") !== -1){
//     let listItem = document.createElement('li')
//   listItem.textContent = greetings[i] ;
//     list.appendChild(listItem)}}

// Second Method
//  let greetings = ["happy birthday" , "Holi mubbrak"]
//  for(let i=0;i<greetings.length;i++);
//  let find = greetings.map((greetings=>greetings.indexOf("Holi") !== -1 ))
//  console.log(find);

// let cities = ["mumBai" ,"DELhi", "JaIPuR" ,"gOa"];
// for(i=0;i<=cities.length;i++);
// let word = cities[i].toLowerCase((cities)=> cities.slice(0,1) + cities[i].toUpperCase())
// console.log(word);

// let greetings = ["happy birthday" , "Holi mubbrak"];
// let word = greetings.map((greetings=>greetings.indexOf('Holi') !==-1))
// console.log(word);

// let cities  = ['mumbai','Delhi','KolKata']
// for(i=0;i<cities.length;i++){
// let lowercase = cities[i].toLocaleLowerCase()
// let uppercase = lowercase.slice(0,1);
// lowercase = lowercase.replace(lowercase,lowercase.toUpperCase());
// console.log(uppercase);
// }

// for(i=0;i<cities.length;i++){
//     let lowercase = cities.map(cities=>cities[i].toLowerCase().slice(0,1))
//     console.log(lowercase);
// }
let cities = ['Mumabi','DeLhi','Banglore'];
for (i=0;i<cities.length;i++){
    let lowercase = cities.map(cities=> cities.toLowerCase().replace(lowercase,lowercase.toUpperCase(0,1)))
    console.log(lowercase);
    //document.getElementById("lowercase").innerText
}

