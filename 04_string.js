var greet = "Good Morning bro ";
greet.length;


console.log(greet);
var count = greet.length;
console.log( "No of characters in string",count);
console.log(greet.length);

var abc = greet.charAt(8)
console.log(abc);
console.log(greet.charAt(8));

var char = greet.indexOf('o');
console.log(char);
console.log(greet.indexOf('bro'));


var fName = "Virat";
var lName = "Kohli";
var result = fName.concat(lName); // ViratKohli
console.log(result);


console.log("==============replace()===============");
var greet = "Good Morning bro and sis";
var replaceDemo = greet.replace("Morning", "Evening");
console.log(replaceDemo);

console.log("==============toUpperCase() and toLowerCase()===============");
console.log(replaceDemo.toUpperCase());
console.log(replaceDemo.toLowerCase());

console.log("==============trim()===============");
var greet = "    Good Morning bro and sis            ";
console.log(greet.length);
var trimResult =  greet.trim();
console.log(trimResult.length);

console.log("==============includes()===============");
var greet = "Good Morning bro and sis";
console.log(greet.includes("bro"));

console.log("==============substring()===============");
var greet = "Good Morning bro and sis";
console.log(greet.substring(8));
console.log(greet.substring(13, 17));

console.log("==============slice()===============");
console.log(greet.slice(13));
console.log(greet.slice(13, 17));

console.log("==============split()===============");
var studentList  = "Sunil | Anil| Andy| Jenny| Lata";
var splitResult = studentList.split("|");
console.log(splitResult);


console.log("=========baccktick====================");
var impQuote = `"Do or Die" this attitude is important for this training`;
console.log(impQuote);

var impQuote = `"Do or Die" this attitude is important for this training`;
console.log(impQuote);

var fName = "Virat";
var lName = "Kohli";

// First Name:${fName}  Last Name: ${lName} 
console.log(`First Name : ${fName} and Last Name: ${lName}`);


// var res = "Hey you are doing good keep it up";
// var stepSplit =  res.split(" ");
// console.log(stepSplit);
// console.log(stepSplit.length);


// var stringWithSeprato="";
// stepSplit.forEach(item => {
//     stringWithSeprato = stringWithSeprato +  item.concat("|");
// });
// console.log(stringWithSeprato




