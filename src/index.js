import Game from './scripts/game';
import GameView from './scripts/game_view';

window.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById("game-canvas");
    const context = canvas.getContext('2d');
    const game = new Game();
    const background = new GameView(context, game);

    initialize();
    let x = 300;
    let y = 300;
    function initialize() {
        // Register an event listener to call the resizeCanvas() function 
        // each time the window is resized.
        window.addEventListener('resize', resizeCanvas, false);
        // Draw canvas border for the first time.
        resizeCanvas();

        setInterval(function() {
            console.log('test')
            redraw();
            y += 3;
            if (y > window.innerHeight) {
                y = -64;
            }
        }

        , 20);

    }

    // Display custom canvas. In this case it's a blue, 5 pixel 
    // border that resizes along with the browser window.
    function redraw() {
        const waterTile = new Image();
        waterTile.src = './src/assets/tiles_sheet.png';
        // console.log(waterTile);
        waterTile.onload = function() {
        for(let i = 0; i < window.innerWidth; i += 64) {
            for(let j = 0; j < window.innerHeight; j += 64) {
                context.drawImage(waterTile, 512, 256, 64, 64, i, j, 64, 64);
                }
            }
        }
        drawShip();

    }

    function drawShip() {
        const playerBoat = new Image();
        playerBoat.src = './src/assets/ships_sheet.png';
        playerBoat.onload = function() {
            context.drawImage(playerBoat, 204, 114, 66, 113, x, y, 33, 56)
        }
    }

    // Runs each time the DOM window resize event fires.
    // Resets the canvas dimensions to match window,
    // then draws the new borders accordingly.
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        redraw();
    }
});