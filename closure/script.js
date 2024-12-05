// //a closure a function that references variables from outer scope in inner scope

// //a closure a combination of function and the reference of the outer scope

// //every scope have three scopes localscope,globalscope,outerfunctionscope

// var a = 10;
// function subscribe() {
//   //local scope
//   var name = "ponnana";

//   function displayName() {
//     console.log(name);
//     console.log(a);
//   }
//   return displayName;
// }

// subscribe()();

// //interview question

// let c = 0;
// (function printCount() {
//   if (c === 0) {
//     let c = 1;
//     console.log(c);
//   }
//   console.log(c);
// })();

//closures used to time optimization

function find(index) {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  return function (index) {
    console.log(a[index]);
  };

  console.log(a[index]);
}

//instead of call every time findfunction so it will creates new Array so it will take some time to over come we weill use closure so it will remember the array so we need to call find function every time

const closure = find();
console.time("6");
closure(6);
console.timeEnd("6");
console.time("12");

closure(12);
console.timeEnd("12");

//setTimeout in closures

function a() {
  for (var i = 0; i < 3; i++) {
    function inner(i) {
      setTimeout(function log() {
        console.log(i);
      }, i * 1000);
    }
    inner(i);
  }
} // here var has function scope so it will override the value of i
a();

//make a private counter

function counter() {
  var _counter = 0;

  function add() {
    return _counter++;
  }

  function retrive() {
    return _counter;
  }

  return {
    add,
    retrive,
  };
}

const c = counter();
c.add();
console.log("counter", c.retrive());

//run code once

let view;
function likeVedio() {
  let called = 0;

  return function () {
    if (called > 0) {
      console.log("already called");
    } else {
      view = "ponnana pavan";
      console.log(view);
      called++;
    }
  };
}

const res = likeVedio();
res();
res();
