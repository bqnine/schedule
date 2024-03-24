let group = parseInt(document.forms["selections"]["selectgroup"].value);
let boro = document.forms["selections"]["boro"].value;
let shift = document.forms["selections"]["shift"].value;
let year = document.forms["selections"]["selectyear"].value;

const firstDayOfMonth =[];
const daysInMonth = [];
const monthNames = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov",'dec'];

function selections() {
    location.reload();
    return false;
}

// This for loop populates the starting weekday of each month in the array firstDay of Month
for (let x = 1; x < 13; x++) {
    let dt = new Date(year + ',' + x + ',1').getDay();
    firstDayOfMonth.push(dt + 1);  // this adds 1 to the first day of month because the calendar table starts from 1 and not from 0 (jan1, jan2, jan3 and so on...)
}

// This for loop populates the number of days in a month into the array daysInMonth
for (x = 1; x < 13; x++) {
    daysInMonth.push(new Date(year, x, 0).getDate());
}

// This is the function that creates the calendar for the year.
function populate(startDate, endDate, monthName) {
    dayValue = 1
    for (let x = startDate; x < endDate + startDate; x++) {
        document.getElementById(monthName + x).innerHTML = dayValue;
        document.getElementById(monthName + x).style.fontWeight = "bold";
        dayValue ++;
    }
}


for (x = 0; x < 13; x++) {
    populate(firstDayOfMonth[x], daysInMonth[x], monthNames[x]);
}

document.getElementById("title").innerHTML = year + " Schedule";
document.getElementById("year").innerHTML = year;

// console.log("Group: " + group);
// console.log("Borough: " + boro);
// console.log("Shift: " + shift);
// console.log("Year selected: " + year);

