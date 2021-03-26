function SaveData () {
    // console.log("Hello World");
    var UserText = ($(this)).siblings(".description").val();
    var UserKey = ($(this)).parent("div").attr("id");
    window.localStorage.setItem(UserKey, UserText);
};

function loadSave() {
    var Hours = [
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
    for(i=0; i < 9; i++) {
        var LastInput = window.localStorage.getItem(Hours[i]);
        if(LastInput == null) return;
        console.log(LastInput);
        $("#" + Hours[i] + " > textarea").val(LastInput);
    };
    
}

content.text("Hello");
UpdateTimeColor();
loadSave()
$(".saveBtn").on("click", SaveData);