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
var saveBtn = $(".cusBtn");
function hourTextbox() {
    var hourBox = [
        "hour-9",
        "hour-10",
        "hour-11",
        "hour-12",
        "hour-13",
        "hour-14",
        "hour-15",
        "hour-16",
        "hour-17",
    ];
    for (i=0; i < 9; i+=1) {
        var savedEvents = window.localStorage.getItem(hourBox[i]);
        $("#" + hourBox[i] + " > textarea").val(savedEvents);
    };
};
hourTextbox();
saveBtn.on("click", function() {
    var eventText = ($(this)).siblings(".description").val();
    var eventTextbox = ($(this)).parent("div").attr("id");
    window.localStorage.setItem(eventTextbox , eventText);
});