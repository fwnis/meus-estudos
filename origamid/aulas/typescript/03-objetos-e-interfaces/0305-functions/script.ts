function arredondar(valor: string): string;
function arredondar(valor: number): number;
function arredondar(valor: string | number): string | number {
  if (typeof valor === "string") {
    return Math.ceil(Number(valor)).toString();
  } else {
    return Math.ceil(valor);
  }
}

console.log(arredondar("10.4"));
console.log(arredondar(20.3));
