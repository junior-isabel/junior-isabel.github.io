BLOCKS = document.querySelector('.blocks.animation.letter')
const ROWS = 30
const COLS = 70
let _w = 8
let _h = 8
BLOCKS.style.width = (COLS * _w + COLS) + 'px'
BLOCKS.style.height = (ROWS * _h + ROWS) + 'px'
for(let i = 0; i < ROWS; i++) {
    for(let j = 0; j < COLS; j++) {
        let bloco = document.createElement('li')
        bloco.style.width = _w + 'px'
        bloco.style.height = _h + 'px'
        bloco.style.top = (i * _h + i) + 'px'
        bloco.style.left = (j * _w + j) + 'px'
    
        bloco.classList.add('block')
        BLOCKS.appendChild(bloco)
        bloco.addEventListener('click', (e) => {
            e.target.style.background ="red"
        })

    }
}
