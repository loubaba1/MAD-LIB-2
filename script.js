// Add an event Listener to the button to run the placeOrder function
document.getElementById("btn").addEventListener("click", showResult);

// Store order code in a function
function showResult() {
  // INPUT
  let pluralNoun = document.getElementById("pluralNoun").value;
  let adjective = document.getElementById("adjective").value;
  let PresentTenceVerb = document.getElementById("PresentTenceVerb").value;
  let Noun = document.getElementById("Noun").value;

  //Process
  let msg = `"there are too many  ${pluralNoun}   on this ${adjective} airplane",  I screamed. "Somebody has to ${PresentTenceVerb}  on the   ${Noun} to solve this problem."`;

  // Output
  document.getElementById("result").innerHTML = msg;
}
