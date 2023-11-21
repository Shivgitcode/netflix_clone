const button = document.querySelectorAll(".btn");

const div = document.querySelectorAll(".question");

const span = document.querySelector("#span1");

// button.forEach((event, but) => {
//   console.log(event.target);
//   if (button[index] === but) {
//     but.addEventListener("click", () => {
//       div.forEach((element) => {
//         element.classList.toggle("invisible");
//         element.classList.toggle("p-6");
//         element.classList.toggle("max-h-[75rem]");
//         element.classList.toggle("overflow-hidden");
//         element.classList.toggle("text-left");
//       });
//     });
//   }
// });

// element.classList.toggle("invisible");
// element.classList.toggle("p-6");
// element.classList.toggle("max-h-[75rem]");
// element.classList.toggle("overflow-hidden");
// element.classList.toggle("text-left");

button.forEach((but, index) => {
  but.addEventListener("click", (e) => {
    const element = but.nextElementSibling;
    console.log(element);
    const element2 = element.children;
    console.log(element2[0]);
    element.classList.toggle("invisible");
    // element.classList.toggle("p-6");
    element.classList.toggle("max-h-[75rem]");
    element.classList.toggle("overflow-hidden");
    element.classList.toggle("text-left");
    element.classList.toggle("mb-1");

    element2[0].classList.toggle("invisible");
    // element2[0].classList.toggle("p-6");
    element2[0].classList.toggle("max-h-[75rem]");
    element2[0].classList.toggle("overflow-hidden");
    element2[0].classList.toggle("text-left");
    element2[0].classList.toggle("mb-1");
  });
});
