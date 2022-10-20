let teacher = {
    fullName:"Radha patil",
    age:32,
    city:"pune",
    state:"MH",
    Education:"MCA",
    subject:"Computer",
    degrees:{
        engineering:"CSC",
        PHD:'Adv computing',

        },
        certificates:{
            A:'Hacker rank participation',
            B:'Certificate in IFE course',
            C:'Certificate in Adv programming',
        },
        //`Degrees are ${this.engineering}, ${this.PHD}`
        teacherDegrees:function () {
            let allDegrees = `Degrees are ${this.degrees.engineering}, ${this.degrees.PHD}`
            return allDegrees
        },
    }
    
 


console.log(teacher);
console.log("1.Name of teacher");
console.log(teacher.fullName);
console.log("==============================================================");
console.log("2.Degrees of teacher");
console.log(teacher.degrees);
console.log("==============================================================");

console.log("3.Certificates Got");
console.log(teacher.certificates);
console.log("==============================================================");


console.log("4.Degrees after concat");
console.log(teacher.teacherDegrees());
console.log("==============================================================");

console.log("5.After adding new property");
//var hobby = "reading"
//console.log(teacher.hobby);


console.log(teacher);
teacher.hobby="reading"
console.log(teacher);
console.log("==============================================================");

console.log("6.After modify existing property");
teacher.subject="physics"
console.table(teacher);
console.log("==============================================================");


console.log("7.After delete existing property");
delete teacher.age
console.table(teacher);

console.log("==============================================================");

console.log("8.After adding new certificate in nested object");

teacher.certificates="citification in java script"
console.table(teacher);
console.log("==============================================================");

console.log("9.After adding new certificates");
console.log(teacher.certificates);

