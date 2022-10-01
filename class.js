// declaring a class
 
// class Product {
//     constructor(itemname,price,discount){
//         this.itemname = itemname;
//         this.price = price;
//         this.discount = discount;
//     }
// }
// const pencil = new Product("pencil",56,20)
// console.log(pencil);

//SECOND DECLARING METHOD

// const Product1 = class {
//     constructor(itemname,price,discount){
//         this.itemname = itemname;
//         this.price = price;
//         this.discount = discount;
// }
// get getDiscountValue(){// this function is getter matlaba isme value yaha se change kar sakte ho
//     return this.discount
// }
// set getDiscountValue(value){ // this is setter function
//     return this.discount = value;
// }
// }
// const pencil = new Product1("pencil",56,20)
// console.log(pencil);

// EXTEND METHOD DECLARING class

 
// class Product {
//     constructor(itemname){
//         this.itemname = itemname;
//     }
//     getitemname(){
//        return this.itemname + "is a product"
//     }
// }
// class newproduct extends Product {
//     constructor (itemname){
//         super(itemname);
//     }
//     getitemname(){
//         return this.itemname + "is a furniture"
//      }
// }
// const pencil = new Product("pencil")
// const chair = new newproduct("pencil")
