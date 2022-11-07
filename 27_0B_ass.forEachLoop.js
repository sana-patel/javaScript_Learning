console.log("====0B Assignment Using for each()using Arrow Function====");

console.log("Q.1................................................");
const array_numbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601]
array_numbers.forEach((currentvalue) => {
    console.log("Index no.", array_numbers.indexOf(currentvalue), "=", currentvalue);


})

console.log("Q.2...............................................");
console.log("positive Numbers in the array===");
array_numbers.forEach((currentvalue) => {
    if (currentvalue < 0) {
        //console.log(array_numbers);
        return currentvalue
        // console.log(currentvalue);
    }
    //console.log(currentvalue);
    let array1 = [console.log(currentvalue)]


})

console.log("Q.3...............................................");
console.log("Negative Numbers in the array===");
const negativeNums = []
array_numbers.forEach((currentvalue) => {
    if (currentvalue >0) {
        //console.log(array_numbers);
        return currentvalue
        // console.log(currentvalue);
    }
    //console.log(currentvalue);
    //let array1 = [ console.log(currentvalue)]

    negativeNums.push(currentvalue)

})
console.log(`negative numbers are : ${negativeNums}`);

console.log("Q.4...................................................");
console.log("Even Numbers in the Array===================");
let evens1=[]
array_numbers.forEach((currentvalue) => {
    if (currentvalue % 2 == 0) {
        evens1.push(currentvalue)

    }
   

})
console.log(evens1);
console.log("Q.5...............................................");
console.log("sum of all numbers is===");
let sum = 0
array_numbers.forEach((currentvalue)=>{
  sum += currentvalue
})
console.log(sum);

console.log("Q.6...............................................");
console.log("Even positioned numbers===");

// array_numbers.forEach((currentvalue)=>{
//     currentvalue.indexOf % 2===0
//    console.log(currentvalue.indexOf % 2===0);
// })

const evens = [];

    array_numbers.forEach((currentvalue,index) => {
  if (index%2==0) {
    evens.push(currentvalue);
  }
})
console.log(evens);

console.log("Q.7...............................................");
console.log("Odd positioned numbers and negative numbers===");

const odds = [];

    array_numbers.forEach((currentvalue,index) => {
  if (index%2!==0 && currentvalue<0) {
    odds.push(currentvalue);
  }
})
console.log(odds);
