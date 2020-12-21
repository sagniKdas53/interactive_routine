// Import stylesheets
import "./style.css";

// Write Javascript code!
var d = new Date();
var one = document.getElementById("9am");
var two = document.getElementById("10am");
var three = document.getElementById("12am");
var four = document.getElementById("break");
var five = document.getElementById("1pm");
var six = document.getElementById("3pm");

function timer() {
  var t = d.getHours();
  var m = d.getMinutes();
  console.log(t + ":" + m);
}

setInterval(timer, 10000);
