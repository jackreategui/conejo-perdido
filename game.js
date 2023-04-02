const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

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
    game.font = elementsSize + 'px Helvetica Neue';
    game.textAling = 'end';

    for (let i = 0; i < 10; i++) {
        for (let x = 1; x <= 10; x++) {
            game.fillText(emojis['X'], elementsSize * i, elementsSize*x);
        }
    }

}