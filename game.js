const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
const btnUp = document.querySelector('#up');
const btnDown = document.querySelector('#down');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const spanLives = document.querySelector('#lives');
const spanTime = document.querySelector('#time');

let canvasSize;
let elementsSize;
let level = 0;
let lives = 3;

let timeStart;
let timePlayer;
let timeInterval;

const playerPosition = {
    x: undefined,
    y: undefined,
};

let giftPosition = {
    x: undefined,
    y: undefined,
};

let enemyPositions = [];

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
    
    const map = maps[level];

    if (!map) {
        gameWin();
        return;
    }

    if (!timeStart) {
        timeStart = Date.now();
        timeInterval = setInterval(timeShow, 100);
    }

    const mapRows = map.trim().split('\n');
    const mapRowCol = mapRows.map(row => row.trim().split(''));
    heartShow();

    enemyPositions = [];
    game.clearRect(0, 0, canvasSize, canvasSize);

    mapRowCol.forEach((row, rowI) => {
        row.forEach((col, colI) => { 
            const emoji = emojis[col];
            const postX = elementsSize * (colI);
            const postY = elementsSize * (rowI + 1);

            if (col == 'O') {
                if (!playerPosition.x && !playerPosition.y) {
                    playerPosition.x = postX;
                    playerPosition.y = postY;
                }
            } else if (col == 'I') {
                giftPosition.x = postX;
                giftPosition.y = postY;
            } else if (col == 'X') {
                enemyPositions.push({
                    x: postX,
                    y: postY,
                })
            }

            game.fillText(emoji, postX, postY);
        })
    });

    playerMove();
}

function playerMove() {
    const gitftCollitionX = playerPosition.x.toFixed(3) == giftPosition.x.toFixed(3);
    const gitftCollitionY = playerPosition.y.toFixed(3) == giftPosition.y.toFixed(3);
    const collition = gitftCollitionX && gitftCollitionY;

    if (collition) {
        levelwin();
    }

    const enemyCollition = enemyPositions.find(enemy => {
        const enemyCollitionX = enemy.x.toFixed(3) == playerPosition.x.toFixed(3);
        const enemyCollitionY = enemy.y.toFixed(3) ==  playerPosition.y.toFixed(3);
        return enemyCollitionX && enemyCollitionY;
    });

    if (enemyCollition) {
        levelFail();
    }
    
    game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y);
}

function levelwin() {
    level++;
    startGame();
}

function gameWin() {
    clearInterval(timeInterval);
}

function levelFail() {
    lives--;

    if (lives <= 0) {
        level = 0;
        lives = 3;
        timeStart = undefined;
    }

    playerPosition.x = undefined;
    playerPosition.y = undefined;
    startGame();
}

function heartShow() {
    const heartArray = Array(lives).fill(emojis['HEART']);

    spanLives.innerHTML = "";
    heartArray.forEach(heart => spanLives.append(heart));
}

function formatTime(ms){
    const cs = parseInt(ms/10) % 100
    const seg = parseInt(ms/1000) % 60
    const min = parseInt(ms/60000) % 60
    const csStr = `${cs}`.padStart(2,"0")
    const segStr = `${seg}`.padStart(2,"0")
    const minStr = `${min}`.padStart(2,"0")
    return`${minStr}:${segStr}:${csStr}`
}

function timeShow() {
    spanTime.innerHTML = formatTime(Date.now()-timeStart);
}

function moveKey(event) {
    if (event.key == 'ArrowUp') {
        event.preventDefault();
        moveUp();
    } else if (event.key == 'ArrowDown') {
        event.preventDefault();
        moveDown();
    } else if (event.key == 'ArrowLeft') {
        event.preventDefault();
        moveLeft();
    } else if (event.key == 'ArrowRight') {
        event.preventDefault();
        moveRight();
    }
}

function moveUp() {
    if ((playerPosition.y - elementsSize) < 0) {
        console.log('No!');
    } else {
        playerPosition.y -= elementsSize;
        startGame();
    }
}
function moveDown() {
    if ((playerPosition.y + elementsSize)> canvasSize) {
        console.log('No!');
    } else {
        playerPosition.y += elementsSize;
        startGame();
    }
}
function moveLeft() {
    if ((playerPosition.x - elementsSize) < 0) {
        console.log('No!');
    } else {
        playerPosition.x -= elementsSize;
        startGame();
    }
}
function moveRight() {
    if ((playerPosition.x + elementsSize) > canvasSize - elementsSize) {
        console.log('No!');
    } else {
        playerPosition.x += elementsSize;
        startGame();
    }
}

window.addEventListener('keydown', moveKey);
btnUp.addEventListener("click", moveUp);
btnDown.addEventListener("click", moveDown);
btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);