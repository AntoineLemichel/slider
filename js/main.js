let image = document.getElementById("image-slide");
let index = 1;

let timer = setInterval(sliderAuto, 1000);

function sliderAuto() {
  index++;
  image.src = "img/" + index + ".jpg";
  if (index >= 3) {
    index = 0;
  }
}


document.getElementById("leftArrow").addEventListener("click", function () {
  index--;
  if (index <= 0) {
    index = 3;
  }
  image.src = "img/" + index + ".jpg";
  clearInterval(timer);
  setInterval(sliderAuto, 5000);
});

document.getElementById("rightArrow").addEventListener("click", function(){
  index++;
  image.src = "img/" + index + ".jpg";
  if(index == 3){
    index = 0;
  }
  clearInterval(timer);
  setInterval(sliderAuto, 5000);
});
