import Game from './game';

export default class GameView {
    
    constructor( {gameCanvas, mapCanvas}, game ) {
        this.gameCanvas = gameCanvas;
        this.gameContext = gameCanvas.getContext('2d');
        this.mapCanvas = mapCanvas;
        this.mapContext = mapCanvas.getContext('2d')
        this.game = game;
        this.playerBoatImage = new Image();
        this.goldCoin = new Image();
        this.initialize();
    }
    
    initialize() {
        // console.log(this.gameCanvas.getContext('2d'))
        window.addEventListener('keydown', e => {
        })
        this.gameContext.clearRect(0, 0, 1920, 1088);
        this.game.start();
        this.redraw();
        requestAnimationFrame(this.animate.bind(this));
    }
    
    animate() {
        // console.log(this.game.gameOver());
        if (this.game.gameOver() === false) {
        this.game.step();
        this.setScore();
        this.drawShip(this.game.playerShip.pos[0],this.game.playerShip.pos[1]);
        this.drawTreasure();
        requestAnimationFrame(this.animate.bind(this));
        } else {
            console.log('hit')
            this.gameOverScreen();
        }
    }

    setScore() {
        const scoreboard = document.getElementById('scoreboard');
        const health = document.getElementById('health');
        const heading = document.getElementById('heading');
        const velocity = document.getElementById('velocity');
        scoreboard.innerHTML = 'Score: ' + this.game.playerShip.playerScore;
        health.innerHTML = 'Health: ' + this.game.playerShip.playerHealth + 'HP';
        heading.innerHTML = 'Heading: ' + this.game.playerShip.heading + '°';
        velocity.innerHTML = 'Velocity: ' + this.game.playerShip.vel + ' kts';
        

    }

    
    redraw() {
        const waterTile = new Image();
        waterTile.src = './src/assets/tiles_sheet.png';
        waterTile.onload = () => {
            for(let j = 0; j < 34; j += 1) {
                for(let i = 0; i < 60; i += 1) {
                    
                    this.mapContext.drawImage(waterTile, 512, 256, 64, 64, i*32, j*32, 32, 32);
                    
                    if (this.game.map[j][i] === 1 && j > 0 && i > 0 && j < 33 && i < 59) {
                        // this.gameContext.drawImage(waterTile, 64*3, 64*4, 64, 64, i*32, j*32, 32, 32); 
                        if (this.game.map[j][i-1] !== 0 && this.game.map[j-1][i] !== 0 && this.game.map[j][i+1] !== 0 && this.game.map[j+1][i] !== 1){
                            this.mapContext.drawImage(waterTile, 64, 128, 64, 64, i*32, j*32, 32, 32); // top left right
                        } else if (this.game.map[j][i-1] !== 0 && this.game.map[j-1][i] !== 0 && this.game.map[j][i+1] !== 1 && this.game.map[j+1][i] !== 1) {
                            this.mapContext.drawImage(waterTile, 128, 128, 64, 64, i*32, j*32, 32, 32);
                        } else if (this.game.map[j][i-1] !== 0 && this.game.map[j-1][i] !== 0 && this.game.map[j][i+1] !== 0 && this.game.map[j+1][i] !== 0 ) {
                            this.mapContext.drawImage(waterTile, 64*3, 64*4, 64, 64, i*32, j*32, 32, 32); 
                        } else if (this.game.map[j][i-1] !== 1 && this.game.map[j-1][i] !== 1 && this.game.map[j][i+1] !== 0 && this.game.map[j+1][i] !== 0) {
                            this.mapContext.drawImage(waterTile, 64*0, 64*0, 64, 64, i*32, j*32, 32, 32); 
                        } else if (this.game.map[j][i-1] !== 0 && this.game.map[j-1][i] !== 1 && this.game.map[j][i+1] !== 0 && this.game.map[j+1][i] !== 0) {
                            this.mapContext.drawImage(waterTile, 64*1, 64*0, 64, 64, i*32, j*32, 32, 32); 
                        } else if (this.game.map[j][i-1] !== 0 && this.game.map[j-1][i] !== 1 && this.game.map[j][i+1] !== 1 && this.game.map[j+1][i] !== 0) {
                            this.mapContext.drawImage(waterTile, 64*2, 64*0, 64, 64, i*32, j*32, 32, 32); 
                        } else if (this.game.map[j][i-1] !== 0 && this.game.map[j-1][i] !== 0 && this.game.map[j][i+1] !== 1 && this.game.map[j+1][i] !== 0) {
                            this.mapContext.drawImage(waterTile, 64*2, 64*1, 64, 64, i*32, j*32, 32, 32); 
                        } else if (this.game.map[j][i-1] !== 1 && this.game.map[j-1][i] !== 0 && this.game.map[j][i+1] !== 0 && this.game.map[j+1][i] !== 1) {
                            this.mapContext.drawImage(waterTile, 64*0, 64*2, 64, 64, i*32, j*32, 32, 32); 
                        } else if (this.game.map[j][i-1] !== 1 && this.game.map[j-1][i] !== 0 && this.game.map[j][i+1] !== 0 && this.game.map[j+1][i] !== 0) {
                            this.mapContext.drawImage(waterTile, 64*0, 64*1, 64, 64, i*32, j*32, 32, 32);
                        }
                    } else if ( j === 0 || i === 0 || j === 33 || i === 59) {
                        this.mapContext.drawImage(waterTile, 64*3, 64*4, 64, 64, i*32, j*32, 32, 32); 
                        
                    }
                } 
            }
        }
        
    }
    
