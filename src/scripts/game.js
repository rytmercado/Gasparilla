import PlayerShip from './player_ship'

export default class Game {

    constructor() {
        this.playerShip = new PlayerShip(
            {
                pos: [300, 300],
                vel: 0,
                heading: 120,
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

