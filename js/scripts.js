window.addEventListener("load", function() {
  const form = document.getElementById("quiz");
  form.addEventListener("submit", findLang);
  console.log("startup page works")
});

function findLang(event) {
  console.log("findlang begins")
  event.preventDefault();
  const q1 = parseInt(document.getElementById("q1").value);
  const q2 = parseInt(document.getElementById("q2").value);
  const q3 = parseInt(document.getElementById("q3").value);
  const q4 = parseInt(document.getElementById("q4").value);
  const q5 = parseInt(document.getElementById("q5").value);
  console.log("inputs: " + q1 + " " + q2 + " " + q3 + " " + q4 + " " +q5)
  const list = [q1, q2, q3, q4, q5]
  console.log(list)

  hideResults();

  //something that maths what answer they need
  const output = findResult(q1, q2, q3, q4, q5);

  //something that reveals the correct text
  console.log(output)
  resultText(output);
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

function findResult(a, b, c, d, e) {
  const newList = []
  newList.push(a)
  newList.push(b)
  newList.push(c)
  newList.push(d)
  newList.push(e)
  console.log(a, b, c, d, e, newList)
  let csharp = 0
  let js = 0
  let python = 0
  for (let x in newList) {
    console.log(x)
    console.log(newList[x])
    if (newList[x] === 1) {
      csharp += 1;
      console.log(csharp)
    } else if (newList[x] === 2) {
      js += 1;
    } else if (newList[x] === 3) {
      python += 1;
    };
  };
  if (csharp >= js && csharp >= python) {
    console.log("csharp is highest")
    return "csharp"
  } else if (js >= csharp && js >= python) {
    console.log("js is highest")
    return "js"
  } else if (python >= csharp && python >= js) {
    console.log("pyton is highest")
    return "python"
  }


  
}

function resultText() {// take the output of findresult, and just unhide the text
  document.querySelector("results").innerText = output;
  //I did this wrong it should reveal based on what output is
  //its currently trying to make something that doesn't exist text
}