let personMohit = {
    fullName:"Mohit Tendulkar",
    city:"pune",
    age:32,
    isMarried:true,}
  console.log(Object.entries(personMohit)); 
  console.log("...............  In operator.......................");
  let isAvailable="fullName" in personMohit
console.log(isAvailable);
console.log("...............  For in.......................");
const mohitPerson =  {
    fullName: "Sachin Tendulkar",
    age: 42,
    "isMarried": true
}
for (const key in mohitPerson) {
    if (Object.hasOwnProperty.call(mohitPerson, key)) {
        const element = mohitPerson[key];
        console.log(element);
        
    }
}
console.log(s1 instanceof Student);
console.log(sachin instanceof Student);
