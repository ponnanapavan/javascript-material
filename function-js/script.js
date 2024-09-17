
//function definition
function sayName(){
     console.log(sayName);
}

sayName(); // function call 


function printCount(){
      for(let i=0;i<=100;i++)
        console.log(i);
}
  printCount();

//get average

function getAverage(n1,n2){
      return (n1+n2)/2;
}
console.log(getAverage(4,5));

//also assign the function to variablr
const a=function add(n1,n2){

    return n1+n2;

}
console.log(a(1,2))


//arrow function es6 feature
const b=()=>console.log("fnvf");

b();

const c=(a,b)=>{

    let temp=a+b;
    return temp;
     
}
console.log(c(1,2))


//anonymous  function

const d=function(){
      console.log("ponnana")
}

d();


function timeOut(){
      setTimeout(()=>{
         console.log("ponnana")
      },1000)// after 1000 milli seconds callback function will excute 

        console.log("fnnjnjn");
}

timeOut()