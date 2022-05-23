// current time and date and have to
var currentDay = function () {
	$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
};
setInterval(currentDay, 1000);

var currentTime = moment().hours();
// color code to indicate past, present, or future
// set if function so that if planner time is past the current time, make it red, etc....
for (i = 0; i < 25; i++) {
	if (currentTime === i) {
		$(".container").children().eq(i).children().eq(1).addClass("present");
	} else if (currentTime > i) {
		$(".container").children().eq(i).children().eq(1).addClass("past");
	} else {
		$(".container").children().eq(i).children().eq(1).addClass("future");
	}
}

// clicking the save button to save the event onto local storage
// target save button pushes (hr, textent);
// call the local storage directly
// click

$(".saveBtn").on("click", function (event) {
	var textValue = $(event.currentTarget).siblings(".description").val();
	var hour = $(event.currentTarget).parent().attr("id");

	localStorage.setItem(hour, textValue);
});

$("#hour0 .description").val(localStorage.getItem("hour0"));
$("#hour1 .description").val(localStorage.getItem("hour1"));
$("#hour2 .description").val(localStorage.getItem("hour2"));
$("#hour3 .description").val(localStorage.getItem("hour3"));
$("#hour4 .description").val(localStorage.getItem("hour4"));
$("#hour5 .description").val(localStorage.getItem("hour5"));
$("#hour6 .description").val(localStorage.getItem("hour6"));
$("#hour7 .description").val(localStorage.getItem("hour7"));
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
$("#hour18 .description").val(localStorage.getItem("hour18"));
$("#hour19 .description").val(localStorage.getItem("hour19"));
$("#hour20 .description").val(localStorage.getItem("hour20"));
$("#hour21 .description").val(localStorage.getItem("hour21"));
$("#hour22 .description").val(localStorage.getItem("hour22"));
$("#hour23 .description").val(localStorage.getItem("hour23"));
