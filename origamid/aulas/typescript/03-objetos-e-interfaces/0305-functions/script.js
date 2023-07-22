"use strict";
function arredondar(valor) {
    if (typeof valor === "string") {
        return Math.ceil(Number(valor)).toString();
    }
    else {
        return Math.ceil(valor);
    }
}
console.log(arredondar("10.4"));
console.log(arredondar(20.3));
