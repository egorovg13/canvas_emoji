const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const img = document.querySelector('img')
img.crossOrigin = "Anonymous";

const mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
})

let x = canvas.width/3;
let y = canvas.height/3;
let emojiRadius = 75

let iX = x-50;
let iY = y-50;

addEventListener('load', () => {

    c.beginPath();
    c.arc(x, y, emojiRadius, 0, Math.PI*2, true);
    c.fillStyle = "#fece00";
    // c.fillStyle = "green";
    c.fill();
    c.closePath();

    c.drawImage(img, iX, iY);
})


const animate = () => {

    requestAnimationFrame(animate);

    // ctx.fillStyle = "rgba(0, 0, 0, .25)";
    // ctx.fillRect(0,0, canvas.width, canvas.height);

    c.beginPath();
    c.arc(x, y, emojiRadius, 0, Math.PI*2, true);
    c.fillStyle = "#fece00";
    

    c.fill();
    c.closePath();

    let dx = mouse.x - x;
    let dy = mouse.y - y;

    let theta = Math.atan2(dy, dx);

    let distBorX = canvas.width - x;
    let distBorY = canvas.height - y;

    let multX = Math.abs(dx)/distBorX;
    let multY = Math.abs(dy)/distBorY;

    let face_x = iX + Math.cos(theta)*emojiRadius/3*multX;
    let face_y = iY + Math.sin(theta)*emojiRadius/3*multY;

    // c.beginPath();
    // c.arc(face_x, face_y, 2, 0, Math.PI*2, true);
    // c.fillStyle = "red";
    // c.fill();
    // c.closePath;

    c.drawImage(img, face_x, face_y);


}

animate()