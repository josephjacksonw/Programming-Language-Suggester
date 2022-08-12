window.addEventListener("load", function() {
  const form = document.getElementById("quiz");
  form.addEventListener("submit", findLang);
  console.log("startup page works")
});

function findLang(event) {
  console.log("findlang begins")
  event.preventDefault();
  const q1 = document.getElementById("q1").value;
  const q2 = document.getElementById("q2").value;
  const q3 = document.getElementById("q3").value;
  const q4 = document.getElementById("q4").value;
  const q5 = document.getElementById("q5").value;
  console.log("outputs: " + q1 + " " + q2 + " " + q3 + " " + q4 + " " +q5)
  hideResults();

  //something that maths what answer they need
  findResult();

  //something that reveals the correct text
  resultText();
}
// q1 is gonna have a value, same with each 2-5
// i'm gonna have 5 variables that are all numbers 1, 2, or 3




function hideResults() {
  document.getElementById("results").setAttribute("class", "hidden");
 //document.getElementById("js").setAttribute("class", "hidden");
 //document.getElementById("python").setAttribute("class", "hidden");
 //document.getElementById("csharp").setAttribute("class", "hidden");
 //these are all hidden bc I think I can just hide the div they're all in then pull just the one they need
}

function findResult() {

}

function resultText() {// take the output of findresult, and just unhide the text

}