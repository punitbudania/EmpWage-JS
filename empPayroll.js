class EmployeePayrollData
{
    id;
    name;
    salary;
    gender;
    startDate;

    constructor(...params)
    {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get name() { return this.name;}
    set name(name)
    {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
        {
            this.name = name;
        }
        else throw 'Name is Incorrect!';
    }

    toString()
    {
        const options = {year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = this.startDate === undefined ? "undefined" :
                            this.startDate.toLocaleDateString("en-US", options);
        return "id: " + this.id + " name: " + this.name + " salary: " + this.salary +
                    " gender: " + this.gender + " startDate: " + empDate;
    }    
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 20000);
console.log(employeePayrollData.toString());
employeePayrollData.id = 0;
try 
{
    employeePayrollData.name = "Jeff";
    console.log(employeePayrollData.toString());        
} 
catch (error)
{
    console.error(error);
}

let newEmployeePayrollData = new EmployeePayrollData(2, "Terrisa", 30000, "F", new Date());
console.log(newEmployeePayrollData.toString());
