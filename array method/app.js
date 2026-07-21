var users = ['user1','user2',3];
console.log(users);

users[2] ='user3';
console.log(users);

users = ['user37','usrejs'];
console.log(users);

users = ['user1','user2','user3'];
console.log(users);

////////// Array methods//////////

//// adding new element from end/////
users.push('user4','user5');
console.log(users);

//// adding new element from start/////

users.unshift('user0');
console.log(users);

//////// removing from start//////

users.shift();

console.log(users);

//////// removing from end//////

users.pop()
console.log(users);

//////  splice  ///
////task /

users = ['user1','user2','user3','user4'];

var select = prompt("1. only add \n2. only remove \n add and remove");

if(select==1){
    var opt1 = prompt("index position");
    var opt2 = prompt("what should add");

    users.splice(opt1,0,opt2);
     console.log(users);

}
else if(select==2){
    var opt3 = prompt("index position");
    var opt4 = prompt("what should remove");

    users.splice(opt3,opt4);
    console.log(users);
}
else if(select==3){
    var opt5 = prompt("index position");
    var opt6 = prompt("what should add");
    var opt7 = prompt("what should remove");

    users.splice(opt5,opt7,opt6);
     console.log(users);
}
else{
    alert("you select wrong option\n try agian");
    var select = prompt("1. only add \n2. only remove \n add and remove");

}
// slice///

var data = [21,312,412,521,62,78,86,99,100,210,300,400];
console.log(data);

var data2 = data.slice(2,4);
console.log(data2);


var data3 = data.slice(-3,-1);
console.log(data3);
