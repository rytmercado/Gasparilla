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
        // console.log(this.game.stringMap());
        
        requestAnimationFrame(this.animate.bind(this));
    }

    animate() {
        this.game.step();
        // this.resizeCanvas(); 
        this.redraw();
        this.drawShip(this.game.playerShip.pos[0],this.game.playerShip.pos[1]);
        requestAnimationFrame(this.animate.bind(this));
    }
    
    redraw() {
        const waterTile = new Image();
        // console.log(waterTile);
        waterTile.src = './src/assets/tiles_sheet.png';
        waterTile.onload = () => {
            for(let i = 0; i < (window.innerWidth/32); i += 1) {
                for(let j = 0; j < (window.innerHeight/32); j += 1) {
                    // console.log(window.innerWidth);

                    this.context.drawImage(waterTile, 512, 256, 64, 64, i*32, j*32, 32, 32);
                    if (this.game.map[j][i] === 1) {
                        // this.context.drawImage(waterTile, 64*0, 64*1, 64, 64, i*32, j*32, 32, 32); 
                        // left top right bottom
                        if (this.game.map[j][i-1] === 1 && this.game.map[j-1][i] === 1 && this.game.map[j][i+1] === 1 && this.game.map[j+1][i] === 0){
                            this.context.drawImage(waterTile, 64, 128, 64, 64, i*32, j*32, 32, 32); // top left right
                        } else if (this.game.map[j][i-1] === 1 && this.game.map[j-1][i] === 1 && this.game.map[j][i+1] === 0 && this.game.map[j+1][i] === 0) {
                            this.context.drawImage(waterTile, 128, 128, 64, 64, i*32, j*32, 32, 32);
                        } else if (this.game.map[j][i-1] === 1 && this.game.map[j-1][i] === 1 && this.game.map[j][i+1] === 1 && this.game.map[j+1][i] === 1) {
                            this.context.drawImage(waterTile, 64*3, 64*4, 64, 64, i*32, j*32, 32, 32); 
                        } else if (this.game.map[j][i-1] === 0 && this.game.map[j-1][i] === 0 && this.game.map[j][i+1] === 1 && this.game.map[j+1][i] === 1) {
                            this.context.drawImage(waterTile, 64*0, 64*0, 64, 64, i*32, j*32, 32, 32); 
                        } else if (this.game.map[j][i-1] === 1 && this.game.map[j-1][i] === 0 && this.game.map[j][i+1] === 1 && this.game.map[j+1][i] === 1 || j===27) {
                            this.context.drawImage(waterTile, 64*1, 64*0, 64, 64, i*32, j*32, 32, 32); 
                        } else if (this.game.map[j][i-1] === 1 && this.game.map[j-1][i] === 0 && this.game.map[j][i+1] === 0 && this.game.map[j+1][i] === 1) {
                            this.context.drawImage(waterTile, 64*2, 64*0, 64, 64, i*32, j*32, 32, 32); 
                        } else if (this.game.map[j][i-1] === 1 && this.game.map[j-1][i] === 1 && this.game.map[j][i+1] === 0 && this.game.map[j+1][i] === 1) {
                            this.context.drawImage(waterTile, 64*2, 64*1, 64, 64, i*32, j*32, 32, 32); 
                        } else if (this.game.map[j][i-1] === 0 && this.game.map[j-1][i] === 1 && this.game.map[j][i+1] === 1 && this.game.map[j+1][i] === 1) {
                            this.context.drawImage(waterTile, 64*0, 64*1, 64, 64, i*32, j*32, 32, 32); 
                        } else if (this.game.map[j][i-1] === 0 && this.game.map[j-1][i] === 1 && this.game.map[j][i+1] === 1 && this.game.map[j+1][i] === 0) {
                            this.context.drawImage(waterTile, 64*0, 64*2, 64, 64, i*32, j*32, 32, 32); 
                        // } if (j > 27) {
                        //     this.context.drawImage(waterTile, 64*3, 64*4, 64, 64, i*32, j*32, 32, 32);
                        // } if (i > 40) {
                        //     this.context.drawImage(waterTile, 64*3, 64*4, 64, 64, i*32, j*32, 32, 32)
                        } else {
                            this.context.drawImage(waterTile, 64*3, 64*4, 64, 64, i*32, j*32, 32, 32);
                        }
                    }
                } 
            }
        }
        
    }
    
    drawShip(x,y) {
        // this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
        // this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
        // this.context.save();
        this.redraw();
        
        // this.redraw();
        this.playerBoatImage.onload = () => {
            
            this.context.drawImage(this.playerBoatImage, 204, 114, 66, 113,x,y, 33, 56)
            // this.context.translate(this.game.playerShip.pos[0],this.game.playerShip.pos[1]);
            // this.context.rotate(this.game.playerShip.heading*Math.PI/180);
        }
        // console.log(this.game.playerShip.pos[0])
        this.playerBoatImage.src = this.game.playerShip.src;
        // this.context.translate(0,0)
        // this.context.restore();
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.redraw();
    }
}