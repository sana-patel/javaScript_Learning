var test = function(arg1, arg2){
    console.log("Function expression", arg1);
    return "FE";
}
var returnValue = test(10, 20);
console.log(returnValue);


var wordLengthSquare = function(givenWord){
   var wordLength = givenWord.length;
   var sqr = wordLength * wordLength;
   return sqr;

}
var result = wordLengthSquare("JavaScript");
 console.log(result);

var givenString = "I am Angular Developer";
var strLength = givenString.length;
var arrayWords = givenString.split(" ");
var count  = arrayWords.length;
var res = strLength / count;
console.log(res)
