console.log("========================Assignment A=========================");
console.log("Q.1=========================================================");

function maleMarriageEligibility(gender, age, boyname) {
    //var condition = gender="male"  && age>=21
   // console.log(gender="male"  && age>=21);
    var result =  gender="male"  && age>=21 ?`Hey ${boyname}  you are eligible for marriage`
    : `Hey ${boyname}  you are  NOT eligible for marriage`;
    console.log(result);
}
maleMarriageEligibility("male",25,"Billgates")
maleMarriageEligibility("male",17,"StewJobs")

console.log("Q.2=========================================================");

function femaleMarriageEligibility(gender, age, girlname)
{
    if(gender=="female" && age>=18) { 
        return`Hey ${girlname}  you are eligible for marriage`}
    else{ return`Hey ${girlname}  you are  NOT eligible for marriage`}
    }
console.log(femaleMarriageEligibility("female",16,"Jenifer")); 
console.log(femaleMarriageEligibility("female",27,"Malinda Gates")); 

console.log("=========================Assignment B=====================================================");
console.log("Q.1=========================================================================");

function checkNumber(arg1){
    if (arg1%2==0) {
       // return "The given number is Even"
       return `The given number ${arg1} is even`
    }
    else{
        //return "The given number is Odd"
        return `The given number ${arg1} is odd`
    }

}
console.log(checkNumber(45));
console.log(checkNumber(70));
console.log(checkNumber(67));
console.log(checkNumber(98));
console.log("Q.2=====================================================");

function eligibility(age){
    if (age>=18) { 
     // return "You are eligible for voting."  
    return `Given age${age} you are eligible for voting`
    }
    else{
        //return 'You are not eligible for voting.'
    }

}
console.log(eligibility(18));
console.log(eligibility(20));
console.log(eligibility(17));
console.log(eligibility(40));
console.log("Q.3=====================================================");
//var noOfChar = 10
var char = "javascript-ES6"
var result = char.length
console.log( "NO.of characters in string ",result);
if (result>10) {
    console.log("It has more than 10 characters");
    
}

// if (character>10) {
//    return "yes string character is more than 10"
//    console.log(result); 
// }
console.log("Q.4=====================================================");

var givenString = 'JavaScript Language'
console.log("Given string is----", givenString);
var start = givenString.startsWith('Java')
console.log(start);

if(start==true){
    console.log(" Yes given string starts with word --Java. "); 
    
}





