async function puxarDados() {
  const responseDados = fetch("./dados.json");
  const responseClientes = fetch("./clientes.json");

  const jsonDados = await (await responseDados).json();
  const jsonClientes = await (await responseClientes).json();

  console.log(jsonDados, jsonClientes);
}
puxarDados();

async function asyncSemPromise() {
  // Console não irá esperar
  await setTimeout(() => console.log("Depois de 1s"), 1000);
  console.log("acabou");
}
asyncSemPromise();

async function asyncComPromise() {
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("Depois de 1s");
      resolve();
    }, 1000);
  });
  console.log("acabou");
}
asyncComPromise();
