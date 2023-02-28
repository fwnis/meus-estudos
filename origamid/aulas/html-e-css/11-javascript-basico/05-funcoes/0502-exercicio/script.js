function livro(nome, ano, autor) {
  const nomeMaior = nome.toUpperCase();
  const totalAnos = 2023 - ano;
  const frase = nome + " por " + autor;
  const objeto = {
    nomeMaior,
    totalAnos,
    frase,
  };
  return objeto;
}

// versão reduzida
// function livro(nome, ano, autor) {
//   const objeto = {
//     nome: nome.toUpperCase(),
//     totalAnos: 2023 - ano,
//     frase: nome + " por " + autor,
//   };
//   return objeto;
// }

// mais reduzida ainda
// function livro(nome, ano, autor) {
//   return {
//     nome: nome.toUpperCase(),
//     totalAnos: 2023 - ano,
//     frase: nome + " por " + autor,
//   };
// }

const livroRetorno = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");
console.log(livroRetorno.frase);
