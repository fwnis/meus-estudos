"use strict";
const produto1 = {
    nome: "Notebook",
    quantidade: 10,
    cor: "Azul",
};
const produto2 = {
    nome: "Geladeira",
    quantidade: 30,
    freezer: true,
};
const servico1 = {
    nome: "Instalação",
};
function mostrarQuantidade(produto) {
    console.log(produto.quantidade + 20);
}
mostrarQuantidade(produto1);
mostrarQuantidade(produto2);
// mostrarQuantidade(servico1);
function mostrarQuantidadePartial(produto) {
    if (produto.quantidade)
        console.log(produto.quantidade + 20);
}
mostrarQuantidadePartial(servico1);
const artigo = {
    titulo: "Como aprender HTML",
    vizualizacoes: 3000,
    tags: ["HTML", "Front End"],
    autor: "André",
};
if (typeof artigo.autor === "string") {
    artigo.autor.toLowerCase();
}
artigo.descricao;
function mostrarTitulo(obj) {
    if ("titulo" in obj) {
        console.log(obj.titulo);
    }
}
// mostrarTitulo(200);
// mostrarTitulo("asdasdds");
// mostrarTitulo(null);
// mostrarTitulo(undefined);
mostrarTitulo({
    titulo: "HTML e CSS",
    autor: ""
});
