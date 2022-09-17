/*
#################################
Boomers Playground attempt
#################################
*/

// This tells the browser to pay attention to the following elements:
const ratingState = document.querySelector(".rating-state");
const thankyouState = document.querySelector(".thankyou-state");
const button = document.querySelector("button");

// This is what the browser should do when the click event occurs:
function displayRadioValue() {
  const x = document.getElementsByName("ratings");

  for (i = 0; i < x.length; i++) {
    if (x[i].checked)
    document.querySelector("span").innerHTML = x[i].value;
  }
}

// This is what the browser should do when the click event occurs:
function submit() {
    ratingState.classList.add("hide"); // Add display: none; on specified element
    thankyouState.classList.remove("hide"); // Remove display: none; on specified element
}

// This tells the browser to listen out for clicks on the Button:
button.addEventListener('click', function(){
    submit();
    displayRadioValue()
 })