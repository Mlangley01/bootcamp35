//Activity One 
//Take this code and turn it into arrow function syntax
//Original lesson code in slide deck for functions

const factorial = (n) => {
    if (n=== 0 || n===1){
        return 1;
    }else {
        return (n * factorial(n-1));
    }
}
console.log(factorial(33));



//Activity Two
//Edit the below snippet to include two parameters and a running order count updated
//when the function is called:
//Original lesson code in slide deck for functions

let orderCount = 0;
const takeOrder =(topping,base,extra) =>{
    console.log(`${base} Pizza with ${topping} and ${extra} order no ${orderCount+1}`);
    orderCount+1;
}
takeOrder("pineapple","large","Cheddar",(orderCount+1));
takeOrder("pineapple","small","ham",(orderCount+1));


let order = 0;
const takeOrder1 = (topping,dislike) => {
    console.log(`pizza with ${topping} and idont like ${dislike}`);
    order++;
}
takeOrder1(["chicken","olives","mushroom"],"pineapple");
console.log(order);


//Activity Three
//Cash machine time! Let’s create one that:
//Dispenses cash if your pin number is correct and your 
//balance is equal to, or more than, the amount you’re trying to withdraw!

//Activity 3 cash machine returning correct pin , remaining amount, balance 
const pinNum = 123456;
const accNum = 1029893847;
let   totalAmount = 1000;
let   balance1 = totalAmount;
const cashMachine1 = (amount,pinNum,balance1) => {
    if( amount > 0 && amount <=totalAmount && pinNum === 123456){
        console.log(`You've made widthrawl of £${amount} from Acc:${accNum}`)
        let remainingAmm = totalAmount - amount;
        console.log(`Remaining Amount is: £${remainingAmm}`)
    }else if(amount > totalAmount && pinNum === 123456) {
        console.log(`Pin number is accepted, Insufficient funds`)
        console.log(`total available amount:${totalAmount}`)
    }else if( pinNum === 123456 && balance1 === "check balance") {
           console.log(`Available amount:${totalAmount}`)
    }
    else {
        console.log("Wrong pin number!!! Try Again" )
        
    }
}
cashMachine1(3000,pinNum,balance1);
cashMachine1(300,pinNum,balance1);
cashMachine1(300,345678,balance1);
cashMachine1(0,pinNum,"check balance");

