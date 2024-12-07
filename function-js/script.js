// // //function definition
// // function sayName() {
// //   console.log(sayName);
// // }

// // sayName(); // function call

// // function printCount() {
// //   for (let i = 0; i <= 100; i++) console.log(i);
// // }
// // printCount();

// // //get average

// // function getAverage(n1, n2) {
// //   return (n1 + n2) / 2;
// // }
// // console.log(getAverage(4, 5));

// // //also assign the function to variablr
// // const a = function add(n1, n2) {
// //   return n1 + n2;
// // };
// // console.log(a(1, 2));

// // //arrow function es6 feature
// // const b = () => console.log("fnvf");

// // b();

// // const c = (a, b) => {
// //   let temp = a + b;
// //   return temp;
// // };
// // console.log(c(1, 2));

// // //anonymous  function->a function without name is called anonymous function

// // const d = function () {
// //   console.log("ponnana");
// // };

// // d();

// // function timeOut() {
// //   setTimeout(() => {
// //     console.log("ponnana");
// //   }, 1000); // after 1000 milli seconds callback function will excute

// //   console.log("fnnjnjn");
// // }

// // timeOut();

// // //----------------------------------------------------------------------------->

// // //function statement

// // function a1() {
// //   console.log(123);
// // } //this is function statement

// // //function expression -->if we assign a function to one variable then it is called function expression

// // var h = function () {
// //   console.log("ponnana");
// // };

// // h();

// // //differnce between function statement and function expression is in hosting .hosting is possible in function statement but not in function expression

// // //function decleration is also known as function statement

// // //first class function(imp)

// // //ablity of  using functions as passing function as arguments and return function as retutn value   and assigning a function is called first class function

// // //IIFE immediately invoked function expression

// // (function a() {
// //   console.log("immediate invoked function expession");
// // })();

// // (function (x) {
// //   return (function (y) {
// //     console.log(x);
// //   })(2);
// // })(1);

// // function b(num) {
// //   //these are parameters
// //   console.log(num);
// // }

// // b(5); //these are arguments

// function g(a, y, ...c) {
//   console.log(a, y, c);
// }
// g(1, 2, 3, 4, 5, 5, 6, 7);

// let user = {
//   username: "ponnana",
//   rc1: () => {
//     console.log(this.username);
//   },

//   rc2() {
//     console.log(this.username);
//   },
// };

// user.rc1();
// user.rc2();

//curring in javascript

//curring is a function that takes one paragmeter  and return a new function expecting the next argument

// function f(a) {
//   return function (b) {
//     console.log(a, b);
//   };
// }

// f(2)(3);

//implement sum(2)(4)(5)

// function s1(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(s1(1)(2)(3));

//infnite Currying

// function add(a) {
//   return function (b) {
//     if (b) return add(a + b);
//     return a;
//   };
// }

// console.log(add(1)(2)(3)(4)());

//currying and partial application

// function sum(a) {
//   return function (b, c) {
//     return a + b + c;
//   };
// }

// const x = sum(10);
// console.log(x(5, 6));
// console.log(x(3, 2));
// this is partial application.Instead of passing all arguments we will lock some arguments and retun a function with remaining arguments

//implement curry function

function curry(fn) {
  return function curriedFunc(...args) {
    console.log(args);
    if (args.length >= fn.length) {
      //fn.length is length of function i.e number of parameters which have for that function
      return fn(...args);
    } else {
      return function (next) {
        return curriedFunc(...args, next);
      };
    }
  };
}

const sum1 = (a, b, c, d, e, f) => a + b + c + d + e + f;
const totalSum = curry(sum1);
console.log(totalSum(1)(2)(3)(4)(5)(6));
