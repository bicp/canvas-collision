/* const container = document.querySelector('.container')

let listItems1 = [
  {id: '1', label: 'todo item 1'}, 
  {id: '2',label: 'none'}, 
  {id: '3',label: 'todo item 2'}, 
  {id: '4',label: 'todo item 3'}, 
  {id: '5',label: 'none'}, 
]

const listItems2 = [
  {id: '1', label: 'todo item 11'}, 
  {id: '2',label: 'none'}, 
  {id: '3',label: 'todo item 21'}, 
  {id: '4',label: 'todo item 31'}, 
  {id: '5',label: 'none'}, 
]

listItems1.push({id: '6', label: 'this is a new item'})
listItems1.shift()
listItems1.unshift({id: '7', label: 'element at the start of my array'})

listItems2.splice(2, 1, {id: '8', label: 'this is a substitute item'})

listItems1 = listItems1.map(item => {
  return {
    id: item.id,
    label: `${item.label}, id:${item.id}`
  }
})

listItems1 = listItems1.filter(item => {
  return item.id % 2
})

createLi(listItems1)
createLi(listItems2)

function createLi(items) {
  const list = document.createElement('ul')
  container.appendChild(list)
  for (let i=0; i<items.length; i++) {
    if (!items[i].label.includes('none')) {
      const listItem = document.createElement('li')
      listItem.innerHTML = items[i].label
      list.appendChild(listItem)
    }
  }
} */

const canvas = document.querySelector('.canvas')
const ctx = canvas.getContext('2d')

class Object2D {
  constructor (argX, argY, argW, argH, argColor, up, down, left, right) {
    this.x = argX
    this.y = argY
    this.w = argW
    this.h = argH
    this.color = argColor

    document.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case up:
          this.y -= 2
          break
        case down:
          this.y += 2
          break
        case left:
          this.x -= 2
          break
        case right:
          this.x += 2
          break
      }
    })
  }

  draw() {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.w, this.h)
  }

  log() {
    console.log(`
    x: ${this.x}
    y: ${this.y}
    w: ${this.w}
    h: ${this.h}
    color: ${this.color}
    `)
  }
}

const player1 = new Object2D(50, 50, 50, 50, 'blue', 38, 40, 37, 39)
const player2 = new Object2D(100, 100, 50, 50, 'red', 90, 83, 81, 68)

setInterval(() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  player1.draw()
  player2.draw()
}, 20)