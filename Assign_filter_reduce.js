console.log("==Assignment D - Using filter( ) and reduce( )===");
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
  console.log("!.objects in array=======================");
   array_emps = []
   array_emps.push(emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi)
   console.table(array_emps);
   console.log(".................................................");
   array_emps.filter((key,value)=>{
    return key.emp_compony="Wipro",value
 
   })
   