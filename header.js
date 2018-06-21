/*****
 the Header class holds, a static titie, an input box and a css button.
 it also has an onClick (onclickMe) method that can be set from the outside 
 */
import DomElement from './domElement.js'
export default class Header extends DomElement {
    constructor() {
        super();
        this.dom = '<div class=header>\
                        <div class=title>Carambola home assignment</div>\
                        <div class=form>\
                            <input placeholder=3 value=3></input>\
                            <button><div><star>★</star>RUN<star>★</star></div></button>\
                        </div>\
                    </div>';
        this.dom.querySelector('button').onclick = () => { this.onClick() };
    }
    get value() {
        return parseInt(this.dom.querySelector('input').value);
    }
    set onClickMe(v) {
        this._onclick = v;
    }

    onClick() {
        if (this._onclick)
            this._onclick();
    }
}