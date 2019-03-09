import { Planet } from "./planet";

export class Rover {
    x: number;
    y: number;
    direction: string;
    p: Planet;
    state = {
        "N" : {
            "L" : ["E", 0, 0],
            "R" : ["W", 0, 0],
            "F" : ["N", 0, 1],
            "B" : ["N", 0, -1]
        },
        "W" : {
            "L" : ["S", 0, 0],
            "R" : ["N", 0, 0],
            "F" : ["W", -1, 0],
            "B" : ["W", 1, 0]
        },
        "S" : {
            "L" : ["W", 0, 0],
            "R" : ["E", 0, 0],
            "F" : ["S", 0, -1],
            "B" : ["S", 0, 1]
        },
        "E" : {
            "L" : ["N", 0, 0],
            "R" : ["S", 0, 0],
            "F" : ["E", 1, 0],
            "B" : ["E", -1, 0]
        }
    };

    constructor(x: number, y: number, direction: string, s: number, obs: [number, number] []) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.p = new Planet(s, obs);
    }

    move(instructions: string) {
        for (let command of instructions) {
            this.direction = this.state[this.direction][command][0];
            this.x += this.state[this.direction][command][1];
            this.y += this.state[this.direction][command][2];
        }
    }

    getDirection() {
        return this.direction;
    }

    getCoordinates() {
        return [this.x, this.y];
    }

}
