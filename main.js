/*******
main.js, is the main file in which this assigm=nment is controlled
it is in charge of drawing the 2 items on the screen (header,world)
and the headers interaction with the world 
*/
import World from './world.js';
import Header from './header.js';
let h = new Header();
let w = new World(600);
h.onClickMe = ()=>{
    w.circleCount = h.value;
    w.start();
}

document.body.appendChild(h.dom);
document.body.appendChild(w.dom);