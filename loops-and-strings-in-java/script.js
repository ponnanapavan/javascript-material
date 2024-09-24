//for loop


// for(let i=0;i<5;i++)
//     console.log(i+1);


//while loop

// let i=0;
// while(i<=5){
//      console.log(i);
//      i++;
// }


//dowhile loop

// let j=0
// do{
    
//       j++;
//       console.log(j);

// }while(j<=5);




//------------------------------------------------------------------------------------->
//string -->sequence of characters is called strings

var name="strung"//in this way we will declare string

console.log(name)

//2nd method to create string

var name=new String("Ponnanapavan")
console.log(name) // this creates a string object   and here name holds an object with the value 

//operations in string like substring,length,uppercase ,lowercase,concatations

let op1='English '
let op2='PAVAN '
console.log(op1+op2)// this plus operator is used to add two strings
console.log(`${op1} ${op2}`)

console.log(op1.length)//length is used to find the length of given string

console.log(op1.toUpperCase())//toUpperCase() is used to change small to captial letters string
console.log(op1.toLowerCase());// change uppercase to lowercase

//substring method 

let str="ponnanapavan"
console.log(str.substring(2));// it will start from 2 end index till end of the string 

console.log(str.substring(2,7))//it will start giving the string from index 2 till last index -1 i.e(upto 6 )

//split method in js

let str1="ponnana pavan";
console.log(str1.split('a').join(','))// join  is used to join array of elements with separator

let str2="ponnana \"pavan\""
console.log(str2)


//in js we dont have reverse function so to reverse first we have to convert the string into array and after that reverse thet array and join 

let str4="ponnanapavan"
console.log(str4.split("").reverse().join(""))//converting string into array of characters and revere the orders of characters in array  then reverse array back to string 


let str5="ponnanapavan";

console.log(str5.split("").sort().join(""))//in this way we will sort the string 