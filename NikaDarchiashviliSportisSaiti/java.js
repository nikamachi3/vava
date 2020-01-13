var slideIndex = 1;
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
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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


window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


function tocheckinfo(){
  email = document.getElementById('checkemail').value;
  p = document.getElementById('shecdomisgamotana');
  console.log(email);
  x = email.split("");
  console.log(x);
  for(y=0; y<=email.length; y++){
    if(x[y] != "@"){;
      p.innerHTML = "Email is incorrecting written";


      } else{;
        p.innerHTML = "";
        break;
      }
      
      
        
    }
    if(x[y] == "@"){
      y++
      if(x[y] == "."){
        p.innerHTML = "Email is incorrecting written";
      }
      
    }




    
}

function checkpass(){
  password = document.getElementById('checkpassword').value;
  checkal = document.getElementById('checkal');
  insidecheck = document.getElementById('insidecheck');
  
  if(password.match(/[a-z][a-z]+/)){
    insidecheck.innerHTML = "weak";

  } 
  if(password.match(/[0-9][0-9]+/)){
    insidecheck.innerHTML = "medium";

  }
  if(password.match(/[A-Z][A-Z]+/)){
    insidecheck.innerHTML = "strong";

  }
  
  
}