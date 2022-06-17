var now = moment();
var date = document.querySelector("#date");
var day = document.querySelector("#day");
var event1 = document.querySelector("#event1");
// var id2 =document.querySelector("#2")
var hour = moment().format("HH");
var events = ["", "", "", "", "", "", "", "", "", ""];
date.innerHTML = moment().format("MMMM Do YYYY, h:mm:ss a");
//day.textContent = $("#event0").val(); //moment().format('dddd');
var btn0 = document.querySelector("#button0")
btn0.addEventListener("click",function(event){eventStore();})
var btn1 = document.querySelector("#button1")
btn1.addEventListener("click",function(event){eventStore()})
var btn2 = document.querySelector("#button2")
btn2.addEventListener("click",function(event){eventStore()})
var btn3 = document.querySelector("#button3")
btn3.addEventListener("click",function(event){eventStore()})
var btn4 = document.querySelector("#button4")
btn4.addEventListener("click",function(event){eventStore()})
var btn5 = document.querySelector("#button5")
btn5.addEventListener("click",function(event){eventStore()})
var btn6 = document.querySelector("#button6")
btn6.addEventListener("click",function(event){eventStore()})
var btn7 = document.querySelector("#button7")
btn7.addEventListener("click",function(event){eventStore()})
var btn8 = document.querySelector("#button8")
btn8.addEventListener("click",function(event){eventStore()})
var btn9 = document.querySelector("#button9")
btn9.addEventListener("click",function(event){eventStore()})
var btn10 = document.querySelector("#button10")
btn10.addEventListener("click",function(event){eventStore()})

function eventStore(){
 events[0]=$("#event0").val();
events[1]=$("#event1").val();
events[2]=$("#event2").val();
events[3]=$("#event3").val();
events[4]=$("#event4").val();
events[5]=$("#event5").val();
events[6]=$("#event6").val();
events[7]=$("#event7").val();
events[8]=$("#event8").val();
events[9]=$("#event9").val();
localStorage.setItem("dailyEvents", JSON.stringify(events)); 
  
};

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
}

labelColor();

