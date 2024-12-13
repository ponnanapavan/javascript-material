// console.log(this);

// //this keyword in the global space always have valu eof global object it can be window or global object

// //in the broswer global object is window(represent to window/tab where our webpage runs) but in Nodejs global object is global

// function x() {
//   console.log(this);  //here this pointed to global window object
// }

// //value of this keyword inside the function  is depend  on strict mode or non strict mode .In strict mode value is undefined and in the non-strict mode value is global object either window or global
// x();

// //value of this key depends on how the function is called

// const obj = {
//   a: 10,
//   x: function () {
//     console.log(this); //here this pointed to current object.Because this also depend on how the function is called
//   },
// };

// console.log(obj.x());

//call bind apply -->this three key words used to manually change the value of this keyword

var salary = 2000;

function getSalary(a) {
  console.log(this.salary);
  console.log(a);
}

const employee = {
  salary: 30000,
};

const employee2 = {
  salary: 7000,
};

getSalary.call(employee, 100); //we change the this value from global object to employee

getSalary.call(employee2, 300);

getSalary.apply(employee2, [90]);

const res = getSalary.bind(employee2, 7890);
res();

//this keyword in arrow function

//arrow function doesn't have it's own this binding

const obj = {
  a: 10,
  x: () => {
    console.log(this); //this is pointed to global object i.e here this does not refer to the obj instead it takes the outer scope where the arrow function is defined
  },
};

obj.x();

const obj2 = {
  a: 20,
  x: function () {
    const y = () => {
      console.log(this); // this is pointed to obj2   because for arrow function does't have its own this so it it will take the this from it's lexical scope
    };
    y();
  },
};

obj2.x();

class user {
  constructor(n) {
    this.name = n;
  }

  getname() {
    console.log(this.name);
  }
}

const User = new user("ponnana");

User.getname();

//interview question

function makeUser() {
  return {
    name: "ponnana",
    ref() {
      return this;
    },
  };
}

let user1 = makeUser();
console.log(user1.ref().name);

// const user2 = {
//   name: "ponnana pavan",
//   logMessage() {
//     console.log(this.name);
//   },
// };

// setTimeout(user2.logMessage, 1000);
// //here passing the function without object so when the function will run after 1 second thus is no longer in user2 it will point to window object

// const user2 = {
//   name: "ponnana pavan",
//   logMessage() {
//     console.log(this.name);
//   },
// };

// setTimeout(function () {
//   user2.logMessage();
// }, 1000);

// //create a object constructor

// let calculator = {
//   read() {
//     console.log(this);
//     this.a = prompt("a + ", 0);
//     this.b = prompt("b + ", 0);
//   },

//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul);
