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