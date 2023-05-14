class Veiculo {
  constructor(rodas) {
    this.rodas = rodas;
  }
  acelerar() {
    console.log("Acelerou");
  }
}

class Moto extends Veiculo {
  constructor(rodas, capacete, combustivel) {
    super(rodas);
    this.capacete = capacete;
    this.combustivel = combustivel;
  }
  acelerar() {
    super.acelerar();
    console.log("Acelerou muito");
  }
  empinar() {
    console.log("Moto empinou com " + this.rodas + " rodas");
  }
}

const honda = new Moto(2, true, 200);
const civic = new Veiculo(4);
