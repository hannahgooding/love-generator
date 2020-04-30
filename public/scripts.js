const loveTemplate = document.querySelector("#loveTemplate");
const moreLoveBtn = document.querySelector("#moreLoveBtn");
const main = document.querySelector("main");
const loveCounter = document.querySelector("#loveCounter");

moreLoveBtn.addEventListener("click", () => {
  main.appendChild(loveTemplate.content.cloneNode(true));
})