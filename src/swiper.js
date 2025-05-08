const container = document.querySelector(".swipelist")

let initialx
let currentX
let movedX

//pointerdown
container.addEventListener("pointerdown", startTouch)

//pointermove
container.addEventListener("pointermove", moveTouch)

//pointerup
container.addEventListener("pointerup", endTouch)

function startTouch(event) {
    console.log(event)
}

function moveTouch(event) {}

function endTouch(event) {}
