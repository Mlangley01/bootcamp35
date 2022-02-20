// Bootcamp 35 day 1 activities after a shaky start i was able to get some understanding how javascript is structured 


console.log("hello"); // prints ("whatever is in here!")
console.log("hello world".toUpperCase())// changes everything in ("")to caps
console.log(Math.floor(Math.random()*10));// does spooky/simple math via built in function using math.random
console.log(Math.ceil(Math.random()*10));// ()brackets picks number*multipls by int value 
console.log(Math.round(Math.random()*10));

console.log("  |    |  ")// simple way to print out a fixed postion grid 
console.log("  |    |  ")// the whole space between ("this bit") is printed to console 
console.log("----------")// so simple repeat repeat to output grid
console.log("  |    |  ")//
console.log("  |    |  ")//
console.log("----------")//
console.log("  |    |  ")//
console.log("  |    |  ")//



// Working in Desks as a group we worked on the code below 

for (let i = 0; i < 9; i++) { // using a for loop to generate the same grid 
    if (i == 3 || i == 6){//Allows for a smaller number of console.log()
    console.log("--------------")//these are the outputs 
    }
    console.log("    |    |    ")
}
 // another method for displaying the grid creating variables for the outputs 
let x = " |      |  "
let y = "-----------"

console.log(x);//still needs repeated log statements to print grid 
console.log(x);
console.log(x);
console.log(y);
console.log(x);
console.log(x);
console.log(x);
console.log(y);
console.log(x);
console.log(x);
console.log(x);


console.log("All around the world".length)

let i =20;//create var i give it a value ""or number
i+=2;//add 2 to the number
console.log(i);//output

 let favDrink1 = "Cappucino";//create a value 
 console.log(favDrink1);//output value

 favDrink1 = "Latte";//updates variable
 console.log("My Favourite drink is not a"+favDrink1)//str literal allows multi format input/responses
 
// Activity one create a program that stores the 
//Create a program that stores someone’s name, 
//age and favourite colour and log it to the console 
//in a complete sentence using Template Literals


let name = 'Martin';
let age = 47;
let favDrink = 'Cappucino';
let favColour = 'Purple';
console.log("hello my name is " +name+ ".I am "+age+" and my favourite drink is a "+favDrink )

name = 'M Langley';
age = 46;
console.log("Dont Forget My name is actually "+name+". And I am only "+age+" and my favourite colour is "+favColour)

// Activity two Create a program that stores what you eat today 
//for breakfast, lunch and dinner. Log these to the console 
//Update each of these variables to what you 
//will eat tomorrow. Log these to the console.
let breakfast ='Ceral';
let lunch = 'Salad';
let tea = 'Pasta';
console.log(`for breakfast I like ${breakfast}, For my lunch I like ${lunch}, and for my tea I like ${tea}`);
//Then update the variables then output using (str literal)
breakfast = 'Toast';
lunch = 'Soup';
tea = 'Steak';
console.log(`tomorrow for breakfast i will be having ${breakfast}, Followed by${lunch} for my lunch, finished with a nice ${tea} for my Tea`);

//Activity three 
// Create a program that calculates the number 
// of days from today to your birth date. 
// Look for ‘Javascript Date’ on MDN. 
//JavaScript Date objects represent a single moment in time in a platform-independent format.
// Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.
//Note: It's important to keep in mind that while the time value at the heart of a Date object is UTC,
// the basic methods to fetch the date and time or its components all work in the local (i.e. host system) time zone and offset.

let myBirthday, today, bday, diff, days; //declared variables
myBirthday = [17,3,1975]; // my birthday
today = new Date();// use date as var fetches todays date 
bday = new Date(today.getFullYear(),myBirthday[1]-1,myBirthday[0]);//birthday 
if( today.getTime() > bday.getTime()) {
    bday.setFullYear(bday.getFullYear()+1);
}
diff = bday.getTime()-today.getTime();
days = Math.floor(diff/(1000*60*60*24));
//console.log(days+" days until my birthday!which is on");
console.log(`Its ${days} day's until your Birthday, which is on ${myBirthday}`);

// A different way to do it create a function that calculates the time until a given date requires the use of Date 

function daysUntilNext(month, day){
    let tday= new Date(), y= tday.getFullYear(), next= new Date(y, month-1, day);
    tday.setHours(0, 0, 0, 0);
    if(tday>next) next.setFullYear(y+1);
    return Math.round((next-tday)/8.64e7);
}

//test 1
let d= daysUntilNext(12, 25); 
if(d=== 0) console.log('Merry Christmas!');
else console.log(d+' day'+(d>1? 's': '')+' until Christmas');

//test2
let d1= daysUntilNext(4, 26); 
if(d1=== 0) console.log('Happy Birthday!');
else console.log(d1+' day'+(d1>1? 's': '')+' until your birthday');


// Need to do more research in Date as a function and how to specify its arguments correctly