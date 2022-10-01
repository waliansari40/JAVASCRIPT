// for lopp -> when you know how many times you want to lopps
// while loops -> while loops are these methods when we are not sure  how many time we want to loops 
 

//example

// let num = 0 
// let num2 = 10

// while (num<num2) {
//     console.log('looping', num);
//     num++
// }

// add event listner
// let playDiv =  document.getElementById('')
// console.log(playDiv.innerText);
// when we want to use click functin thw we will write like this

// playDiv.onclick = () =>{
//     console.log('hello');
//     playDiv.addEventListener('click' ,function(){
//         console.log('heyyyyyyyyyyyy');
//     } )

// }// now we will show alternate of onclick functiom

// we want to use keys then we will use this 

document.addEventListener('keydown' , function(e){
if(e.key == 'q'){
    console.log('you pressed q');
}else{
    console.log('you not press q');
}
})
// audio tags
// we set audio tag in HTML like this
{/* <audio 
src=""
style="display: none"
type = "audio/mpeg"
id="punch"
>
</audio> */}

document.addEventListener('keydown' , function(e){
    if(e.key == 'q'){
        console.log('you pressed q');
        document.getElementById('puch').play()
    }else{
        console.log('you not press q');
    }
    })

