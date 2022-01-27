var today = moment();

// Displays current time and saves input into local storage.
$(document).ready(function() {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'));
    $(".saveBtn").on("click", function() {
        var plannerText = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, plannerText);
    });

// Fetches specific planner item from local storage.
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#1 .description").val(localStorage.getItem("1"));
    $("#2 .description").val(localStorage.getItem("2"));
    $("#3 .description").val(localStorage.getItem("3"));
    $("#4 .description").val(localStorage.getItem("4"));
    $("#5 .description").val(localStorage.getItem("5"));
    
// Changes each time if it's past, present, or future.
    function timeChange() {
        var currentHour = moment().hour();
        $('.time-block').each(function() {
            var idTime = parseInt($(this).attr("id"));
            if (idTime < currentHour) {
                $(this).addClass("past");
            } else if (idTime === currentHour) {
                $(this).addClass("present");
                $(this).removeClass("past");
            } else {$(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
            }
        })
    }

    timeChange();
    var timeInterval = setInterval(timeChange, 1000);
});