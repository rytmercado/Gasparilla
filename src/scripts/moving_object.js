export default class MovingObject {
    constructor(options) {
        this.pos = options.pos;
        this.vel = options.vel;
        this.heading = options.heading;
        this.src = options.src;
        this.game = options.game;
    }

    move(){
        this.pos[0] = (this.pos[0] + Math.sin(this.heading * Math.PI / 180) * this.vel) % 1920;
        this.pos[1] = (this.pos[1] - Math.cos(this.heading * Math.PI / 180) * this.vel) % window.innerHeight;
        if (this.pos[0] < 0) {
            this.pos[0] = 1080;
        }
        if (this.pos[1] < 0) {
            this.pos[1] = 1920;
        }
        
    }

    changeVel(dv){
        this.vel += dv;
        if(this.vel >= 3){
            this.vel = 3;
        }
           if(this.vel <= -3) {
               this.vel = -3;
        }
    }

    changeFacing(dh){
        this.heading += dh;
        this.heading = this.heading % 360;
    }
}