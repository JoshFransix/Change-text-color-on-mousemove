const head = document.querySelector('h1')
const body = document.querySelector('body')


body.addEventListener('mousemove', colorChange)

function colorChange(e) {
  const positionX = e.offsetX
  const positionY = e.offsetY

  head.style.color = `rgb(${positionX}, ${positionY}, 207)`

  console.log(positionX, positionY)
}