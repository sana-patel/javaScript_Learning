

const arrayOfNumbers = [2,3,6,4,7,5,8];
let newArray = arrayOfNumbers.filter((element)=>{
  return element>=4;
})
console.log(newArray);

console.log("====== reduce()=====");
let sum =  arrayOfNumbers.reduce( (value, runningTotal) => {
    return  value + runningTotal;
},100 );
console.log(sum);
