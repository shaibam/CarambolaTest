/*******
circle.js, is the cirle calss.
it is the circle object, hosts data regarding velocity , position on  the X axis (without going to the dom to check) and color changes
*/
import DomElement from './domElement.js'
export default class Circle extends DomElement {

    constructor(distance, time) {
        super(distance)
        //let p = parseInt(performance.now().toString().split('.')[1].substr(0, 3));
        const TIME_FACTOR = 10;
        time = (5 + parseInt(TIME_FACTOR * Math.random()))
        this._color = 'yellow';
        this.dom = '<div class="circle pause" style="--color:' + this._color + ';--time:' + time + 's;--distance:' + distance + 'px" ></div>';
        // circle animation goes back and fourth so velocity calculation is distance*2/time
        this._time = time;
        this._distance = distance;
        this._velocity = (distance * 2 / this._time);
        this.now = 0;
    }

    get velocity() {
        let n = (performance.now() - this.now) / 1000;
        return Math.floor(n / (this._time / 2)) % 2 == 0 ? Number(this._velocity) : Number(-this._velocity);
    }

    get posX() {
        return window.getComputedStyle(this.dom).transform.split(',')[4];
    }

    get x() {
        let v = this.velocity;
        let n = performance.now() - this.now;
        let totalDistance = (n / 1000) * (this._velocity);
        let dev = totalDistance / this._distance;
        let distanceDelta = totalDistance - (Math.floor(dev) * this._distance);
        return parseInt(v > 0 ? distanceDelta : this._distance - distanceDelta);
    }

    pause() {
        this.dom.classList.add('pause')
    }

    play() {
        if (this.now) return;
        this.now = performance.now();
        this.dom.classList.remove('pause')
    }

    set color(v) {
        if (this._color != v)
            this.dom.style.backgroundColor = v;
        this._color = v;
    }

    get color() {
        return this._color;
    }

}