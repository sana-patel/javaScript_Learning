
console.log("Q.1==========================================================");
//var string= "I am very good IT Developer"
// var strLower =string.toLowerCase()
 //console.log(strLower);
var contvowels =function(givenString){
    var strLower =givenString.toLowerCase();
    var vowels="aeiou";
    var count=0;
    for (let index = 0; index <= strLower.length; index++) {
        var char = givenString.charAt(index)
        var isVowelsAvailable = vowels.includes(char);
        if (isVowelsAvailable) {
            
            count=count+1
        }
       
    }
    console.log(`Total vowels count is in the given string is: ${count}`);
}
 contvowels("I am very good IT Developer")
 console.log("");

 console.log("Q.2==============================================================");

 function cube(num1) {
    var result= num1*num1*num1
    console.log(result);
    return result
     
 }
 
 totalCube = 0
 for (let index = 1; index <=5; index++) {
      var add = cube(index)
      totalCube= totalCube+add
     
 }
  console.log("Total of cube -",totalCube);
  console.log("Q.3=======================================================");
  function oddPositionedChars(givenstring) {
   // var totalchars = givenstring.length
    count = ""
    for (let index = 0; index < givenstring.length; index++) {
        if (index%2!=0 && givenstring.charAt(index)!=" ") {
            var charAt= givenstring.charAt(index)
           // totalchars=totalchars+1
           count=count+charAt

           
              

        }
        
      
    }
    console.log(count); 
  }
  console.log("Odd positioned character in string 1");
 oddPositionedChars("Hard work always pays back")
 console.log("Odd positioned character in string 2");
 oddPositionedChars("Soon i will be Angular IT champ")

 
