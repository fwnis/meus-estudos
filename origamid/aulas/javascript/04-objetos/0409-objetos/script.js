const pessoa = new Object({
  nome: "Eduardo",
})

console.log(pessoa)

const carro = {
  init(valor) {
    this.marca = valor;
    return this;
  },
  rodas: 4,
  acelerar() {
    return this.marca + " acelerou"
  },
  buzinar() {
    return this.marca + " buzinou"
  },
}

const honda = Object.create(carro)
honda.init("Honda")

console.log(honda)
console.log(honda.acelerar())

const ferrari = Object.create(carro).init("Ferrari")

console.log(ferrari.acelerar())

const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  },
}

const moto = {
  capacete: true,
}

Object.assign(moto, funcaoAutomovel)
console.log(moto)

// Propriedades imutaveis
Object.defineProperties(moto, {
  rodas: {
    value: 2,
    configurable: false,
    writable: false
  },
  espelhos: {
    get() {
      this._espelhos
    },
    set(valor) {
      this._espelhos = valor * 4 + 5
    }
  }
})

moto.rodas = 5
console.log(moto)