import {toRad} from "../engine/math.mjs";
import {animate} from "../engine/animation.mjs";

const canvas = document.querySelector('#canvas');

const RADIUS = 20;
const SPEED = 100;

let y = canvas.height / 2
let velocity = SPEED;

function update(time) {
    //Deslocamento da bola
    y += velocity * time;

    // Inverte a direção da bola se atingir os cantos.
    if (y < RADIUS) velocity = SPEED;
    else if (y > canvas.width - RADIUS) velocity = -SPEED;
}

function draw(ctx) {
    ctx.clearRect(0, 0, 400, 400);
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "pink";
    ctx.lineWidth = 2;

    ctx.arc(200, y, RADIUS, 0, toRad(360));

    ctx.fill();
    ctx.stroke();
}

animate(canvas, {update, draw})
