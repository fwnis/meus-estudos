// const links = document.querySelectorAll("nav a");

// links.forEach(function ativarLink(item) {
//   const linkHref = item.href;
//   console.log(linkHref);
//   if (links.href === document.location.href) {
//     document.querySelector("a").style.backgroundColor = "black";
//     document.querySelector("a").style.color = "white";
//   }
// });

const links = document.querySelectorAll("nav a");

links.forEach(function ativarLink(link) {
  console.log(link.href);
  if (link.href === document.location.href) {
    link.style.backgroundColor = "black";
    link.style.color = "white";
  }
});
