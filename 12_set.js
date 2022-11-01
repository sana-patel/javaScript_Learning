let setOfNumbers = new Set();
console.log(typeof setOfNumbers);
console.log("====== Adding element into the set collection=======");
setOfNumbers.add(2);
setOfNumbers.add(4);
setOfNumbers.add(7);
setOfNumbers.add(9);
setOfNumbers.add(11);
console.log(setOfNumbers);

console.log("====== Adding duplicate element into the set collection=======");
setOfNumbers.add(7);
console.log(setOfNumbers);

console.log("====== checking available element into the set collection=======");
setOfNumbers.size
console.log(setOfNumbers.size);


console.log("====== delete available element into the set collection=======");

setOfNumbers.delete(9);
console.log(setOfNumbers.size);
console.log(setOfNumbers);

console.log("====== check is element available  into the set collection=======");

let isAvailable = setOfNumbers.has(7);
console.log(isAvailable);
console.log(setOfNumbers.has(9));

console.log("====== clear all element(empty) available  into the set collection=======");
//array use arrray name =0
//setOfNumbers.clear(); will clear all element

console.log("====== Traversing set =======");
for (const element of setOfNumbers) {
    console.log(element);
}



//let arrayOfNumbers = [2,3,4,5,6,3,5]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }que
console.log('convert array to set=================');
let arrayOfNumbers = [2,3,4,5,6,3,5]
let arrayUniqueElements= [...new set(arrayNumbers)]
console.log(arrayUniqueElements);
