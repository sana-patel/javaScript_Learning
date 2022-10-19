//no.to print 5 to 15
// let num = 5
// while (num<=15) {
//     console.log(num);
//     num++
    
// }
var logStr = ""
console.log("Q.1============================================================");

let num =5
var count=0
do {
    // console.log(num);
    logStr = logStr +" | "+ num
    num++
} while (num<=15);

console.log(logStr)
logStr=""




console.log("Q.2============================================================");
let num1=50
do {
    // console.log(num1);
    logStr = logStr +" | "+ num1
    num1--
} while (num1>=40);

console.log(logStr)
// logStr=""





console.log("Q.3============================================================");

 let num2= 1     // 1357
 do {
    if (num2%2!=0) {
        
    // console.log(num2);
    logStr = logStr +" | "+ num2
   
    }
    num2++ 
 } while (num2<=30)

 console.log(logStr)
// logStr=""




console.log("Q.4============================================================");
let a=0    //0246
do {
    if (a%2==0) {
        console.log(a);
    
    }
    a++
} while ( a<=20);





console.log("Q.5============================================================");
var table=5;
var count1=1;
while (count1<=10) {
    var result= table*count1
    console.log(result);
    count1++
}





console.log("Q.6============================================================");
var tenTable=10;
countTen = 1;
while (countTen<=10) {
    console.log(tenTable*countTen);
    countTen++
}