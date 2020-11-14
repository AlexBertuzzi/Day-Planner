

    
var today = $("<p>");
    today = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").append(today);
    
var currentHour = moment().hour();
    currentHour = moment(currentHour).format("hA");
    console.log(currentHour);

$(".row").addClass("time-block");
$("h2").addClass("col-1 hour");
$("textarea").addClass("col-10 description");
$("button").addClass("col-1 saveBtn saveBtn i:hover");  

        
//var timeStamp = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

        
        //var timeStamp = moment().hour(i);
        //var timeStampText = moment(timeStamp).format("hA");

       
        
        

    
