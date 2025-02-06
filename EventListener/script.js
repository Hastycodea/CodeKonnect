// let click = document.querySelector('.click-me')

// click.addEventListener('click', e => {
//     // console.log('e gives the event listener object:', e)
//     // console.log('e.target gives the event listener object:', e.target)
//     console.log(e.target.textContent)
// })

// click.addEventListener('click', function(e){
//     console.log('button clicked', e)
// })

let firstName = document.querySelector("#name");
let height = document.querySelector("#height");

let nameInput = document.querySelector(".name");
let heightInput = document.querySelector(".height");

let sumbitBtn = document.querySelector("#submit-btn");

sumbitBtn.addEventListener("click", () => {
  console.log(firstName.value);
  console.log(height.value);
});

firstName.addEventListener("input", (e) => {
  nameInput.textContent = e.target.value;
});

height.addEventListener("input", (e) => {
  heightInput.textContent = e.target.value;
});
