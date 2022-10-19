console.log("Q.2=================================================================");
//wap total no. of vowels
var string = "I love Javascript"
var stringLowerCase = string.toLocaleLowerCase();
var length = stringLowerCase.length //good morning it champ

//var char = "a e i o u"
for (let index = 0; index <stringLowerCase.length ; index++) {
   var charVowels = stringLowerCase.charAt(index);
   if ( charVowels == "a" || charVowels == "e" || charVowels == "i" || charVowels == "o" || charVowels == "u") {
    console.log(charVowels);
   }
    
}
console.log("Q.1===================================================================================")

var givenString = "Good Morning IT champ"
var strLowerCase = givenString.toLowerCase()


var strVowels = strLowerCase.includes("a","e","i","o","u");
console.log(strVowels)

var vowelArr = ["a","e","i","o","u"]
count = 0
vowelArr.forEach(element => {
    
    if (strLowerCase.includes(element)){
        count = count+1;
    }
    
});
console.log("Total vowel in string : -",count)
//var abc = strVowels.length
//console.log(strVowels);
//console.log(abc);
// for (let index = 0; index < strLowerCase.length; index++) {
//    if (givenString.includes["a","e","i","o","u"]) {
//     console.log(strVowels);
//    }
    
// }

console.log("Q.3==========================================================");
var number = 0
for (let index = 0; index <= 10; index++) {
    number+=index
    
}
console.log(`total of first 10 numbers is ${number}`);
console.log("Q.4=========================================================");



//  var squareResult=console.log(square);
function square(num1) {
   var result= num1*num1
   console.log(result);
   return result
    
}
//square(2);
totalSquare = 0
for (let index = 1; index <=5; index++) {
     var add = square(index)
     totalSquare= totalSquare+add
    
}
 console.log("Total of square -",totalSquare);







      
        

        //    console.log(number);
        //  console.log(`sum of square is${number}`)

    
 
 
console.log("reference============================");
//1+2+3+
// Count the total number vowels using includes() for string → “Good Morning IT Champ”
var countVowels = function(myString) {
    console.log("Count the total number vowels using includes() for string → “Good Morning IT Champ”");
    //var myString = "Good Morning IT Champ";
    var vowelsLoweCase = "aeiou";
    var vowelUpperCase = "AEIOU";
    var vowelsCount=0;
    for (let index = 0; index < myString.length; index++) {
       var char =  myString.charAt(index);
       var isLowerAvailable =  vowelsLoweCase.includes(char);
       var isUpperAvailable =  vowelUpperCase.includes(char);
       if (isLowerAvailable || isUpperAvailable) {
            vowelsCount = vowelsCount + 1;
       }
    }
    console.log(`Total Vowels count : ${vowelsCount}`);
}
countVowels("Good Morning IT Champ");

console.log("============================");
function evenPositionedChars(myString){
    for (let index = 0; index < myString.length; index++) {
       // console.log(index%2==0);
       var chh = myString.charAt(index);
       if (index%2==0 && chh!=" ") {
          console.log(chh);
       }
       //var chh = myString.charAt(index);
        
    }
}
evenPositionedChars("Hard work always pays back");
console.log("reference=====================================");