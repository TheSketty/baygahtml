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

function drawLine(coord1, coord2) {
    ctx.beginPath()
    ctx.moveTo(coord1[0], coord1[2])
    ctx.lineTo(coord2[0], coord2[1])
    ctx.strokeStyle = "black"
    ctx.lineWidth = 5
    ctx.stroke()
}

function rotateY(mat, angle) {
    let rot = [
        [Math.sin(angle), Math.cos(angle)],
        [Math.cos(angle), -Math.sin(angle)]
    ]
    return [mat[0] * rot[0][0] + mat[2] * rot[0][1], mat[1], mat[0] * rot[1][0] + mat[2] * rot[1][1]]
}

let theta = 0;
function draw () {
    ctx.clearRect(0, 0, width, height)
    for (var i in cube) {
        let cubeRot = rotateY(cube[i], theta)
        let x = F * cubeRot[0] / (F + cubeRot[2])
        let y = F * cubeRot[1] / (F + cubeRot[2])
        console.table(cubeRot)
        ctx.fillRect(width / 2 + x, height / 2 + y, 10, 10)
        theta += Math.PI / 180 / 8
    }
    requestAnimationFrame(draw)
}
requestAnimationFrame(draw)