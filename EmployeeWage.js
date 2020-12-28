// UC 1
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if(empCheck == IS_ABSENT)
{
    console.log("Employee is absent");
}
else
{
    console.log("Employee is present");
}


// UC 2
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
switch (empCheck)
{
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        empHrs = 0;
}

let empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp wage: " + empWage);


//UC 3
function getWorkingHours(empCheck)
{
    switch (empCheck)
    {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
let empHrs = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
empHrs = getWorkingHours(empCheck);
let empWage = empHrs * WAGE_PER_HOUR;
console.log("emp wage: " + empWage);

// UC 4
const NUM_OF_WORKING_DAYS = 2;
let empHrs = 0;
for (let day = 0; day<NUM_OF_WORKING_DAYS; day++)
{
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Hrs: " + empHrs + " Emp wage: " + empWage);


// UC 5
const MAX_HRS_IN_MONTH = 100;
const NUM_OF_WORKING_DAYS = 10;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}
let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("UC5 - TOtal Days: " + totalWorkingDays + "Total Hrs: " + totalEmpHrs + " Emp Wage: " + empWage);


// UC 6
function calcDailyWage(empHrs)
{
    return empHrs * WAGE_PER_HOUR;
}

const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}

let empWage = calcDailyWage(totalEmpHrs);
console.log("UC6 - Total Days:" + totalWorkingDays + 
                "Total Hrs: " + totalEmpHrs + " EmpWage: " + empWage);


// UC 7
// 7A
let totEmpWage = 0;
function sum(dailyWage)
{
    totEmpWage += dailyWage;
}                
empDailyWageArr.forEach(sum);
console.log();

function totalWages(totalWage, dailyWage)
{
    return totalWage + dailyWage;
}
console.log("UC 7A - Total days: " + totalWorkingDays +
                "Total Hrs: " + totalEmpHrs + " EmpWage: " + empWage);

// 7B
let dailyCntr = 0;
function mapDayWithWage(dailyWage)
{
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC 7B - daily wage map");
console.log(mapDayWithWage);

// 7C
function fulltimeWage(dailyWage) 
{
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC 7C - Daily Wage filter when fulltime wage earned: ");
console.log(fullDayWageArr);

// 7D
function findFulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC 7D - First time full wage was earned on day: " + mapDayWithWageArr.find(findFulltimeWage));

// 7E
function isAllFulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC 7E - Check all element have full time wage: " + fullDayWageArr.every(isAllFulltimeWage));

// 7F
function isAnyPartTimeWage(dailyWage)
{
    return dailyWage.includes("80");
}
console.log("UC 7F - Check If Any Part Time wage: " + mapDayWithWageArr.some(isAnyPartTimeWage));

// 7G
function totalDaysWorked(numOfDays, dailyWage)
{
    if (dailyWage > 0) return numOfDays+1;
    return numOfDays;
}
console.log("UC 7G - Number of days emp worked: " + empDailyWageArr.reduce(totalDaysWorked, 0));