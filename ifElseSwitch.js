//Activity One 
//Create a variable called age. Write an if statement
//that logs “Yes I can serve you” if the age is greater 
//than 17 and else logs “You aren’t old enough”
//Take your if statement and add a variable called country in.
//Eg. if age > 17 and country == “UK”

let age =16;
let country = "uk1";
if (age >=17 && country == "uk"){           //if statement requires both to match declared variable if the rquirement is met
    console.log("What can i get you!");     //returns this
}   
else(age != 17 && country != "uk");{        //if the if requirements are not met (!=)
    console.log("Sorry I cant serve you");  // Returns this // i think this is a much simpler way to code multiple arguments 
}
/// longer way to achieve same output code from working in Desk4
let age1 = 18;
if (age1 >= 17) {
    console.log("I can serve you");             //sepearte var with if and else statements to check age 
}
else {
    console.log("Sorry, you're under age");
}
let country1 = "uka"
if (age1 >= 17 && country1 == "uk") {           //second set of statements to check if in uk also checks input from age 
    console.log("I can serve you");
}
else if (age1>= 17 && country1 !="uk"){     //runs an elseif to check if age and country match if country dosent
    console.log("We aren't in the UK here.");  //returns output
}
else {
    console.log("Sorry, you're under age");// 

} 

//Activity two
//Create a variable for any pizza topping. Create a switch statement, if the topping is one of your 
// favourite ingredients, log to the console “These are 
// important ingredients for my pizza.” 
//If you don’t mind having Pepperoni for example log to the console “I don’t 
// mind having ${topping} on my pizza. 
// Finally, for any topping you don’t like log “${topping} should not be on a pizza.” 

let topping =[
    "Mozerella",
    "Pepperoni",
    "Pineapple",
    "Ham"
];
switch(true){
    case topping == "Mozerella":
        console.log(`${topping} has to be on my pizza`);
        break;
        case topping != "Mozerella":
            console.log(`My pizza needs ${topping}`);
            break;
    case topping == "Pepperoni":
        console.log(`I dont mind a little bit of ${topping}`);
        break;
        case topping == "Pineapple":
            console.log(`Please dont put ${topping} on my pizza.`)
    default:
        console.log(`My pizza needs some ${topping}`);
    }




//Activity Three
//Create a variable called password. 
// Check how many letters are in the password, if there are 
// less than 8, log to the console that the password is too 
// short. Otherwise log the password to the console

let password = `Swordish` ;
if (password.length ==8){
    console.log(`${password} Accepted!`);
}else if(password.length <8){
    console.log(`${password} Too short`);
}else if(password.length >8){
    console.log(`${password} Too Long`);
}

//Activity Four. 
//Create a variable called num. 
// Check if the variable is divisible by 3 or 5. If it 
// is, log “This number is divisible by 3 or 5”. 
// Otherwise log something else.

let num = 23;
  if (num % 3 == 0 && num % 5 == 0){        //checks if the num is divisible by 3 and 5 with no remainder
      console.log("This number is divisible by 3 or 5")
  }else {
      console.log("This number is not divisible by 3 or 5")
  }

//Activity Five. 
//Create a variable called num.If num is divisible by 3 log “fizz” to the console,
//if it’s divisible by 5 log “buzz” to the console, if it’s divisible by both 3 and 5 log 
//“fizz buzz” to the console.
//Otherwise log num to the console.

let num3 = 15;
if(num3 % 3 == 0 && num3 % 5 == 0){
    console.log("fizz buzz")
}
else if(num3 % 3 == 0){
    console.log("fizz")
}
else if(num3 % 5 == 0){
    console.log("buzz")
}
else {
    console.log(num3)
}
//Activity Six.
//Create a variable called num.
// Check if the number is a palindrome (looks the 
// same forward as it does backwards e.g. 1001 or 
// 20202). 

// let bob = 1001;
// if( bob.length 0);{
//     console.log(`Your number${bob}is a pallindrome.`)
// }else{
//     console.log("did you read the question?.")
// }
function rev_num()
{
let bob = 101101;
let n= bob;
let rev = 0, rem;
while (n>0)
{
rem = n % 10;
rev = rev * 10 + rem ;
n = Math.floor(n/10);
}
console.log(`The given number is ${bob} The reversed number is ${rev} .`);
if (bob === rev){
    console.log(`${bob} is a palindrome.`);
}
while (bob != rev) {
    console.log(`${bob} is not a palindrome.`);
    break;
}
}; 
//else{
  //  console.log(`Your number ${bob} is not a palindrome.`)
//}
rev_num();


// Activity 7: 
// Take the string 
// “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh 
// gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the 
// index of a last vowel in the string.

const string ="jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
let searchFor = ["a","e","i","o","u"]//list of vowels to search 
console.log(`not sure this is what i wanted as a result ${searchFor}`);
console.log(`The index of the first "${searchFor}" from the end is ${string.lastIndexOf(searchFor)}`);
// expected output: "The index of the first ["a","e","i","o","u"] from the end is -1."

//The lastIndexOf() method,
//given one argument: a substring to search for, searches the entire calling string,
//and returns the index of the last occurrence of the specified substring.
//Given a second argument: a number,
//the method returns the last occurrence of the specified substring at an index less than or equal to the specified number.

//Activity Eight
// Create a variable called time, a variable called placeOfWork 
// and a variable called townOfHome. Create an if statement that 
//logs to the console where someone is at times of the day. E.g. if 
//the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.

let hour = 5;
let placeOfWork = "work";
let homeOfTown = "home";
if( hour == 7 && homeOfTown == "home"){
    console.log("I'm at home");
}else if (hour == 8){
    console.log("I'm commuting");
}
else if (hour == 9 && placeOfWork == "work"){
    console.log("I am at work");
}else {
    console.log ("ZZZZZZZZ! Go Away,Im sleeping")
}// Thanks to Leenah and Thomas for helping me get this to work previously i was using more than else statement 
//and getting several errors forgot to use else if 


//Activity Nine
//Create a variable called word that takes a string. Create 
//an if statement that checks if the last letter is the same as 
//the first. If it is return true, otherwise return false.

let wordstring = "madam"
wordstring ="not a pallindrome1"// remove this line for true
//check a str using charAt and specifying the letter value(0)is equal to the last letter in the words length-1 
if (wordstring.charAt(0) == wordstring.charAt(wordstring.length - 1)){
    console.log(true);
}
else {
    console.log(false);
};


//Activity Ten
//Create two variables called num1 and num2. 
//Create an if statement that checks if the result of thesum is even.
//If it is return the number, 
//Otherwise return the numbers multiplied together.

//Activity 10

let bert1 = 4;
let bert2 = 5;
let sum = bert1 + bert2
if  (sum % 2 == 0){
 console.log("Numbers are Even");
}else {
    console.log(bert1*bert2);
};