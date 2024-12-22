import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here

  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
  ];

  let numRandon = Math.floor(Math.random());

  let Who = numRandon * who.length;
  let Action = numRandon * who.length;
  let What = numRandon * who.length;
  let When = numRandon * who.length;

  console.log("Hello Rigo from the console!");
  let printer =
    who[Who] + " " + action[Action] + " " + what[What] + " " + when[When];

  document.querySelector("#excuse").innerHTML = printer;
};
