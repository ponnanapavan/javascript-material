let obj={
      
    age:12,
    wt:68,
    ht:180
}

console.log(obj)

obj.color="white"

console.log(obj)

//object cloning
//object cloning means if two references points to two different objects and content of  objects is same

//3 methods for cloning
//1st method--->spread operator

let temp={
     age:20,
     wt:120,
     ht:23
}

let dest={...temp}
console.log('temp',temp)
dest.wt=12000
console.log('dest',dest)

//2nd method--->Object.assign({},objectname)

let temp1={
      age:20,
      wt:1200
}

let dest1=Object.assign({},temp1,temp)
console.log('temp',temp)
dest1.pavan='ponnana'
console.log('dest1',dest1);

//3rd method
//cloning using iterator 
let a={}
for(let key in dest1){
    let newKey=key;
    let newValue=dest1[key];
    //insert newKey and value in dest and create a clone
    a[newKey]=newKey;
}

console.log('a',a);


//garbage collection 
//garbage collector is part of javascript engine that automatically manages memory allocation and deallocation.Is primary job is free up memory that is no longer use

//automatic free of memory is called garbage collector

//here we have mark and sweep alogrthim
//in this we have mark phase it will mark reference variables in our code  after that non reference will automatically clean by gc in sweep phase





