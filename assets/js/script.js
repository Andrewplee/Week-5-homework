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
	var hour = $(event.currentTarget).siblings().attr("id");

	localStorage.setItem(hour, textValue);
});

//

$("#0 .description").val(localStorage.getItem("hr0"));
localStorage.getItem("hr1");
localStorage.getItem("hr2");
localStorage.getItem("hr3");
localStorage.getItem("hr4");
localStorage.getItem("hr5");
localStorage.getItem("hr6");
localStorage.getItem("hr7");
localStorage.getItem("hr8");
localStorage.getItem("hr9");
localStorage.getItem("hr10");
localStorage.getItem("hr11");
localStorage.getItem("hr12");
localStorage.getItem("hr13");
localStorage.getItem("hr14");
localStorage.getItem("hr15");
localStorage.getItem("hr16");
localStorage.getItem("hr17");
localStorage.getItem("hr18");
localStorage.getItem("hr19");
localStorage.getItem("hr20");
localStorage.getItem("hr21");
localStorage.getItem("hr22");
localStorage.getItem("hr23");
// when page refresh, events are saved on the page
