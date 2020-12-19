//Nav Bar animation on scroll
function navScroll() {
  console.log("Scrolled function");
  var top = document.getElementById("navbar");
  var ypos = window.pageYOffset;
  console.log(ypos);
  if (ypos > 660) {
    top.style.background = "rgba(60,60,60,1)";
  } else if (ypos > 630) {
    top.style.background = "rgba(60,60,60,0.9)";
  } else if (ypos > 600) {
    top.style.background = "rgba(60,60,60,0.8)";
  } else if (ypos > 570) {
    top.style.background = "rgba(60,60,60,0.7)";
  } else if (ypos > 540) {
    top.style.background = "rgba(60,60,60,0.6)";
  } else if (ypos > 510) {
    top.style.background = "rgba(60,60,60,0.5)";
  } else if (ypos > 490) {
    top.style.background = "rgba(60,60,60,0.4)";
  } else if (ypos > 465) {
    top.style.background = "rgba(60,60,60,0.3)";
  } else if (ypos > 430) {
    top.style.background = "rgba(60,60,60,0.2)";
  } else if (ypos > 400) {
    top.style.background = "rgba(60,60,60,0.1)";
  } else {
    top.style.background = "rgba(60,60,60,0)";
  }
}
window.addEventListener("scroll", navScroll);
