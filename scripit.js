let color = document.body
let blue = document.getElementById('blue')


color.addEventListener('click', function () {
    blue.classList.toggle('blue')
    color.classList.toggle('bg')
})
