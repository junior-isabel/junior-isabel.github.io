function draw(row, col, blocks) {
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
  x: 0,
  y: 0,
  color: 'red',
  points: [
    { r: 1, c: 10, length: 5, isLeft: true, type: 1 },
    { r: 1, c: 10, length: 5, isLeft: false, type: 1 },
    { r: 4, c: 8, length: 5, isLeft: false, type: 0}
  ],
  draw: draw
}

const B = {
  x: 0,
  y: 0,
  color: 'red',
  points: [
    { r: 1, c: 10, length: 5, isLeft: false, type: 2 },
    { r: 1, c: 10, length: 2, isLeft: false, type: 0 },
    { r: 2, c: 12, length: 1, isLeft: false, type: 2},
    { r: 3, c: 11, length: 1, isLeft: false, type: 2},
    { r: 4, c: 12, length: 1, isLeft: false, type: 2},
    { r: 5, c: 10, length: 2, isLeft: false, type: 0}
  ],
 draw : draw
}

const C = {
  color: 'red',
  points: [
    { r: 1, c: 11, length: 2, isLeft: false, type: 0 },
    { r: 2, c: 10, length: 3, isLeft: false, type: 2},
    { r: 5, c: 11, length: 2, isLeft: false, type: 0}
  ],
  draw: draw
}

const D = {
  color: 'red',
  points: [
    { r: 1, c: 10, length: 3, isLeft: false, type: 0},
    { r: 1, c: 10, length: 5, isLeft: false, type: 2},
    { r: 5, c: 10, length: 3, isLeft: false, type: 0},
    { r: 2, c: 13, length: 3, isLeft: false, type: 2}
  ],
  draw: draw
}

const E = {
  color: 'red',
  points: [
    { r: 1, c: 10, length: 5, isLeft: false, type: 2},
    { r: 1, c: 10, length: 3, isLeft: false, type: 0},
    { r: 3, c: 10, length: 3, isLeft: false, type: 0},
    { r: 5, c: 10, length: 3, isLeft: false, type: 0}
  ],
  draw: draw
}
const F = {
  color: 'red',
  points: [
    { r: 1, c: 10, length: 5, isLeft: false, type: 2},
    { r: 1, c: 10, length: 3, isLeft: false, type: 0},
    { r: 3, c: 10, length: 3, isLeft: false, type: 0}
  ],
  draw: draw
}
const G = {
  color: 'red',
  points: [
    { r: 1, c: 11, length: 2, isLeft: false, type: 0},
    { r: 2, c: 10, length: 3, isLeft: false, type: 2},
    { r: 5, c: 11, length: 2, isLeft: false, type: 0},
    { r: 3, c: 13, length: 2, isLeft: false, type: 2},
    { r: 3, c: 12, length: 1, isLeft: false, type: 0}
  ],
  draw: draw
}
const H = {
  color: 'red',
  points: [
    { r: 1, c: 10, length: 5, isLeft: false, type: 2},
    { r: 3, c: 10, length: 3, isLeft: false, type: 0},
    { r: 1, c: 13, length: 5, isLeft: false, type: 2}
  ],
  draw: draw
}
const I = {
  color: 'red',
  points: [
    { r: 1, c: 10, length: 3, isLeft: false, type: 0},
    { r: 1, c: 11, length: 5, isLeft: false, type: 2},
    { r: 5, c: 10, length: 3, isLeft: false, type: 0}
  ],
  draw: draw
}
const J = {
  color: 'red',
  points: [
    { r: 1, c: 10, length: 3, isLeft: false, type: 0},
    { r: 2, c: 12, length: 3, isLeft: false, type: 2},
    { r: 5, c: 11, length: 1, isLeft: true, type: 0},
    { r: 4, c: 10, length: 1, isLeft: true, type: 0}
  ],
  draw: draw
}
const K = {
  color: 'red',
  points: [
    { r: 1, c: 10, length: 5, isLeft: false, type: 2},
    { r: 1, c: 13, length: 3, isLeft: true, type: 1},
    { r: 3, c: 11, length: 3, isLeft: false, type: 1},
  ],
  draw: draw
}
const L = {
  color: 'red',
  points: [
    { r: 1, c: 10, length: 5, isLeft: false, type: 2},
    { r: 5, c: 11, length: 2, isLeft: false, type: 0},
  ],
  draw: draw
}
const M = {
  color: 'red',
  points: [
    { r: 1, c: 10, length: 5, isLeft: false, type: 2},
    { r: 1, c: 14, length: 5, isLeft: false, type: 2},
    { r: 1, c: 10, length: 3, isLeft: false, type: 1},
    { r: 1, c: 14, length: 3, isLeft: true, type: 1},
  ],
  draw: draw
}
const N = {
  color: 'red',
  points: [
    { r: 1, c: 10, length: 5, isLeft: false, type: 2},
    { r: 2, c: 11, length: 3, isLeft: false, type: 1},
    { r: 1, c: 13, length: 5, isLeft: false, type: 2},
  ],
  draw: draw
}
const O = {
  color: 'red',
  points: [
    { r: 1, c: 11, length: 2, isLeft: false, type: 0},
    { r: 2, c: 10, length: 3, isLeft: false, type: 2},
    { r: 2, c: 13, length: 3, isLeft: false, type: 2},
    { r: 5, c: 11, length: 2, isLeft: false, type: 0},
  ],
  draw: draw
}
const P = {
  color: 'red',
  points: [
    { r: 1, c: 10, length: 5, isLeft: false, type: 2},
    { r: 1, c: 11, length: 1, isLeft: false, type: 0},
    { r: 2, c: 12, length: 1, isLeft: false, type: 0},
    { r: 3, c: 11, length: 1, isLeft: true, type: 0},
  ],
  draw: draw
}

