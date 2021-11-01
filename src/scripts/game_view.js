export default class GameView {
    
    constructor(canvas, game) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.game = game;
        this.playerBoatImage = new Image();
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
        
        
        setInterval(() => {
            this.game.step();
            this.drawShip(this.game.playerShip.pos[0],this.game.playerShip.pos[1]);
            y+=3;
            
            
        }, 1000/60);
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
        // this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.context.save();
        this.redraw();
        
        // this.redraw();
        this.playerBoatImage.src = this.game.playerShip.src;
        this.playerBoatImage.onload = () => {
            
            this.context.drawImage(this.playerBoatImage, 204, 114, 66, 113,x,y, 33, 56)
            this.context.translate(this.game.playerShip.pos[0],this.game.playerShip.pos[1]);
            this.context.rotate(this.game.playerShip.facing*Math.PI/180);
        }
        // console.log(this.game.playerShip.pos[0])
        this.context.restore();
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.redraw();
    }
    

}