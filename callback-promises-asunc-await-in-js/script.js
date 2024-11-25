//synchronous
//it refers means the code run in particular sequence of instructions given in the program Each instructions waits for the previous instruction to complete its excution

//asynchronous
//due to synchronous programming sometimes instructions get blocked due to some previous instructions,which cause delay in uiAsynchronous code excution allows to excute next instructions without block

// console.log(1);
// console.log(2);

// setTimeout(()=>console.log("ponnanapavan"),1000)//2 milliseconds
// console.log(3)
// console.log(4)
// //here last two statements doesn't wait untill 2 seconds

//----------------------------------------------------------------------------------------------------------------->

//callback-->a callback is a function which is  use argument for  another function

// due to callback we will async things in js

function calculator(a, b, sum) {
  sum(a, b);
}

calculator(2, 5, function (a, b) {
  console.log(a + b);
});

// -------------------------------------------------------------------------------------------------------------------------->

//callback hell--> Nested callbacks stacked below one another forming a pyramid structure
// let age=20;
// if(age>=18){

//     if(age>=60){
//           console.log("senior")
//     }else{
//          console.log("middle")
//     }
// }else{

//     console.log("child")

// }

// function data(dataId,getNextData){

//       setTimeout(()=>{
//         console.log(dataId)
//         if(getNextData)
//         getNextData();
//       },2000);
// }

// data(120,()=>{
//      data(122,()=>{
//           data(1000,()=>{
//               data(40000)
//           })
//      })
// });//callback hell

//real time example

// function getUser(userId, callback) {
//     setTimeout(() => {
//       console.log("Fetched user");
//       callback({ userId, name: "John Doe" });
//     }, 5000);
//   }

//   function getPosts(userId, callback) {
//     setTimeout(() => {
//       console.log("Fetched posts for user:", userId);
//       callback([{ postId: 1, title: "Post 1" }, { postId: 2, title: "Post 2" }]);
//     }, 5000);
//   }

//   function getComments(postId, callback) {
//     setTimeout(() => {
//       console.log("Fetched comments for post:", postId);
//       callback(["Great post!", "Thanks for sharing"]);
//     }, 5000);
//   }

//   getUser(1,(user)=>{
//          getPosts(user.userId,(posts)=>{
//               getComments(posts[0].postId,(comments)=>{
//                    console.log(comments)
//               })
//          })
//   })

//------------------------------------------------------------------------------------------------------------->

//promise
//to overcome  callback we have to use promises concept

//A promise is a object that tells whether asynchronous operation is sucess or not

// let promise=new Promise((resolve,reject)=>{

//     console.log("i am a promsie")
//     reject("some error")

// })

// function data(dataId,getNextData){
//      return new Promise((resolve,reject)=>{
//         setTimeout(()=>{

//             // resolve(dataId)
//             reject("vhfvfv")
//               if(getNextData)
//                 getNextData();
//         },5000)

//      })
// }

// const a=data(10)
// .then((item)=>console.log(item))
// .catch((err)=>console.log(err))

//in promise we have 3 states 1)pending,2)fullfilled,3)rejected
//then and catch methods are used to handle promises
//then will be excute when a promise is fullfilled
//catch will be excute when a promise will be rejected

//promise chain

// function asynFunc(){

//     return new Promise((resolve,reject)=>{
//           setTimeout(()=>{
//              console.log("some data1")
//              resolve("success")

//           },4000)
//     })

// }

// function asynFunc2(){

//     return new Promise((resolve,reject)=>{
//           setTimeout(()=>{
//              console.log("some data2")
//              resolve("success")

//           },4000)
//     })

// }

// asynFunc().then((res)=>{
//     console.log(res)
//     console.log("fetching dat2");
//     asynFunc2().then((res)=>{
//           console.log(res)
//     })
//     .catch((err)=>{
//          console.log(err)
//     })
// })

//-------------------------------------------------------------------------------------------------------------------->

//example for promise chaining
// function getUser(userId) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Fetched user");
//         resolve({ userId, name: "John Doe" });
//       }, 1000);
//     });
//   }

//   function getPosts(userId) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Fetched posts for user:", userId);
//         resolve([{ postId: 1, title: "Post 1" }, { postId: 2, title: "Post 2" }]);
//       }, 1000);
//     });
//   }

//   function getComments(postId) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Fetched comments for post:", postId);
//         resolve(["Great post!", "Thanks for sharing"]);
//       }, 1000);
//     });
//   }

//   // Chaining Promises to avoid callback hell
//   getUser(1)
//     .then((user) => getPosts(user.userId))
//     .then((posts) => getComments(posts[0].postId))
//     .then((comments) => {
//       console.log("Comments on first post:", comments);
//     })
//     .catch((error) => console.error(error));

//example -2  returning the promise to another then method

// function Pavan(a) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (a < 19) {
//           resolve("success");
//         } else {
//           reject("failure");
//         }
//       }, 4000); // Set the delay to 4 seconds
//     });
//   }

//   Pavan(15)
//     .then((res) => {
//       console.log(res); // First "success" output
//       return Pavan(10); // Return another Pavan promise
//     })
//     .then((res) => {
//       console.log(res); // Second "success" output
//     })
//     .catch((err) => {
//       console.error(err); // If any Promise fails, handle the error here
//     });

//------------------------------------------------------------------------------------------------------------>
//async and await
//await pauses the execution of its surrounding async function until the promise is

async function getWeather() {
  const data = await api();
  console.log(data);
  console.log("ponana");
}

function api() {
  return new Promise((resolve, reject) => {
    console.log("wether data");
    setTimeout(() => {
      resolve(200);
    }, 4000);
  });
}

getWeather();
console.log("nvjvfvhvfjvn");
