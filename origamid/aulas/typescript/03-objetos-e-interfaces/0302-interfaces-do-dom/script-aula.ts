const video = document.querySelector("#videoprincipal");

if (video instanceof HTMLVideoElement) {
  console.log(video.volume);
}

// const links = document.querySelectorAll(".link");

console.log(links instanceof NodeList);

links.forEach((link) => {
  if (link instanceof HTMLAnchorElement) {
    console.log(link.href);
  } else {
    console.log(typeof link);
  }
});

const arrayLinks = Array.from(links);
const anchorLinks = arrayLinks.filter(
  (link) => link instanceof HTMLAnchorElement
);

console.log(anchorLinks);
