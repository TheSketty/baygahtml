const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const width = document.body.clientWidth
const height = document.body.clientHeight
canvas.setAttribute("width", width)
canvas.setAttribute("height", height)

// let camera = [600, 0, 0]
let size
if (width > height) {
    size = height / 5
}
else {
    size = width / 5
}
let F = size * 3
let cube = [
    [-size, -size, -size],
    [size, -size, -size],
    [-size, size, -size],
    [size, size, -size],
    [-size, -size, size],
    [size, -size, size],
    [-size, size, size],
    [size, size, size]
]

function drawLine(coord1, coord2) {
    ctx.lineWidth = size / 40
    ctx.beginPath()
    ctx.moveTo(width / 2 + coord1[0], height / 2 + coord1[1])
    ctx.lineTo(width / 2 + coord2[0], height / 2 + coord2[1])
    ctx.stroke()
}

function rotateY(mat, angle) {
    let rot = [
        [Math.sin(angle), Math.cos(angle)],
        [Math.cos(angle), -Math.sin(angle)]
    ]
    return [mat[0] * rot[0][0] + mat[2] * rot[0][1], mat[1], mat[0] * rot[1][0] + mat[2] * rot[1][1]]
}

function draw () {
    ctx.clearRect(0, 0, width, height)
    let dots = []
    for (var i in cube) {
        let cubeRot = rotateY(cube[i], Date.now() * Math.PI / 180 / 16)
        let x = F * cubeRot[0] / (F + cubeRot[2])
        let y = F * cubeRot[1] / (F + cubeRot[2])
        dots.push([x, y])
    }
    drawLine(dots[0], dots[1])
    drawLine(dots[0], dots[2])
    drawLine(dots[0], dots[4])
    drawLine(dots[1], dots[3])
    drawLine(dots[1], dots[5])
    drawLine(dots[2], dots[3])
    drawLine(dots[2], dots[6])
    drawLine(dots[3], dots[7])
    drawLine(dots[4], dots[5])
    drawLine(dots[4], dots[6])
    drawLine(dots[5], dots[7])
    drawLine(dots[6], dots[7])
    requestAnimationFrame(draw)
}
requestAnimationFrame(draw)