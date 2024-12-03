//async

//async will return a promise
//async and await used to handle promises

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved successfully");
  }, 1000);
});

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise  p1 resolved successfully");
  }, 5000);
});

// async function getData() {
//   p.then((res) => console.log(res));
//   console.log("ponnana pavan"); //here this not wait untill the promise is resolved.js will immediately excute this line of code
// }
// //---------------------------------------------------------->
// async function handlePromise() {
//   const val = await p; // await is used to handle the promises.And await can oly be used inside the async function
//   console.log("ponnana pavan"); //this line of code will wait untill the promise is resolved
//   console.log(val);

//   const val1 = await p1;
//   console.log("p1 promise");
//   console.log(p1);
// }

// handlePromise();

// getData();

const fetchData = async () => {
  const data = await fetch("https://fakestoreapi.com/products/1");
  const res = await data.json();
  console.log(1, res);
};

console.log(fetchData());
