// // // class function 

// class carPorsche {
//     constructor(name,colour,speed){
//     this.name = name
//     this.colour = colour
//     this.speed = speed
//     this.currentspeed =0 
//     }
//     drive ( ) {
//         this.currentspeed += 10
//         console.log(`driving speed at kpm ${this.currentspeed} mph`);
// }
// brake (){
//     console.log("phew its stop");
//     this.currentspeed -= 10
//     console.log(`driving speed at kpm ${this.currentspeed} mph`);
// }
// }

//const Porsche = new carPorsche ("porsche","black",250)
// console.log(Porsche);
// Porsche.drive()
// Porsche.drive()
// Porsche.drive()
// Porsche.brake()
// Porsche.drive()
// Porsche.drive()
// Porsche.drive()
// Porsche.brake()
// Porsche.brake()

class getBank {
constructor(balacne){
    this.balacne = balacne
}
depositcash(amount){
this.balacne += amount
console.log( 'Deposited' , `${amount}`);
console.log( {balance: this.balacne});
}
withdrawCash(amount){
    this.balacne -= amount
    console.log('withdrew', `$${amount}`)
    console.log(`you amount has been${this.balacne}deducted`);
}
}
const waliChecking = new getBank (0)
//console.log(bank);
// bank.withdraw()
// bank.withdraw()
// bank.withdraw()
// bank.withdraw()
// bank.deposit()
// bank.deposit()
// bank.deposit()

const withdrawBtn = document.getElementById('withdraw')
const depositBtn = document.getElementById('deposit')
const amountInput = document.getElementById('input')
const balanceDiv = document.getElementById('balance2')

depositBtn.onclick = () => {
    const amount = Number(amountInput.value)
    waliChecking.depositcash(amount)
    balanceDiv.innerText = `Balance: ${waliChecking.balance2}`
}
withdrawBtn.onclick = () =>{
    const amount = Number(amountInput.value)
    waliChecking.withdrawCash(amount)
    balanceDiv.innerText = `BALANCE:${waliChecking.balance2}`
}