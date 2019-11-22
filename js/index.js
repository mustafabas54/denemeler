let hamburger = document.getElementById('hamburger')
let lines = document.getElementsByClassName('line')
let cc = document.getElementById('circle-container')
let cember = document.getElementById('cember')

const dondur = ()=> {
    cember.classList.add('yeni')
}
const geri = ()=> {
    cember.classList.remove('yeni')
}

setInterval(dondur, 1000)
setInterval(geri, 2000)

hamburger.addEventListener('click', () =>{
    lines[0].classList.toggle('active-line1')
    lines[1].classList.toggle('active-line2')
})
