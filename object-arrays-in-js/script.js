// object is a collection of key - value pairs where each key  have a value

let obj={
      name:"ponnana",
      age:25,
      greet :function(){
          console.log("ponnana pavan")
      }
}

console.log(obj)
//accesing the elements
console.log(obj['name']);
//call function in object

obj.greet();

let obj2=obj;

console.log(obj === obj2)// here obj and obj2 is pointing to same memory location so we getting true as a outout 


//shallow copy  means we are copying top-level of an object.here we not creating fresh copy instaed both are pointing to same location .so if we do  change one then it will reflected to original part 


let a={
      name:"ponnana pavan",
      email:'pavan@gmail.com'
}

let b=a;
b.name="pavam"

console.log(a);  // it will change the original part  object a

//deep copy in this all the data  will copy  but it will pointed to different memory location and  we creating a new object so both copied and original are independent each other so if we change copied data it is not reflected to original part 



let c={
     name:"ponnana pavan"
}

let d={... c};
d.name="cse";
console.log(c)


//----------------------------------------------------------------------------------------------------->

//Arrays it is a collection of elements or a items 

//creation of array

let arr=[1,2,3,4,5,6]
console.log(arr)

let brr=new Array('pavan',1,2);// by using constructor we will create create a array

console.log(brr)

//accessing the elements 
console.log(brr[0])


//Built-in methods 
//1)Push which is used to insert the element

arr.push(10);// add 10 to arr array at last
arr.pop();// remove the last element 
arr.shift();// it will remove the element of atmost left
arr.push(10);
arr.push(2000)

//slice
console.log(arr.slice(2,5))// slice the array from start index 2 to end-1 index 4

//splice it is used to add remove or replace the elements

let temp=[]
for(let i=1;i<=15;i++)
    temp.push(i);

console.log("reverse",temp.reverse())

temp.splice(1,2)// start from index 1 remove two elements here it will take splce(startIndex,no of elements to remove)

temp.splice(1,0,10000,20000);// from 1st index it will add two with removing  numbers 

console.log(temp)

//map in js  it doesnt modify original array it will give new array with modified data

let temp2=[1,2,3,4];
let ans=temp2.map((item)=>item**2); // this map will used to iterate the whole array and so some operation  and it will return a new Array 
console.log(ans)


//filter this filter is used to filter the data and  return in  a new array

let temp3=[1,2,3,4,5];
let t1=temp3.filter((item)=>{
      if(item%2==0)
        return true;
    else
    return false
})

console.log(t1)


//reduce method is js used to reduce the array of values into single value 


let t4=[1,2,3,4]

const res=t4.reduce((acc,curr)=>{

    return acc+curr
      
},0)
console.log(res)


//sort 
//ascending order

let t5=[100,2000,1,-1,0];

t5.sort((a,b)=>a-b).reverse();
// check two numbers a  and   b  if a is smaller than b (correct order)  if a==b both are qual no need to swap but a>b here we have to swap  both a and b

console.log("t5",t5)

//descending order
t5.sort((a,b)=>b-a);
console.log(t5)


let arr4=[1,2,3,4,5,6,7,8]
//----------------------------------------------------------------------------->

//multiple methods to traverse the array

//forEach  
//in this for Each loop  break oe continue of  loop concept is not avaiable and for each loop is used to traverse the arrays i.e it works with arrays  and iterable objects but forEach not able to traverse string
//forEach will take callback function this callback function will call of each element
arr4.forEach((curr)=>console.log(curr)) 

//normal loop
for(let i=0;i<arr4.length;i++)
    console.log(arr4[i]**3)


//for of loop is used to traverse the string and array i.e arrays and iterable objects like map,set

for(let i of arr4)
console.log(i)

let t="ponnana" // for of used to traverse the loop 
for(let i of t)
    console.log(i)




// for in loop is used to iterate the key and values properties
let obj3={
      name:"ponnana pavan",
      age:10
}

for(let i in obj3)
    console.log(i,obj3[i])

