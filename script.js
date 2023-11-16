const button = document.querySelector("#btn");

const div = document.querySelector("#div1");

const span = document.querySelectorAll("span");

button.addEventListener("click", () => {
  div.classList.toggle("scale-y-0");
  div.classList.toggle("h-[0px]");
});
