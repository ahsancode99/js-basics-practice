// var cities = ['karachi','pishawar','islamabad'];
// var userCity = prompt("enter your city").toLowerCase();

// for(i=0; i<cities.length; i++){
//  if(userCity == cities[i]){
//      console.log('available')
//     }
//     else{
        
//         console.log('not available') 
//  }
//  break;
// }

// var f_name = prompt('enter your first name').toLowerCase();
// var l_name = prompt('enter your last name').toLowerCase();
// var fullName = f_name[0].toUpperCase()+f_name.slice(1)+" "+l_name[0].toUpperCase()+l_name.slice(1);

// console.log(fullName);

var text = "Lorem Ipsum is a scrambled, nonsensical version of a 1st-century BC Latin text by Cicero, used globally as standard placeholder text for the graphic design, publishing, and the web development. It serves as dummy copy to demonstrate the page layouts, typography,the and fonts without distracting viewers with readable content."
// var indxPosition = 0

// for(i=0; i<text.length; i++){

//     if("the"==text.slice(i,i+3).toLowerCase()){
//       indxPosition++;
//     }
// }
// console.log(indxPosition);

console.log(text.indexOf("the"))
console.log(text.lastIndexOf("the"))

if(text.indexOf("scrambled") !== -1){
    console.log(true)
}
else{

    console.log(false)
}