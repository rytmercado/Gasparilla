export default class MovingObject {
    constructor(options) {
        this.pos = options.pos;
        this.vel = options.vel;
        this.src = options.src;
        this.game = options.game;
    }

    move(){
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    }
}