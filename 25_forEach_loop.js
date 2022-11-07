
console.log("Arrow Function======");
let show = (n1,test) =>{
    console.log("Hi");
}
show(10,"test");

// console.log("For Each Method?Loop===========");
// const arrayNumbers = [10,20,30,20,10]
// arrayNumbers.forEach(function(currentvalue,index,array){
//     console.log(currentvalue,index,array);

// })


console.log("For Each Method arrow function?Loop===========");
const arrayOfNumbers = [10,20,30,20,10]
arrayOfNumbers.forEach((currentvalue)=>console.log(currentvalue))
    

// const arrayOfNumbers1 = [10,20,30,20,10,-36,-30]
// arrayOfNumbers.forEach((currentvalue ,index) => {
//  if (currentvalue<0) {
//     console.log(currentvalue,index);
//  });

// const setOfNumbers = new set(arrayOfNumbers);
// setOfNumbers.forEach((value) => {
//     console.log(value);
// })

console.log("===== Traversing map using forEach() =====");
let map = new Map();
map.set(22, "Sachin");
map.set(11, "Dravid");
map.set(33, "Gaungully");
map.set(77, "Dravid");
map.forEach( (key, value) => {
    console.log(key, value);
} );

console.log("============");

