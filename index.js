/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
function createEmployeeRecord(array){
    return{
        firstName: array[0],
        famiyName: array[1],
        title: array [2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
    };
}

function createEmployeeRecord(arrayOfArrays){
    return arrayOfArrays.map(createEmployeeRecord);
}

function createTimeInEvent(date){
    this.TimeInEvents.push({
        type: "TimeIn",
        hour: Number(date.slice(-4)),
        date:date.slice(0, date.length-5),
    })
    return this
}

function createTimeOutEvent(date){
    this.TimeOutEvents.push({
        type: "TimeOut",
        hour: Number(date.slice(-4)),
        date:date.slice(0, date.length-5),
    })
    return this
}

function hoursWorkedOnDate(date){
    let timeInEvent= this.timeInEvents.find(key.date=== date)
    let timeOutEvent= this.timeOutEvents.find(key.date=== date)
    return(timeOutEvent.hour-timeInEvent)/100;
}

function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this, date)* this.payPerHour
}

function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find(key=> key.firstName=== firstName)
}
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

