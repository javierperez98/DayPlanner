// This displays a live current date using moment in Name of the day and month. 
// The day and year number and time in hours, minutes and seconds.
function date() { var currentDay = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(currentDay);
}
setInterval(date, 1000);

// backgroundcolor updater
var blockHour = 9;
var hours = $("textarea");
var blockTime = moment().format("H");

for (i=0; i < 9; i+=1) {
    if (blockHour > blockTime){
        hours.eq(i).addClass("future");
    }
    if (blockHour == blockTime){
        hours.eq(i).addClass("present");
    }
    if (blockHour < blockTime){
        hours.eq(i).addClass("past");
    }
    blockHour+=1;
}

// save button
var buttonArea = document.querySelector(".container");

buttonArea.addEventListener("click", function(event) {
    var saveBtn = event.target;
    if (saveBtn.matches("button")) {
        event.preventDefault();
        alert("Works")
        saveEvent();
        renderEvents();
    }
});

var events = document.querySelector(".description");
// save events
function saveEvent() {
    var plannerEvents = events.value;
    localStorage.setItem("plannerEvents", JSON.stringify(plannerEvents));
}

function renderEvents() {
  var savedEvents = JSON.parse(localStorage.getItem("plannerEvents"));
  if (savedEvents !== null) {
    document.querySelector(".description").innerHTML = savedEvents;
  }else {
    return;
  }
}

function init() {
  renderEvents();
}
init();