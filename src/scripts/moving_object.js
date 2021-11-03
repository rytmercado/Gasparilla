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
        if(nextX > 1920 || nextX < 0) {
            this.heading = (this.heading + 180) % 360
        }
        else {
            this.pos[0] = nextX;
        }

        if(nextY > 1080 || nextY < 0) {
            this.heading = (this.heading+180) % 360
        } else {
            this.pos[1] = nextY
        }
        this.collisionCheck(nextX, nextY);
        
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

    changeHeading(dh){
        this.heading += 5 * dh;
        this.heading = this.heading % 360;
    }

    collisionCheck(nextX, nextY){
        let mapX = Math.floor(this.pos[0] / 32);
        let mapY = Math.floor(this.pos[1] / 32);
        let terrainTopLeft = this.game.map[mapY][mapX];
        let terrainTopRight = this.game.map[mapY+2][mapX];
        let terrainBottomLeft = this.game.map[mapY][mapX+1];
        let terrainBottomRight = this.game.map[mapY+2][mapX+1];
        if (terrainTopLeft === 2 || terrainTopRight === 2 || terrainBottomLeft === 2 || terrainBottomRight === 2) {
            if (terrainTopLeft === 2) {
                this.collideTreasure(mapX, mapY);
            } else if (terrainTopRight === 2) {
                this.collideTreasure(mapX, mapY+2);
            } else if (terrainBottomLeft === 2) {
                this.collideTreasure(mapX+1, mapY);
            } else {
                this.collideTreasure(mapX+1, mapY+2)
            }
        }
        else if(terrainTopLeft === 1 || terrainTopRight === 1 || terrainBottomLeft === 1 || terrainBottomRight === 1) {
            this.collideTerrain();
        }
    }

    collideTreasure(mapX, mapY){

    }

    collideTerrain(){
        this.heading = (this.heading + 180) % 360;
    }
}