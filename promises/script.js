const cart = ["ponnnaa", "pants", "kurta"];

creatOrder(cart)
  .then((orderId) => {
    return orderId;
  })
  .then((orderId) => {
    return processToPayment(orderId);
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message));

function creatOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!validateCart(cart)) {
        const err = new Error("Cart is not valid");
        reject(err);
      }
      const orderId = "123455";
      if (orderId) resolve(orderId);
    }, 5000);
  });

  return pr;
}

function processToPayment(orderId) {
  const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (orderId) resolve("payment succes");
      reject(new Error("payment failed"));
    }, 7000);
  });
  return pr;
}

function validateCart(cart) {
  return true;
}

//a promise is object which it tell whether a asynchronous operation is success or not.

//promise is used to overcome problem if callback hell and also to get control over asynchronous code .

//we can create a promise by using new Promise() constructor.

//resolve and reject are methods which given by javascript
//resolve means promise successfull and reject means promise failed
//intially promise is pending after promise fullfilled then then method will run but if promise is failed the catch method will excute

//then method will return a promise.If we want to excute a series of asynchronou taks then we have  to use promise chaining concept.
