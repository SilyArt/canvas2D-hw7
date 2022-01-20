function draw(){
    const canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    canvas.style.backgroundColor = "lightpink";
    
    if (canvas.getContext){
        ctx = canvas.getContext("2d");
    } else {
        const para = document.querySelector(".unsupported");
        para.textContent = 'Your browser does not support HTML5 Canvas';
    }

    centerX = canvas.width / 2;
    centerY = canvas.height / 2;
    ctx.fillStyle = 'lightyellow';
    ctx.fillRect(centerX-150, centerY-100, 300, 200);
    ctx.clearRect(centerX-140, centerY-90, 280, 180);
    ctx.strokeRect(centerX-158, centerY-108, 315, 215);
}
draw();
