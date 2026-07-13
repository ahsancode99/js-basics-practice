var age = 20;
var education = "matric";
var city = "karachi";
var nic = true;

if((city=='karachi' || city=='lahore')&&(nic==false||education=="matric")){

    console.log('allowed');
}
else{
    
    console.log('not allowed');
 }   






if((age>=18 && city=="karachi")||(nic==false && education=="no")){
   console.log('allowed');
}
else{
    
    console.log('not allowed');
 }   

// show even or odd
var num = +prompt('enter random number')
console.log(num)

if(num1 % 2==0 ){
    
    console.log('even')
}
else{
    
    console.log('odd')
}

// take 2 number num1 and num2 
// num2 should become power of num1

var num1 = +prompt("enter a number")
var num2 = +prompt("enter a 2nd number")

console.log(num1**num2)
