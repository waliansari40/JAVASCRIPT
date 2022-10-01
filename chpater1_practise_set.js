// let a = "wali"
//  let b = [10]
// //console.log(a * b);
// //02 check whuich data type is
// console.log(typeof (a+b));

// Q3
//print dictinory words

// const dictinory ={
//     alumni : "a reunion of Yale alumni of the class of 1990",
//     though : "She hasn't called, even though she said she would "
// }
// console.log(dictinory["though"]);


// let person = prompt("enter you age")
// if (person < 18  ) {
// alert("he will not allowed in club");
// } else {
//     if (person > 18 ) {
//    alert("he will allowed in club"); 
// }
// }


// function maggie(maggie, tapeli, water) {
//     console.log("your maggie will be ready in" + 2 + "minutes" + "we need a" + 4 + "tapeli" + 4 +"ltr water");
// }
// maggie()

//how to write function

// let bread1 = prompt(" which bread would you like to new ");
// let vegies1 = prompt(" which vegies would you like to add");
// let sauses1 = prompt("which sause you would like to add");
 
// function makeSandwich(bread , vegies , sauses) {
//     let sandwich = bread + "bread" + vegies + "vegies" + sauses + "sauses";
//     return sandwich;
// }
// let vegSandwich = makeSandwich(bread1 , vegies1 , sauses1);
// console.log(vegSandwich)


// let salt1 = prompt("which salt would you like to add")
// let bread1 = prompt("which bread would you like to choose")
// let fry1 = prompt("which fry would you like to choose ")

// function makeegg(salt,bread,fry) {
//     let egg = salt + "salt" + bread + "bread" + fry + "fry"
//     return egg;
// }
// let vegegg = makeegg(salt1,bread1,fry1)
// console.log(vegegg);

let bread1 = prompt('enter your bread name')
let sauses1 = prompt('enter sauses name')
let salt1 = prompt('enter salt name')

function makemaggie(salt,bread,sauses1) {
    let maggie = salt+ bread + sauses1
    return maggie
}
let output = makemaggie(salt1,bread1,sauses1)
console.log(output);