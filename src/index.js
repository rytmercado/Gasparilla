import Game from './scripts/game';
import GameView from './scripts/game_view';

window.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById("game-canvas");
    // const context = canvas.getContext('2d');
    const game = new Game();
    const background = new GameView(canvas, game);
});