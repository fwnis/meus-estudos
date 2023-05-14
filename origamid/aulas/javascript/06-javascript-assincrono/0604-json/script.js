fetch("./dados.json")
  .then((r) => r.json())
  .then((json) => {
    json.forEach((aula) => {
      console.log(aula.tempo);
    });
  });

fetch("./dados.json")
  .then((r) => r.text())
  .then((jsonText) => {
    const json = JSON.parse(jsonText);
    console.log(json);
  });

const configuracoes = {
  player: "Google",
  tempo: 25.5,
  aula: "2.1 JavaScript",
};

localStorage.config = JSON.stringify(configuracoes);

console.log(JSON.parse(localStorage.config));
