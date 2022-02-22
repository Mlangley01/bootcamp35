//Activity One 
//Let’s edit our person object to include, A function called sayHi and when it’s called, 
//it should return “Hello my name is ${this.name}”

let person ={
    age:"47",
    name:"Martin",
    favMusic:[
        "marillion",
        "Queen",
        "Areosmith"
    ]
};
console.log(person.age);
console.log(person.name),
console.log(person.favMusic[1]);

const sayHi = ()=>{
    if (person.name){
        return console.log(`Hello my name is ${person.name}`)
    }
}
sayHi()

//Activity Two
//Create an object called pet with the key values of:
//name, typeOfPet, age, colour and methods called eat and drink. 
//They should return a string saying [Your Pet Name] is eating/drinking.

const pet ={
    petName:"Grayson",
    typeOfPet:"Cat",
    age1: 3,
    petColour:"Grey"
};
 console.log(pet.age1,pet.petName,pet.typeOfPet,pet.petColour);
const eatDrink=()=>{
    if (pet.petName==="Grayson"){
        return console.log(`${pet.petName} is eating or drinking `);
    }
};
eatDrink()



//Activity Three 
//Create an object called coffeeShop with key values of: 
//branch, drinks with prices, food with prices
//And methods called drinksOrdered and foodOrdered.
//They should return a string saying [Your order] is … with all 
//items chosen with costs and total costs.

let foodAmount = 0;
let drinkAmount = 0;
let total = 0;
let branch="Manchester";


const coffeeShop = {
    
    drink1:"cappuccino",
    drink2:"Latte",
    drink3:"Hot chocolate",
    drink4:"Tea",
    drinkPrice:2.50,
    food1:"sandwich",
    food2:"Wrap",
    fooodPrice:3.50
        
}
let priceofDrink = coffeeShop.drinkPrice // create user input for coffeeshop.order
let priceOfFood = coffeeShop.fooodPrice
//let branch = coffeeShop.branch  //removed to declared variables at the top
//######  need to collect args from input or send as  ###### // extend scope of price range for food and drink 

let option1 = coffeeShop.food1  //############  need to collect option1  ### how you return the value they've chosen almost flipped
let optiondrink1 = coffeeShop.drink1 //########### ditto
//added a semi-colon after if();{} and removed the +from the total so the value is added together for all orders placed 
const order = (food,drink)=>{
    if (food == option1 && drink == optiondrink1);{
        foodAmount += priceOfFood;
        drinkAmount += priceofDrink;
        total = (foodAmount + drinkAmount) 
        console.log(`Your order is ${food},${drink}`);
        console.log(`You will be charged:  £${foodAmount} + £${drinkAmount} which comes to £${total} for your meal. `);
        console.log(`Thank you for shopping in ${branch} have a nice Day!`);
        //console.log(`your drink is ${drink}`);
        //console.log(drinkAmount);
        //console.log(`Total cost:${total}`);
    }
}
//order("sandwich","cappuccino","sandwich","cappuccino"); cant get more than two arguments :

order("sandwich","cappuccino");
order("wrap","latte");
// order("sandwich","cappuccino");
// order("wrap","latte");
// order("sandwich","cappuccino");
// order("wrap","latte");
order("wrap","tea");