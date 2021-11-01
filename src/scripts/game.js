import MovingObject from './moving_object';

export default class Game {

    constructor() {
        this.playerShip = new MovingObject(
            {
                pos: [300, 300],
                vel: [1,1],
                src: './src/assets/ships_sheet.png',
                game: this
            }
        )
        this.map = [];
    }

    start(){
        // create playership

    }

    step(){
        // move ship
        this.playerShip.move();
    }
}

