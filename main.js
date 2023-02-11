const progress = document.getElementById('progress')
let width = 0
let id = setInterval(frame, 40)

function frame() {
    if (width >= 100) {
        clearInterval(id)
    } else {
        width++
        progress.style.width = width + '%'
    }
}


// const logo = document.getElementById('logo')
// logo.classList.add('active')
