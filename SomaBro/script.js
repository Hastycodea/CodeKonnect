let content = document.querySelectorAll('.sub-content')
console.log(content)

content[0].classList.add('large')

let doneButton = document.querySelectorAll('.sub-content')
console.log(doneButton)

content.forEach((cont, i) => {
    doneButton[i].addEventListener("click", function() {
        content[i].add('large')
    })
})
