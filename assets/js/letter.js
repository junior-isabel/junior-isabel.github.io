function getLetter (row, col, blocks) {
  let x = 4
  let y = 0
  function draw() {
    for (let i = 0; i < this.points.length; i++) {
      let point = this.points[i]
      for (let j = 0; j < point.length; j++) {
        if (point.type === 1) { // draw diagnonal
          if (point.isLeft) {
            blocks[(col) * (point.r + j) + (point.c - j)].style.background = this.color
          } else {
            blocks[(col) * (point.r + j) + (point.c + j)].style.background = this.color
          }
        } else if (point.type === 0) { // draw horizonal
          if (point.isLeft) {
            blocks[col * (point.r) + point.c - j].style.background = this.color
          } else {
            blocks[col * (point.r) + point.c + j].style.background = this.color
          }
        }
        else if (point.type === 2) { // draw vertical
          if(point.isLeft) {
            blocks[col * (point.r + j) - point.c].style.background = this.color
          } else {
            blocks[col * (point.r + j) + point.c].style.background = this.color
          }
        } 
      }
    }
  }
  const A = {
    color: 'red',
    points: [
      { r: y, c: x, length: 5, isLeft: true, type: 1 },
      { r: y, c: x, length: 5, isLeft: false, type: 1 },
      { r: y + 3, c: x - 2, length: 5, isLeft: false, type: 0}
    ],
    draw: draw
  }  
  const B = {
    color: 'red',
    points: [
      { r: y, c: x - 4, length: 5, isLeft: false, type: 2 },
      { r: y, c: x - 4, length: 2, isLeft: false, type: 0 },
      { r: y +1, c: x - 4 + 2, length: 1, isLeft: false, type: 2},
      { r: y + 2, c: x - 4 + 1, length: 1, isLeft: false, type: 2},
      { r: y + 3, c: x - 4 + 2, length: 1, isLeft: false, type: 2},
      { r: y + 4, c: x - 4, length: 2, isLeft: false, type: 0}
    ],
   draw : draw
  }
  const C = {
    color: 'red',
    points: [
      { r: y, c: x - 3, length: 2, isLeft: false, type: 0 },
      { r: y + 1, c: x - 4, length: 3, isLeft: false, type: 2},
      { r: y + 4, c: x - 3, length: 2, isLeft: false, type: 0}
    ],
    draw: draw
  }
  const D = {
    color: 'red',
    points: [
      { r: y, c: x - 4, length: 3, isLeft: false, type: 0},
      { r: y, c: x - 4, length: 5, isLeft: false, type: 2},
      { r: y + 4, c: x - 4, length: 3, isLeft: false, type: 0},
      { r: y + 1, c: x  - 1, length: 3, isLeft: false, type: 2}
    ],
    draw: draw
  }
  const E = {
    color: 'red',
    points: [
      { r: y, c: x - 4, length: 5, isLeft: false, type: 2},
      { r: y, c: x - 4, length: 3, isLeft: false, type: 0},
      { r: y + 2, c: x - 4, length: 3, isLeft: false, type: 0},
      { r: y + 4, c: x - 4, length: 3, isLeft: false, type: 0}
    ],
    draw: draw
  }
  const F = {
    color: 'red',
    points: [
      { r: y, c: x - 4, length: 5, isLeft: false, type: 2},
      { r: y, c: x - 4, length: 3, isLeft: false, type: 0},
      { r: y + 2, c: x - 4, length: 3, isLeft: false, type: 0}
    ],
    draw: draw
  }
  const G = {
    color: 'red',
    points: [
      { r: y, c: x - 3, length: 2, isLeft: false, type: 0},
      { r: y + 1, c: x - 4, length: 3, isLeft: false, type: 2},
      { r: y + 4, c: x  - 3, length: 2, isLeft: false, type: 0},
      { r: y + 2, c: x - 1, length: 2, isLeft: false, type: 2},
      { r: y + 2, c: x - 2, length: 1, isLeft: false, type: 0}
    ],
    draw: draw
  }
  const H = {
    color: 'red',
    points: [
      { r: y, c: x - 4, length: 5, isLeft: false, type: 2},
      { r: y + 2, c: x - 4, length: 3, isLeft: false, type: 0},
      { r: y, c: x - 1, length: 5, isLeft: false, type: 2}
    ],
    draw: draw
  }
  const I = {
    color: 'red',
    points: [
      { r: y, c: x - 4, length: 3, isLeft: false, type: 0},
      { r: y, c: x - 3, length: 5, isLeft: false, type: 2},
      { r: y + 4, c: x - 4, length: 3, isLeft: false, type: 0}
    ],
    draw: draw
  }
  const J = {
    color: 'red',
    points: [
      { r: y, c: x - 4, length: 3, isLeft: false, type: 0},
      { r: y + 1, c: x - 2, length: 3, isLeft: false, type: 2},
      { r: y + 4, c: x - 3, length: 1, isLeft: true, type: 0},
      { r: y + 3, c: x - 4, length: 1, isLeft: true, type: 0}
    ],
    draw: draw
  }
  const K = {
    color: 'red',
    points: [
      { r: y, c: x - 4, length: 5, isLeft: false, type: 2},
      { r: y, c: x - 1, length: 3, isLeft: true, type: 1},
      { r: y + 2, c: x - 3, length: 3, isLeft: false, type: 1},
    ],
    draw: draw
  }
  const L = {
    color: 'red',
    points: [
      { r: y, c: x - 4, length: 5, isLeft: false, type: 2},
      { r: y + 4, c: x - 3, length: 2, isLeft: false, type: 0},
    ],
    draw: draw
  }
  const M = {
    color: 'red',
    points: [
      { r: y, c: x - 4, length: 5, isLeft: false, type: 2},
      { r: y, c: x, length: 5, isLeft: false, type: 2},
      { r: y, c: x - 4, length: 3, isLeft: false, type: 1},
      { r: y, c: x, length: 3, isLeft: true, type: 1},
    ],
    draw: draw
  }
  const N = {
    color: 'red',
    points: [
      { r: y, c: x - 4, length: 5, isLeft: false, type: 2},
      { r: y + 1, c: x - 3, length: 3, isLeft: false, type: 1},
      { r: y, c: x - 1, length: 5, isLeft: false, type: 2},
    ],
    draw: draw
  }
  const O = {
    color: 'red',
    points: [
      { r: y, c: x - 3, length: 2, isLeft: false, type: 0},
      { r: y + 1, c: x - 4, length: 3, isLeft: false, type: 2},
      { r: y + 1, c: x - 1, length: 3, isLeft: false, type: 2},
      { r: y + 4, c: x - 3, length: 2, isLeft: false, type: 0},
    ],
    draw: draw
  }
  const P = {
    color: 'red',
    points: [
      { r: y, c: x - 4, length: 5, isLeft: false, type: 2},
      { r: y, c: x - 3, length: 1, isLeft: false, type: 0},
      { r: y + 1 , c: x - 2, length: 1, isLeft: false, type: 0},
      { r: y + 2, c: x - 3, length: 1, isLeft: true, type: 0},
    ],
    draw: draw
  }
  
  const Q = {
    color: 'red',
    points: [
      { r: y, c: x - 3, length: 2, isLeft: false, type: 0},
      { r: y + 1, c: x - 4, length: 2, isLeft: false, type: 2},
      { r: y + 1, c: x - 1, length: 2, isLeft: false, type: 2},
      { r: y + 3, c: x - 3, length: 2, isLeft: false, type: 0},
      { r: y + 2, c: x - 2, length: 3, isLeft: false, type: 1},
    ],
    draw: draw
  }
  
  const R = {
    color: 'red',
    points: [
      { r: y, c: x- 4, length: 5, isLeft: false, type: 2},
      { r: y, c: x - 3, length: 1, isLeft: false, type: 0},
      { r: y + 1, c: x - 2, length: 1, isLeft: false, type: 0},
      { r: y + 2, c: x - 3, length: 1, isLeft: false, type: 0},
      { r: y + 3, c: x - 2, length: 2, isLeft: false, type: 2},
    ],
    draw: draw
  }
  const S = {
    color: 'red',
    points: [
      { r: y + 1, c: x - 1, length: 1, isLeft: false, type: 0},
      { r: y, c: x - 2, length: 2, isLeft: true, type: 0},
      { r: y + 1, c: x - 4, length: 1, isLeft: false, type: 2},
      { r: y + 2, c: x - 3, length: 3, isLeft: false, type: 1},
      { r: y + 5, c: x - 2, length: 2, isLeft: true, type: 0},
      { r: y + 4, c: x - 4, length: 1, isLeft: false, type: 0},
    ],
    draw: draw
  }
  
  const T = {
    color: 'red',
    points: [
      { r: y, c: x - 4, length: 5, isLeft: false, type: 0},
      { r: y, c: x - 2, length: 5, isLeft: false, type: 2},
    ],
    draw: draw
  }
  
  const U = {
    color: 'red',
    points: [
      { r: y, c: x - 4, length: 4, isLeft: false, type: 2},
      { r: y, c: x - 1, length: 4, isLeft: false, type: 2},
      { r: y + 4, c: x - 3, length: 2, isLeft: false, type: 0},
    ],
    draw: draw
  }
  
  const V = {
    color: 'red',
    points: [
      { r: y, c: x - 4, length: 4, isLeft: false, type: 1},
      { r: y, c: x + 2, length: 4, isLeft: true, type: 1},
    ],
    draw: draw
  }
  
  const W = {
    color: 'red',
    points: [
      { r: y, c: x - 4, length: 4, isLeft: false, type: 2},
      { r: y, c: x, length: 4, isLeft: false, type: 2},
      { r: y + 1, c: x - 2, length: 2, isLeft: true, type: 1},
      { r: y + 1, c: x - 2, length: 2, isLeft: false, type: 1},
    ],
    draw: draw
  }
  const X = {
    color: 'red',
    points: [
      { r: y, c: x - 4, length: 5, isLeft: false, type: 1},
      { r: y, c: x, length: 5, isLeft: true, type: 1},
    ],
    draw: draw
  }
  
  const Y = {
    color: 'red',
    points: [
      { r: y, c: x - 4, length: 3, isLeft: false, type: 1},
      { r: y, c: x, length: 3, isLeft: true, type: 1},
      { r: y + 3, c: x - 2, length: 2, isLeft: false, type: 2},
    ],
    draw: draw
  }
  
  const Z = {
    color: 'red',
    points: [
      { r: y, c: x - 4, length: 5, isLeft: false, type: 0},
      { r: y, c: x, length: 5, isLeft: true, type: 1},
      { r: y + 4, c: x - 4, length: 5, isLeft: false, type: 0},
    ],
    draw: draw
  }
  function clear () {
    for(let i = 0; i < blocks.length; i++) {
      blocks[i].style.background = "#000"
    }
  }
  return {
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    L,
    M,
    N,
    O,
    clear,
    '0': A,
    '1': B,
    '2': C,
    '3': D,
    '4': E,
    '5': F,
    '6': G,
    '7': H,
    '8': I,
    '9': J,
    '10': K,
    '11': L,
    '12': M,
    '13': N,
    '14': O,
    '15': P,
    '16': Q,
    '17': R,
    '18': S,
    '19': T,
    '20': U,
    '21': V,
    '22': W,
    '23': X,
    '24': Y,
    '25': Z,
    length: 25
    }
}
//A.draw(ROWS, COLS, BLOCKS.children)


const letters = getLetter(ROWS, COLS, BLOCKS.children)


let count = 0
setInterval( () => {
  letters.clear()
  letters[count].draw()
  count++

  if(count > letters.length) count = 0

}, 1500)