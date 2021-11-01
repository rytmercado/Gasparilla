export default class MovingObject {
    constructor(options) {
        this.pos = options.pos;
        this.vel = options.vel;
        this.facing = options.facing;
        this.src = options.src;
        this.game = options.game;
    }

    move(){
        this.pos[0] = this.pos[0] + Math.sin(this.facing * Math.PI / 180) * this.vel;
        this.pos[1] = this.pos[1] - Math.cos(this.facing * Math.PI / 180) * this.vel;
        
    }

    changeVel(dv){
        this.vel += dv;
    }

    changeFacing(df){
        this.facing += df;
        this.facing = this.facing % 360;
    }
}