const Q = {
  color: 'red',
  points: [
    { r: 1, c: 11, length: 2, isLeft: false, type: 0},
    { r: 2, c: 10, length: 2, isLeft: false, type: 2},
    { r: 2, c: 13, length: 2, isLeft: false, type: 2},
    { r: 4, c: 11, length: 2, isLeft: false, type: 0},
    { r: 3, c: 12, length: 3, isLeft: false, type: 1},
  ],
  draw: draw
}

const R = {
  color: 'red',
  points: [
    { r: 1, c: 10, length: 5, isLeft: false, type: 2},
    { r: 1, c: 11, length: 1, isLeft: false, type: 0},
    { r: 2, c: 12, length: 1, isLeft: false, type: 0},
    { r: 3, c: 11, length: 1, isLeft: false, type: 0},
    { r: 4, c: 12, length: 2, isLeft: false, type: 2},
  ],
  draw: draw
}
const S = {
  color: 'red',
  points: [
    { r: 2, c: 13, length: 1, isLeft: false, type: 0},
    { r: 1, c: 12, length: 2, isLeft: true, type: 0},
    { r: 2, c: 10, length: 1, isLeft: false, type: 2},
    { r: 3, c: 11, length: 3, isLeft: false, type: 1},
    { r: 6, c: 12, length: 2, isLeft: true, type: 0},
    { r: 5, c: 10, length: 1, isLeft: false, type: 0},
  ],
  draw: draw
}

const T = {
  color: 'red',
  points: [
    { r: 1, c: 10, length: 3, isLeft: false, type: 0},
    { r: 1, c: 11, length: 4, isLeft: false, type: 2},
  ],
  draw: draw
}

const U = {
  color: 'red',
  points: [
    { r: 1, c: 10, length: 4, isLeft: false, type: 2},
    { r: 1, c: 13, length: 4, isLeft: false, type: 2},
    { r: 5, c: 11, length: 2, isLeft: false, type: 0},
  ],
  draw: draw
}

const V = {
  color: 'red',
  points: [
    { r: 1, c: 10, length: 4, isLeft: false, type: 1},
    { r: 1, c: 16, length: 4, isLeft: true, type: 1},
  ],
  draw: draw
}

const W = {
  color: 'red',
  points: [
    { r: 1, c: 10, length: 4, isLeft: false, type: 2},
    { r: 1, c: 14, length: 4, isLeft: false, type: 2},
    { r: 2, c: 12, length: 2, isLeft: true, type: 1},
    { r: 2, c: 12, length: 2, isLeft: false, type: 1},
  ],
  draw: draw
}
const X = {
  color: 'red',
  points: [
    { r: 1, c: 10, length: 5, isLeft: false, type: 1},
    { r: 1, c: 14, length: 5, isLeft: true, type: 1},
  ],
  draw: draw
}

const Y = {
  color: 'red',
  points: [
    { r: 1, c: 10, length: 3, isLeft: false, type: 1},
    { r: 1, c: 14, length: 3, isLeft: true, type: 1},
    { r: 4, c: 12, length: 2, isLeft: false, type: 2},
  ],
  draw: draw
}

const Z = {
  color: 'red',
  points: [
    { r: 1, c: 10, length: 5, isLeft: false, type: 0},
    { r: 1, c: 14, length: 5, isLeft: true, type: 1},
    { r: 5, c: 10, length: 5, isLeft: false, type: 0},
  ],
  draw: draw
}
//A.draw(ROWS, COLS, BLOCKS.children)
//B.draw(ROWS, COLS, BLOCKS.children)
//C.draw(ROWS, COLS, BLOCKS.children)
//D.draw(ROWS, COLS, BLOCKS.children)
//E.draw(ROWS, COLS, BLOCKS.children)
//F.draw(ROWS, COLS, BLOCKS.children)
//G.draw(ROWS, COLS, BLOCKS.children)
//H.draw(ROWS, COLS, BLOCKS.children)
//I.draw(ROWS, COLS, BLOCKS.children)
//J.draw(ROWS, COLS, BLOCKS.children)
//K.draw(ROWS, COLS, BLOCKS.children)
//L.draw(ROWS, COLS, BLOCKS.children)
//M.draw(ROWS, COLS, BLOCKS.children)
//N.draw(ROWS, COLS, BLOCKS.children)
//O.draw(ROWS, COLS, BLOCKS.children)
//P.draw(ROWS, COLS, BLOCKS.children)
//Q.draw(ROWS, COLS, BLOCKS.children)
//R.draw(ROWS, COLS, BLOCKS.children)
//S.draw(ROWS, COLS, BLOCKS.children)
//T.draw(ROWS, COLS, BLOCKS.children)
//U.draw(ROWS, COLS, BLOCKS.children)
//V.draw(ROWS, COLS, BLOCKS.children)
//W.draw(ROWS, COLS, BLOCKS.children)
//X.draw(ROWS, COLS, BLOCKS.children)
//Y.draw(ROWS, COLS, BLOCKS.children)
//Z.draw(ROWS, COLS, BLOCKS.children)


