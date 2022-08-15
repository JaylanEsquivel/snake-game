let canvas = document.getElementById("snake");
let context = canvas.getContext('2d');
let box = 32 ;
let shake = [];
shake[0] = {
    x: 8 * box,
    y: 7 * box
}
let direction = "right";

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0,0, 16 * box, 16 * box);
}

function criarCobrinha(){
    for(var i = 0; i< shake.length ;i++){
        context.fillStyle = "black";
        context.fillRect(shake[i].x, shake[i].y, box, box);
    }
}

function iniciarJogo(){
    criarBG();
    criarCobrinha();

    let shakeX = shake[0].x;
    let shakeY = shake[0].y;

    if(direction == "right"){ shakeX += box;}
    if(direction == "left"){ shakeX += box;}
    if(direction == "up"){ shakeY += box;}
    if(direction == "down"){ shakeY += box;}

    shake.pop();

    let newhead = {
        x: shakeX,
        y: shakeY
    }
    shake.unshift(newhead);
}

let jogo = setInterval(iniciarJogo, 100);