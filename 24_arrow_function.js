function display(){
    console.log("Hello");
}

let show =  () => {
    console.log("Hello");
}
//show();


let add = function(n1, n2) {
    return n1 + n2;
}
//console.log( add(10, 20));

let sum = (n1, n2) =>  n1 + n2; 

// let sum1 = (n1, n2) => {
//     return n1 + n2
// } 

//console.log( sum(10, 20));


console.log("Arrow function assignment=======================");
let arrowFun = () =>{
    console.log("1.Good Afternoon,Today is Friday");
}
arrowFun();
console.log("........................................................");
console.log("Arrow function for multiplication==");
let numProduct = (n1,n2,n3) =>{

    return n1*n2*n3
}
 console.log(`2.a.multiplication of 5,5,2 is ${numProduct(5,5,2)}`); 
 console.log("........................................................");
 console.log("Default value for arg=====");
 console.log(`2.b.multiplication of 10,4,2 is ${numProduct(10,4,2)}`); 
 console.log("........................................................");
  let addValues = (a1,a2,a3,a4,a5) =>{
    return a1+a2+a3+a4+a5

  }
  console.log(`3.a Addition of numbers- 100,100,200,349,756 is ${addValues(100,100,200,349,756)}`);
  console.log("........................................................");

  console.log(`3.c Addition of Values- "I am","learning","ES6","features","in depth." is==
   ${addValues("I am", " learning", " ES6"," features"," in depth.")}`);

