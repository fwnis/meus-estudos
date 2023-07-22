let total: string | number = 200;
total = "400";

function isNumber(value: string | number) {
  if (typeof value === "number") {
    return true;
  } else {
    return false;
  }
}

console.log(isNumber("200"));

const button = document.querySelector("button");

button?.click();
