// Please do not test this on Edge, moment.js is not functioning as expected in Edge

//initialise variables
var now = moment();
var timeNow = document.querySelector("#timenow");
var date = document.querySelector("#date");
var day = document.querySelector("#day");
var time = document.querySelector("#time");
var event1 = document.querySelector("#event1");
var hour = moment().format("HH");
var events = ["", "", "", "", "", "", "", "", "", "", "", "0"];
//initialise date and day display
date.innerHTML = moment().format("Do MMMM YYYY");
day.innerHTML = moment().format("dddd");

//================================================================================================================
//function of lock buttons -: save text field entries to local storage with a date stamp using the function "eventStore"

$("button[name='lock']").click(function() {eventStore()});

//==================================================================================================================
//function for saving text field entries to local storage with a date stamp

function eventStore() {
  events[0] = $("#event0").val();
  events[1] = $("#event1").val();
  events[2] = $("#event2").val();
  events[3] = $("#event3").val();
  events[4] = $("#event4").val();
  events[5] = $("#event5").val();
  events[6] = $("#event6").val();
  events[7] = $("#event7").val();
  events[8] = $("#event8").val();
  events[9] = $("#event9").val();
  events[10] = $("#event10").val();
  events[11] = moment().format("DDMMYYYY");
  localStorage.setItem("dailyEvents", JSON.stringify(events));
}

//==================================================================================================================
//function for changing label color based on current time: three colors for past , present and upcoming events

function labelColor() {
  var hourNumber = hour - 8;
  if (hourNumber == 0) {
    $("#event0").removeClass("list-group-item-success");
    $("#event0").removeClass("list-group-item-dark");
    $("#event0").addClass("list-group-item-danger");
  } else if (hourNumber < 0) {
    $("#event0").removeClass("list-group-item-danger");
    $("#event0").removeClass("list-group-item-dark");
    $("#event0").addClass("list-group-item-success");
  } else {
    $("#event0").removeClass("list-group-item-success");
    $("#event0").removeClass("list-group-item-danger");
    $("#event0").addClass("list-group-item-dark");
  }
  if (hourNumber == 1) {
    $("#event1").removeClass("list-group-item-success");
    $("#event1").removeClass("list-group-item-dark");
    $("#event1").addClass("list-group-item-danger");
  } else if (hourNumber < 1) {
    $("#event1").removeClass("list-group-item-danger");
    $("#event1").removeClass("list-group-item-dark");
    $("#event1").addClass("list-group-item-success");
  } else {
    $("#event1").removeClass("list-group-item-success");
    $("#event1").removeClass("list-group-item-danger");
    $("#event1").addClass("list-group-item-dark");
  }
  if (hourNumber == 2) {
    $("#event2").removeClass("list-group-item-success");
    $("#event2").removeClass("list-group-item-dark");
    $("#event2").addClass("list-group-item-danger");
  } else if (hourNumber < 2) {
    $("#event2").removeClass("list-group-item-danger");
    $("#event2").removeClass("list-group-item-dark");
    $("#event2").addClass("list-group-item-success");
  } else {
    $("#event2").removeClass("list-group-item-success");
    $("#event2").removeClass("list-group-item-danger");
    $("#event2").addClass("list-group-item-dark");
  }
  if (hourNumber == 3) {
    $("#event3").removeClass("list-group-item-success");
    $("#event3").removeClass("list-group-item-dark");
    $("#event3").addClass("list-group-item-danger");
  } else if (hourNumber < 3) {
    $("#event3").removeClass("list-group-item-danger");
    $("#event3").removeClass("list-group-item-dark");
    $("#event3").addClass("list-group-item-success");
  } else {
    $("#event3").removeClass("list-group-item-success");
    $("#event3").removeClass("list-group-item-danger");
    $("#event3").addClass("list-group-item-dark");
  }
  if (hourNumber == 4) {
    $("#event4").removeClass("list-group-item-success");
    $("#event4").removeClass("list-group-item-dark");
    $("#event4").addClass("list-group-item-danger");
  } else if (hourNumber < 4) {
    $("#event4").removeClass("list-group-item-danger");
    $("#event4").removeClass("list-group-item-dark");
    $("#event4").addClass("list-group-item-success");
  } else {
    $("#event4").removeClass("list-group-item-success");
    $("#event4").removeClass("list-group-item-danger");
    $("#event4").addClass("list-group-item-dark");
  }
  if (hourNumber == 5) {
    $("#event5").removeClass("list-group-item-success");
    $("#event5").removeClass("list-group-item-dark");
    $("#event5").addClass("list-group-item-danger");
  } else if (hourNumber < 5) {
    $("#event5").removeClass("list-group-item-danger");
    $("#event5").removeClass("list-group-item-dark");
    $("#event5").addClass("list-group-item-success");
  } else {
    $("#event5").removeClass("list-group-item-success");
    $("#event5").removeClass("list-group-item-danger");
    $("#event5").addClass("list-group-item-dark");
  }
  if (hourNumber == 6) {
    $("#event6").removeClass("list-group-item-success");
    $("#event6").removeClass("list-group-item-dark");
    $("#event6").addClass("list-group-item-danger");
  } else if (hourNumber < 6) {
    $("#event6").removeClass("list-group-item-danger");
    $("#event6").removeClass("list-group-item-dark");
    $("#event6").addClass("list-group-item-success");
  } else {
    $("#event6").removeClass("list-group-item-success");
    $("#event6").removeClass("list-group-item-danger");
    $("#event6").addClass("list-group-item-dark");
  }
  if (hourNumber == 7) {
    $("#event7").removeClass("list-group-item-success");
    $("#event7").removeClass("list-group-item-dark");
    $("#event7").addClass("list-group-item-danger");
  } else if (hourNumber < 7) {
    $("#event7").removeClass("list-group-item-danger");
    $("#event7").removeClass("list-group-item-dark");
    $("#event7").addClass("list-group-item-success");
  } else {
    $("#event7").removeClass("list-group-item-success");
    $("#event7").removeClass("list-group-item-danger");
    $("#event7").addClass("list-group-item-dark");
  }
  if (hourNumber == 8) {
    $("#event8").removeClass("list-group-item-success");
    $("#event8").removeClass("list-group-item-dark");
    $("#event8").addClass("list-group-item-danger");
  } else if (hourNumber < 8) {
    $("#event8").removeClass("list-group-item-danger");
    $("#event8").removeClass("list-group-item-dark");
    $("#event8").addClass("list-group-item-success");
  } else {
    $("#event8").removeClass("list-group-item-success");
    $("#event8").removeClass("list-group-item-danger");
    $("#event8").addClass("list-group-item-dark");
  }
  if (hourNumber == 9) {
    $("#event9").removeClass("list-group-item-success");
    $("#event9").removeClass("list-group-item-dark");
    $("#event9").addClass("list-group-item-danger");
  } else if (hourNumber < 9) {
    $("#event9").removeClass("list-group-item-danger");
    $("#event9").removeClass("list-group-item-dark");
    $("#event9").addClass("list-group-item-success");
  } else {
    $("#event9").removeClass("list-group-item-success");
    $("#event9").removeClass("list-group-item-danger");
    $("#event9").addClass("list-group-item-dark");
  }
  if (hourNumber == 10) {
    $("#event10").removeClass("list-group-item-success");
    $("#event10").removeClass("list-group-item-dark");
    $("#event10").addClass("list-group-item-danger");
  } else if (hourNumber < 10) {
    $("#event10").removeClass("list-group-item-danger");
    $("#event10").removeClass("list-group-item-dark");
    $("#event10").addClass("list-group-item-success");
  } else {
    $("#event10").removeClass("list-group-item-success");
    $("#event10").removeClass("list-group-item-danger");
    $("#event10").addClass("list-group-item-dark");
  }
}

