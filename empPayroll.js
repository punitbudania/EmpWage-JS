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

    get name() { return this._name;}
    set name(name)
    {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
        {
            this._name = name;
        }
        else throw 'Name is Incorrect!';
    }

    get id() { return this._id;}
    set id(id)
    {
        let idRegex = RegExp('^[1-9]{1}[0-9]{0,}$');
        if(idRegex.test(id))
        {
            this._id = id;
        }
        else throw 'ID is incorrect!'
    }

    get salary() { return this._salary;}
    set salary(salary)
    {
        let salaryRegex = RegExp('^[1-9]{1}[0-9]{0,}$');
        if(salaryRegex.test(salary))
        {
            this._salary = salary;
        }
        else throw 'salary is incorrect!'
    }

    get gender() { return this._gender;}
    set gender(gender)
    {
        let genderRegex = RegExp('^[MF]{1}$');
        if(genderRegex.test(gender))
        {
            this._gender = gender;
        }
        else throw 'gender is incorrect!'
    }

    get startDate() {return this._startDate}
    set startDate(startDate)
    {
        if (startDate != undefined)
        {
            if (startDate <= new Date())
            {
                const options = {year: 'numeric', month: 'long', day: 'numeric'};
                const empDate = this.startDate === undefined ? "undefined" :
                                    this.startDate.toLocaleDateString("en-US", options);
                this._startDate = empDate;
            }
            else throw 'Invalid Date!'
        }   
    }

    toString()
    {
        return "id: " + this.id + " name: " + this.name + " salary: " + this.salary +
                    " gender: " + this.gender + " startDate: " + this.startDate;
    }    
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());

let newEmployeePayrollData = new EmployeePayrollData(1, "Terisa", 40000, "F", new Date());
console.log(newEmployeePayrollData.toString());
try {
    newEmployeePayrollData.id = 2;
    console.log(newEmployeePayrollData.toString());
} catch (error) {
    console.error(error);
}

try {
    newEmployeePayrollData.salary = 45000;
    console.log(newEmployeePayrollData.toString());
} catch (error) {
    console.error(error);
}

try {
    newEmployeePayrollData.gender = "F";
    console.log(newEmployeePayrollData.toString());
} catch (error) {
    console.error(error);
}

try {
    newEmployeePayrollData.startDate = new Date();
    console.log(newEmployeePayrollData.toString());
} catch (error) {
    console.error(error);
}
