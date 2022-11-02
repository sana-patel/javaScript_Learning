console.log("============Array Assignment=======================");

console.log("Given Array======================================");
 let arrayOfNames = ['Kamat','Menon','Nashpati','taimur','Menon','Kamat','Andy','Taimur']
 console.log(arrayOfNames);

 console.log("b. Array after removing duplicates===================================");
 function removeDuplicates(arrayOfNames) {
    return arrayOfNames.filter((item,
        index) => arrayOfNames.indexOf(item) === index);
}
var removeDuplicates = removeDuplicates(arrayOfNames)
//console.log(removeDuplicates(arrayOfNames));
console.log(removeDuplicates);

console.log("c.Number of duplicate elements removed are==================================");
console.log( arrayOfNames.length-removeDuplicates.length);

console.log("d.Total no. of count of element after removing duplicates========================");
console.log(removeDuplicates.length);


