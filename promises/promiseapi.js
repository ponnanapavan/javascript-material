//promise.all is method in a javascript which it is used to work with multiple asynchronous tasks at the same time and wait from all then of to complete

//if the all the promises resolve then it will return results.If one promise will fail then it will throw an error

//if we dont use promise.all then we also excute multpile tasks at a time but it is very diffcuilt to handle erros seperately.i.e(we have to write some extra logic to handle errors)

//promise.all  and promise.allSettled

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p2 success"), 1000);
});

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p4 success"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p3 success"), 2000);
});

// Promise.allSettled([p1, p2, p3])
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

//in promise.allSettled if any one of the promise failes then also it will wait until all promises completed.And it will collected all the results in an array

// Promise.race([p1, p2, p3, p4])
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

//race will return first settled promise

Promise.any([p1, p2, p3, p4])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
//it will wait for firt successfull promise .If all promises are failed it will throw an aggerate error in the form of array i.e(it will give all the information of lal the promises)
