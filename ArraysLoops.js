//Activity One
//Create an array that lists your favourite films, up to 5 elements.
//Add 2 more using a method.Use a loop to cycle through the array

let faveFilms=["willow","jurrasic park","ghostbusters","the matrix","Deadpool"
];
console.log(faveFilms[3]);
faveFilms.push("The losers","Jaws");
console.log(faveFilms);
for (let i =0; i < faveFilms.length; i++){
         console.log(faveFilms[i]);
}



//Activity Two
//Generate 6 random numbers between 1-50 and log them to the console.

for (let i = 0; i < 6 ;i++){
         console.log(Math.floor(Math.random()*50));
       }


//Activity Three
//If we can create a loop to put 0-9 on the screen, 
//how can we count from 9-0? Create a program that does this

for (i = 20; i >= 0;i--){
    console.log(i);
  }



//Activity Four
//Displays 4 films stored in an array. Use a for loop to show each film in the array.
//Use an if statement to check if the 3rd film in the array is Ghostbusters. 
//If it is, return “Yay it’s Ghostbusters”. If it isn’t return “Boo! we want Ghostbusters!

let spooky_films = [ "Ghost","Gremlins","Ghos1tbusters", "Thor Dark World" ]
let films = 0 ; films <spooky_films.length;films++;
for (films in spooky_films){
    console.log(spooky_films[2])
}
    
if (spooky_films[2]=="Ghostbusters"){
    console.log("Yey Ghostbusters");
    }else {
        console.log("Boo no popcorn for you!") 
    }



//Activity Five
//Generate a random number between 1 and 30 six times.
//For each random number generated, check if this number of divisible by 7 or not.
//Log out a message to the console if it is divisible by 7 or not.

for (let i = 0; i < 10 ;i++){
    let wholeNum = Math.floor(Math.random()*30)
    if (wholeNum % 7 === 0){
     console.log(`${wholeNum} divisible by 7`);
   }else{
     console.log(`${wholeNum} its not divisible by 7`);
   }
}




// Activity Six
//Imagine you’re a programmer for a social media platform! 
//You have been tasked with building a prototype for a mutual followers program. 
//Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers. 
//In these arrays place 4 names as strings. Make sure there are 2 names that are in BOTH arrays.
//Using a nested loop iterate over both arrays and console.log out the 
//matching follower

let  bobsFollowers1 = ["leenah","hafeez","saima","joji"]
let  hannahsFollowers1 = ["ramsha","bushra","saima","joji"];
let mutualFollowers = [];
  for(let i = 0; i < bobsFollowers1.length; i++) {
  for(let j = 0; j < hannahsFollowers1.length; j++){
      if(bobsFollowers1[i] === hannahsFollowers1[j]){
        mutualFollowers.push(bobsFollowers1[i]);
  }
}
   }
   console.log([bobsFollowers1,hannahsFollowers1],'Your Mutual Followers are ' + mutualFollowers);


//Activity Seven
//Research on do...while loop, find out about the difference between 
//for loop, while loop and do...while loop. Give an example of each. 
//What are the pros and cons?