const div = document.querySelector("[data-cor]");
console.log(Object.prototype.toString.call(div));
console.log(div.dataset);

div.dataset.height = 1000;

delete div.dataset.width;

console.log(div.dataset);
console.log(div.dataset.cor);
