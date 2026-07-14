// var age = 20;
// var education = "matric";
// var city = "karachi";
// var nic = true;

// if((city=='karachi' || city=='lahore')&&(nic==false||education=="matric")){

//     console.log('allowed');
// }
// else{
    
//     console.log('not allowed');
//  }   






// if((age>=18 && city=="karachi")||(nic==false && education=="no")){
//    console.log('allowed');
// }
// else{
    
//     console.log('not allowed');
//  }   

// // show even or odd
// var num = +prompt('enter random number')
// console.log(num)

// if(num % 2==0 ){
    
//     console.log('even')
// }
// else{
    
//     console.log('odd')
// }

// // take 2 number num1 and num2 
// // num2 should become power of num1

// var num1 = +prompt("enter a number")
// var num2 = +prompt("enter a 2nd number")

// console.log(num1**num2)

var oddnum = +prompt('enter a odd num <24 and >2')

if(oddnum > 2 && oddnum < 24 && oddnum % 2==1 ){
    
    if(oddnum==3 ||
        oddnum==5 ||
        oddnum==7 ||
        oddnum==11 ||
        oddnum==13 ||
        oddnum==17 ||
        oddnum==19 ||
        oddnum==23 
    ){
        console.log('prime number')
    }
    else{
        console.log(oddnum)
    }
}
else{
    
    alert("you entered wrong data")
    var oddnum = +prompt('enter a odd num <24 and >2')
}
