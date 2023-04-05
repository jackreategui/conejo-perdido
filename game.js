const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
const btnUp = document.querySelector('#up');
const btnDown = document.querySelector('#down');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');

let canvasSize;
let elementsSize;


window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize() {
    if(window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.8;
    }else{
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    elementsSize = (canvasSize / 10) - 2;
    startGame();
}


function startGame(){
    game.font = elementsSize-3 + 'px Helvetica Neue';
    game.textAling = 'end';
    
    const map = maps[1];
    const mapRows = map.trim().split('\n');
    const mapRowCol = mapRows.map(row => row.trim().split(''));

    mapRowCol.forEach((row, rowI) => {
        row.forEach((col, colI) => { 
            const emoji = emojis[col];
            const postX = elementsSize * (colI);
            const postY = elementsSize * (rowI + 1);
            game.fillText(emoji, postX, postY);
        })
    });

    // for (let i = 0; i < 10; i++) {
    //     for (let x = 1; x <= 10; x++) {
    //         game.fillText(emojis[mapRowCol[x - 1][i]], elementsSize * i, elementsSize*x);
    //     }
    // }

}


function moveKey(event) {
    if (event.key == 'ArrowUp') moveUp();
    else if (event.key == 'ArrowDown') moveDown();
    else if (event.key == 'ArrowLeft') moveLeft();
    else if (event.key == 'ArrowRight') moveRight();
}

function moveUp() {
    
}
function moveDown() {
    
}
function moveLeft() {
    
}
function moveRight() {
    
}

window.addEventListener('keydowm', moveKey);
btnUp.addEventListener("click", moveUp);
btnDown.addEventListener("click", moveDown);
btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);