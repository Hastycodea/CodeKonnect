// const allTitles = document.getElementsByTagName("h1")
// console.log(allTitles)

// for(let i = 0; i < allTitles.length; i++) {
//     console.log(allTitles[i])
// }

// const allTitles = document.getElementsByClassName('title')
// console.log(allTitles)

// for(let i = 0; i < allTitles.length; i++) {
//     console.log(allTitles[i])
// }

// let firstTitle = document.getElementById('first-title')
// console.log(firstTitle)

// for(let i = 0; i < allTitles.length; i++) {
//     console.log(allTitles[i])
// }

// allTitles.forEach((title, i) => {
//     title.style.fontSize = '24px'
//     if(i % 2 == 0) {
//         title.style.color = 'green'
//     } else {
//         title.style.color = 'red'
//     }
// });

const allTitles = document.querySelectorAll(".title");

// allTitles[0].classList.add('blue')
allTitles[allTitles.length - 1].textContent = 'The last element'
console.log(allTitles[1].textContent)

let word = "Yesterday morning"
if(word.endsWith("g")) {
    console.log(word)
}

allTitles.forEach((title, i) => {
  if (i % 2 == 0) {
    title.classList.add("yellow");
  } else {
    title.classList.add("blue");
  }
});
