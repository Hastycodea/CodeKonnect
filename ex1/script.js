function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

document.getElementById("green").addEventListener("click", function () {
  changeBackgroundColor("green");
});

document.getElementById("red").addEventListener("click", function () {
  changeBackgroundColor("red");
});

document.getElementById("blue").addEventListener("click", function () {
  changeBackgroundColor("blue");
});
