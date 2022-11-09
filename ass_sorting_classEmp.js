
console.log("==Assignment B: Sorting in ascending & Descending Class employee===");
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

  console.log("1.objects in array=======================");
  const array_employee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi]
 console.table(array_employee);

   console.log("====Q.1 Sort the array_employees in ascending order of Employee Id’s====");
    let sortArray = array_employee.sort((id1,id2)=>{
        return id1.emp_id > id2.emp_id ? 1 : -1;
        //console.log(array_emps);
        //console.log(sortArray);
    })
    sortArray.forEach((objects)=>{
console.log(objects.emp_id,objects.emp_name,objects.emp_dept);
    })

    console.log("====Q.2 Sort the ‘array_employees’ in ascending order of employee department & log Id, dept, & Company====");
    let sortArrayDept = array_employee.sort((dept1,dept2)=>{
        return dept1.emp_dept > dept2.emp_dept ? 1 : -1;
        //console.log(array_emps);
        //console.log(sortArray);
    })
    sortArrayDept.forEach((object)=>{
console.log(object.emp_id,object.emp_dept, object.emp_compony);
    })


    console.log('===Q.3 Sort the employee array in descending order of employee salary and log Name, Salary & Company');
   sortArraySalary = array_employee.sort((salary1,salary2)=>{
    return salary1.emp_salary > salary2.emp_salary ? -1 : 1;
   })
   sortArraySalary.forEach((object)=>{
    console.log(object.emp_salary,object.emp_name,object.emp_compony);
   })

   
   console.log('4. Sort the employee array in ascending order of company name and log Company, Id, Name, Salary & dept');
  sortArrayCompony = array_employee.sort((c1,c2)=>{
       return c1.emp_compony > c2.emp_compony ? 1 : -1
  })
  sortArrayCompony.forEach((object)=>{
    console.log(object.emp_compony,object.emp_id,object.emp_name,object.emp_salary,object.emp_dept);
  })