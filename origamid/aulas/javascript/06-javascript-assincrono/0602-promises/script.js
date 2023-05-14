// const promessa = new Promise((resolve, reject) => {
//   let condicao = true;
//   if (condicao) {
//     setTimeout(() => {
//       resolve({ nome: "Eduardo", idade: 17 });
//     }, 1000);
//   } else {
//     reject(Error("Ocorreu um erro na promise"));
//   }
// });

// const retorno = promessa
//   .then((resolucao) => {
//     resolucao.profissao = "Designer";
//     return resolucao;
//   })
//   .then((resolucao) => {
//     console.log(resolucao);
//   })
//   .catch((rejeitada) => {
//     console.log("catch");
//     console.log(rejeitada);
//   })
//   .finally(() => console.log("Acabou"));

// console.log(promessa);

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Usuário Logado");
  }, 1000);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados Carregados");
  }, 500);
});

// const carregouTudo = Promise.all([login, dados]);
const carregouTudo = Promise.race([login, dados]);

carregouTudo.then((resolucao) => {
  console.log(resolucao)
})
