console.log("====0B Assignment Using for each()using Arrow Function====");

console.log("Q.1................................................");
const array_numbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601]
array_numbers.forEach((currentvalue) => {
    console.log("Index no.", array_numbers.indexOf(currentvalue), "=", currentvalue);


})

console.log("Q.2...............................................");
console.log("positive Numbers in the array===");
array_numbers.forEach((currentvalue) => {
    if (currentvalue < 0) {
        //console.log(array_numbers);
        return currentvalue
        // console.log(currentvalue);
    }
    //console.log(currentvalue);
    let array1 = [console.log(currentvalue)]


})

console.log("Q.3...............................................");
console.log("Negative Numbers in the array===");
const negativeNums = []
array_numbers.forEach((currentvalue) => {
    if (currentvalue >0) {
        //console.log(array_numbers);
        return currentvalue
        // console.log(currentvalue);
    }
    //console.log(currentvalue);
    //let array1 = [ console.log(currentvalue)]

    negativeNums.push(currentvalue)

})
console.log(`negative numbers are : ${negativeNums}`);

console.log("Q.4...................................................");
console.log("Even Numbers in the Array===================");
let evens1=[]
array_numbers.forEach((currentvalue) => {
    if (currentvalue % 2 == 0) {
        evens1.push(currentvalue)

    }
   

})
console.log(evens1);
console.log("Q.5...............................................");
console.log("sum of all numbers is===");
let sum = 0
array_numbers.forEach((currentvalue)=>{
  sum += currentvalue
})
console.log(sum);

console.log("Q.6...............................................");
console.log("Even positioned numbers===");

// array_numbers.forEach((currentvalue)=>{
//     currentvalue.indexOf % 2===0
//    console.log(currentvalue.indexOf % 2===0);
// })

const evens = [];

    array_numbers.forEach((currentvalue,index) => {
  if (index%2==0) {
    evens.push(currentvalue);
  }
})
console.log(evens);

console.log("Q.7...............................................");
console.log("Odd positioned numbers and negative numbers===");

const odds = [];

    array_numbers.forEach((currentvalue,index) => {
  if (index%2!==0 && currentvalue<0) {
    odds.push(currentvalue);
  }
})
console.log(odds);
console.log("                ");
console.log("                                  ");
console.log("=====Assignment C by using for each loop==========");

class employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_compony) {
      this.emp_id = emp_id;
      this.emp_name = emp_name;
      this.emp_dept = emp_dept;
      this.emp_salary = emp_salary;
      this.emp_compony = emp_compony;

  }

}
const emp_anil = new employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new employee(99, "Mahesh", "HR", 85000, "Infy");
console.log("==Q.1 Employees from TCS=========================================================");


const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi]
array_employees.forEach((element)=>{
if (element.emp_compony=="TCS") {
  console.log(`employee Name:${element.emp_name},${element.emp_compony}`);
}
})

console.log("===Q.2Employee with salary equal to or greater than 50000======");
array_employees.forEach((element)=>{
 if (element.emp_salary >= 50000) {
  console.log(element);
 }
})

console.log("====Q.3 Sum of salary of all employees===============");
let sum1 = 0
array_employees.forEach((element)=>{
  sum1 += element.emp_salary;
})
console.log(`sum of all employee salary is:${sum1}`);

console.log("===Q.4 Avarage salary====================");
array_employees.forEach((element)=>{
   let avarageSalary = sum1/array_employees.length
   //let sumSalary += element.emp_salary;
   console.log(`..Avarage of Salary is :${avarageSalary}`);
})
console.log("===Q.5 IT and HR department employees whose salary is greater than or equal to 75000");
array_employees.forEach((element)=>{
 if (element.emp_salary>= 75000 , element.emp_dept=="IT" , element.emp_dept=="HR") {
   //console.log(`Employee Name:${element}`);
   console.log(element);
 }

})
console.log("         ");
console.log("         ");
console.log("===Assignment02====map===Foreach Loop=================");
let map_employees = new Map();
map_employees.set(22,"emp_anil ");

