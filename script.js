/*
#################################
Boomers Playground attempt
#################################
*/

// This tells the browser to pay attention to the following elements:
let lab = document.querySelectorAll("label");
const ratingState = document.querySelector(".rating-state");
const thankyouState = document.querySelector(".thankyou-state");
const button = document.querySelector("button");
const ratings = document.getElementsByName("ratings");


// This is what the browser should do when the click event occurs:
function displayRadioValue() {
  for (i = 0; i < ratings.length; i++) {
    if (ratings[i].checked)
    document.querySelector("span").innerHTML = ratings[i].value;
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

 // This changes color of what ever label is selected:
 lab.forEach((la) => {
  la.addEventListener("click", (e) => {
      e.target.classList.add("hova");
  })
 })