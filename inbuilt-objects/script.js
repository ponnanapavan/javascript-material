//math object

// console.log(Math.PI)

// console.log(Math.max(10,20,30,40))

// console.log(Math.min(10,20,30,40))

// console.log(Math.round(1.6)) // if the decimal point less than 0.5 then it will round down if the number is 0.5 or greater than 0.5 then it will round up

// console.log(Math.floor(2.8))//always rounds down to nearest whole number

// console.log(Math.ceil(1.9))//always rounds up to nearest whole number

// console.log(Math.abs(5-10))

// console.log(Math.random())// it will give random value which is present in 0,1

// console.log(Math.sqrt(5));

// console.log(Math.pow(2,10))

//------------------------------------------------->
//2)Date object

console.log(new Date()); //it will give the current Date

const dateWithTime = new Date(2024, 8, 20, 10, 30, 0); // September 20, 2024, 10:30:00 AM
console.log(dateWithTime);

const date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay()); // it will return data like monday -1 ,tuesday-2
