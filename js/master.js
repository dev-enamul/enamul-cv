var scree_height = screen.height;


var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close_modal")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }



// Slider section
var sliderimg = document.querySelectorAll(".slider_image");
var left_btn = document.querySelector(".left_btn");
var right_btn = document.querySelector(".right_btn");
var current = 0;
function reset(){
  for(var i=0; i<sliderimg.length;i++){
    sliderimg[i].style.display = "none";
  }
}

function start(){
  reset();
  sliderimg[0].style.display = "block";
}
start();

function leftSlide(){
  reset();
  if(current===0){
    current=sliderimg.length;
  }
  sliderimg[current-1].style.display = "block";
  current--;
}
function rightSlide(){
  reset();
  if(current===sliderimg.length-1){
    current= -1;
  }
  sliderimg[current+1].style.display = "block";
  current++;
}

left_btn.addEventListener("click", function(){
   leftSlide();
});
right_btn.addEventListener("click", function(){
   rightSlide();
});
