// triyng to build objects

// const course = {
//     title: "javascript",
//     price : 999,
//     duration: 3,
//     notes : {
//     introduction:"welocome to java course"
//     },
//     enroll(){// this is function
//         console.log("you are sucessfully enrolled");
//     }
// }
// console.log();

// Q2 better way to build a objects
                 
            //BUILDING A FACTORY FUNCTION

                // function createcourse (price,coursename) {
                //     return{
                //     price : price,
                //     coursename : coursename
                //     }
                // }
                // const Course = createcourse("javascript",499)
                // console.log(course);

                // BULDING A CONSTRUCTOR FUNCTION

//                 function Course(price,title,enroll) {
//                     this.price = price,
//                     this.title =  title,
//                     this.enroll = enroll
//                 }
//                const course = new Course(599,"javascript", "this is the best javacourse ever")
   // this is only for delete any object in the list    delete course.title
// console.log(course);          



                            // // PRIMITIVE DATA TYPE
                            // let number = 10
                            // //pass by value  
                            // let number_2 = number
                            // console.log(number);
                            // console.log(number_2);

                            // // REFRENCE D ATA TYPE
                            // let obj ={number : 15 }
                            // //pass by refrence
                            // let obj2 = obj
                            // console.log(obj);



                            // Q4 exercis eusing objects

            
                        //     function Phone(itemname,price,discount,itemcode) {
                        //     this.itemname = itemname
                        //     this.price = price
                        //     this.itemcode = itemcode
                        //     this.discount = discount
                        //      making a discount functiom
                        //     this.discount = function() {
                        //         return price = discount/100
                        //     }
                        // }
                        // const phone = new Phone("iphonexs",22,999,20,"IPHONE") 
                        // console.log(phone);

                        //Q5 MAKING A DITIAL CLOCK 

                        // function time() {
                        //     let date = new Date();
                        //     let hour = date.getHours();
                        //     let minutes = date.getMinutes();
                        //     let millisecond = date.getMilliseconds();
                        //     session ="AM"
                        //     if(hour == 0){
                        //         hour == 12
                        //     }
                        // if(hour>12){
                        //     hour = hour-12
                        //     session="PM"
                        //     } 
                        //     let time = hour + ":" + minutes + ":" + millisecond + ":" + session;      
                        //     document.getElementById("MyClockDisplay").textContent = time;
                        //     setTimeout(time, 1000);
                        // }          
                        // time()
