console.log("..............Q1..................");
function abc(){ 
    console.log("Riza patel");
}
abc()
function xyz(){
    console.log("Riza is six year old girl");
}
xyz()

console.log("....................Q2..........................................");
function merge(firstName,lastName){
   // console.log("firstName,lastName");
    return firstName+lastName
}
var value = merge("sana","patel")
console.log(value);
console.log("..............................Q3................................");

function swap_values(arg1,arg2){
    console.log(".............Before swap................................");
    console.log(arg1,arg2);
    console.log("..............After Swap.................................................");
    var temp = arg1
    arg1 = arg2
    arg2 = temp
    console.log(arg1,arg2);

}
swap_values("virat","Anushka")
swap_values("1000","2000")

console.log(".........................Q4................................................................");

function add_three_numbers(arg1,arg2,arg3){
    console.log(arg1+arg2+arg3);
}
add_three_numbers(10.23,600,40)
add_three_numbers("Hello" ,"Good" ,"Morning")



// console.log(.......................Q2.............................................);
// function names( FirstName,LastName){
//     console.log(sana, patel);

// }
// names(FirstName,LastName)






// console.log("..........................................................");
// function multiply  ( num1,num2){
//   //  console.log(num1*num2);
//   return num1*num2
// }
//  console.log(multiply (7,5));
//  multiply (8,3)
//  console.log(".......................................................");
//  function grater( num1,num2){
//     if (num1-num2>0) {
//         console.log(num1, "is greater");
        
//     }
//     else{
//         console.log(num2,"is greater");
        
//     }
    
//  }
//  grater(8,10)
//  grater(24,12)
