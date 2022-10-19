function reverseString(givenString) {
 var  lengthString = givenString.length-1  //hard work always pays back
   var reverseStr = " ";
    for (let index = lengthString; index>=0 ; index--) {
        //console.log(givenString.charAt(index));
      
        reverseStr = reverseStr + givenString.charAt(index);
}
console.log(reverseStr);
    }
    console.log("Reverse string no. 1======================================");
    reverseString("Hard work always pays back")
    console.log("Reverse string no. 2======================================");
    reverseString("Soon I will be IT champ")
    










// var myName = "Mohit"
// // 10 to 0
// var lenthStr = myName.length - 1; // 
// var reverseStr = "";
// for (let index = lenthStr; index >= 0; index--) {
//     console.log(myName.charAt(index));
//     reverseStr = reverseStr + myName.charAt(index)
// }
// console.log(reverseStr);
