function gradeSystem(score) {
    if (score<35 && score==0) {
 let result1 = "You are failed"
 console.log(result1);
    }
    
    if (score>=35 && score<=100) {
        let result2= "You are passed."
        console.log(result2);
    }
    if (score>=35 && score<60) {
        let result3= " And GRADE is 'c'"
        console.log(result3);
    }
    if (score>=60 && score<75) {
        let result4= "And GRADE is'B'"
        console.log(result4);
        
    }
    if (score>=75 && score<90) {
        let result5= "And GRADE is'A'"
        console.log(result5);
        
    }
    if (score>=90 && score<=100) {
        let result6= "And GRADE is'A+'"
        console.log(result6);
        
    }
    // typeof(score)=="string

     if (score < 0 || score > 100 || typeof(score)=="string"  || typeof(score)==null || score== undefined ) {
         let result7= "'Invalid Input'"
        console.log(result7);
        return result7;
                
        
    }
    
}    


console.log("Q.1==Socre of Student is  66 ");
     gradeSystem(66);
console.log(".........................................................................");


     console.log("Q.2==Socre of Student is 13 ");
     gradeSystem(13);

     console.log(".........................................................................");
     console.log("Q.3==Socre of Student is invalid ");
     gradeSystem("");
    

     console.log(".........................................................................");
     console.log("Q.4==Socre of Student is 98 ");
     gradeSystem(98);

     console.log(".........................................................................");
     console.log("Q.5==Socre of Student is 'fifty five' ");
     gradeSystem("fifty five");


     console.log(".........................................................................");
     console.log("Q.5==Socre of Student is 35 ");
     gradeSystem(35);

     console.log(".........................................................................");
     console.log("Q.6==Socre of Student is 75 ");
     gradeSystem(75);

     console.log(".........................................................................");
     console.log("Q.7==Socre of Student is null ");
     gradeSystem(null);

     console.log(".........................................................................");
     console.log("Q.8==Socre of Student is undefined ");
     gradeSystem(undefined);


     console.log(".........................................................................");
     console.log("Q.9==Socre of Student is -20 ");
     gradeSystem(-20);

     console.log(".........................................................................");
     console.log("Q.10==Socre of Student is 55 ");
     gradeSystem(55);

     console.log(".........................................................................");
     console.log("Q.11==Socre of Student is 82 ");
     gradeSystem(82);