
let number
let numbers = document.querySelector('.numbers')

for(let i = 0; i < 102; i++) {
    number = document.createElement('p')
    number.className = 'number'
    number.style.fontSize = '24px'
    number.textContent = i
    numbers.appendChild(number)
}