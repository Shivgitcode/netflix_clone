const button = document.querySelector("#btn");

const div = document.querySelector("#div1");

button.addEventListener("click", () => {
  div.classList.toggle("hidden");
  div.classList.toggle("animate-bounce");
});
