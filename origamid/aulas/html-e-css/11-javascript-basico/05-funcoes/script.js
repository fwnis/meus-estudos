// 
const nome = "JavaScript";

function logCurso() {
  const nome = "HTML";
  console.log(nome);
  return nome;
}

const nomedaFuncao = logCurso();

console.log(nomedaFuncao);
console.log(nome);

// 
function logCurso2(nome, horas) {
  console.log(nome, horas, "horas");
  return {
    nome,
    horas,
  };
}

// 
logCurso2("JavaScript", "40");
const retorno = logCurso2("HTML", "40");

console.log(retorno);

function logCurso3() {
  console.log(nome);
}
