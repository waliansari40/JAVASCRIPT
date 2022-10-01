//rest operators
// yeah sabko combine karne ke kaam ata hai

function addNumbers(a,b,c,...others) {  // this is spread operator
    console.log(others); // output = [ 7, 8, 9 ]
    return a+b+c
}
//const res = addNumbers(3,4,5,7,8,9) // output = 12
console.log(addNumbers(3,4,5,6,7,8));

// Spread Operators

// const names= ["wali","hamza","vali"]

// function getnames(name1,name2,name3) {
//     console.log(name1,name2,name3);
// }
// getnames(...names) // output = wali hamza vali