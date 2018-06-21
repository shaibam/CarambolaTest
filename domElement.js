/********
  the DomEllemnt class is an object that is used in order for creating and storing html elements in an object that is not conected to the dom.
 */
export default class DomElement {
    constructor() {
        this.id=parseInt(Math.random()*100)
    }
    
    get dom() {
        return this._dom;
    }

    set dom(value) {        
        this._dom = document.createElement('someElement');
        this._dom.innerHTML = value;
        this._dom = this._dom.children[0];
    }
}