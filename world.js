/*******
world.js, is the world calss.
it is in chagrge of creating new circles and comparing there positions every 25 FPS (like in a symple game mode)
all circles positinos will start form the most left X axis of the world 
*/

import DomElement from './domElement.js'
import Circle from './circle.js'
export default class World extends DomElement {
    constructor(width) {
        super()
        this.width = width;
        this.FPS = 25;
        this._circleCount = 0;
        this.dom = '<div class="world" style="--worldWidth:' + width + 'px"></div>';
    }

    get circleCount() {
        return this._circleCount
    }

    set circleCount(v) {
        if (this._circleCount < v) {
            for (let i = this._circleCount; i < v; i++) {
                this['c' + i] = new Circle(this.width);
                this.dom.appendChild(this['c' + i].dom);
            }
        } else {
            for (let i = this._circleCount-1; i >= v; i--) {
                this['c' + i].dom.remove();
                delete this['c' + i];
            }
        }

        this._circleCount = v;
    }

    start() {        
        let i = 0;
        while (this['c' + i]) {
            this['c' + i].play()
            i++
        }
        if (!this._started) 
            this.tick();
        this._started = true;
    }

    tick() {
        let i = 0;
        while (this['c' + i]) {
            if (!this.rightLeader)
                this.rightLeader = this['c' + i];
            else if (this['c' + i].x > this.rightLeader.x) {
                this.rightLeader.color = "yellow"
                this.rightLeader = this['c' + i];
            }

            if (!this.leftLeader)
                this.leftLeader = this['c' + i];
            else if (this['c' + i].x < this.leftLeader.x) {
                this.leftLeader.color = "yellow"
                this.leftLeader = this['c' + i];
            }
            i++
        }
        this.rightLeader.color = "red"
        this.leftLeader.color = "green"
        setTimeout(() => { this.tick() }, 1000 / 25)
    }
}