let hamburger = document.getElementById('hamburger')
let lines = document.getElementsByClassName('line')

hamburger.addEventListener('click', () =>{
    lines[0].classList.toggle('active-line1')
    lines[1].classList.toggle('active-line2')
})
