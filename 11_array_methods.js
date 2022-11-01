let arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];

arrayOfNumbers[4] = 11;
console.log(arrayOfNumbers);
console.log('includes method=========================');

console.log(arrayOfNumbers.includes(7));
console.log(arrayOfNumbers.includes(9));
console.log('traverse loop=========================');
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index]; 
    console.log(element);
}

console.log('for in loop===============================');
for (const index in arrayOfNumbers) {
    const element = arrayOfNumbers[index];
    console.log(element);
}
console.log('reverse order....traversing=============================');


let totalElements = arrayOfNumbers.length-1;
for (let index = totalElements; index >= 0; index--) {
    const element = arrayOfNumbers[index];
    console.log(element);
    
}

console.log('unshift method==(add element at first)====================');

arrayOfNumbers.unshift(5)
console.log(arrayOfNumbers);

arrayOfNumbers.unshift(0,99,77,66);
console.log(arrayOfNumbers);
console.log('shift() method..........remove first element============');
let array = [11,22,47,81]
array.shift();
console.log(array);

console.log('slice() method..........============');
//let arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7]
//let slicedElement = arrayOfNumbers.slice(2);
//console.log(slicedElement);

let arrayNumbers = [1, 3, 7, 8, 9, 3, 7];
let slicedElements =  arrayNumbers.slice(2);
console.log(slicedElements);
let slicedValues = arrayNumbers.slice(1, 4);
console.log(slicedValues);

console.log('splice ()..hep to insert element or replace element from that index to the end==========');

//let array_numbers = [1, 3, 7, 8, 9, 3, 7];
//console.log(array_numbers);
//let splicedElements =  array_numbers.splice(4);
//let splicedElements = array_numbers.splice(2,2)

//console.log(splicedElements);
//let array_numbers = [1, 3, 7, 8, 9, 3, 7];
//console.log(array_numbers);
//console.log('o for insert and 1 for replace========');
//let splicedElements = array_numbers.splice(2,0,22)
//console.log(array_numbers);

console.log("============ splice() ===========");
let array_numbers = [1, 3, 7, 8, 9, 3];
console.log(array_numbers);
 // let splicedElements =  array_numbers.splice(4); // It remove elements from 4th index to the end
 // let splicedElements =  array_numbers.splice(2, 3) // It removes the total  element starting from index 2
 // console.log(splicedElements);
 // let splicedElements =  array_numbers.splice(2, 0, 22 ) // Will insert element 22 before index 2, 0 - means don't replace
 // array_numbers.splice(2, 1, 22);
 array_numbers.splice(2, 1, 22, 44, 66);
 console.log(array_numbers);
