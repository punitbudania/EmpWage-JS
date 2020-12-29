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
        console.log("Setting: " + name);
        this._name = name;
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
employeePayrollData.name = "Jeff";
console.log(employeePayrollData.toString());

let newEmployeePayrollData = new EmployeePayrollData(2, "Terrisa", 30000, "F", new Date());
console.log(newEmployeePayrollData.toString());


// UC 11
let totalWage = empDailyHrsAndWageArr
                .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);
let totalHours = empDailyHrsAndWageArr
                .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);
console.log("UC 11A - Total hours: " + totalHours + " Total wages: " + totalWages);

process.stdout.write("UC 11B")
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
                        .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));
                    
let partWorkingDayStrArr = empDailyHrsAndWageArr
                            .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
                            .map(dailyHrsAndWage => dailyHrsAndWage.toString());

let nonWorkingDayStrArr = empDailyHrsAndWageArr
                            .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
                            .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("\n UC 11D - Non working day nums: " + nonWorkingDayStrArr);
