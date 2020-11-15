// Var today sets the current day at the top of the page using moment.js
var today = $("<p>");
    today = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").append(today);
// Var currentHour uses moment.js to get the current hour as a number 0-23.
var currentHour = moment().hour();
    console.log(currentHour);
// Jquery sellectors are used to add CSS classes to the timeblock rows and its child elements.
$(".row").addClass("time-block");
$("h2").addClass("col-1 hour");
$("textarea").addClass("col-10 description");
$("button").addClass("col-1 saveBtn saveBtn i:hover");  

// This series of variables checks to see if any data has been previously saved into local storage 
//from the sepecific text fields and loads that data from local storage into that specific field.
var saveData9 = JSON.parse(localStorage.getItem("textInput9"));
    if(saveData9 !== null){
        $("#t9").text(saveData9.text);
    }
////////
var saveData10 = JSON.parse(localStorage.getItem("textInput10"));
    if(saveData10 !== null){
        $("#t10").text(saveData10.text);
    }
////////
var saveData11 = JSON.parse(localStorage.getItem("textInput11"));
    if(saveData11 !== null){
        $("#t11").text(saveData11.text);
    }
////////
var saveData12 = JSON.parse(localStorage.getItem("textInput12"));
    if(saveData12 !== null){
        $("#t12").text(saveData12.text);
    }
////////
var saveData13 = JSON.parse(localStorage.getItem("textInput13"));
    if(saveData13 !== null){
        $("#t13").text(saveData13.text);
    }
////////
var saveData14 = JSON.parse(localStorage.getItem("textInput14"));
    if(saveData14 !== null){
        $("#t14").text(saveData14.text);
    }
////////
var saveData15 = JSON.parse(localStorage.getItem("textInput15"));
    if(saveData15 !== null){
        $("#t15").text(saveData15.text);
    }
////////
var saveData16 = JSON.parse(localStorage.getItem("textInput16"));
    if(saveData16 !== null){
        $("#t16").text(saveData16.text);
    }
////////
var saveData17 = JSON.parse(localStorage.getItem("textInput17"));
    if(saveData17 !== null){
        $("#t17").text(saveData17.text);
    }
// This series of if statements is put into a function conditionalFormat so that the conditional format can be 
// refresed on an interval. The if statements check the time of each row against the current hour inorder to determine
// which format should be applied; past, present, or future.
function conditionalFormat(){ 

    if (9 < currentHour){
        $("#t9").addClass("past")
    }
    if (9 == currentHour){
        $("#t9").addClass("present")
    }
    if (9 > currentHour){
        $("#t9").addClass("future")
    }
////////
    if (10 < currentHour){
        $("#t10").addClass("past")
    }
    if (10 == currentHour){
        $("#t10").addClass("present")
    }
    if (10 > currentHour){
        $("#t10").addClass("future")
    }
////////
    if (11 < currentHour){
        $("#t11").addClass("past")
    }
    if (11 == currentHour){
        $("#t11").addClass("present")
    }
    if (11 > currentHour){
        $("#t11").addClass("future")
    }
////////
    if (12 < currentHour){
        $("#t12").addClass("past")
    }
    if (12 == currentHour){
        $("#t12").addClass("present")
    }
    if (12 > currentHour){
        $("#t12").addClass("future")
    }
////////
    if (13 < currentHour){
        $("#t13").addClass("past")
    }
    if (13 == currentHour){
        $("#t13").addClass("present")
    }
    if (13 > currentHour){
        $("#t13").addClass("future")
    }
////////
    if (14 < currentHour){
        $("#t14").addClass("past")
    }
    if (14 == currentHour){
        $("#t14").addClass("present")
    }
    if (14 > currentHour){
        $("#t14").addClass("future")
    }
////////
    if (15 < currentHour){
        $("#t15").addClass("past")
    }
    if (15 == currentHour){
        $("#t15").addClass("present")
    }
    if (15 > currentHour){
        $("#t15").addClass("future")
    }
////////
    if (16 < currentHour){
        $("#t16").addClass("past")
    }
    if (16 == currentHour){
        $("#t16").addClass("present")
    }
    if (16 > currentHour){
        $("#t16").addClass("future")
    }
////////
    if (17 < currentHour){
        $("#t17").addClass("past")
    }
    if (17 == currentHour){
        $("#t17").addClass("present")
    }
    if (17 > currentHour){
        $("#t17").addClass("future")
    }
}
conditionalFormat();
// This series of on click functions set the functionality of the save buttons on the page so that when each
// button is clicked the text from a specific textarea is loaded into local storage so that when the page is 
// reloaded those textareas can be repopulated by thier previously saved values.
$("#b9").on("click", function(event){ 
    event.preventDefault();
    var textInput9 = {
        text: document.querySelector("#t9").value.trim()
    }
    localStorage.setItem("textInput9", JSON.stringify(textInput9));
});
/////////
$("#b10").on("click", function(event){ 
    event.preventDefault();
    var textInput10 = {
        text: document.querySelector("#t10").value.trim()
    }
    localStorage.setItem("textInput10", JSON.stringify(textInput10));
});
////////
$("#b11").on("click", function(event){ 
    event.preventDefault();
    var textInput11 = {
        text: document.querySelector("#t11").value.trim()
    }
    localStorage.setItem("textInput11", JSON.stringify(textInput11));
});
////////
$("#b12").on("click", function(event){ 
    event.preventDefault();
    var textInput12 = {
        text: document.querySelector("#t12").value.trim()
    }
    localStorage.setItem("textInput12", JSON.stringify(textInput12));
});
////////
$("#b13").on("click", function(event){ 
    event.preventDefault();
    var textInput13 = {
        text: document.querySelector("#t13").value.trim()
    }
    localStorage.setItem("textInput13", JSON.stringify(textInput13));
});
////////
$("#b14").on("click", function(event){ 
    event.preventDefault();
    var textInput14 = {
        text: document.querySelector("#t14").value.trim()
    }
    localStorage.setItem("textInput14", JSON.stringify(textInput14));
});
////////
$("#b15").on("click", function(event){ 
    event.preventDefault();
    var textInput15 = {
        text: document.querySelector("#t15").value.trim()
    }
    localStorage.setItem("textInput15", JSON.stringify(textInput15));
});
////////
$("#b16").on("click", function(event){ 
    event.preventDefault();
    var textInput16 = {
        text: document.querySelector("#t16").value.trim()
    }
    localStorage.setItem("textInput16", JSON.stringify(textInput16));
});
////////
$("#b17").on("click", function(event){ 
    event.preventDefault();
    var textInput17 = {
        text: document.querySelector("#t17").value.trim()
    }
    localStorage.setItem("textInput17", JSON.stringify(textInput17));
});
// The set interval function calls the conditionalFormat function every five seconds inorder to continously update
// the conditional format to the current time.
setInterval(conditionalFormat(), 5000);


       
        
        

    
