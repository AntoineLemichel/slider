var imageIndex = 1;
// slideAuto(imageIndex);

function slideCurrent(index) {
  slideAuto(imageIndex = index);
}

function slideArrows(index) {
  slideAuto(imageIndex += index);
}

function slideAuto(index) {
  var image = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dots");
  for (var i = 0; i < image.length; i++) {
    image[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if (index > image.length) {
    imageIndex = 1;
  }
  if (index < 1) {
    imageIndex = image.length;
  }
  image[imageIndex - 1].style.display = "block";
  dots[imageIndex - 1].className += " active";
  setTimeout(slideAuto, 3000);
}