    drawShip(x,y) {
        
        // this.redraw();
        this.playerBoatImage.onload = () => {
            // this.gameContext.clearRect();
            this.gameContext.clearRect(0, 0, this.gameCanvas.width, this.gameCanvas.height);
            // this.gameContext.save();
            this.gameContext.setTransform(1,0,0,1,x,y)
            // this.gameContext.translate(x, y);
            this.gameContext.rotate(this.game.playerShip.heading*Math.PI/180);
            
            // this.gameContext.drawImage(this.playerBoatImage, 204, 114, 66, 113,x,y, 33, 56)
            this.gameContext.drawImage(this.playerBoatImage, -33, -114/2)
            this.gameContext.setTransform(1,0,0,1,0,0)
            this.gameContext.restore();
        }
        this.playerBoatImage.src = this.game.playerShip.src;
        this.drawHealthBar(x,y);
    }

    drawHealthBar(x,y) {
        this.gameContext.beginPath();
        this.gameContext.lineWidth = 8
        this.gameContext.strokeStyle = '#ff0000'
        this.gameContext.moveTo(x-40, y-70);
        this.gameContext.lineTo(x+40, y-70);
        this.gameContext.stroke();
        this.gameContext.beginPath();
        this.gameContext.lineWidth = 9
        this.gameContext.strokeStyle = '#66ff00'
        this.gameContext.moveTo(x-40, y-70);
        // console.log(this.game.playerShip.playerHealth)
        let playerHealth = this.game.playerShip.playerHealth * 8;
        this.gameContext.lineTo((x-40) + playerHealth, y-70);
        this.gameContext.stroke();

    }
    
    drawTreasure(){
        
        this.goldCoin.src = './src/assets/goldcoin.png';
        this.goldCoin.onload = () => {
            // console.log('here');
            
            for(let j = 0; j < 34; j += 1) {
                for(let i = 0; i < 60; i += 1) {
                    if (this.game.map[j][i] === 2) {
                        // console.log('yay')
                        this.gameContext.drawImage(this.goldCoin, 0,0, 2202, 2197, i*32, j*32, 32, 32);
                    }
                }
            }
        }
    }
    
    resizeCanvas() {
        this.gameCanvas.width = window.innerWidth;
        this.gameCanvas.height = window.innerHeight;
        this.redraw();
    }

    gameOverScreen() {
        console.log('game over');
        const gameOverCanvas = document.createElement("CANVAS");
        const ctx = gameOverCanvas.getContext('2d');
        gameOverCanvas.width = 1920;
        gameOverCanvas.height = 1088;
        gameOverCanvas.position = 'absolute'
        gameOverCanvas.style.opacity = .0;
        gameOverCanvas.style.backgroundColor = 'black'
        gameOverCanvas.setAttribute('id', 'game-over-canvas')
        const bg = document.getElementById('background')
        bg.append(gameOverCanvas);
        // debugger
        const bgFade = setInterval(() => {
            gameOverCanvas.style.opacity = parseFloat(gameOverCanvas.style.opacity) + .03;
            if (parseFloat(gameOverCanvas.style.opacity) >= 1) {
                clearInterval(bgFade);
                setTimeout(() => {
                    this.game = new Game();
                    this.initialize();
                    gameOverCanvas.remove();
                }, 1000);
            }
        }, 20);

        // setTimeout(() => {
        //     document.body.removeChild(document.body.lastChild)
        //     this.initialize();
        // }, 1000);
        // this.gameOverTxt(ctx);
        // gameOverCanvas.style.fontFamily = "Deadhand";
        // gameOverCanvas.style.fontSize = '72pt';
        // gameOverCanvas.style.color = 'white';
        // const youSunkString = 'You sunk';
        // const textWidth = ctx.measureText(youSunkString).width;
        // console.log(textWidth)
        // ctx.fillText(youSunkString, 400, 400)

    
    }


    // gameOverTxt(ctx) {
    //     ctx.fontFamily = "Deadhand";
    //     ctx.fontSize = '72px';
    //     ctx.color = 'black';
    //     const youSunkString = 'You sunk';
    //     const textWidth = ctx.measureText(youSunkString).width;
    //     ctx.fillText(youSunkString, (ctx.width/2) - (textWidth / 2), 400)

    // }
}