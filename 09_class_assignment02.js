class bank {
    constructor(bank_name, location, Account_number, ifsc,interest_rate){
        this.bank_name =   bank_name;
        this.location = location;
        this.Account_number = Account_number;
        this.ifsc = ifsc;
        this.interest_rate = interest_rate;
      }
}
let bank1 = new bank("Axis Bank","pune","p000238900432","ifsc is p4w432","13%")

let bank2 = new bank("SBI Bank","Kolhapur","p000238900433","ifsc is p4w433","13.5%")
let bank3 = new bank("IcIcI Bank","solapur","p000238900434","ifsc is p4w434","14%")
let bank4 = new bank("Kotak_Bank","Delhi","p000238900435","ifsc is p4w435","14.1%")
let bank5 = new bank("Hdfc_Bank","kolkata","p000238900436","ifsc is p4w436","14.2%")
let bank6 = new bank("Punjab_Bank","sangola","p000238900437","ifsc is p4w437","14.3%")

console.log(bank1);
console.log(bank2);
console.log(bank3);
console.log(bank4);
console.log(bank5);
console.log(bank6);
let array_bank = ['bank1','bank2','bank3','bank4','bank5','bank6'];
console.table(array_bank);
let kotk = array_bank.find('bank4')
console.log(kotk);
