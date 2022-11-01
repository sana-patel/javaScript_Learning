let personMohit = {
    fullName:"Mohit Tendulkar",
    city:"pune",
    age:32,
    isMarried:true,}
  console.log(Object.entries(personMohit)); 
  console.log("....................................");
  let isAvailable="fullName" in personMohit
console.log(isAvailable);

let person = {
    fullName:"sachin Tendulkar",
    city:"mumbai",
    age:42,
    isMarried:true,
    addresss:{
        street : "AS club",
        pincode:12345,
        city : "pune",
        state: "MH"


    },
    eat:function(){
        console.log("I am Vegetarian");
    },
    walk:function(){
        console.log("");
    },
    details: function(){
        //console.log(this.fullName);
        let personDetails =`details are: ${this.fullName},${this.age},`
       return personDetails;
    }
}
person.details();
person.pincode = 12345;
person.profession = "cricket";
person.addresss.city

console.log(person);
person.fullName ="sachin Ramesh Tendulkar"
 delete person.age
 console.table(person);
console.log(person);
 let personFullName = person.fullName
 console.log(personFullName);

 console.log(person.city);
 console.log(person["age"]);
 person.eat()





