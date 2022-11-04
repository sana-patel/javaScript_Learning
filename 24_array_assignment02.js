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
console.log("===========================================================");
console.log("....array of employee is......");
const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi]
//console.log(array_employees);
console.log("===========================================================");

console.log("1.Name of employees working with TCS are..............");
for (const employee of array_employees) {
    if (employee.emp_compony === "TCS") {
        console.log(`Employee name:${employee.emp_name} ,${employee.emp_compony}`);
    }
}
console.log("===========================================================");

console.log("2.Name of Finance department employee are..............");
for (const employee of array_employees) {
    if (employee.emp_dept === "Finance") {
        console.log(`Employee name:${employee.emp_name} ,${employee.emp_dept}`);
    }

}

console.log("======================================================");
console.log("3.Name of employee starts with R..................");

//  for (const employee of array_employees) {
//     if (employee.emp_name.startsWith('R')); {
//         console.log(`Employee name: ${employee.emp_id},${employee.emp_name},${employee.emp_dept},${employee.emp_salary},${employee.emp_compony},`);
       
//     }
//  }
 for (const employee of array_employees) {
    if (employee.emp_name.startsWith("R")) {
         console.log(`Employee name: ${employee.emp_id},${employee.emp_name},${employee.emp_dept},${employee.emp_salary},${employee.emp_compony},`);

        
    }
    
   // console.log(`Employee name:`);
 }
console.log("===========================================================");

console.log("4.employee whose salary is greater than 70000..are");
for (const employee of array_employees) {
    if (employee.emp_salary > 70000) {
        console.log(`Employee name: ${employee.emp_name},${employee.emp_compony},${employee.emp_salary}`);
    }

}
console.log("=====================================================");
console.log("5.Employee having salary grater than or equal to50000 and IT dept...");
for (const employee of array_employees) {
    if (employee.emp_salary >= 50000 && employee.emp_dept === "IT") {
        console.log(`Employee name: ${employee.emp_id},${employee.emp_name},${employee.emp_dept},${employee.emp_salary},${employee.emp_compony},`);

    }

}
console.log("=====================================================");
console.log("6.Employees from Compony Infy..........");
for (const employee of array_employees) {
    if (employee.emp_compony === "Infy") {
        console.log(`Employee name: ${employee.emp_id},${employee.emp_name},${employee.emp_dept},${employee.emp_salary},${employee.emp_compony},`);


    }

}