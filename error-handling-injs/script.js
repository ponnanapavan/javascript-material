//if the normal flow of excution will be fail then it is know an error
//types of errors
//1)compile-time   2)runtime

//handle the error

try{
     
     console.log(x);

}catch(err){
     console.log('i am inside catch block')
     console.log(err.message)
}finally{

    console.log("i am finally block")

}
//finally block will run every time 

//we can also throw cutom error using throw keyword

// try{

//      console.log(x);

// }catch(err){

//     throw new Error("some thing went wrong!!!!")

// }




let age=10;

if(age<20)
    throw "number must be greater than 20"

console.log("hello")