var workers = +prompt("enter workers salary")*300;
console.log(workers);
var supervisors = +prompt("enter supervisors salary")*20;
console.log(supervisors);
var manager = +prompt("enter manager salary")*2;
console.log(manager);
var material = +prompt("enter material cost")*2000;
console.log(material);

var budget = (95550000);

var expense = (workers+supervisors+manager+material)/budget*100;
console.log(expense);

if(expense <= 10){
    console.log("very high profit");
}
else if(expense <= 25){
  console.log("high profit");
}
else if(expense <= 50){
  console.log("good profit");
}
else if(expense <= 70){
  console.log("normal profit");
}
else if(expense <= 80){
  console.log("lower profit");
}
else if(expense < 100){
  console.log("very low profit");
}
else{
    console.log("In Loss!!!");
}

