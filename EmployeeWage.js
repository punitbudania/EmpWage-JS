const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;

let empHrs = 0;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
let empDailyHrsAndWageArr = new Array();

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

// UC 6
function calcDailyWage(empHrs)
{
    return empHrs * WAGE_PER_HOUR;
}

let empDailyWageArr = new Array();

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
    empDailyHrsMap.set(totalWorkingDays, empHrs);
    empDailyHrsAndWageArr.push(
        {
            dayNum:totalWorkingDays,
            dailyHours:empHrs,
            dailyWage:calcDailyWage(empHrs),
            toString(){
                return '\nDay' + this.dayNum + ' => working hours is ' + this.dailyHours + 
                            ' And wage earned = ' + this.dailyWage
            }
        }
    );
}

let empWage = calcDailyWage(totalEmpHrs);
console.log("UC6 - Total Days:" + totalWorkingDays + 
                " Total Hrs: " + totalEmpHrs + " EmpWage: " + empWage);


// UC 7
// 7A
let totEmpWage = 0;
function sum(dailyWage)
{
    totEmpWage += dailyWage;
}                
empDailyWageArr.forEach(sum);
console.log("UC 7A - Total days: " + totalWorkingDays +
                " Total Hrs: " + totalEmpHrs + " EmpWage: " + totEmpWage);

function totalWages(totalWage, dailyWage)
{
    return totalWage + dailyWage;
}
console.log("UC 7A - emp wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));

// 7B
let dailyCntr = 0;
function mapDayWithWage(dailyWage)
{
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC 7B - daily wage map");
console.log(mapDayWithWageArr);

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


// UC 8
console.log("UC 8 - Emp wage map total hrs: " + 
                Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

// UC 9
const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}
let totalHours = Array.from(empDailyHrsMap.values())
                        .filter(dailyHours => dailyHours > 0)
                        .reduce(findTotal, 0);
let totalSalary = empDailyWageArr
                        .filter(dailyWage => dailyWage > 0)
                        .reduce(findTotal, 0);
console.log("UC 9A - emp wage with arrow: " + " Total Hours: " + 
                    totalHours + " Total wage: " + totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach( (value, key, map) => {
    if (value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full working days: " + fullWorkingDays);
console.log("Part working days: " + partWorkingDays);
console.log("Non working days: " + nonWorkingDays);

// UC 10
console.log("UC 10 - Showing daily hours worked and wage earned: " + empDailyHrsAndWageArr);

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




