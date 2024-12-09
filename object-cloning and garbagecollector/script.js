// //an object is a collection of key-value pairs where each key have a value
// //keys is object is unique but values can be duplicate
// let obj = {
//   age: 12,
//   wt: 68,
//   ht: 180,
// };

// console.log(obj);

// obj.color = "white";

// console.log(obj);

// //object cloning
// //object cloning means if two references points to two different objects and content of  objects is same

// //3 methods for cloning
// //1st method--->spread operator

// let temp = {
//   age: 20,
//   wt: 120,
//   ht: 23,
// };

// let dest = { ...temp };
// console.log("temp", temp);
// dest.wt = 12000;
// console.log("dest", dest);

// //2nd method--->Object.assign({},objectname)

// let temp1 = {
//   age: 20,
//   wt: 1200,
// };

// let dest1 = Object.assign({}, temp1, temp);
// console.log("temp", temp);
// dest1.pavan = "ponnana";
// console.log("dest1", dest1);

// //3rd method
// //cloning using iterator
// let a = {};
// for (let key in dest1) {
//   let newKey = key;
//   let newValue = dest1[key];
//   //insert newKey and value in dest and create a clone
//   a[newKey] = newKey;
// }

// console.log("a", a);

// //garbage collection
// //garbage collector is part of javascript engine that automatically manages memory allocation and deallocation.Is primary job is free up memory that is no longer use

// //automatic free of memory is called garbage collector

// //here we have mark and sweep alogrthim
// //in this we have mark phase it will mark reference variables in our code  after that non reference will automatically clean by gc in sweep phase

// let ans = {
//   name: "ponnnaa pavan",
//   rollno: 123,
// };

// console.log(delete ans.rollno); //delete is used to delete a particular property
// console.log(ans);

// //to iterate object we have use for in loop

// for (let i in ans) console.log(i, ans[i]);

// const a1 = {};
// const a2 = { key: "b" };
// const a3 = { key: "c" };

// a1[a2] = 123; //here a1[a]  will look like [object object]
// a1[a3] = 456;

// console.log("a1", a1);

// //JsonStringfy vs JSON.parse

// const user = {
//   name: "ponnna",
// };

// const t = JSON.stringify(user);
// console.log("JOSN.stringify", t);
// console.log("JSON.parse", JSON.parse(t));

// //JSON.stringify will convert object to json string

// //JSON.parse will convert json string to object

// console.log([...Array(5).keys()]);

// const settings = {
//   username: "ponnana pavan",
//   level: 19,
// };

// const data = JSON.stringify(settings, ["level"]);
// console.log(data);

//destructuring

const y = {
  name: "ponnnana",
  obj: {
    name: "ponnana nested",
    rollno: 123,
  },
};

const { name } = y;
console.log(name);

const {
  obj: { name: firstname, rollno },
} = y; //in this way we will destructure nested object

console.log(firstname, rollno);

//object reference

console.log({ a: 1 } == { a: 1 });
console.log({ a: 1 } === { a: 1 });
//here above comparing two references either it is == or === it will return false

const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
console.log(value);
multiply(value);
console.log(value); //here we passing reference what the change we do that change is reflected for the original one

//shallow copy and deep copy

//shallow copy copy the main labels of the container but not copy the nested objects of the container
let user = {
  name: "pavan",
  obj: {
    name: "ponnana pavan",
  },
  nums: [1, 2, 3, 4],
};

const objClone = Object.assign({}, user);
objClone.name = "pavan cpu"; //this is not reflect to the main object
objClone.obj.name = "cpu"; //but here it reflected to main object
console.log("copied clone", objClone);
console.log("original", user);

const objClone2 = { ...user };
objClone2.nums.push(5);
console.log("copied clone", objClone2);
console.log("original", user);

//deep copy

//here we copied all things both main things and nested objects or arrays

const deepUser = {
  name: "ponnana",
  skills: ["reactjs", "javascript"],
};

const deepClone = JSON.parse(JSON.stringify(deepUser));
deepClone.skills.push("nodejs");
console.log(deepClone);
console.log(deepUser);
