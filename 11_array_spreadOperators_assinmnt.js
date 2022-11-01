
console.log("Step.1 Given array.");
const array_nums=[20,3,4,56,90,400,49]
console.log(array_nums);

console.log("......................................................");
console.log("Step.2 Array after update values");
array_nums.push(55);
array_nums.push(66);
console.log(array_nums);
console.log("......................................................");
console.log("Step.3 Cloned Araray");
array_nums1= array_nums
console.log(array_nums1);
console.log("....................................................");
console.log("clone using spread operator");
let arrayNum2=[...array_nums]
console.log(arrayNum2);

console.log("......................................................");
console.log("updated original array");
array_nums.push(10);
array_nums.push(25);
console.log(array_nums);

console.log("Another Array  ");

