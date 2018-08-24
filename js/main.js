let image = document.getElementById("image-slide");
let imageArray = ["img/boxer.jpg", "img/fitness.jpg", "img/jogging.jpg"];
let index = 0;
const INDEXMAX = imageArray.length - 1;
let timer = setInterval(sliderAuto, 3000);
let text = document.getElementById("text");
text.innerHTML = "Picture's Boxer";




//This function, contain the slider auto with the array.
function sliderAuto() {
  // If index equal to INDEXMAX, so define index at 0. Else, increments index.
  if (index == INDEXMAX) {
    index = 0;
  } else {
    index++;
  }

  //Adding text on pictures.
  if (index == 0) {
    text.innerHTML = "Picture's Boxer";
  } else if (index == 1) {
    text.innerHTML = "Picture's Fitness";
  } else if (index == 2) {
    text.innerHTML = "Picture's Jogging";
  } else {
    text.innerHTML = "Unknow picture";
  }
  //Change src img into HTML, with array and index.
  image.src = imageArray[index];
}



//This function, manage left arrow click.
document.getElementById("leftArrow").addEventListener("click", function () {
  //If index equal at 0, so define index to INDEXMXA. Else index--
  if (index == 0) {
    index = INDEXMAX;
  } else {
    index--;
  }

  //Change src img into HTML, with array and index.
  image.src = imageArray[index];
  //Stop the timer for any click on arrow.
  clearInterval(timer);
  //Restart the timer after 3sec.
  setInterval(sliderAuto, 3000);
});


//This function, manage the right arrow click.
document.getElementById("rightArrow").addEventListener("click", function () {
  //If index superior or equal INDEXMAX, so index define 0. Else increments index.
  if (index >= INDEXMAX) {
    index = 0;
  } else {
    index++;
  }
  //Change src img into HTML, with array and index.
  image.src = imageArray[index];

  //Stop the timer.
  clearInterval(timer);

  //Restart the timer after 3sec.
  setInterval(sliderAuto, 3000);
});