//===================================================================================================================
//function to retrive saved data from local storage and display it in the event test fields.
//this function will be called everytime the application opens.
//when the date changes, this function will delete the stored events from the local memory.

function eventRetriev() {
  events = JSON.parse(localStorage.getItem("dailyEvents"));
  if (events[11] == moment().format("DDMMYYYY")) {
    $("#event0").val(events[0]);
    $("#event1").val(events[1]);
    $("#event2").val(events[2]);
    $("#event3").val(events[3]);
    $("#event4").val(events[4]);
    $("#event5").val(events[5]);
    $("#event6").val(events[6]);
    $("#event7").val(events[7]);
    $("#event8").val(events[8]);
    $("#event9").val(events[9]);
    $("#event10").val(events[10]);
  } else {
    events = ["", "", "", "", "", "", "", "", "", "", "", "0"];
    localStorage.setItem("dailyEvents", JSON.stringify(events));
    $("#event0").val(events[0]);
    $("#event1").val(events[1]);
    $("#event2").val(events[2]);
    $("#event3").val(events[3]);
    $("#event4").val(events[4]);
    $("#event5").val(events[5]);
    $("#event6").val(events[6]);
    $("#event7").val(events[7]);
    $("#event8").val(events[8]);
    $("#event9").val(events[9]);
    $("#event10").val(events[10]);
    date.innerHTML = moment().format("Do MMMM YYYY");
    day.innerHTML = moment().format("dddd");
  }
}

//==================================================================================================================
// a function to auto refresh the page every hour, and also to run a clock in the HTML heading

function autoUpdate() {
  time.innerHTML = moment().format("hh:mm:ss");
  if (moment().format("m") == 0 && moment().format("s") < 2) {
    location.reload();
  }
}

//=================================================================================================================
//function calls

setInterval(autoUpdate, 1000);
labelColor();
eventRetriev();
