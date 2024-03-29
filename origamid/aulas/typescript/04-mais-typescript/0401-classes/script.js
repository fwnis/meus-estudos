"use strict";
console.log(document.constructor);
class Produto {
    tipo = "produto";
    nome;
    preco;
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    getPreco() {
        return Produto.transformarPreco(this.preco);
    }
    static transformarPreco(preco) {
        return `R$ ${preco}`;
    }
}
const livro = new Produto("O Senhor dos Anéis", 300);
console.log(livro.getPreco());
class Quadrado {
    lados = 4;
    medida;
    constructor(medida) {
        this.medida = medida;
    }
    getPerimetro() {
        return this.medida * this.lados;
    }
    getArea() {
        return this.medida * this.medida;
    }
}
class Circulo {
    PI = Math.PI;
    raio;
    constructor(raio) {
        this.raio = raio;
    }
    getPerimetro() {
        return Math.round(2 * this.PI * this.raio * 100) / 100;
    }
    getArea() {
        return Math.round(this.PI * (this.raio * this.raio) * 100) / 100;
    }
}
const q1 = new Quadrado(10);
if (q1 instanceof Quadrado) {
    console.log(q1.getArea());
}
const formas = [2, 32, 12, 42, 3, 6, 76, 32].map((n) => {
    if (n < 15) {
        return new Quadrado(n);
    }
    else {
        return new Circulo(n);
    }
});
formas.forEach((forma) => {
    if (forma instanceof Quadrado) {
        console.log(forma.lados);
    }
    if (forma instanceof Circulo) {
        console.log(forma.raio);
    }
});
