function espera(texto) {
  console.log(texto)
}
setTimeout(espera, 1000, "Passou 1s")

setTimeout(() => {
  console.log("Após 2s")
}, 2000)

// 

// for(let i = 0; i < 20; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, 300 * i)
// }

// 

const btn = document.querySelector("button")
btn.addEventListener("click", handleClick)

function handleClick() {
  setTimeout(() => {
    console.log(this)
    this.classList.add("active")
  })
}

function loop(texto) {
  console.log(texto)
}
// setInterval(loop, 300, "300ms")

let i = 0
const meuLoop = setInterval(() => {
  console.log(i++)
  if(i > 20) {
    clearInterval(meuLoop)
  }
}, 300)