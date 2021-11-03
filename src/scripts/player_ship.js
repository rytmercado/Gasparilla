import MovingObject from './moving_object';

export default class PlayerShip extends MovingObject {
    constructor(options) {
        super(options);
        this.playerScore = 0;
        this.playerHealth = 1;
        this.bind_keys();
    }

    bind_keys(){
        window.addEventListener('keydown', (event) => {
            switch(event.key) {
                case 'w':
                    this.changeVel(1);
                    break;
                case 'a':
                    this.changeHeading(-1);
                    break;
                case 's':
                    this.changeVel(-1);
                    break;
                case 'd':
                    this.changeHeading(1);
            }
        })
    }

    collideTreasure(mapX, mapY){
        this.playerScore++;
        this.game.map[mapY][mapX] = 0;
        this.game.addNewTreasure();
        this.vel += 0.5;
    }
    collideTerrain(){
        super.collideTerrain();
        this.playerHealth--;
        console.log(this.playerHealth);
    }
}