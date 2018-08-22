var imageIndex = 0;
var image = document.getElementsByClassName("slide");
var i;
var dots = document.getElementsByClassName("dots");
var text = document.getElementsByClassName("body-slide");
var time;
timer();
//Begin the timer for auto slide. And init for the first time slider auto
function timer() {
  time = setTimeout(slideAuto, 3000);
  setTimeout(timer, 2000);
}
//Stop timer with on click arrow or dots for 2sec
function stopTimer() {
  clearTimeout(time);
}
//Slide with dots
function slideCurrent() {
  stopTimer(time);
  slideAuto(imageIndex);
}
//Slide with arrows
function slideArrows() {
  stopTimer(time);
  slideAuto();
}
//Slide auto
function slideAuto() {
  document.getElementById("slider").style.display = "block";
  for (i = 0; i < image.length; i++) {
    image[i].style.display = "none";
    text[i].style.display = "inline-block";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  imageIndex++;
  if (imageIndex > image.length) {
    imageIndex = 1;
  }
  if (imageIndex < 1) {
    imageIndex = image.length;
  }
  image[imageIndex - 1].style.display = "block";
  dots[imageIndex - 1].className += " active";
}
