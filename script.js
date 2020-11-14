var today = $("p");
    today = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").append(today);
    
var currentHour = moment().hour();
    currentHour = moment(currentHour).format("H");
    currentHour = parseInt(currentHour)
    console.log(currentHour);

$(".row").addClass("time-block");
$("h2").addClass("col-1 hour");
$("textarea").addClass("col-10 description");
$("button").addClass("col-1 saveBtn saveBtn i:hover");  

function conditionalFormat(){ ///we need to break this down to work on a single element no loop if 9 =<> curent hour set class then repeat for every element
    var dataHour = []
        dataHour = $.makeArray($("textarea").map(function(){
        return parseInt($(this).attr("data-hour"))
         }));
        console.log(dataHour)
        for (var i = 0; i < dataHour.length; i++){
            if (dataHour[i] < currentHour){
                $("textarea").addClass("past")
                $("textarea").removeClass("present future")
            }
            if (dataHour[i] == currentHour){
                $("textarea").addClass("present")
                $("textarea").removeClass("present future")
            }
            if (dataHour[i] > currentHour){
                $("textarea").addClass("future")
                $("textarea").removeClass("past present")
            }
        }
};
conditionalFormat();

$("#b9").on("click", function(event){ /// change all data to ids
    event.preventDefault();
    var textInput = {
        text: document.querySelector("#t9").value.trim()
    }
    localStorage.setItem("textInput", textInput)
    console.log(textInput)
})



//setInterval(conditionalFormat(), 5000);


       
        
        

    
