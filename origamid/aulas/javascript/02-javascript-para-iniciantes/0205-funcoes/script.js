function areaQuadrado(lado) {
  return lado * lado
}

console.log(areaQuadrado(4)) // 16

function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(total) // 15.7

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc
}

console.log(imc(60, 1.70))

function corFavorita(cor) {
  if(cor === "Azul") {
  return "Eu gosto do céu"
  } else if(cor === "Verde") {
    return "Eu gosto de mato"
  } else {
    return "Eu não gosto de cores"
  }
} 

console.log(corFavorita("Verde"))

addEventListener('click', function(){
  console.log("Oi")
})

function imc2(peso, altura) {
  const imc2 = peso / (altura ** 2)
  console.log(imc2)
}

imc2(60, 1.70) // undefined pq n tem return
console.log(imc2(60, 1.70)); //retorna o imc e undefined

function terceiraIdade(idade) {
  if(typeof idade !== "number") {
    return "Por favor preencha um número"
  } else if(idade >= 60) {
    return true
  } else {
    return false
  }
}

console.log(terceiraIdade("oi"))


function paisesVisitados(paisesVisitados) {
  var totalPaises = 193;
  return `Faltam visitar ${totalPaises - paisesVisitados} países`
}

console.log(paisesVisitados(20))


var profissao = "Designer"

function dados() {
  var nome = "Eduardo"
  var idade = 17
  function outrosDados() {
    var endereco = "Curitiba"
    var idade = 18
    return `${nome}, ${idade}, ${endereco}, ${profissao}`
  }
  return outrosDados()
}

console.log(dados())

// EXERCICIO

// Crie uma função para verificar se um valor é Truthy
function idade(idade) {
  if(idade >= 17) {
    return true
  } else {
    return false
  }
}

console.log(idade(17))

function isTruthy(dado) {
  return !!dado;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return lado + lado + lado + lado
}

console.log(perimetroQuadrado(4))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  var nome = "Eduardo"
  var sobrenome = "Fanis"
  return `Nome completo: ${nome} ${sobrenome}`
}

console.log(nomeCompleto())

// Crie uma função que verifica se um número é par
function verificaPar(number) {
  if(number % 2 === 0) {
    return "O número é par"
  } else {
    return "O número é ímpar"
  }
}

console.log(verificaPar(4))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoFuncao(argumento) {
  return typeof argumento
}

console.log(tipoFuncao(1))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function() {
  console.log("Eduardo Fanis")
})

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);