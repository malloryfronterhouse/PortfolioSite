let i = 0; 
let images = [];
let time = 3;

const image1 = document.createElement("img").src="./assets/image1.jfif";
const image2 = document.createElement('img').src="./assets/image2.jpg"
const image3 = document.createElement('img').src="./assets/image3.jpg"

images[0] = image1;
images[1] = image2;
image[2] = document.image3;

function changeImg() {
  document.slide.src = images[i];

  if(i < images.length - 1){
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImg()", time);

  document.appendChild('slide')
}
window.onload = changeImg;