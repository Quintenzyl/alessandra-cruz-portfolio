
// recreation modal
const modal1 = document.getElementById("recreation");
const btn1 = document.getElementById("recreation-btn");
const span1 = document.getElementById("recreation-close")

btn1.onclick = function() {
  modal1.style.display = "block";
}
span1.onclick = function() {
  modal1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}


// neocities modal
const modal2 = document.getElementById("neocities");
const btn2 = document.getElementById("neocities-btn");
const span2 = document.getElementById("neocities-close")

btn2.onclick = function() {
  modal2.style.display = "block";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

// neocities modal
const modal3 = document.getElementById("zine");
const btn3 = document.getElementById("zine-btn");
const span3 = document.getElementById("zine-close")

btn3.onclick = function() {
  modal3.style.display = "block";
}
span3.onclick = function() {
  modal3.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

