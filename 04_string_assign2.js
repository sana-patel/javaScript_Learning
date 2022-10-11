console.log("Q.1.................................................................");
var stringHandsOn = function(){
    console.log("     Hey you are doing good, keep it     ");
    // return "     Hey you are doing good, keep it     "
}

 stringHandsOn();

 console.log("Q.2...................................................................");
 var string = "     Hey you are doing good, keep it up    ";
//  console.log(string);
 var count = string.length
 console.log("Length of given string is",count);
console.log("Q.3.....................................................................");
var trimResult = string.trim()
console.log( "string after removing leading and trailing extra spaces==",string.trim());

console.log("Q.4.......................................................................");
console.log( "Length of extra spaces ==",count-trimResult.length);

console.log("Q.5...............................................................");
console.log("First character ",string.trim().charAt(0),"Last character", string.trim().charAt(trimResult-1));

console.log("Q.6......................................................................")
var splitResult =  trimResult.split(" ")
console.log( "Total words available in string",splitResult);
console.log("Q.7..............................................................");
console.log( "Index of word good",string.indexOf('good'));
console.log("Q.8.............................................................");
console.log( "substring starting from index 22 using substring()=",string.substring(22));
console.log("substring starting from index 22 using slice()=",string.slice(22));
console.log("Q.9.....................................................................");
console.log( "Is the string ends with up.==",string.endsWith("up"));
console.log("Q.10..................................................................");
console.log("Is the trim string starts with 'Hey'==",trimResult.startsWith("Hey"));


