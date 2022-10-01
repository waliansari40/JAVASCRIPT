userDetails = {
name:"zeenat",
    age:30,
    profession:"stiching",
    printDetails:function(){
        console.log(this);
    }
}
userDetails.printDetails();

let userDetails2 = {
    name:"wali ullah ansari",
    class:12,
    subjects:" P C M ",
}
userDetails.printDetails.call(userDetails2)