document.addEventListener("DOMContentLoaded", function () {
  let content = document.querySelectorAll(".sub-content");

  //   content[0].classList.add("large");

  let doneButton = document.querySelectorAll(".done-button");

  console.log(doneButton[1]);
  console.log(content[1]);

  //   doneButton[1].addEventListener("click", function () {
  //     console.log("Button clicked");
  //     content[1].classList.add("large");
  //   });
  content.forEach((cont, i) => {
    doneButton[i].addEventListener("click", function () {
      cont.classList.add("large");
    });
  });
});
