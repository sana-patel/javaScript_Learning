
console.log(' step1.Object bank_sbi============================================');
let bank_sbi = {
    name:"State bank of India",
    branch:"pune",
    contactNumber:022-456378,
    branchManager: "Mr.A.S patil",
    bankTime: "9am to 5pm."
}
console.log(bank_sbi);

console.log("step2.bank location object============================================");
let bank_location = {
    street: "M.G.road",
    city: "pune",
    pincode:415110,

}
console.log(bank_location);

console.log("Step 3.1 merge both object by using object.assign() method");
let wholeInfo_bank = Object.assign(bank_sbi,bank_location)
console.log(wholeInfo_bank);
console.table(wholeInfo_bank);

console.log('step3.2 by using spread operator===============================');
let result = {...bank_sbi,...bank_location};
console.log(result);
console.table(result);

console.log('step.4====New object rate of interest======================================================');
rate_of_interest ={
    home_lone_interest: "6.1%",
    personal_lone_interest:  "11%",
    due_interest: "15%"

}
 console.log(rate_of_interest);

 console.log("step.5======merge step1,2 and 4==============");
 let sbi_details = Object.assign(bank_sbi,bank_location,rate_of_interest);
 console.log(sbi_details);
 console.table(sbi_details);

console.log('step.6.===traverse object by using loop=====');

for (const key in sbi_details) {
    if (Object.hasOwnProperty.call(sbi_details, key)) {
        const element = sbi_details [key] ;
        console.log(key,"=",element);

        
    }
}

