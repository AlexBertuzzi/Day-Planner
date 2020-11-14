var today = $("p");
    today = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").append(today);
    
var currentHour = moment().hour();
    //currentHour = parseInt(currentHour)
    console.log(currentHour);

$(".row").addClass("time-block");
$("h2").addClass("col-1 hour");
$("textarea").addClass("col-10 description");
$("button").addClass("col-1 saveBtn saveBtn i:hover");  


var saveData9 = JSON.parse(localStorage.getItem("textInput9"));
    $("#t9").text(saveData9.text)



function conditionalFormat(){ ///we need to break this down to work on a single element no loop if 9 =<> curent hour set class then repeat for every element

    if (9 < currentHour){
        $("#t9").addClass("past")
    }
    if (9 == currentHour){
        $("#t9").addClass("present")
    }
    if (9 > currentHour){
        $("#t9").addClass("future")
    }
    
}

conditionalFormat();

$("#b9").on("click", function(event){ /// change all data to ids
    event.preventDefault();
    var textInput9 = {
        text: document.querySelector("#t9").value.trim()
    }
    localStorage.setItem("textInput9", JSON.stringify(textInput9));
    console.log(textInput9)
})



//setInterval(conditionalFormat(), 5000);


       
        
        

    
