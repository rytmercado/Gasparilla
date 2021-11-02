export default class MovingObject {
    constructor(options) {
        this.pos = options.pos;
        this.vel = options.vel;
        this.heading = options.heading;
        this.src = options.src;
        this.game = options.game;
    }

    move(){
        this.pos[0] = this.pos[0] + Math.sin(this.heading * Math.PI / 180) * this.vel;
        this.pos[1] = this.pos[1] - Math.cos(this.heading * Math.PI / 180) * this.vel;
        
    }

    changeVel(dv){
        this.vel += dv;
    }

    changeFacing(dh){
        this.heading += dh;
        this.heading = this.heading % 360;
    }
}