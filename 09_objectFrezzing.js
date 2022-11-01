

console.log('object frezzing===================================');
const person = {
    name: "Mohit",
    rollNo : 1234
}
Object.freeze(person);

person.name = "Mohit Sharma";// Modification not considered as person object is freezed
person.street = "AS CLUB"; // Adding new property is not considered as person object is freezed
console.log(person);


const arrayNumbers = [2, 4, 5, 6, 7];
// arrayNumbers = [ ];
Object.freeze(arrayNumbers); // Immutable: We can not change the array values after creation or defining
//arrayNumbers.push(99);
console.log(arrayNumbers);

console.log('clone object================');

const student = {
    name: "Mohit",
    rollNo : 1234
}

let studentClone = Object.assign({}, student);
console.log(studentClone);




// console.log('deep cloning======================');

// const student = {
//     name: "Mohit",
//     rollNo : 1234
// }
// const address = {
//     city: "Pune",
//     street: "AS CLUB"
// }

// let studentClone = Object.assign({}, student);// Deep cloning will be performed
// studentClone.name = "Mohit Sharma";
// console.log(studentClone);
// console.log(student);
console.log('merge object....object.assign=============');

const student = {
    name: "Mohit",
    rollNo : 1234
}
const address = {
    city: "Pune",
    street: "AS CLUB"
}

let studentClone = Object.assign({}, student);// Deep cloning will be performed
studentClone.name = "Mohit Sharma";
console.log(studentClone);
console.log(student);

let mergedObject = Object.assign({}, student, address);
console.log(mergedObject);
