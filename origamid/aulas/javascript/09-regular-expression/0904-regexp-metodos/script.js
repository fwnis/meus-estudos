const regexp = /\w+/gi;
const regexp1 = new RegExp("\\w", "gi");
const frase = "JavaScript e Java Linguagem 101 Java";
console.log(frase.replace(regexp1, "X"));

console.log(regexp.flags);
console.log(regexp.global);
console.log(regexp.ignoreCase);
console.log(regexp.source);

const regexp2 = /Java/g;
console.log(regexp2.test(frase));
console.log(regexp2.test(frase));
console.log(regexp2.test(frase));
let i = 1;
while (regexp2.test(frase)) {
  console.log(i++, regexp2.lastIndex);
}

const frase2 = "JavaScript, TypeScript, CoffeeScript, Java";
const regexp3 = /\w+/g;

let regexpResult;
while ((regexpResult = regexp3.exec(frase2)) !== null) {
  console.log(regexpResult[0]);
}

const resultados = frase2.match(regexp3);
console.log(resultados);

const regexp4 = /Script/g;
const resultados2 = frase2.split(regexp4);
console.log(resultados2);

const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 1</li>
</ul>
`;
const regexp5 = /(?<=<\/?)\w+/g;

const resultado = tags.replace(regexp5, "div");
console.log(resultado);

const emails = `joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br
eduardo.fanis@hotmail.com`;

const regexp6 = /(\w+@)[\w.]+/g;

console.log(
  emails.replace(regexp6, function (...args) {
    console.log(args);
    if (args[2] === "homail.com.br") {
      return args[1] + "hotmail.com.br";
    } else if (args[2] === "ggmail.com.br") {
      return args[1] + "gmail.com.br";
    } else if (args[2] === "oulook.com.br") {
      return args[1] + "outlook.com.br";
    } else {
      return args[0];
    }
  })
);
