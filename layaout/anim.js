//sirve para que la imagen de ofertas se ponga al lado del scroll y baje junto con el
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var img = document.getElementById("offers");
  var button = document.querySelector(".offers button");
  var scrollTop = document.documentElement.scrollTop;
  if (scrollTop > button.offsetTop) {
    img.style.position = "fixed";
    img.style.top = "5px"; // Ajusta la posición vertical de la imagen fija
    img.style.left = "90%";
    img.style.transform = "translateX(-50%)"; // Corrige el desplazamiento horizontal
    img.style.width = "20%"; // Ajusta el ancho de la imagen
  } else {
    img.style.position = "static";
    img.style.width = "100%";
    
  }
}
