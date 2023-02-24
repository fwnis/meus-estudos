// function seguirMouse(event) {
//   const x = event.x;
//   const y = event.y;
//   const circulo = document.querySelector(".circulo");
//   circulo.style.top = y + 'px';
//   circulo.style.left = x + 'px';
// }

const circulo = document.querySelector(".circulo");

function seguirMouse(event) {
  circulo.style.top = event.y + "px";
  circulo.style.left = event.x + "px";
}

window.addEventListener("mousemove", seguirMouse);
