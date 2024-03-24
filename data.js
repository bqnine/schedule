
const queensEight1 = [" OFF"," 8-4"," 8-4"," 8-4"," 8-4"," 8-4"," OFF"];
const queensEight2 = [" OFF"," OFF","4-12","4-12","4-12","4-12","4-12"];
const queensEight3 = ["4-12","4-12"," OFF"," OFF"," 8-4"," 8-4"," 8-4"];
const queensEight4 = [" 8-4"," 8-4"," 8-4"," OFF"," OFF","12-8","12-8"];
const queensEight5 = ["12-8","12-8","12-8","12-8","12-8"," OFF"," OFF"];

const brooklynEight1 = [" OFF"," 7-3"," 7-3"," 7-3"," 7-3"," 7-3"," OFF"];
const brooklynEight2 = [" OFF"," OFF","3-11","3-11","3-11","3-11","3-11"];
const brooklynEight3 = ["3-11","3-11"," OFF"," OFF"," 7-3"," 7-3"," 7-3"];
const brooklynEight4 = [" 7-3"," 7-3"," 7-3"," OFF"," OFF","11-7","11-7"];
const brooklynEight5 = ["11-7","11-7","11-7","11-7","11-7"," OFF"," OFF"];

const queensTwelve1 = [" OFF"," 8-4"," 8-4"," 8-4"," 8-4"," OFF"," OFF"];
const queensTwelve2 = [" OFF"," OFF"," OFF"," OFF"," 8AM"," 8AM"," 8AM"];
const queensTwelve3 = [" 8AM"," OFF"," OFF","  8P","  8P","  8P"," OFF"];
const queensTwelve4 = [" OFF"," 8AM"," 8AM"," 8AM"," OFF"," OFF"," 8PM"];
const queensTwelve5 = [" 8PM"," 8PM"," 8PM"," OFF"," OFF"," OFF"," OFF"];

const brooklynTwelve1 = [" OFF"," 7-3"," 7-3"," 7-3"," 7-3"," OFF"," OFF"];
const brooklynTwelve2 = [" OFF"," OFF"," OFF"," OFF"," 7AM"," 7AM"," 7AM"];
const brooklynTwelve3 = [" 7AM"," OFF"," OFF","  7P","  7P","  7P"," OFF"];
const brooklynTwelve4 = [" OFF"," 7AM"," 7AM"," 7AM"," OFF"," OFF"," 7PM"];
const brooklynTwelve5 = [" 7PM"," 7PM"," 7PM"," OFF"," OFF"," OFF"," OFF"];

let modifiedYearValue = (year % 7);

const getGroupValue = [
    [4,1,3,5,2,4,2],    // group 1
    [5,2,4,1,3,5,3],
    [1,3,5,2,4,1,4],
    [2,4,1,3,5,2,5],
    [3,5,2,4,1,3,1]     // group 5
]

let getGroup = getGroupValue[group][modifiedYearValue];


switch (getGroup) {  // Adjusts the rotation depending on the group selected.
    case 1:
        var queens8 = [queensEight3,queensEight4,queensEight5,queensEight1,queensEight2];
        var queens12 = [queensTwelve3,queensTwelve4,queensTwelve5,queensTwelve1,queensTwelve2];
        var brooklyn8 = [brooklynEight3,brooklynEight4,brooklynEight5,brooklynEight1,brooklynEight2];
        var brooklyn12 = [brooklynTwelve3,brooklynTwelve4,brooklynTwelve5,brooklynTwelve1,brooklynTwelve2];
        break;
    case 2:
        var queens8 = [queensEight4,queensEight5,queensEight1,queensEight2,queensEight3];
        var queens12 = [queensTwelve4,queensTwelve5,queensTwelve1,queensTwelve2,queensTwelve3];
        var brooklyn8 = [brooklynEight4,brooklynEight5,brooklynEight1,brooklynEight2,brooklynEight3];
        var brooklyn12 = [brooklynTwelve4,brooklynTwelve5,brooklynTwelve1,brooklynTwelve2,brooklynTwelve3];
        break;
    case 3:
        var queens8 = [queensEight5,queensEight1,queensEight2,queensEight3,queensEight4];
        var queens12 = [queensTwelve5,queensTwelve1,queensTwelve2,queensTwelve3,queensTwelve4];
        var brooklyn8 = [brooklynEight5,brooklynEight1,brooklynEight2,brooklynEight3,brooklynEight4];
        var brooklyn12 = [brooklynTwelve5,brooklynTwelve1,brooklynTwelve2,brooklynTwelve3,brooklynTwelve4];
        break;
    case 4:
        var queens8 = [queensEight1,queensEight2,queensEight3,queensEight4,queensEight5];
        var queens12 = [queensTwelve1,queensTwelve2,queensTwelve3,queensTwelve4,queensTwelve5];
        var brooklyn8 = [brooklynEight1,brooklynEight2,brooklynEight3,brooklynEight4,brooklynEight5];
        var brooklyn12 = [brooklynTwelve1,brooklynTwelve2,brooklynTwelve3,brooklynTwelve4,brooklynTwelve5];
        break;
    case 5:
        var queens8 = [queensEight2,queensEight3,queensEight4,queensEight5,queensEight1];
        var queens12 = [queensTwelve2,queensTwelve3,queensTwelve4,queensTwelve5,queensTwelve1];
        var brooklyn8 = [brooklynEight2,brooklynEight3,brooklynEight4,brooklynEight5,brooklynEight1];
        var brooklyn12 = [brooklynTwelve2,brooklynTwelve3,brooklynTwelve4,brooklynTwelve5,brooklynTwelve1];
        break;
}
 
let rotationSchedule =[];
if (boro == "queens") {  // Changes the array rotationSchedule depending on the boro and shift selected
    if (shift == "twelvehours") {
        rotationSchedule = queens12;
    } else {
        rotationSchedule = queens8;
    }
}

if (boro == "brooklyn") {
    if (shift == "twelvehours") {
        rotationSchedule = brooklyn12;
    } else {
        rotationSchedule = brooklyn8;
    }
}

// This creates the array named scheduled which will be used to populate the calendar.
const schedule =  rotationSchedule[0].concat(rotationSchedule[1],rotationSchedule[2],rotationSchedule[3],rotationSchedule[4]);  

// This starts the first day of the schedule rotation depending on the year.
let rotationCounter = firstDayOfMonth[0] - 1; 

function fillRotation(startDate, endDate, monthName) {
    for (let x = startDate; x < endDate; x++) {
        document.getElementById(monthName + "day" + x).innerHTML = schedule[rotationCounter];
        document.getElementById(monthName + "day" + x).style.fontSize = "15px";
        if (rotationCounter >= schedule.length - 1) { rotationCounter = 0;} else {rotationCounter++;}
    }   
}

// Populates the schedule in the calendar by sending data to the function fillRotation()
for (x = 0; x < 13; x++) {
    rotationStartDay = firstDayOfMonth[x];
    let rotationEndDay = daysInMonth[x] + firstDayOfMonth[x];

    fillRotation(rotationStartDay, rotationEndDay, monthNames[x]);
}

console.log("Array: " + modifiedYearValue + "  Index: " + getGroup);

















/*
firstDayOfMonth 
daysInMonth 
monthNames 
*/