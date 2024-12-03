//there are three ways to define varable
//  1)var a=10, 2)let a=10,  3)const a=10;

//javascript is dynamically typed language because type of data will known at run time

//variable means it is a named memory location

//---------------------------------------------------------------------------------------------------------->
// scope of  var  variable is global  and function scope

// var age=10;

// if(true)
// console.log(age);

// here age is global variable i.e we can access that variable any where in our  application

var a = 10;
var a = 20;
// redefinition of same variable is possible for var

var b = 10;
b = 34;
//reassign of value also be possible

//------------------------------------------------------------------------------------>

// for var we have some drawbacks  so to overcome this we have let and const in es6
//scope of let is block scope i.e with in the brackets {}

// for let redefinition is not possible   but reassign the value to the variable is possible

let c = 10;
c = 20;
console.log(c);

// {
//   let d = 10;
// }
// console.log(d); //here we will get error because d is not declared out of block scope i.e(scope of d with in the block)
//---------------------------------------------------------------------------------------------->

//for const while defining the vaiable we will initlize the value
const r = 10;
//reassiging is not possible  and redefining is not possible  for const

//------------------------------------------------------------------>

//shadowing

let e = 10;
function test() {
  let e = 20; //e inner e variable is shadowing the outer e variable i.e(inner variable will override the outer variable)
  console.log(e);
}

test();
console.log(e);

//  error in shadowing

// function show() {
//   let f = 10;
//   if (true) {
//     var f = 20;
//     console.log(f);
//   }
// }
// console.log(f);
// show();

//here in the if block we declared f with var so var doesn't respect block scope it avaialble througout the function so agian we are redeclaring the variable so we getting error so shadowing is not possible for let and var

//--------------------------------------------------------->
//Hositing

//in javascript we have two phases one is creation phase and excution phase

//creation phase
//1)create a global excution context
//2)create a heap memory(allocated memory)
//3)it intialize the vaiables with undefined  for function it will take enter function

//in excution phase javascsipt will excute line by line if any new function call is their  again js will create a new excution context

//hositiing means javascript moves vaiables and functions to top of out code so we can access the varaibles without getting error but it is not poosible other languages

console.log(t); //we don't get any error but we will get undefined
var t = 10;

//hositing is not possible for let and const because  due to tempral dead zone i.e(period starting of line to initlize the value of vaiable ) during we not not able to access that vaiable

console.log(g); //cannot access g before intialization
let g = 10;
