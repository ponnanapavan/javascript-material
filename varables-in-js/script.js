//there are three ways to define varable
//  1)var a=10, 2)let a=10,  3)const a=10;

//javascript is dynamically typed language because type of data will known at run timr

//variable means it is a named memory location 


//---------------------------------------------------------------------------------------------------------->
// scope of  var  variable is global  and function scope

// var age=10;

// if(true)
// console.log(age);

// here age is global variable i.e we can access that variable in out application 

var a=10;
var a=20; 
// redefinition of same variable is possible for var 

var b=10;
b=34;
//reassign of value also be possible  


//------------------------------------------------------------------------------------>

// for var we have some drawbacks  so to overcome this we have let and const in es6
//scope of let is block scope i.e with in the brackets {}

// for let redefinition is not possible   but reassign the value to the variable is possible

let c=10;
c=20;
console.log(c);


//---------------------------------------------------------------------------------------------->

//for const while defining the vaiable we will initlize the value   
const r=10;
//reassiging is not possible  and redefining is not possible  for const
