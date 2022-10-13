console.log("Q1============================================================");
wordLengthSquare = function(word){
 var wordLength = word.length;
 return wordLength*wordLength
}
//
 //var wordLengthResult = console.log(wordLength);
 
console.log( "Square of word length javascript is===",wordLengthSquare("javaScript")); 
console.log("Square of word length Google is===",wordLengthSquare("Google"));
console.log("Square of word length Developer is===",wordLengthSquare("Developer"));
console.log("Q.2===================================================================");

var string ="I am angular developer"
  var abc = string.length;
   console.log( "length of given string==",abc);
   var result = string.split(" ")
   //console.log(result);
   var xyz = result.length
   console.log("Total no. of words in string is==",xyz);
   var resultDivide = abc/xyz;
   console.log("Result of--length of string divides number of words",resultDivide);

    var product = abc*xyz
    console.log( "Result of--length of string*number of words of string is ",product);



   console.log("Q.1=====================Assignment2============================================");

var greatest_number = function(num1,num2){
    var result = num1>num2 ? num1 : num2
   return console.log(result);
}
//var compare = greatest_number(10,-10);
//console.log(greastest_number());
console.log("greatest number is");
greatest_number(10,-10);
console.log("greatest number is");
greatest_number(800,899);
console.log("===================================================================");
var number_odd_even = function(num1){
    var result = num1%2==0   ? true : false
    console.log(result);
}
console.log("Result for no.29 is ");
number_odd_even(29);
console.log("Result for no.44 is ");
number_odd_even(44);
console.log("Result for no.0 is ");
number_odd_even(0);
console.log("Result for no.101 is ");
number_odd_even(101);




console.log("Q.2=========================================================");
var word_odd_even = function(arg1){
     
    var result = arg1.length%2==0 ? "even":"odd"
   // var value = result%2==0 ? even:odd 
    console.log(result);
}
console.log("1.Length of number of word in javascript is");
word_odd_even("javascript")

console.log("2.Length of number of word in developer is");
word_odd_even("developer")


console.log("3.Length of number of word in Google is");
word_odd_even("Google")


 




