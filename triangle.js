const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.style.backgroundColor = "lightblue"

ctx.beginPath();
const centerX = canvas.width/2;
const centerY = canvas.height/2;
//top point
ctx.moveTo(centerX + 300, centerY - 200);
//right point
ctx.lineTo(centerX, centerY);
//left point
ctx.lineTo(centerX + 300, centerY + 200);
ctx.fillStyle = "grey";
ctx.fill();
