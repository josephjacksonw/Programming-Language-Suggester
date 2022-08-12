// Business Logic
function hideResults() {
  document.getElementById("results").setAttribute("class", "hidden");
  document.getElementById("js").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("csharp").setAttribute("class", "hidden");
}
function findResult(a, b, c, d, e) {
  const newList = [];
  newList.push(a);
  newList.push(b);
  newList.push(c);
  newList.push(d);
  newList.push(e);
  let csharp = 0;
  let js = 0;
  let python = 0;
  for (let x in newList) {
    if (newList[x] === 1) {
      csharp += 1;
    } else if (newList[x] === 2) {
      js += 1;
    } else if (newList[x] === 3) {
      python += 1;
    };
  };
  if (csharp >= js && csharp >= python) {
    return "csharp";
  } else if (js >= csharp && js >= python) {
    return "js";
  } else if (python >= csharp && python >= js) {
    return "python";
  }
}
function resultText(a) {
  document.getElementById("results").removeAttribute("class");
  document.getElementById(a).removeAttribute("class");
}
// User Interface Logic

window.addEventListener("load", function() {
  const form = document.getElementById("quiz");
  form.addEventListener("submit", findLang);
});

function findLang(event) {
  event.preventDefault();
  const q1 = parseInt(document.getElementById("q1").value);
  const q2 = parseInt(document.getElementById("q2").value);
  const q3 = parseInt(document.getElementById("q3").value);
  const q4 = parseInt(document.getElementById("q4").value);
  const q5 = parseInt(document.getElementById("q5").value);
  hideResults();
  const output = findResult(q1, q2, q3, q4, q5);
  resultText(output);
}

