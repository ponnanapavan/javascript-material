// there are types of operators in js
//Arthimetic operators,Assignment Operator,Comparsion Operator,Logical Operator,Bitwise Operator,Ternary Operator

//arithmetic operator

let a=10;
let b=20;

console.log(a+b);

console.log(a%b);

console.log(a**2);


console.log(a++);
console.log(a);


//---------------------------------------------------------------------------------------------------------------------->

//assignment operator

let c=10;//here = is assignment operator  i.e 10 is assigning to c
c=c+10 
c+=10

console.log(c);
//above both the lines are same  first one normal and second using short hand notation 


//---------------------------------------------------------------------------------------------------------------------->

//comparsion operator  (<.<=,>,>=,===,==,!==,!=)

console.log(10>5)//it will return either true or false

console.log(50<=4);


//strict equaity it will check both  value  and  type is same or not
let a1=10;
let a2="10";
console.log(a1 === a2);// here value is same but type is different so it will return false
//loose equity it will check only value but not check type of data
let a3=10;
let a4="10";
console.log(a3==a4);


//---------------------------------------------------------------------------------------------------------------------->
//Ternary Operator
//condition ? statement-1 : statement-2
let age=20
console.log(age>10 ?"ponnana":"pavan")


//---------------------------------------------------------------------------------------------------------------------->

//Logical operators  it is used to connect tow or more expressions/conditions to make descions based on the critria 
//And (&&)  or(||)  Not(!)
//For And both conditions must be true  for  or if any one condition will true then while condition is true


console.log(true && true && false);// in this all are not true so final output will e false 

console.log(true || false || false)

console.log(!false);

console.log(false || 1); //output is 1 

console.log(1 && "pavan")// output is pavan

//non boolean
//undefined, null,0,false,NaN



//---------------------------------------------------------------------------------------------------------------------->

//Bitwise operator
//there are some bitwise operators like AND(&), OR(|), Not(), XOR(^),leftShift(<<), RightShift(>>)

var g=10;
console.log(g<<2);

console.log(a>>2);

//left shift -->shift the elements towards left 

/*

 0 0 0 0 1 0 1 0
 0 0 1 0 1 0 0 0-->40

*/

/*
right shift

0 0 0 0 1 0 1 0
0  0 0 0 0 0 1 0
*/