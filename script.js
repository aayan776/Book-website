const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
var changed = false;
let currentindex = 0;
function ShowSlide(index){
  if(index >=slide.length){
    currentindex=0;
  }else if(index < 0){
    currentindex = slide.length - 1;
  }else{
    currentindex = index
  }
  slides.style.transform = `translateX(${-currentindex * 100}%)`;
}
prev.addEventListener("click", function Prev(){
 changed = true 
 ShowSlide(currentindex-1)
});
next.addEventListener("click", function Next(){
  changed = true 
  ShowSlide(currentindex+1)
});
setInterval(function Autochange(){
  if(changed){
    changed = false;
    return;
  }else{
    ShowSlide(currentindex+1);
  }
}, 4000);