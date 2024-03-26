
const monthNames = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov",'dec'];

function fillRotation(startDate, endDate, monthName) {
    rotationCounter = 1;
     for (let x = startDate; x < endDate; x++) {
         document.getElementById(monthName + "day" + x).innerHTML = schedule[rotationCounter];
         document.getElementById(monthName + "day" + x).style.fontSize = "15px";
         if (rotationCounter >= schedule.length - 1) { rotationCounter = 0;} else {rotationCounter++;}
     }   
}

function populateArrays(year) {
    const firstDayOfMonth =[];
    const daysInMonth = [];

    // this adds 1 to the first day of month because the calendar table starts from 1 and not from 0 (jan1, jan2, jan3 and so on...)
    for (let x = 1; x < 13; x++) {
        let dt = new Date(year + ',' + x + ',1').getDay();
        firstDayOfMonth.push(dt + 1);  
    }
    
    // This for loop populates the number of days in a month into the array daysInMonth
    for (x = 1; x < 13; x++) {
        daysInMonth.push(new Date(year, x, 0).getDate());
    }

    for (x = 0; x < 13; x++) {
        populate(firstDayOfMonth[x], daysInMonth[x], monthNames[x]);
    }

    // Populates the schedule in the calendar by sending data to the function fillRotation()
    for (x = 0; x < 12; x++) {
        rotationStartDay = firstDayOfMonth[x];
        let rotationEndDay = daysInMonth[x] + firstDayOfMonth[x];
        fillRotation(rotationStartDay, rotationEndDay, monthNames[x]);
    }
        
}

// This is the function that creates the calendar for the year.
function populate (startDate, endDate, monthName) {
    dayValue = 1 
    for (let x = startDate; x < endDate + startDate; x++) {
        document.getElementById(monthName + x).innerHTML = dayValue;
        document.getElementById(monthName + x).style.fontWeight = "bold";
        dayValue ++;
    }
}

/**********  Execution starts here **********/

var form = document.getElementById('selections');

function startingFunction() {       // This function is called when the page loads.  <body onload="startingFunction();">
    let year = form["selectyear"].value;
    let group = form["selectgroup"].value;
    let boro = form["boro"].value;
    let shift = form["shift"].value;

    document.getElementById("year").innerHTML=year;
    
    setArrays(year,group,boro,shift);
    populateArrays(year);           // This calls the function to creates the starting day and month arrays
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    let year = parseInt(form["selectyear"].value);
    let group = form["selectgroup"].value;
    let boro = form["boro"].value;
    let shift = form["shift"].value;

    document.getElementById("year").innerHTML=year;
    
    setArrays(year,group,boro,shift);
    clearCalendar();
    populateArrays(year);
})

function clearCalendar() {
    for (let x = 0; x < 11; x ++) {
        for (let y = 1; y < 43; y ++) {
            document.getElementById(monthNames[x] + y).innerHTML="";
            document.getElementById(monthNames[x] + "day" + y).innerHTML = "";
        }   
    }
}

