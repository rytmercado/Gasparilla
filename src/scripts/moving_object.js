export default class MovingObject {
    constructor(options) {
        this.pos = options.pos;
        this.vel = options.vel;
        this.heading = options.heading;
        this.src = options.src;
        this.game = options.game;
    }

    move(){
        let nextX = this.pos[0] + Math.sin(this.heading * Math.PI / 180) * this.vel
        let nextY = this.pos[1] - Math.cos(this.heading * Math.PI / 180) * this.vel
        if(nextX > 1600 || nextX < 0) {
            this.heading = (this.heading + 180) % 360
        }
        else {
            this.pos[0] = nextX;
        }

        if(nextY > 980 || nextY < 0) {
            this.heading = (this.heading+180) % 360
        } else {
            this.pos[1] = nextY
        }
        let mapX = Math.floor(this.pos[0] / 32);
        let mapY = Math.floor(this.pos[1] / 32);
        let terrain = this.game.map[mapY][mapX];
        if(terrain === 1) {
            this.heading = (this.heading + 180) % 360;
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