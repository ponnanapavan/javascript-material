// //map method is creating a new array from existing array by applying function to each element of the array

// const nums = [1, 2, 3, 4];
// const res = nums.map((num, i, nums) => num * 2);
// console.log(nums);

// //map will one call back function in that we have to pass three parameters one is current value and another one is index and another one is whole array

// const nums1 = [1, 2, 3, 4];

// const res1 = nums1.filter((nums) => nums % 2 === 0);
// console.log(res1);

// const nums2 = [1, 2, 3, 4];
// const sum = nums2.reduce((acc, curr, i, nums2) => {
//   return acc + curr;
// }, 0);
// console.log(sum);
// //acc is result of prevoius compution  and curr is current value

// //---------------------------------------------------------->
// //polyfills for map and filter and reduce

// //polyfill for map

// const nums4 = [1, 2, 3, 4];

// Array.prototype.myMap = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i], i, this));
//   }
//   return temp;
// };

// const res3 = nums4.myMap((num, i, nums4) => num * 2);
// console.log(res3);

// //polyfill for filter

// Array.prototype.myFilter = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       temp.push(this[i]);
//     }
//   }
//   return temp;
// };

// const res4 = nums4.myFilter((num, i, num4) => num % 2 == 0);
// console.log(res4);

// //polyfill for reduce

// Array.prototype.myReduce = function (cb, acc) {
//   let temp = acc;
//   for (let i = 0; i < this.length; i++) {
//     temp = cb(temp, this[i], i, this);
//   }
//   return temp;
// };

// const sum1 = nums4.myReduce((acc, curr, i, nums4) => acc + curr, 0);
// console.log(sum1);

//map vs forEach loop

//map will return a new array but forEach doesn't return any new array in directly do changes in original array

//we can chain other methods after map because map will return array but we not able to chaon other methods after forEach because it doesn't return array

// const nums5 = [1, 2, 3, 4];

// const ans = nums5.map((ele) => ele + 2);
// console.log(ans);

// const ans1 = nums5.forEach((ele, index) => (nums5[index] = nums[index] + 2));
// console.log(ans, nums5);

//----------------------------------------------------->

//output based questions

let students = [
  { name: "Ponnana", rollno: 31, marks: 90 },
  { name: "Pavan", rollno: 12, marks: 50 },
  { name: "Mani", rollno: 10, marks: 10 },
];

// //want name is uppercase

// const res = students.map((item) => item.name.toUpperCase());
// console.log(res);

// //return students data who score more than 40 marks

// const res1 = students.filter((item) => item.marks > 40);
// console.log(res1);

// const res2 = students.filter((item) => item.marks > 40 && item.rollno > 15);
// console.log(res2);

// //return only names of students who scored more than 40

// const res3 = students
//   .filter((item) => item.marks > 40)
//   .map((item) => item.name);
// console.log(res3);

//return total marks of all students with marks greater than 40 after 20 marks have been added to those scored less than 40

const res4 = students
  .map((item) => {
    if (item.marks < 40) item.marks += 20;
    return item;
  })
  .filter((item) => item.marks > 60)
  .reduce((acc, cuu) => acc + cuu.marks, 0);

console.log(res4);
