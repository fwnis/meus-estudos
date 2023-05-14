const frase = "JavaScript";

const regexp = /Java/;
const fraseNova = frase.replace(regexp, "Type");
console.log(fraseNova);

const flagG = /a/g
console.log(frase.replace(flagG, "i"))

const caseInsensitive = /Pe/gi
console.log("Perdeu perdido".replace(caseInsensitive, "ba"))

