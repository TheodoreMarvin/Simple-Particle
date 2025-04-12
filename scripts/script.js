const canvas = document.getElementById("drawingCanvas")
const ctx = canvas.getContext("2d")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let hue = 0
const particlesArray = []
let particleAmount
let hueChangeSpeed

window.addEventListener("resize", function() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})

function livelyPropertyListener(name, val) {
    if (name == "particleAmount") {
        particleAmount = val
    }
    else if (name == "hueChangeSpeed") {
        hueChangeSpeed = val
    }
}

class Particle {
    constructor() {
        this.x = mouse.x
        this.y = mouse.y
        this.size = Math.random() * 15 + 1
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
        this.color = "hsl(" + hue + ", 100%, 50%)"
    }

    update() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.size > 0.2) {
            this.size -= 0.1
        }
    }

    draw() {
        ctx.fillStyle = this.color
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
    }
}

const mouse = {
    x: undefined,
    y: undefined
}

canvas.addEventListener("mousemove", function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i < particleAmount; i++) {
        particlesArray.push(new Particle())
    }
})

function handleParticles() {
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()

        if (particlesArray[i].size <= 0.3) {
            particlesArray.splice(i, 1);
            i--
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    handleParticles()
    hue += hueChangeSpeed
    requestAnimationFrame(animate)
}

animate()
