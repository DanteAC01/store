window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var img = document.getElementById("offers");
  var button = document.querySelector(".offers button");
  var scrollTop = document.documentElement.scrollTop;
  if (scrollTop > button.offsetTop) {
    img.style.position = "fixed";
    img.style.top = "0";
  } else {
    img.style.position = "static";
  }
}