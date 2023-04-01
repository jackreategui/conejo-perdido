const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', startGame);

function startGame(){
    // game.fillRect(50, 50, 100, 100);

    let canvasSize;

    if(window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.8;
    }else{
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    const elementsSize = (canvasSize / 10) - 1;

    game.font = elementsSize + 'px Helvetica Neue';
    game.textAling = 'end';

    for (let i = 0; i < 10; i++) {
        game.fillText(emojis['X'], elementsSize * i, elementsSize);
    }





    // window.innerHeight
    // window.innerWidth

    // game.font = '14PX Arial';
    // game.fillStyle = 'black';
    // game.textAlign = 'left';
    // game.fillText('Jack reategui', 10, 25)
}