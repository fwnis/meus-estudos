const body = $("body");

console.log(body.addClass("ativo"));

console.log(_.intersection([1, 2, 3, 4, 5, 6], [2, 3, 4, 6, 8]));

declare const Vimeo: any;

const iframe = document.getElementById("vimeo");
const player = new Vimeo.Player(iframe);

console.log(player);
