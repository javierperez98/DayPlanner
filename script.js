// This displays a live current date using moment in Name of the day and month. 
// The day and year number and time in hours, minutes and seconds.
function date() {var currentDay = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(currentDay);
}
setInterval(date, 1000);

// past
// present
// future