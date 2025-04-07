const canvas = document.getElementById("drawingCanvas")
const ctx = canvas.getContext("2d")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

window.addEventListener("resize", function() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})
