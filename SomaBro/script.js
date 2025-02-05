document.addEventListener("DOMContentLoaded", function () {
  let content = document.querySelectorAll(".sub-content");

  //   content[0].classList.add("large");

  let doneButton = document.querySelectorAll(".done-button");
  let notDoneButton = document.querySelectorAll(".not-done-button");

  console.log(doneButton[1]);
  console.log(content[1]);
  console.log(notDoneButton[0]);

  //   doneButton[1].addEventListener("click", function () {
  //     console.log("Button clicked");
  //     content[1].classList.add("large");
  //   });
  content.forEach((cont, i) => {
    doneButton[i].addEventListener("click", function () {
      cont.classList.add("large");
    });
  });

  content.forEach((cont, i) => {
    notDoneButton[i].addEventListener("click", function () {
      cont.classList.remove("large");
    });
  });
});
