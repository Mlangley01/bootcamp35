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

let myBirthday, today, bday, diff, days;
myBirthday = [17,3]; // my birthday
today = new Date();
bday = new Date(today.getFullYear(),myBirthday[1]-1,myBirthday[0]);
if( today.getTime() > bday.getTime()) {
    bday.setFullYear(bday.getFullYear()+1);
}
diff = bday.getTime()-today.getTime();
days = Math.floor(diff/(1000*60*60*24));
//console.log(days+" days until my birthday!which is on");
console.log(`Its ${days}until your Birthday, which is on ${myBirthday}`);

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