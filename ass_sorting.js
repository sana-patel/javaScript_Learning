console.log("==Sorting in Ascending / Descending order and reverse");
console.log(".......................................");
const array_roll_numbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45 ] 
console.log(array_roll_numbers);

console.log("==Reverse the array====");
array_roll_numbers.reverse();
console.log(array_roll_numbers);

console.log("===Use the sort() method===");
array_roll_numbers.sort()
console.log(array_roll_numbers);//consider only first digit

console.log("===Sort the array in ascending order===");
array_roll_numbers.sort((a,b)=>{
  return a>b ? 1 : -1;
})
console.log(array_roll_numbers);

console.log("===Sort the array in descending order without using reverse() method only use sort()==");
array_roll_numbers.sort((a,b)=>{
    return a>b ? -1 : 1;
  })
  console.log(array_roll_numbers);

  console.log("===Sort the array in descending order with using reverse() method=== ");

  new_array = array_roll_numbers.sort();
  new_array.reverse();
  console.log(new_array);

  console.log("===The Greatest number from the array===");
let largest_num = array_roll_numbers.reduce((a,b)=>{
   return Math.max(a,b)
})
console.log(`The largest number: ${largest_num}`);
console.log("==Find the smallest number from the array==");
let smallest_num = array_roll_numbers.reduce((a,b)=>{
    return Math.min(a,b)
})
console.log(`The smallest number: ${smallest_num}`);
console.log("===Remove duplicates from array====");
// let uniqueChars = array_roll_numbers.filter((56, index) =>{
//     return chars.indexOf(56) === index
// })
 let unichars = array_roll_numbers.filter((item,index)=>{
   return array_roll_numbers.indexOf(item)=== index

 })
console.log(unichars);

