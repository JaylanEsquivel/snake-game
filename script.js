let canvas = document.getElementById("snake");
let context = canvas.getContext('2d');
let box = 32 ;
let shake = [];
shake[0] = {
    x: 8 * box,
    y: 7 * box
}
let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

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

function drawnFood(){
        context.fillStyle = "red";
        context.fillRect(food.x, food.y, box, box);
}


document.addEventListener('keydown', update);

function update(event){
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo(){
    if(shake[0].x > 15 * box && direction == "right") shake[0].x = 0;
    if(shake[0].x < 0 && direction == "left") shake[0].x = 16 * box;
    if(shake[0].y > 15 * box && direction == "down") shake[0].y = 0;
    if(shake[0].y < 0 && direction == "up") shake[0].y = 16 * box;


    for(let i = 1; i < shake.length; i++){
        if(shake[0].x == shake[i].x && shake[0].y == shake[i].y){
            clearInterval(jogo);
            alert("Game Over! :(");
            window.location.reload(true);
        }
    }

    criarBG();
    criarCobrinha();
    drawnFood();

    let shakeX = shake[0].x;
    let shakeY = shake[0].y;

    if(direction == "right"){ shakeX += box;}
    if(direction == "left"){ shakeX -= box;}
    if(direction == "up"){ shakeY -= box;}
    if(direction == "down"){ shakeY += box;}

    if(shakeX != food.x || shakeY != food.y){
        shake.pop();
    }else{
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    let newhead = {
        x: shakeX,
        y: shakeY
    }
    shake.unshift(newhead);
}

let jogo = setInterval(iniciarJogo, 100);