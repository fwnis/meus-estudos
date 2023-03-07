// ARRAYS
var videoGames = ["Switch", "PS4", "Xbox"];
videoGames[0]; // Switch
videoGames[2]; // Xbox
console.log(videoGames[1]);

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push("3DS"); // Adiciona ao final do array
videoGames.length; // 3
console.log(videoGames);

// LOOP
for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

var i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

var videoGames = ["Switch", "PS4", "Xbox", "3DS"];
for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if (videoGames[item] === "PS4") {
    break;
  }
}

var frutas = ["Banana", "Pera", "Maçã", "Abacaxi", "Uva"];
frutas.forEach(function (fruta) {
  console.log(fruta);
});

// EXERCICIO
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var copas = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
copas.forEach(function (ano) {
  console.log(`O Brasil ganhou a copa de: ${ano}`);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];
for (var fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta]);
  if (frutas[fruta] === "Pera") {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1]