map_employees.set(33,"emp_radha ");
map_employees.set(55,"emp_Rishi ");
map_employees.set(66,"emp_Sonali ");
map_employees.set(77,"emp_Monika ");
map_employees.set(88,"emp_Vinayak ");
map_employees.set(99,"emp_Mahesh ");
console.log(map_employees)

map_employees.forEach((key,value)=>{
console.log(value + "===>"+key);
})


console.log(   "      "   );
console.log(   "      "   );
console.log("=====AssignmentA map()=======================================");
console.log("..New array after adding 10 in each element.................");
const arrayOf_numbers=[20,11,40,25,23,11,9,31,60,2,19];
const newArray=arrayOf_numbers.map((element)=>{
 return element+10;
})
console.log(`NewArray:[${newArray}]`);
console.log(".....................................................................");
console.log("array after square===========");
const squareArray=arrayOf_numbers.map((element)=>{
  return element*element

})
console.log(`Array after square:[${squareArray}]`);
console.log(".....................................................................");
console.log("Add the index value into its corresponding each array element ====");
let sum2=0
const Array_with_index =arrayOf_numbers.map((element,index)=>{
return element+index
})
console.log(Array_with_index);
console.log(".....................................................................");

console.log(  "       "    );
console.log(   "      "   );
console.log("=====AssignmentB forEach");
//const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi]
console.log("==Q.1The list of all employee names==");
let arrayOfNames =[]
array_employees.forEach((element)=>{
   arrayOfNames.push(element.emp_name) 
})
console.log(arrayOfNames);
console.log(".....................................................................");
console.log("Q.2  list of departments========= ");
let arrayOfDept =[]
array_employees.forEach((element)=>{
   arrayOfDept.push(element.emp_dept) 
})
console.log(arrayOfDept);
console.log(".....................................................................");
console.log("Q.3  list of emp_ID========= ");
let arrayOfId =[]
array_employees.forEach((element)=>{
   arrayOfId.push(element.emp_id) 
})
console.log(arrayOfId);

console.log("       ");
console.log("       ");
console.log("===Assignment B - for filter( ) method=======");
console.log("Given Array");
const array_numbersNew = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log("Q.1==The numbers which are greater than 50====");
const arrayNew1 = array_numbersNew.filter((element)=>{
  return element>50
})
console.log(arrayNew1);

console.log(".....................................................................");
console.log("Q.2  The even numbers===");
const arrayEven = array_numbersNew.filter((element)=>{
  return element%2==0
})
console.log(arrayEven);

console.log(".....................................................................");
console.log("Q.3  The Odd numbers===");
const arrayOdd = array_numbersNew.filter((element)=>{
  return element%2!=0
})
console.log(arrayOdd);

console.log(".....................................................................");
console.log("Q.4 Numbers which are multiple of 5===");
const arrayProduct = array_numbersNew.filter((element)=>{
  return element%5==0
})
console.log(arrayProduct);

console.log(".....................................................................");
console.log("Q.5 Numbers which are between 20 and 50===");
const arrayAbc = array_numbersNew.filter((element)=>{
  return element>=20 && element<=50 
})
console.log(arrayAbc);
console.log(".....................................................................");

console.log("===Assignment C - for reduce( ) method====");
const array_numbers2 = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log("Q.1..... The sum of all numbers....");
const sum3 = array_numbers2.reduce((total,value)=>{

  return total+value
})
console.log(`The sum of all numbers in given array: ${sum3}`);
console.log(".....................................................................");
console.log("Q.2.....  The sum of all even numbers....");
const array_evens = array_numbers2.filter((element)=>{
     return element%2==0
    
})
console.log(array_evens);
// console.log(evens);
const arrayEven_sum = array_evens.reduce((total,value)=>{
return total+value
})
console.log(` Sum of even numbers:${arrayEven_sum}`);








