export default class GameView {

    constructor(canvas, game) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.game = game;
        this.initialize();
    }

    initialize() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
        }, false);
        this.resizeCanvas();
        this.game.start();
        let x = 300;
        let y = 300;


        // this.redraw();
        setInterval(() => {
            this.game.step();
            this.redraw();
            this.drawShip(this.game.playerShip.pos[0],this.game.playerShip.pos[1]);
            y+=3;


        }, 20);
    }

    redraw() {
        const waterTile = new Image();
        // console.log(waterTile);
        waterTile.onload = () => {
            for(let i = 0; i < window.innerWidth; i += 32) {
                for(let j = 0; j < window.innerHeight; j += 32) {
                    // console.log(window.innerWidth);
                    this.context.drawImage(waterTile, 512, 256, 64, 64, i, j, 32, 32);
                }
            }
        }
        waterTile.src = './src/assets/tiles_sheet.png';

    }

    drawShip(x,y) {
        const playerBoat = new Image();
        playerBoat.onload = () => {
            this.context.drawImage(playerBoat, 204, 114, 66, 113, x, y, 33, 56)
        }
        playerBoat.src = this.game.playerShip.src;
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.redraw();
    }
    

}