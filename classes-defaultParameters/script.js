//class is type of blue print which it tells how to create a object.In side the class we have twp properties state  and behaviour i.e(variables and functions)

class Human{
      //properties
     age// this is public
     #wt=60; // this varaiable is private so we not able to access the variable directly out side of class

       constructor(age)
       {
         this.age=age;
       } //in this we will define the constructor it is used to inilize the values to object
     walking(){
         console.log("i am walking")
     }

     getFetch(){
         return this.#wt
     } // it is used to get the private value

     setValue(val){
        this.#wt=val;

     }// this method is used to set the value to private varaiable


}

let obj=new Human(30);
obj.setValue(10);
console.log(obj.getFetch())
console.log(obj.age)

//---------------------------------------------------->
//default parameters
function Pavan(name="ponnana pavan"){
     console.log(name)
}
Pavan() // here i not passed any  arguments but the function still excpeting a function so at this case default parameters concept will come into picture i.e we have to default parameter in function so if user will not pass any agrument then function will take default parameter and if the will pass the argument then default parameter not be considered


function Pavan(name="ponnana pavan"){
    console.log(name)
}
Pavan(undefined) // here i not passed any  arguments but the function still excpeting a function so at this case default parameters concept will come into picture i.e we have to default parameter in function so if user will not pass any agrument then function will take default parameter and if the will pass the argument then default parameter not be considered


function getName(age){
     return age;
}


function show(name="pavan ponnana", age=getName(10)){
     console.log(name,age);
}
  show();