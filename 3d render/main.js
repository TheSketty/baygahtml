const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
ctx.fillStyle = "black"
let width = document.body.clientWidth
let height = document.body.clientHeight
canvas.setAttribute("width", width)
canvas.setAttribute("height", height)

let camera = [1000, 0, 0]
let F = 1000
let cube = [
    [-200, -200, -200],
    [200, -200, -200],
    [-200, 200, -200],
    [200, 200, -200],
    [-200, -200, 200],
    [200, -200, 200],
    [-200, 200, 200],
    [200, 200, 200]
]

const rotationY = (theta) => [
    [Math.cos(theta), 0, Math.sin(theta)],
    [0, 1, 0],
    [-Math.sin(theta), 0, Math.cos(theta)]
]

function multiply(a, b) {
    
}

let theta = 0;
function draw () {
    for (var i in cube) {
        let cubeRot = multiply(cube[i], rotationY(theta))
        let x = F * cubeRot[0] / (F + cubeRot[2])
        let y = F * cubeRot[1] / (F + cubeRot[2])
        console.table(cubeRot)
        ctx.fillRect(width / 2 + x, height / 2 + y, 10, 10)
        theta += Math.PI / 180
    }
    // requestAnimationFrame(draw)
}
requestAnimationFrame(draw)