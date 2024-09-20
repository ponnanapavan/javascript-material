//Hoisting is a concept of  moving of variables and function declrations to top of code


sayName("ponnana");

function sayName(finalName){

    console.log(finalName)
      
} 


console.log(age);
var age=10; // here we trying to accessing the age before declaration but due to hoisting variable declaration is moved to top of code  but not value

//hoisting for let and const
//for both const and let  hoisting is not possible
//hoisting is not possible for function expression

const age1=25;
console.log(age1);



// const object1=new Human();// creating a object for Human
// class Human{

// }//for class level hoisting is not possible

//---------------------------------------------------------------------->
//Functions

 function a(greet,fullName){

    console.log(fullName)
    greet();
       
 }

 function greet(){
      console.log("ponnana pavan")
 }

 a(greet,"pavanponnana");//also pass the function as a argument


 //we can also return the function 
 function solve(){
    console.log("solve")
      return (
          function(){
              console.log("function return")
          }
      )
 }

 const b=solve();
 b();


 //we also write array of functions like array of objects
 const nums=[
      function a(){
          console.log("a")
      },
      function b(){
          console.log("b")
      },
      function c(){
         console.log("c")
      }
 ]

 for(let i of nums){
      i();
 }


//------------------------------------------------------------------>
 //temporal dead zone

 //varaiables scope in three types
 //global scope,function scope and block scope



//  {
//     var age=15; 
//  }
//  console.log(age);//here we are still acessing  age becuase var is not block scopr it is a global scope so due to that we can access anywhere we want


console.log(age);
console.log("jvnfj")
console.log("ponnana pavan");
// here line strating 93 to nd 95th line is in temporal dead zone
 let age=10;

 // period from hoisting  till it get an value in this time if we will try to access that varaiable then we will get an error
 //TDZ is applicable for only let and const but not var