// let i = 0; 
// let images = [];
// let time = 3;

// const image1 = document.getElementById('slide').src="https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR-970-80.jpg.webp";
// const image2 = document.getElementById('slide').src="https://www.shutterstock.com/image-photo/portrait-young-smiling-woman-looking-camera-1865153395";
// const image3 = document.getElementById('slide').src="https://www.shutterstock.com/image-photo/happy-young-woman-sitting-on-sofa-2018571389";

// images[0] = image1;
// images[1] = image2;
// image[2] = image3;

// function changeImg() {
//   document.slide.src = images[i];

//   if(i < images.length - 1){
//     i++;
//   } else {
//     i = 0;
//   }
//   setTimeout("changeImg()", time);

//   document.appendChild('slide')
// }
// window.onload = changeImg;

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}