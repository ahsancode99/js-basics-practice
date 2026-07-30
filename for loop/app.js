// var score = 0;
 
// score = score+1;
// console.log(score);
// score++;
// console.log(score);
// score++;
// score++;
// score++;
// score++;
// score++;
// score++;
// console.log(score);

// score = score-1;
// console.log(score);
// score--;
// score--;
// score--;
// score--;
// score--;
// console.log(score);

// //////for loop///

// for(var i = 0 ; i<10 ; i++){
// console.log(i);
// }

// console.log("////take a number from user and put in array////");

// var menu = [];

// for(i = 0 ; i<10 ; i++){
// var user = +prompt("enter a number");
//  menu.push(user++);
//  console.log(menu)

// }
// console.log(menu);

// var cities = ['karachi','lahore','islamabad',];

// var user_city = prompt('enter your city');

// for(var i = 0 ; i<cities.length; i++){

//   if(cities[i]==user_city){
//     console.log('available at index'+i)
//     break;
//   }
//   else{
//     console.log('not available')

//   }


// }











//task 1////////////
// var tbl_n = +prompt("enter tbl num");
// var tbl_l = +prompt("enter tbl lmit");

// for(var i = 0; i<=tbl_l; i++ ){
//     console.log(tbl_n + "X" + i + "=" + tbl_n*i)

// }

//////task 2/////

// var marks = [21,4,2,5,7,4,32,654,54];
// var min = marks[0];
// var max = marks[0];

// for(var i=0; i<marks.length; i++){
//    if(marks[i]<min){
//     min=marks[i]
//    }

//    if(marks[i]>max){
//     max=marks[i]
//    }
   
   
   
// }

//    console.log(min)
//    console.log(max)


///////   nested loop     ///

// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];

// for(var i=0;i<firstNames.length;i++){

// for(var j=0;j<lastNames.length;j++){
//  console.log(firstNames[i]+lastNames[j])
// }

// }





// //task 3   ////


var arrr = [21,23,42,92,23,7,9,7,6,7,23,45,21,9,3,22,5,2];
var inp = +prompt("enter a number");
var count = 0;
var index_position = [];
// var dup = [];

for(var i = 0; i < arrr.length; i++){
        
    if(arrr[i] == inp){
        index_position.push(i);
        count = index_position.length
    }
   



}
console.log("user input = "+inp);
console.log("Counted "+ count +" times");
console.log("Found at Index = "+ index_position);
// console.log(dup);





