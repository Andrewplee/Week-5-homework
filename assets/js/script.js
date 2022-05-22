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

// when page refresh, events are saved on the page
