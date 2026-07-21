var score = 0;
 
score = score+1;
console.log(score);
score++;
console.log(score);
score++;
score++;
score++;
score++;
score++;
score++;
console.log(score);

score = score-1;
console.log(score);
score--;
score--;
score--;
score--;
score--;
console.log(score);

//////for loop///

for(var i = 0 ; i<10 ; i++){
console.log(i);
}

console.log("////take a number from user and put in array////");

var menu = [];

for(i = 0 ; i<10 ; i++){
var user = +prompt("enter a number");
 menu.push(user++);
 console.log(menu)

}
console.log(menu);