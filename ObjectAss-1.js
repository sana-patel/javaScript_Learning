let teacher = {
    fullName:"Radha patil",
    age:32,
    city:"pune",
    state:"MH",
    subject:"Computer",
    Education:"MCA",
    eat:function(){
        console.log("I am Vegetarian");
    },
    height: "5.5"
}

console.log(teacher)
teacher.eat()
teacher.city = "Pune"
console.log(teacher.city)
console.table(teacher)
console.log(teacher)