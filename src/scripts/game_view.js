export default class GameView {
    
    constructor(canvas, game) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.game = game;
        this.playerBoatImage = new Image();
        this.goldCoin = new Image();
        this.initialize();
    }
    
    initialize() {
        this.game.start();   
        console.log(this.game.map.length);
        console.log(this.game.map[0].length);
        requestAnimationFrame(this.animate.bind(this));
    }
    
    animate() {
        this.game.step();
        this.redraw();
        this.drawShip(this.game.playerShip.pos[0],this.game.playerShip.pos[1]);
        this.drawTreasure();
        requestAnimationFrame(this.animate.bind(this));
    }
    
    redraw() {
        const waterTile = new Image();
        waterTile.src = './src/assets/tiles_sheet.png';
        waterTile.onload = () => {
            for(let j = 0; j < 34; j += 1) {
                for(let i = 0; i < 60; i += 1) {
                    
                    this.context.drawImage(waterTile, 512, 256, 64, 64, i*32, j*32, 32, 32);
                    
                    if (this.game.map[j][i] === 1 && j > 0 && i > 0 && j < 33 && i < 59) {
                        // this.context.drawImage(waterTile, 64*3, 64*4, 64, 64, i*32, j*32, 32, 32); 
                        if (this.game.map[j][i-1] === 1 && this.game.map[j-1][i] === 1 && this.game.map[j][i+1] === 1 && this.game.map[j+1][i] === 0){
                            this.context.drawImage(waterTile, 64, 128, 64, 64, i*32, j*32, 32, 32); // top left right
                        } else if (this.game.map[j][i-1] === 1 && this.game.map[j-1][i] === 1 && this.game.map[j][i+1] === 0 && this.game.map[j+1][i] === 0) {
                            this.context.drawImage(waterTile, 128, 128, 64, 64, i*32, j*32, 32, 32);
                        } else if (this.game.map[j][i-1] === 1 && this.game.map[j-1][i] === 1 && this.game.map[j][i+1] === 1 && this.game.map[j+1][i] === 1 ) {
                            this.context.drawImage(waterTile, 64*3, 64*4, 64, 64, i*32, j*32, 32, 32); 
                        } else if (this.game.map[j][i-1] === 0 && this.game.map[j-1][i] === 0 && this.game.map[j][i+1] === 1 && this.game.map[j+1][i] === 1) {
                            this.context.drawImage(waterTile, 64*0, 64*0, 64, 64, i*32, j*32, 32, 32); 
                        } else if (this.game.map[j][i-1] === 1 && this.game.map[j-1][i] === 0 && this.game.map[j][i+1] === 1 && this.game.map[j+1][i] === 1) {
                            this.context.drawImage(waterTile, 64*1, 64*0, 64, 64, i*32, j*32, 32, 32); 
                        } else if (this.game.map[j][i-1] === 1 && this.game.map[j-1][i] === 0 && this.game.map[j][i+1] === 0 && this.game.map[j+1][i] === 1) {
                            this.context.drawImage(waterTile, 64*2, 64*0, 64, 64, i*32, j*32, 32, 32); 
                        } else if (this.game.map[j][i-1] === 1 && this.game.map[j-1][i] === 1 && this.game.map[j][i+1] === 0 && this.game.map[j+1][i] === 1) {
                            this.context.drawImage(waterTile, 64*2, 64*1, 64, 64, i*32, j*32, 32, 32); 
                        } else if (this.game.map[j][i-1] === 0 && this.game.map[j-1][i] === 1 && this.game.map[j][i+1] === 1 && this.game.map[j+1][i] === 0) {
                            this.context.drawImage(waterTile, 64*0, 64*2, 64, 64, i*32, j*32, 32, 32); 
                        } else if (this.game.map[j][i-1] === 0 && this.game.map[j-1][i] === 1 && this.game.map[j][i+1] === 1 && this.game.map[j+1][i] === 1) {
                            this.context.drawImage(waterTile, 64*0, 64*1, 64, 64, i*32, j*32, 32, 32);
                        }
                    } else if ( j === 0 || i === 0 || j === 33 || i === 59) {
                        this.context.drawImage(waterTile, 64*3, 64*4, 64, 64, i*32, j*32, 32, 32); 
                        
                    }
                } 
            }
        }
        
    }
    
    drawShip(x,y) {
        
        // this.redraw();
        this.playerBoatImage.onload = () => {
            
            this.context.drawImage(this.playerBoatImage, 204, 114, 66, 113,x,y, 33, 56)
        }
        this.playerBoatImage.src = this.game.playerShip.src;
        this.context.beginPath();
        this.context.lineWidth = 8
        this.context.strokeStyle = '#ff0000'
        this.context.moveTo(x-10, y-10);
        this.context.lineTo(x+40, y-10);
        this.context.stroke();
        this.context.beginPath();
        this.context.lineWidth = 9
        this.context.strokeStyle = '#66ff00'
        this.context.moveTo(x-10, y-10);
        console.log(this.game.playerShip.playerHealth)
        let playerHealth = this.game.playerShip.playerHealth * 5;
        this.context.lineTo((x-10) + playerHealth, y-10);
        this.context.stroke();
    }
    
    drawTreasure(){
        
        this.goldCoin.src = './src/assets/goldcoin.png';
        this.goldCoin.onload = () => {
            // console.log('here');
            
            for(let j = 0; j < 34; j += 1) {
                for(let i = 0; i < 60; i += 1) {
                    if (this.game.map[j][i] === 2) {
                        // console.log('yay')
                        this.context.drawImage(this.goldCoin, 0,0, 2202, 2197, i*32, j*32, 32, 32);
                    }
                }
            }
        }
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.redraw();
    }
}