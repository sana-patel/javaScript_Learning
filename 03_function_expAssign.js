console.log("Q.1.............................................................");
var square = function( arg1){
    console.log("square of number is",arg1);
    return arg1*arg1
    
}
var  value = square(5)
console.log( value);
value = square(6);
console.log(value);
console.log(square(25));
console.log(square(100));
console.log("Q.2...........................................................................................");
console.log(typeof square);
console.log(typeof value);
console.log("Q3.............................................................................................");
var area = function(base,height){
    console.log("Area of Triangle",1/2*base*height);
    return 1/2*base*height
}
var value = area(4,2)
console.log(value);
console.log("Q4...................................................................................................");

var areaOfRectangle = function(length,width){
    console.log("area of rectangle",length*width);
    return length*width
}
var abc = areaOfRectangle(499,917)
console.log(abc);

console.log("Q5...........................................................................................................");
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

console.log("Q6.........................................................................................");

var java = "javaSript the most popular langauge";

console.log(java);
console.log("No.of characters in string",java.length);
var abc = java.indexOf("S")
console.log( "index of character 'S'",abc);
//console.log(java.indexOf('lang');
console.log(java.charAt(java.length-1));
console.log(java.charAt(3));





