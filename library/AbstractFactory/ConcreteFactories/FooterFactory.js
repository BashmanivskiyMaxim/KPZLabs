import {ElementCreator} from "../../creators/ElementCreator.js";
import {FooterElement} from "../../elements/FooterElement.js";

export class FooterFactory{
    constructor(){
        return new FooterElementCreator
    }
}
export class FooterElementCreator extends ElementCreator {
    create(params) {
        return new FooterElement(params);
    }
}