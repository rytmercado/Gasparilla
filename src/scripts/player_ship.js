import MovingObject from './moving_object';

export default class PlayerShip extends MovingObject {
    constructor(options) {
        super(options);
        this.bind_keys();
    }

    bind_keys(){
        window.addEventListener('keydown', (event) => {
            switch(event.key) {
                case 'w':
                    this.changeVel([0,-1]);
                    break;
                case 'a':
                    this.changeVel([-1,0])
                    break;
                case 's':
                    this.changeVel([0,1]);
                    break;
                case 'd':
                    this.changeVel([1,0]);
            }
            // console.log(key)
        })
    }
}