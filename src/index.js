import Game from './scripts/game';
import GameView from './scripts/game_view';

window.addEventListener('DOMContentLoaded', function() {
    const instruction = document.getElementById('instruction-canvas')
    instruction.addEventListener('click', function(){
        instruction.remove();
    })
    const canvas = {
        mapCanvas: document.getElementById('map-canvas'),
        gameCanvas: document.getElementById("game-canvas"),
    }
    
    // const context = canvas.getContext('2d');
    const game = new Game();
    const background = new GameView(canvas, game);
});